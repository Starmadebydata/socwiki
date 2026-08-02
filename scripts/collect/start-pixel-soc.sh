#!/usr/bin/env bash
# Start the SoC capture emulator (Pixel_SoC) with host GPU + GLES-friendly setup.
# Do NOT use Pixel_7 (16KB page-size AVD) — Unity character sprites render as white boxes there.
set -euo pipefail

export PATH="${PATH}:${HOME}/Library/Android/sdk/platform-tools:${HOME}/Library/Android/sdk/emulator"
export ANDROID_HOME="${ANDROID_HOME:-$HOME/Library/Android/sdk}"
export ANDROID_SDK_ROOT="${ANDROID_SDK_ROOT:-$ANDROID_HOME}"

AVD_NAME="${AVD_NAME:-Pixel_SoC}"
PKG="${PKG:-com.xd.ssrpgen}"
MEMORY_MB="${MEMORY_MB:-4096}"

if pgrep -f "qemu-system-aarch64.*${AVD_NAME}" >/dev/null 2>&1; then
  echo "Emulator ${AVD_NAME} already running."
else
  # Kill other AVDs to free RAM (especially Pixel_7 / 16k images)
  pkill -f 'qemu-system-aarch64' 2>/dev/null || true
  sleep 2
  rm -f "${HOME}/.android/avd/"*.avd/*.lock 2>/dev/null || true

  echo "Starting ${AVD_NAME} (host GPU, crash-report disabled)..."
  nohup emulator -avd "${AVD_NAME}" \
    -gpu host \
    -no-snapshot \
    -no-metrics \
    -crash-report-mode disabled \
    -netdelay none \
    -netspeed full \
    -memory "${MEMORY_MB}" \
    >"/tmp/emu_${AVD_NAME}.log" 2>&1 &
  echo "pid $!"
fi

echo -n "Waiting for boot"
for i in $(seq 1 60); do
  boot=$(adb shell getprop sys.boot_completed 2>/dev/null | tr -d '\r' || true)
  if [[ "${boot}" == "1" ]]; then
    echo " OK"
    break
  fi
  echo -n "."
  sleep 2
done

PAGE=$(adb shell getconf PAGE_SIZE 2>/dev/null | tr -d '\r' || true)
FP=$(adb shell getprop ro.build.fingerprint 2>/dev/null | tr -d '\r' || true)
echo "fingerprint: ${FP}"
echo "PAGE_SIZE: ${PAGE}"
if echo "${FP}" | grep -qi '16k\|gphone16k'; then
  echo "ERROR: 16KB page-size image detected. Use Pixel_SoC (API 34 google_apis_playstore), not Pixel_7."
  exit 1
fi
if [[ "${PAGE}" != "4096" && -n "${PAGE}" ]]; then
  echo "WARNING: unexpected PAGE_SIZE=${PAGE} (want 4096)"
fi

if ! adb shell pm path "${PKG}" >/dev/null 2>&1; then
  echo "Game not installed. APKs expected under tmp/apk/ (base + splits)."
  APK_DIR="$(cd "$(dirname "$0")/../../tmp/apk" 2>/dev/null && pwd || true)"
  if [[ -n "${APK_DIR}" && -f "${APK_DIR}/base.apk" ]]; then
    adb install-multiple -r \
      "${APK_DIR}/base.apk" \
      "${APK_DIR}/split_config.arm64_v8a.apk" \
      "${APK_DIR}/split_unityAssets.apk"
  else
    echo "Install from Play Store or: adb install-multiple tmp/apk/*.apk"
  fi
fi

# Force OpenGLES3 — fixes white character sprites on emulator Vulkan path
if adb shell pm path "${PKG}" >/dev/null 2>&1; then
  adb shell mkdir -p "/sdcard/Android/data/${PKG}/files" 2>/dev/null || true
  GFX="/sdcard/Android/data/${PKG}/files/XDGraphicsApiSettings.txt"
  # Ensure google brand uses -force-gles (file may already exist from collect pipeline)
  if [[ -f "$(dirname "$0")/../../tmp/apk/XDGraphicsApiSettings.txt" ]]; then
    adb push "$(dirname "$0")/../../tmp/apk/XDGraphicsApiSettings.txt" "${GFX}" >/dev/null
  fi
  echo "Launching ${PKG} ..."
  adb shell am force-stop "${PKG}" 2>/dev/null || true
  # Prefer launcher activity (may be AlternateIcon* after icon change)
  LAUNCH=$(adb shell cmd package resolve-activity --brief "${PKG}" 2>/dev/null | tail -1 | tr -d '\r')
  if [[ -z "${LAUNCH}" || "${LAUNCH}" == *"No activity"* ]]; then
    LAUNCH="${PKG}/com.jixin.GameActivity"
  fi
  # Default API (do not force-vulkan — crashes host emulator). GLES works for 2D UI only.
  adb shell am start -n "${LAUNCH}" \
    || adb shell monkey -p "${PKG}" -c android.intent.category.LAUNCHER 1
  echo "Started: ${LAUNCH}"
  echo ""
  echo "NOTE: Battle sprites stay WHITE on Mac emulator (missing ASTC on Host GLES)."
  echo "      Use a physical phone for combat screenshots; emulator OK for skill UI / OCR text."
  echo "      Sign in on the emulator if needed (new AVD has no saved token)."
fi

echo "Done. Prefer physical device for combat; Pixel_SoC for 2D skill UI only."
