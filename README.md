# contemplation-site

一键生成"沉思录"风格交互式阅读网站 —— 为任意话题创建有温度、有故事、有金句的知识网站。

## 这是什么

一套 Claude Code Skill + 项目模板，可以一键生成与以下网站风格完全相同的新网站：

- [西方哲学沉思录](https://philosophy-navy.vercel.app)
- [心理学沉思录](https://psychology-navy.vercel.app)
- [心学沉思录](https://xinxue-navy.vercel.app)

包含完整的设计系统（深色温润底 + 金色点缀）、8种内容块类型（故事/金句/幽默/互动等）、Framer Motion 动画、响应式布局。

## 安装

```bash
# 克隆到 Claude Code skills 目录
git clone https://github.com/vivofiftykfc/contemplation-site.git ~/.claude/skills/contemplation-site
```

## 使用

在 Claude Code 中说：

```
/contemplation-site 帮我做一个关于[神经科学/道家哲学/经济学/...]的网站
```

Skill 会自动引导你完成完整的流程：

1. **话题分析 & 章节规划** — 确定章数、主题、每章钩子
2. **项目脚手架** — 从 template/ 拷贝完整技术栈
3. **内容创作** — 按写作铁律逐章撰写（故事驱动、第二人称、金句穿插）
4. **构建验证** — TypeScript 检查 + Vite 构建
5. **Vercel 部署** — 一键部署到全球 CDN

## 核心特性

### 8 种内容块
| 块类型 | 用途 |
|--------|------|
| paragraph | 基础叙事 — 第二人称、口语化精准 |
| story | 案例卡片 — 标题 + 叙事 + 启示 + 来源 |
| golden | 金色语录 — 居中大字 + 作者 + 解读 |
| wisdom | 沉思笔记 — 哲学洞察侧注 |
| humor | 幽默旁注 — 虚线框、斜体 |
| practical | 实用智慧 — 理论→生活 |
| interactive | 互动反思 — 文本框 + 可展开提示 |
| deepdive | 深入探索 — 可折叠进阶内容 |

### 设计系统
- 底色 `#141210` · 金色 `#c8a96e` · 奶油正文 `#e8e0d5`
- 衬线标题 Cormorant Garamond · 无衬线正文 Inter
- Framer Motion 粒子背景、滚动渐入、文字浮现
- 完全响应式（桌面端侧边导航 + 移动端汉堡菜单）

### 写作铁律
1. 每章以故事/悖论/问题开场 — 绝不写百科体
2. 第二人称"你"直接对话
3. 金句如呼吸般穿插
4. 幽默调味
5. 每小节至少一个互动
6. 理论必须落地为生活建议
7. 结尾有情感共鸣和学者担当

## 模板项目结构

```
template/
├── package.json          # React 18 + Vite 6 + Tailwind CSS 4
├── vite.config.ts
├── tsconfig.json
├── index.html
├── src/
│   ├── types/content.ts  # 完整的类型定义（8种ContentBlock + Chapter + Quiz...）
│   ├── components/
│   │   ├── chapter/       # ContentRenderer, ChapterLayout, Connections
│   │   ├── ui/            # 14个UI组件（Callout, StoryCard, GoldenQuote...）
│   │   ├── layout/        # Shell, ChapterNav, ProgressBar
│   │   ├── motion/        # PageTransition, ScrollReveal, TextStagger, DustParticles
│   │   └── interactive/   # Quiz
│   ├── hooks/             # useActiveSection, useParallax, useReducedMotion, useScrollProgress
│   ├── pages/             # Home, ChapterPage, Timeline, Glossary, TheoryMapPage
│   └── styles/            # globals.css (设计系统), fonts.css
└── public/
```

## License

MIT
