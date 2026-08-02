#!/usr/bin/env node
/**
 * ADB device/emulator capture pipeline for SoC Wiki.
 *
 * Usage:
 *   npm run collect:device              # ensure device, interactive capture loop
 *   npm run collect:device -- --boot    # start Pixel_7 emulator if none
 *   npm run collect:device -- --shot col-skills
 *   npm run collect:device -- --shot col-skills --ocr
 *   npm run collect:device -- --status
 *
 * Env:
 *   ANDROID_HOME  default ~/Library/Android/sdk
 *   AVD_NAME      default Pixel_7
 */
import fs from "node:fs";
import path from "node:path";
import { spawn, execFileSync } from "node:child_process";
import readline from "node:readline";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "../..");
const SHOT_DIR = path.join(ROOT, "content/raw/screenshots");
const AVD_DEFAULT = process.env.AVD_NAME || "Pixel_7";

fs.mkdirSync(SHOT_DIR, { recursive: true });

function homeSdk() {
  return (
    process.env.ANDROID_HOME ||
    process.env.ANDROID_SDK_ROOT ||
    path.join(process.env.HOME || "", "Library/Android/sdk")
  );
}

function resolveBin(name) {
  const sdk = homeSdk();
  const candidates = [
    path.join(sdk, "platform-tools", name),
    path.join(sdk, "emulator", name),
    name, // PATH fallback
  ];
  for (const c of candidates) {
    try {
      if (c.includes("/") || c.includes("\\")) {
        if (fs.existsSync(c)) return c;
      } else {
        execFileSync("which", [c], { stdio: "pipe" });
        return c;
      }
    } catch {
      /* try next */
    }
  }
  // which may fail on full path check - try exec version
  try {
    execFileSync(name, ["version"], { stdio: "pipe" });
    return name;
  } catch {
    return null;
  }
}

const ADB = resolveBin("adb") || path.join(homeSdk(), "platform-tools", "adb");
const EMU = resolveBin("emulator") || path.join(homeSdk(), "emulator", "emulator");

function adb(args, opts = {}) {
  return execFileSync(ADB, args, {
    encoding: "utf8",
    stdio: opts.stdio || ["ignore", "pipe", "pipe"],
    ...opts,
  });
}

function sleep(ms) {
  return new Promise((r) => setTimeout(r, ms));
}

function listDevices() {
  try {
    const out = adb(["devices", "-l"]);
    return out
      .split("\n")
      .slice(1)
      .map((l) => l.trim())
      .filter((l) => l && !l.startsWith("*"))
      .map((l) => {
        const [id, state, ...rest] = l.split(/\s+/);
        return { id, state, raw: rest.join(" ") };
      })
      .filter((d) => d.state === "device");
  } catch (e) {
    return [];
  }
}

function ensureAdb() {
  if (!fs.existsSync(ADB) && ADB.includes("/")) {
    console.error("adb not found at", ADB);
    console.error("Install Android Studio SDK platform-tools, or set ANDROID_HOME.");
    process.exit(1);
  }
  try {
    const v = adb(["version"]);
    console.log(v.split("\n")[0]);
  } catch (e) {
    console.error("Failed to run adb:", e.message || e);
    process.exit(1);
  }
}

async function bootEmulator(avd = AVD_DEFAULT) {
  const devices = listDevices();
  if (devices.length) {
    console.log("Device already online:", devices.map((d) => d.id).join(", "));
    return devices[0].id;
  }

  if (!fs.existsSync(EMU)) {
    console.error("emulator binary not found:", EMU);
    process.exit(1);
  }

  console.log(`Starting emulator AVD=${avd} …`);
  const child = spawn(
    EMU,
    ["-avd", avd, "-netdelay", "none", "-netspeed", "full"],
    {
      detached: true,
      stdio: "ignore",
    },
  );
  child.unref();

  // wait for device
  const deadline = Date.now() + 180_000;
  process.stdout.write("Waiting for device");
  while (Date.now() < deadline) {
    process.stdout.write(".");
    try {
      adb(["wait-for-device"], { stdio: "pipe" });
    } catch {
      /* continue */
    }
    const boot = adb(["shell", "getprop", "sys.boot_completed"]).trim();
    if (boot === "1") {
      console.log(" boot completed");
      const d = listDevices()[0];
      return d?.id;
    }
    await sleep(2000);
  }
  console.error("\nTimeout waiting for emulator boot");
  process.exit(1);
}

function screenshot(label) {
  const safe = String(label)
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9._-]+/g, "-")
    .replace(/^-|-$/g, "");
  if (!safe) throw new Error("empty screenshot label");
  const file = path.join(SHOT_DIR, `${safe}.png`);
  const remote = "/sdcard/socwiki-cap.png";
  adb(["shell", "screencap", "-p", remote]);
  adb(["pull", remote, file], { stdio: ["ignore", "pipe", "pipe"] });
  try {
    adb(["shell", "rm", remote]);
  } catch {
    /* ignore */
  }
  const st = fs.statSync(file);
  console.log(`Saved ${file} (${Math.round(st.size / 1024)} KB)`);
  return file;
}

function printStatus() {
  console.log("ANDROID_HOME =", homeSdk());
  console.log("adb          =", ADB);
  console.log("emulator     =", EMU);
  console.log("AVD default  =", AVD_DEFAULT);
  try {
    const avds = execFileSync(EMU, ["-list-avds"], { encoding: "utf8" }).trim();
    console.log("AVDs         =", avds || "(none)");
  } catch {
    console.log("AVDs         = (cannot list)");
  }
  const devices = listDevices();
  if (!devices.length) console.log("devices      = (none online)");
  else devices.forEach((d) => console.log("device       =", d.id, d.raw || d.state));
}

function runOcrPipeline() {
  console.log("\n→ OCR + validate…");
  execFileSync("node", [path.join(__dirname, "ocr-screenshots.mjs")], {
    stdio: "inherit",
    cwd: ROOT,
  });
  execFileSync("node", [path.join(__dirname, "validate.mjs")], {
    stdio: "inherit",
    cwd: ROOT,
  });
}

function parseArgs(argv) {
  const args = {
    boot: false,
    ocr: false,
    status: false,
    shot: null,
    avd: AVD_DEFAULT,
    interactive: true,
  };
  for (let i = 0; i < argv.length; i++) {
    const a = argv[i];
    if (a === "--boot") args.boot = true;
    else if (a === "--ocr") args.ocr = true;
    else if (a === "--status") args.status = true;
    else if (a === "--shot") {
      args.shot = argv[++i];
      args.interactive = false;
    } else if (a === "--avd") args.avd = argv[++i];
    else if (a === "--help" || a === "-h") args.help = true;
  }
  return args;
}

function help() {
  console.log(`
SoC Wiki device capture

  npm run collect:device -- --status
  npm run collect:device -- --boot
  npm run collect:device -- --boot --shot col-skills --ocr
  npm run collect:device -- --boot          # then interactive loop

Interactive commands:
  shot <label>   capture screen → content/raw/screenshots/<label>.png
  ocr            run OCR on all screenshots + validate
  devices        list adb devices
  open-shots     print screenshots dir
  quit           exit
`);
}

async function interactiveLoop() {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  const ask = (q) => new Promise((res) => rl.question(q, res));

  console.log("\nInteractive capture ready.");
  console.log("1) Open Sword of Convallaria on the emulator");
  console.log("2) Navigate to a character skill/build screen");
  console.log("3) Type: shot col-skills   (or sp-inanna-build, etc.)");
  console.log("4) Type: ocr   when done capturing\n");

  while (true) {
    const line = (await ask("soc-device> ")).trim();
    if (!line) continue;
    const [cmd, ...rest] = line.split(/\s+/);
    try {
      if (cmd === "quit" || cmd === "exit" || cmd === "q") break;
      if (cmd === "help") help();
      else if (cmd === "devices" || cmd === "status") printStatus();
      else if (cmd === "open-shots") console.log(SHOT_DIR);
      else if (cmd === "shot" || cmd === "cap" || cmd === "s") {
        const label = rest.join("-") || `capture-${Date.now()}`;
        if (!listDevices().length) {
          console.log("No device. Run with --boot first.");
          continue;
        }
        screenshot(label);
      } else if (cmd === "ocr") {
        runOcrPipeline();
      } else {
        console.log("Unknown command. Try: shot <label> | ocr | devices | quit");
      }
    } catch (e) {
      console.error("Error:", e.message || e);
    }
  }
  rl.close();
}

async function main() {
  const args = parseArgs(process.argv.slice(2));
  if (args.help) {
    help();
    return;
  }

  ensureAdb();

  if (args.status) {
    printStatus();
    return;
  }

  if (args.boot) {
    await bootEmulator(args.avd);
  }

  const devices = listDevices();
  if (!devices.length) {
    console.log("No adb device online.");
    console.log("Start emulator: npm run collect:device -- --boot");
    console.log("Or open Android Studio → Device Manager → Pixel_7 → Play");
    process.exit(1);
  }
  console.log("Using device:", devices[0].id);

  if (args.shot) {
    screenshot(args.shot);
    if (args.ocr) runOcrPipeline();
    return;
  }

  if (args.interactive) {
    await interactiveLoop();
  }
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
