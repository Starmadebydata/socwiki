# Sword of Convallaria Wiki — PRD · 信息架构 · 长尾词 · 竞品 SERP

> 目标：复刻 eqlwiki 的「数据库 wiki + 内链织网」打法，在 SoC（铃兰之剑）赛道做**专门站**，抢占尚无独立品牌 wiki 的 SERP 空位。  
> 语言：英文出海站（主）；可选后续加中文。  
> 日期：2026-08-02  
> 范围：本文覆盖 **1 PRD+IA / 2 长尾词 / 4 竞品 SERP**（不含脚手架代码）。

---

## 0. 一句话产品定义

**一个专属于 Sword of Convallaria 的社区数据库站**：首页做导航枢纽；角色 / 装备 / 技能 / 阵营 用结构化数据页承接长尾；Tier List + Team Builder 做差异化；用实体关系内链复制 eqlwiki 的「人均 8+ 页」行为资产。

---

## 1. 市场与机会判断

### 1.1 为什么值得做

| 信号 | 证据 | 含义 |
|------|------|------|
| 无专门站独占 | SERP 主力是 **dotgg.gg 子目录**、**gamewith.net 子目录**、Reddit、媒体旧文 | 品牌词/导航词窗口仍在 |
| 内容形态匹配 eqlwiki | 5 Roles × 角色 × Skill Tree × Weapon/Trinket/Tarot × Faction Aura × Team | 数据页可无限扩展 |
| 游戏仍在运营 | 2024-07 全球上线；2026 仍有 **Sagas of Ice and Blood / 新角色 Anna / 2nd Anniversary** | 持续有时效长尾 |
| Fandom 弱 | `convallaria.fandom.com` 约 200+ 页、体验差、难作为攻略意图结果 | 数据库+攻略双定位有空位 |

### 1.2 风险（必须写进决策）

| 风险 | 说明 | 缓解 |
|------|------|------|
| 非 day-1 窗口 | 游戏已运营 ~2 年，峰值流量不如新品爆发 | 靠版本角色 + 深度工具 + 长尾库 |
| 泛站权重碾压 | GameWith DR 高、dotgg 有多游戏矩阵 | **不正面抢品牌域权威**，用 EMD/专注站 + 结构化厚度 + 工具 |
| 内容维护成本 | 角色 70+、装备/塔罗持续更新 | MVP 先 Legendary + 热门；数据层与展示分离 |
| 版权素材 | 立绘/图标 | 优先自绘简图、官方允许素材、或描述性占位，避免热链盗图 |

### 1.3 成功指标（90 天）

| 指标 | 目标 |
|------|------|
| 索引页数 | ≥ 120（角色全量 + 装备/塔罗子集 + 核心 guide） |
| 核心词 | `sword of convallaria tier list` 进前 10；`{char} sword of convallaria` 有 10+ 页进前 20 |
| 行为 | 人均 ≥ 3.5 页、跳出率 < 55%（wiki 型合理区间） |
| 外链 | 引用域 20–40，DR 从 0 → 15+ |
| 收入 | 先不设硬目标；AdSense 过审后观察 RPM |

---

## 2. 产品范围（PRD）

### 2.1 用户与意图

| 用户 | 搜索意图 | 落地页 |
|------|----------|--------|
| 新玩家 | reroll / beginner / best team early | Guides + Reroll Tier |
| 中坚玩家 | `{char} build` / skill tree / gear | Character 详情 |
| 资源规划 | tier list / shard priority / pull value | Tier Lists |
| 配队党 | team / faction synergy / role matchup | Teams + Team Builder |
| 系统党 | tarot / trinket / weapon / engraving | Gear DB |

### 2.2 核心实体（数据模型）

```
Character
  - slug, name, rarity (Legendary/Epic/Rare)
  - role: Breaker | Defender | Destroyer | Watcher | Seeker
  - factions[]: Iria, Papal States, Alacrity, Union, SoC, Elaman, Luccia, Drifter, collab...
  - move / jump stats
  - trait, skills[], reactions[], basic_attacks[], ascension
  - recommended: weapon, trinket, tarot, engravings
  - tier_scores: overall, single, multi, reroll, pvp
  - stars_priority, shard_priority
  - synergies[] → Character
  - best_teams[] → Team

Weapon | Trinket | TarotWhisper | AstralImprint
  - slug, rarity, stats, effect
  - used_by[] → Character

Faction
  - aura rules, leaders, members[]

Team / Composition
  - members[5-6], content_type (story / trial / pvp / spiral)
  - explanation

Guide (long-form)
  - beginner, spiral chapters, weaponry trials, codes, banners
```

### 2.3 功能优先级

| 优先级 | 功能 | 说明 |
|--------|------|------|
| **P0** | 首页枢纽 + 全局搜索 | eqlwiki 模式 |
| **P0** | Character 列表 + 详情（含 build 表） | 主力长尾 |
| **P0** | Character Tier List（按 Role 分表） | 流量入口 |
| **P0** | 实体内链织网 | 角色↔装备↔技能↔阵营↔队伍 |
| **P1** | Weapons / Trinkets / Tarots 列表+详情 | 第二层长尾 |
| **P1** | Teams / Best Comps（按模式） | 差异化 |
| **P1** | Team Builder（交互工具） | 对标 eqlegends Class Combo |
| **P1** | 8–12 篇核心 Guides + FAQ schema | 抓 PAA / 新手意图 |
| **P2** | Astral Imprint tier、Codes、Banner 日历 | 时效流量 |
| **P2** | Role Matchup 可视化、Shard Priority | 粘性 |
| **P3** | 用户评分/评论、UGC 提交 | 后期 |

### 2.4 非目标（MVP 不做）

- 完整剧情 walkthrough 逐关图文（成本极高，GameWith 已覆盖）
- 中文全站同步（可二期）
- 账号系统 / 云端编队同步
- 游戏客户端数据自动抓包（首期人工/半自动整理）

### 2.5 技术约束（建议）

| 项 | 建议 |
|----|------|
| 框架 | Next.js App Router + SSR/SSG |
| 数据 | 首期 TypeScript JSON / MDX；数据量上来再迁 CMS |
| 样式 | Tailwind；深色游戏风 |
| SEO | next-sitemap、JSON-LD、canonical、OG |
| 部署 | Vercel / Cloudflare Pages |
| 域名 | **已购 `socwiki.app`**（Cloudflare 注册） |
| 部署 | **Cloudflare Workers** + OpenNext（`@opennextjs/cloudflare`） |
| 品牌 | 对外 **SoC Wiki**；Title 后缀 **Sword of Convallaria Wiki** |

---

## 3. 信息架构与 URL

### 3.1 站点地图（对齐 eqlwiki 三级骨架）

```
/                              ← 搜索框 + 分类卡片枢纽（非文章首页）
/characters                    ← 总览 + 筛选（role / faction / rarity / tier）
/characters/{slug}             ← 角色详情（build 表 + 技能表 + 内链）
/characters/role/{role}        ← 按 Role 长尾（e.g. /characters/role/seeker）
/characters/faction/{faction}  ← 按 Faction 长尾

/tier-list                     ← 总 tier list（主流量页）
/tier-list/reroll
/tier-list/weapons
/tier-list/trinkets
/tier-list/tarots
/tier-list/astral-imprints

/weapons                       ← 武器总览
/weapons/{slug}
/trinkets
/trinkets/{slug}
/tarots
/tarots/{slug}
/astral-imprints
/astral-imprints/{slug}

/factions
/factions/{slug}

/teams                         ← 阵容库
/teams/{slug}
/tools/team-builder            ← 交互工具（差异化）

/guides
/guides/{slug}

/codes                         ← 兑换码（高搜索、高时效）
/news 或 /updates              ← 版本/维护摘要（可选 P2）

/about · /privacy · /contact · /editorial-policy
```

### 3.2 首页区块（导航枢纽，不当内容页）

| 区块 | 内容 | SEO/产品作用 |
|------|------|----------------|
| 隐藏或可见 H1 | `Sword of Convallaria Wiki` | 主题声明（**不要学 eqlwiki 隐藏 H1**） |
| 搜索框 | 角色/装备/技能 | 降跳出、提停留 |
| 分类卡片 8 张 | Characters · Tier Lists · Weapons · Trinkets · Tarots · Teams · Guides · Codes | 权重下发 |
| 热门角色条 | Top 12 Legendary | 深页内链 |
| 最新更新 | 新角色 Anna 等 | 新鲜度信号 |
| CTA | Discord / Contribute | UGC 漏斗 |

### 3.3 角色详情页模块顺序（On Page 模板）

1. **H1**: `{Name}`  
2. 摘要表：Rarity / Role / Factions / Move / Jump  
3. **Quick Build 表**：Basic / Reaction / Skills / Weapon / Trinket / Tarot（首屏完成意图）  
4. Tier badges + 链到 `/tier-list`  
5. Pros / When to use（短文，200–400 词，可带 FAQ）  
6. Skill 完整表（每技能可链 `/skills` 若拆页）  
7. Recommended gear（每件装备内链详情）  
8. Synergies & Best teams（链角色 + teams）  
9. Star / Shard priority  
10. Related characters（同 Role / 同 Faction）  
11. FAQ schema（3–5 问）

Title 模板：

```
{Name} Build & Skill Tree Guide - Sword of Convallaria Wiki
```

Description 模板：

```
Best {Name} build in Sword of Convallaria (SoC): skill tree, weapon, trinket, tarot, and team synergies. Role: {Role}. Updated {Month Year}.
```

### 3.4 内链织网规则（eqlwiki 第三课落地）

| 关系 | 实现 |
|------|------|
| Character → Weapon/Trinket/Tarot | 推荐表每行必链 |
| Gear → Characters | `Best on` 列表 |
| Character → Faction | 徽章链 `/factions/{slug}` |
| Character → Role hub | 徽章链 `/characters/role/{role}` |
| Character → Teams | `Appears in` |
| Tier list → Character | 每个名字必链 |
| Guide → 实体 | 文中实体自动/半自动链 |

**原则**：内链来自数据关系，不是「Related Posts」随机推荐。

---

## 4. On Page SEO 规范

### 4.1 全局规则

| 规则 | 规范 |
|------|------|
| Title | ≤ 60 字符优先；格式 `{主题} - Sword of Convallaria Wiki` |
| H1 | 每页唯一，与主词一致，**可见** |
| Meta description | 140–160 字符；含 SoC 别名 `Sword of Convallaria` + 具体价值 |
| Canonical | 绝对 URL，无参 |
| URL | 小写 kebab；角色名去特殊字符（`SP Inanna` → `sp-inanna`） |
| 品牌一致性 | 全站后缀统一 `Sword of Convallaria Wiki`（或选定短品牌如 `SoC Wiki`） |
| 结构化数据 | Organization + WebSite(SearchAction) + BreadcrumbList + FAQPage；角色可用 ItemList / 自定义 Dataset 思路 |
| 图片 | 有意义 alt：`{Name} Sword of Convallaria character portrait` |
| 更新 | 每页显示 `Last updated`；版本更新后刷新 tier/新角色 |

### 4.2 关键词映射（页面 ↔ 意图）

| 页面类型 | 主词模式 | 辅词 |
|----------|----------|------|
| 首页 | sword of convallaria wiki | soc wiki, eq legends 式 database 定位 |
| Tier list | sword of convallaria tier list | best characters soc, soc tier list 2026 |
| 角色页 | {name} sword of convallaria | {name} build soc, {name} skill tree |
| 装备页 | {item} sword of convallaria | best {item} soc |
| Reroll | sword of convallaria reroll | best reroll soc |
| Codes | sword of convallaria codes | soc codes {month} |
| Teams | sword of convallaria best team | best team early game soc |
| Role hub | sword of convallaria {role} | best seekers soc |

### 4.3 对标 eqlwiki 的三课在本站的落地

1. **首页 = 分发器**：不写长文 Hero 文，卡片 + 搜索为主。  
2. **数据页用表**：build/skill/gear 表优先，短评补充，不堆 AI 散文。  
3. **关系即内链**：Character–Gear–Faction–Team 全连通。

---

## 5. MVP 范围与里程碑

### 5.1 MVP（4–6 周可上线）

| 模块 | 数量 | 验收 |
|------|------|------|
| 首页枢纽 | 1 | 搜索 + 8 分类卡片 |
| 角色页 | 全部 Legendary（约 70+）或至少 Top 40 热门 | 含 Quick Build 表 |
| Tier list | 1 总表 + 1 reroll | 按 Role 分栏 |
| 装备子集 | 武器/饰品/塔罗各 Top 推荐项 + 列表骨架 | 可从角色页点入 |
| Guides | 6 篇 | Beginner, Reroll, Role matchup, Party building, Codes, Early teams |
| Team Builder | v0.1 | 选 5–6 人显示 Role 克制与 Faction 提示 |
| 技术 SEO | 全站 | sitemap, robots, schema, OG, GSC |

### 5.2 里程碑

| 周 | 交付 |
|----|------|
| W1 | 技术脚手架 + 数据 schema + 首页 + 5 个样板角色页 |
| W2 | Top 40 角色 + tier list + 内链自动生成 |
| W3 | 装备子集 + 6 guides + FAQ schema |
| W4 | Team Builder v0.1 + codes + 提交索引 + 首批外链 |
| W5–6 | 补全 Legendary、迭代 tier、Reddit/Discord 分发 |

---

## 6. 长尾词库（研究稿）

> 说明：无 Ahrefs/SEMrush 实时量级时，用 **意图强度 × SERP 空洞 × 可规模化** 做优先级。标注为相对优先级，上线后用 GSC 校准。

### 6.1 种子与修饰词

**种子**

- sword of convallaria  
- soc（注意歧义，标题中尽量用全称 + SoC 括号）  
- 铃兰之剑（二期中文）

**修饰矩阵**

| 类型 | 修饰词 |
|------|--------|
| 导航/品牌 | wiki, database, guide |
| 评价类 | tier list, best characters, best {role} |
| 角色类 | {name}, {name} build, {name} skill tree, {name} best gear |
| 养成类 | reroll, shard priority, star priority, how to level |
| 装备类 | best weapons, trinkets, tarot whispers, engraving, refinement |
| 阵容类 | best team, team composition, party building, faction |
| 系统类 | role matchup, act again, nrg, spiral of destinies |
| 时效类 | codes, banner, {new char} build, roadmap |
| 模式类 | weaponry trials, pioneer odyssey, pvp / clash |

### 6.2 高优先级词簇（P0）

| 关键词簇 | 示例 | 为何优先 | 目标 URL |
|----------|------|----------|----------|
| Tier list | sword of convallaria tier list, soc tier list, best characters sword of convallaria | 意图强、更新即流量、eqlwiki 已验证 | `/tier-list` |
| 角色 build | col build sword of convallaria, sp inanna build, maitha skill tree | 可规模化 70+ 页 | `/characters/{slug}` |
| Reroll | sword of convallaria reroll, best reroll soc | 新手高转化 | `/tier-list/reroll` + guide |
| Codes | sword of convallaria codes | 高搜索、易排名、带新 | `/codes` |
| Beginner | sword of convallaria beginner guide, early game guide | 漏斗入口 | `/guides/beginner` |
| Best team | best team sword of convallaria, early game team soc | 工具页承接 | `/teams`, `/tools/team-builder` |

### 6.3 中优先级词簇（P1）

| 关键词簇 | 示例 | 目标 URL |
|----------|------|----------|
| Role 向 | best seekers sword of convallaria, watcher tier list soc | `/characters/role/{role}`, tier 分表 |
| Faction | iria faction sword of convallaria, elaman team | `/factions/{slug}` |
| Gear | void stab sword of convallaria, best tarot whispers soc | `/weapons/{slug}` 等 |
| 系统 | role matchup sword of convallaria, act again explained | `/guides/role-matchups` |
| Spiral / Trials | weaponry trials lv70, spiral of destinies guide | `/guides/...` |
| Collab 角色 | geralt sword of convallaria, yennefer build soc | 角色页（搜索量大时优先更新） |
| 新版本 | anna build sword of convallaria, sagas of ice and blood | 新角色 24h 内上线 |

### 6.4 角色名长尾清单（首批覆盖）

按 GameWith 公开 Legendary 列表（2026-07 前后）整理——**每个名字 × (build | skill tree | best gear | tier)** 都是独立长尾。

**核心热门（优先写深）**  
SP Inanna, Inanna, Taair, Estra, Kvare, Camelot, SP Maitha, SP Samantha, Lukamar, Shahnaz, Col, Cocoa, Tristan, Maitha, Xavier, Beryl, Rawiyah, SP Rawiyah, Gloria, Samantha, Nungal, SP Nungal, Yserinde, Yennefer, Geralt, Triss, Ciri, Credenza, Lutfi, Ayishah, Anna（新）, Clara, Selina, Heshan, Shams, Pooch Runrun, Marcille, Senshi, Falin, Kiya, Rico, SchackLulu, Nydia, SP Faycal, SP Safiyyah, Safiyyah, Faycal, Dantalion, Magnus, Edda, Simona, LilyWill, NonoWill, Teadon, Guzman, Miguel, Alexei, Garcia, Iggy, Nergal, Hasna, Homa, Agata, Caris, Flavia, Luvata, Pamina, Layla, Leonide, Tristan, Team Meteor, Acambe, Auguste, Afra, Momo, Parsifal, Yeganeh, Kianshir, SP Inanna, …

**页面生成公式**

```
Title: {Name} Build & Skill Tree - Sword of Convallaria Wiki
H1: {Name}
Primary: {name} sword of convallaria
Secondary: {name} build soc, best gear for {name}, {name} skill tree
```

### 6.5 装备 / 系统长尾示例

| 词 | 页 |
|----|-----|
| sword of convallaria best weapons | `/tier-list/weapons` |
| sword of convallaria tarot whispers | `/tarots` |
| sword of convallaria trinkets | `/trinkets` |
| sword of convallaria astral imprint tier list | `/tier-list/astral-imprints` |
| sword of convallaria engraving guide | `/guides/engraving` |
| sword of convallaria castalia | guide / currency 页 |
| sword of convallaria hope luxites | farming guide |
| sword of convallaria faction aura | `/factions` |

### 6.6 竞争难度粗筛（定性）

| 词类型 | 难度 | 原因 | 策略 |
|--------|------|------|------|
| `sword of convallaria wiki` | 中 | GameWith/dotgg 子目录占位 | 专注站 + 品牌化，中期可进前 10 |
| `sword of convallaria tier list` | 中低 | 多结果但无强专门站 | **P0 主攻**，月更 |
| `{char} build` | 低–中 | 大量弱页/旧媒体 | 表格式深度页可赢 |
| `codes` | 低 | 时效页轮换 | 快速更新赢 |
| 泛 `sword of convallaria` | 高 | 官方+Steam+应用商店 | 不作为首页唯一目标 |

### 6.7 内容真空（SERP 可打点）

1. **Team Builder 交互工具** — 竞品多为静态列表。  
2. **按 Role 的独立 hub + 克制可视化** — 有 guide，缺好看可链数据库。  
3. **装备「Best on」反向索引** — GameWith 有推荐，但跨页织网弱。  
4. **版本 diff / Last updated 透明** — 建立信任，利于回访。  
5. **新角色 24h 模板页** — 抢 Anna 类时效词。

---

## 7. 竞品 SERP 拆解

### 7.1 竞争地图

| 玩家 | 类型 | 代表 URL | 强项 | 弱项 |
|------|------|----------|------|------|
| **GameWith** | 泛游戏攻略矩阵 | gamewith.net/sword-of-convallaria/ | 覆盖全、角色 build 模板成熟、日英协同、更新勤（Anna 等同日） | URL 数字 ID 不友好；子目录非品牌；模板感强；广告重 |
| **DotGG + Garbelius** | 多游戏 wiki + 作者 IP | dotgg.gg/sword-of-convallaria/ | 英语深度评价、多 tier 线（角色/武器/塔罗/饰品/印记）、作者信任 | 子目录；部分角色页偏随笔、结构化弱；依赖个人产能 |
| **Fandom** | UGC wiki | convallaria.fandom.com | 词条向、角色分类 | 页少、体验差、攻略意图弱 |
| **AllClash / BlueStacks / Escapist** | 媒体/工具站旧文 | 各站 | 外链/品牌域 | **严重过时**（2024–early 2025 meta） |
| **Reddit** | 社区 | r/SwordofConvallaria | 真实讨论、skill tree 心得 | 非结构化、难维护排名 |
| **YouTube** | 视频 | 各频道 | 构建展示 | 文字 SERP 可分流 |
| **官方** | soc.xd.com / Steam / 商店 | — | 品牌导航 | 不做 build/wiki |

**结论**：没有「eqlwiki.com 级别」的独立 SoC 数据站。真正要打的是 **GameWith 与 DotGG 的子目录页**，用「专注 + 结构 + 工具 + 更新速度」换位置。

### 7.2 GameWith 拆解

**首页结构**

- 巨型导航：Banner / Character DB / Reroll / Gear / JP 站链接  
- 新闻驱动（新角色、Imprint、Banner、Roadmap）  
- Tier & Beginner & Strategy 分区表格堆链接  
- 角色表按 Legendary 罗列  

**角色页（例：Col）On Page 特征**

| 元素 | 做法 | 评价 |
|------|------|------|
| Title | `SoC \| Col Best Build and Skill Tree Guide \| Sword of Convallaria - GameWith` | 品牌夹心，略长 |
| H1 | Col Best Build and Skill Tree Guide | 意图清晰 |
| 信息表 | Rarity / Role / Faction / Move | 优秀 |
| Tier 跳转 | 链总 tier / reroll tier | 内链好 |
| Build 表 | Basic / Reaction / Ascension / Skills / Weapon / Trinket / Tarot | **可直接抄结构** |
| 技能优先级 | ★ 评分 + 使用说明 | 深度好 |
| 更新 | Last Updated 显式 | 信任 |
| URL | `/sword-of-convallaria/48262` | **差**（无语义） |

**他们凭什么排前面**

1. 域权威与站群内链。  
2. 覆盖面：几乎全角色 + 系统 guide。  
3. 更新频率与日文站数据同步。  
4. 模板完整，满足 “build + skill tree + gear” 一站式意图。

**我们怎么差异化**

| 维度 | GameWith | 我们 |
|------|----------|------|
| URL | 数字 ID | `/characters/col` 语义化 |
| 站定位 | 子目录之一 | **整站只做 SoC** |
| 内链 | 文章链文章 | **实体关系网 + 装备反向索引** |
| 工具 | 弱 | Team Builder |
| 体验 | 重广告、导航噪音 | 干净、搜索优先 |
| Schema | 一般 | FAQ + Breadcrumb 拉满 |
| 语言 | 翻译腔偶发 | 原生英语编辑口径 |

### 7.3 DotGG 拆解

**站点结构**

```
/sword-of-convallaria/
  tier-list/ | character-tier-list/
  characters/ | {name}/
  guides/
  trinkets/ | weapons tier | tarot tier | astral imprint tier
  codes/ | talents/ | shards/ | ascension-skills/
```

**角色页（例：Xavier）特征**

- 强作者口吻（Garbelius），可读性高  
- **弱结构化**：缺少 GameWith 式装备/技能硬表  
- 更新日期有时滞后  
- 底部互推其他 tier 文，内链存在但偏编辑型  

**他们凭什么排前面**

1. 早期英文内容布局。  
2. 多条 tier list 覆盖（不只角色）。  
3. 作者 E-E-A-T（Library of Iria 社区心智）。  
4. 相对干净的阅读体验。

**我们怎么差异化**

| 维度 | DotGG | 我们 |
|------|------|------|
| 角色页 | 散文为主 | **表优先 + 短评**（合并两者优点） |
| 产能 | 个人瓶颈 | 数据驱动批量 + 重点角色深写 |
| 品牌 | 多游戏 | 单游戏权威 |
| 工具 | 少 | Team Builder / 筛选器 |
| 筛选 | 角色列表分 Role | 多维 filter（role+faction+tier+rarity） |

### 7.4 其他 SERP 位

| 来源 | 特征 | 我们的动作 |
|------|------|------------|
| Reddit | 填真空、长讨论 | 内容页满足后可替换；发帖带工具链 |
| 过时媒体文 | 2024 tier | 用 2026 meta + Last updated 碾压 |
| Fandom | 资料向 | 不拼词条数量初期，拼 build 意图 |
| YouTube | 视频意图 | 页内可嵌官方/授权视频，不依赖 |

### 7.5 典型 SERP 意图 × 我们的占位策略

| 查询 | 当前常见结果 | 我们策略 |
|------|----------------|----------|
| sword of convallaria tier list | GameWith, DotGG, 旧媒体 | 一页多分表（Overall / by Role / Reroll）+ 月更 + 角色深链 |
| {char} build | GameWith 数字 URL, DotGG, AllClash 旧文 | 语义 URL + Quick Build 首屏 + 完整表 |
| sword of convallaria wiki | GameWith hub, DotGG hub, Fandom | 首页枢纽 + 品牌 Title「… Wiki」 |
| sword of convallaria codes | 多站轮换 | 极速更新 + 历史码表 |
| best team | 分散 guide | `/teams` 库 + Team Builder |
| role matchup | GameWith 单文 | 可视化 + 链到各 Role hub |

### 7.6 差异化总纲（一页纸）

```
GameWith = 广 + 权威域 + 模板
DotGG    = 深评 + 作者 IP + 多 tier
Fandom   = 词条

我们     = 专注域 + 语义 URL + 数据表密度
         + 实体内链网 + Team Builder
         + 版本响应速度 + 轻广告 UX
```

**不做的事**：用更长 AI 文砸 GameWith；在官方品牌词上硬刚 Steam/XD。  
**做的事**：每个可索引实体一页；关系链满；工具页做唯一性；新角色/新码 24h 内上线。

---

## 8. 内容与运营节奏

| 节奏 | 动作 |
|------|------|
| 日常 | Codes 检查；Discord/Reddit 元变化 |
| 新角色 Banner | 24h 内角色页 + tier 调整 + news 条 |
| 双周 | Tier list 复核；Team 推荐 |
| 月度 | 外链 5–10；GSC 词表现复盘；补 P1 长尾 |
| 版本大更 | 专题 guide + 印记/装备 tier |

外链起步（对齐哥飞 P0）：GSC、目录站、Reddit 价值贴、Discord、相关 fan 资源互链；工具页适合「可分享」传播。

---

## 9. 开放决策（需你拍板）

1. **域名**：偏好 `.wiki` / `.com` / `soc` 缩写还是全称？  
2. **品牌名**：`SoC Wiki` vs `Sword of Convallaria Wiki` vs 独立品牌名？  
3. **MVP 角色量**：Top 40 还是一次上全 Legendary？  
4. **变现**：AdSense only 还是联盟（PC 模拟器等）？  
5. **数据源**：是否接受首期半手工整理 GameWith/公开信息（注意原创表述与版权）？

---

## 10. 下一步（建议）

1. 你确认第 9 节决策。  
2. 脚手架 Next.js + 数据 schema + 5 个样板角色 + 首页枢纽。  
3. 并行：域名注册 + GSC + 首批外链规划。  
4. （可选）用关键词工具回填第 6 节真实量级/KD。

---

## 附录 A — 分类卡片文案草案（首页）

| Card | Title | Blurb |
|------|-------|-------|
| Characters | Characters | Builds, skill trees, and stats for every unit |
| Tier Lists | Tier Lists | Current meta rankings by role and mode |
| Weapons | Weapons | Best weapons and who they belong on |
| Trinkets | Trinkets | Trinket effects and recommended users |
| Tarots | Tarot Whispers | Tarot rankings and pairings |
| Teams | Teams | Sample comps for story, trials, and more |
| Guides | Guides | Beginner, systems, and mode walkthroughs |
| Codes | Codes | Active redeem codes, updated often |

## 附录 B — 样板 Title/Description

**首页**

- Title: `Sword of Convallaria Wiki - Characters, Tier Lists & Builds`  
- Description: `Community database for Sword of Convallaria (SoC): character builds, skill trees, tier lists, weapons, tarots, and team comps. Updated for the latest banners.`

**Tier list**

- Title: `Sword of Convallaria Tier List (2026) - Best Characters`  
- Description: `Updated SoC character tier list by role—DPS and Support rankings, reroll picks, and links to full builds.`

**角色**

- Title: `Col Build & Skill Tree Guide - Sword of Convallaria Wiki`  
- Description: `Best Col build in Sword of Convallaria: skill tree priority, Void Stab and trinket choices, stars, and team synergies. Seeker · Alacrity.`
