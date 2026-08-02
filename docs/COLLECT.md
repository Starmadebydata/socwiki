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

## 客户端截图抓取（精确 NRG/CD）

1. 手机/模拟器打开角色技能页  
2. 截图保存到：

```
content/raw/screenshots/col-skills.png
content/raw/screenshots/sp-inanna-build.png
```

3. 运行（需 `tesseract`，本机已有）：

```bash
npm run collect:ocr
npm run collect:validate
```

4. 人工打开 `content/collected/{slug}.json`，把 `confidence` 改为 `"high"`，`source` 改为 `"client"`  
5. 合并：

```bash
npm run collect:merge -- --write
```

## 命令一览

| 命令 | 作用 |
|------|------|
| `npm run collect:public` | 抓公开 GameWith / DotGG |
| `npm run collect:clean` | 清洗技能名噪声 |
| `npm run collect:ocr` | OCR 截图 |
| `npm run collect:validate` | 校验 JSON |
| `npm run collect:merge -- --write` | 生成 `collected-overrides.ts` |
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
