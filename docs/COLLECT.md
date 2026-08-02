# 数据收集 / 抓取流水线

## 目标

把**公开攻略**与**客户端截图**变成可校验的 `content/collected/{slug}.json`，再择优并入站点数据。

## 一键全自动（推荐）

```bash
npm run collect:auto
# = scrape 公开源 → 结构化 reparse → validate → build
#
# 产出：
#   content/raw/public/*           缓存 HTML/TXT
#   content/collected/*.json       规范化角色数据（含 NRG/CD）
#   src/data/auto-refined.ts       自动精修层（进站）
#
# 合并优先级（characters.ts）：
#   raw seed → AUTO_REFINED（自动） → TOP20 手写（最高优先级）
```

当前公开源抓取：**GameWith 39 页 + DotGG 12 页**，清洗后技能名示例：

| 角色 | 抓到的关键技能（公开源） |
|------|---------------------------|
| Col | Hidden Thorn, Wipe Out, Omen of Death, Mask, Ambush, Shadow Gait |
| SP Inanna | Sword - Dawnlight, Battle Flag of Convallaria Stands, Light of Convallaria |
| Taair | Energy Wave, Healing Spell, Seed of Wisdom, Thousand-Mile Echo, Inner Light, Caged Reverie |
| Camelot | Slash, Verdict - Solo Carry, King's Fighting Spirit, Throne of Ashes |
| Estra | Shadow Blitz, Feverish Attack, Shadow Step, Spine Pierce |
| Cocoa | Assisting Cover, Iron Pot Stew, Cocoa's Treasure Chest |

> 注意：公开 HTML 解析会有噪声；**Top 20 手写稿（`src/data/top20.ts`）仍是线上主数据**。collected 用于对照与后续批量升级。

## 客户端 / 模拟器采集（adb）

本机已具备：Android Studio、SDK、**`Pixel_SoC`** AVD（API 34，**4KB 页**，Host GPU）。  
`~/.zshrc` 已写入 `ANDROID_HOME` + PATH（新开终端生效）。

### ⚠ 白方块 / 人物不渲染（Mac 模拟器已知限制）

| 症状 | 原因 | 处理 |
|------|------|------|
| 战斗中角色/怪物是**白色剪影**，UI/立绘正常 | 战斗单位贴图为 **ASTC / Texture2DArray**；M2 模拟器 **Host GLES→Metal** 不暴露 `GL_KHR_texture_compression_astc_*`，Unity 解压失败→白块 | **真机 adb** 采集（推荐）；模拟器仅适合截 **技能 UI / 2D 立绘** |
| 强制 `-force-vulkan` | 本机模拟器易直接挂掉 | 不要用 |
| 纯软件 GPU（SwiftShader） | 可能正确解码 ASTC，但极慢到 ANR | 不实用 |
| Pixel_7 16KB 页 | 额外雪上加霜 | **禁用**，只用 Pixel_SoC（4KB） |

**结论（2026-08 实测）：** 在 Apple Silicon + Android Emulator 上无法可靠修复本游戏战斗小人白块。技能页/公告立绘可正常上色，**OCR 技能文案不依赖战斗 3D**。

推荐采集路径：

1. **真机** USB 调试 → `npm run collect:device`  
2. 或模拟器只进 **角色详情 / 技能列表**（2D UI）截图 OCR  
3. 公开站 scrape 仍是技能数据主源（`collect:auto`）

确认环境（模拟器辅助用）：

```bash
adb shell getconf PAGE_SIZE          # 必须 4096
adb shell getprop ro.build.fingerprint | grep -i 16k   # 必须无输出
# GLES 扩展中通常看不到 ASTC → 战斗白块属预期
```

### 推荐启动（SoC 采集专用）

```bash
# 新开终端，或: source ~/.zshrc
bash scripts/collect/start-pixel-soc.sh
# = 杀旧模拟器 → 起 Pixel_SoC -gpu host → 装包检测 → 用 -force-gles 开游戏
```

包名：`com.xd.ssrpgen`（APK 拆分包缓存于 `tmp/apk/`，资源可从旧 AVD 拉到 `tmp/game_assets/`）。

### 一键状态 / 启动模拟器

```bash
npm run collect:device -- --status
npm run collect:device -- --boot          # 优先用 start-pixel-soc.sh
```

### 交互采集（推荐）

1. `bash scripts/collect/start-pixel-soc.sh`  
2. 在模拟器里登录 **Sword of Convallaria**，进入角色技能页  
3. 在终端输入：

```text
shot col-skills
shot sp-inanna-build
ocr
quit
```

截图自动落到 `content/raw/screenshots/`，`ocr` 会跑 tesseract + validate。

### 单次命令

```bash
bash scripts/collect/start-pixel-soc.sh
npm run collect:device -- --shot col-skills --ocr
```

### 手动截图（无 adb 时）

把图丢到 `content/raw/screenshots/{slug}-skills.png`，然后：

```bash
npm run collect:ocr && npm run collect:validate
```

## 命令一览

| 命令 | 作用 |
|------|------|
| `npm run collect:public` | 抓公开 GameWith / DotGG |
| `npm run collect:clean` | 清洗技能名噪声 |
| `npm run collect:ocr` | OCR 截图 |
| `npm run collect:validate` | 校验 JSON |
| `npm run collect:merge -- --write` | 生成 `collected-overrides.ts` |
| `npm run collect:device-ocr:write` | 把 `source=device-ocr` 写入 `src/data/device-ocr-refined.ts` 并进站（高于 AUTO_REFINED，低于 TOP20） |
| `npm run collect` | public + clean + validate |

## 合规

- 仅抓**公开网页**与**你自己账号的客户端截图**  
- 不做内存修改、不绕过客户端加密/反作弊  
- 尊重站点频率（脚本已加间隔）  
- 文案入库时改写，避免整页复制

## 目录

```
content/
  SCHEMA.md
  raw/public/          # 抓取缓存（html 默认不进 git）
  raw/screenshots/     # 你放截图
  collected/           # 规范化 JSON（进 git）
scripts/collect/
  scrape-public.mjs
  clean-collected.mjs
  ocr-screenshots.mjs
  validate.mjs
  merge-to-site.mjs
  targets.mjs
  schema.mjs
```
