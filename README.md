# 个人博客（Hexo + Fluid）

本地预览：`npm run server` → http://localhost:4000
本地构建：`npm run build` → 产物在 `public/`

## 写一篇文章

```bash
hexo new post "文章标题"      # 生成 source/_posts/文章标题.md
```

编辑刚生成的 md 文件：

- `title` / `date` 已自动填好
- `tags` / `categories` 按需填，格式是 `- 标签名`
- `index_img` 填封面图路径，例如 `/img/xxx.jpg`（图片放 `source/img/` 下）
- `cover` / `thumbnail` 是给其他主题用的，跟着填同一个路径就行，不影响 Fluid

正文里想控制列表页显示的摘要，在合适位置插入一行：

```markdown
<!-- more -->
```

写完后 `npm run server` 刷新页面即可看到。

## 发布上线

代码推到 GitHub 后，Cloudflare Pages 会自动构建，不用本地 generate：

```bash
git add .
git commit -m "新文章：xxx"
git push
```

推送后 1–2 分钟站点自动更新。

## Cloudflare Pages 构建参数

| 项目 | 值 |
| --- | --- |
| 框架预设 | 无（None） |
| 构建命令 | `npm run build` |
| 输出目录 | `public` |
| 环境变量 | `NODE_VERSION` = `20` |

## 待替换成你自己的东西

| 文件 | 说明 |
| --- | --- |
| `source/img/avatar.svg` | 头像 |
| `source/img/wechat-qr.svg` | 微信收款码 |
| `source/img/alipay-qr.svg` | 支付宝收款码 |
| `_config.fluid.yml` 的 `about` 段 | 昵称、简介、图标链接 |
| `scripts/profile-card.js` 里的 GitHub 地址 | 侧栏名片上的链接 |

## 自定义脚本

`scripts/` 下两个文件是本站自己加的，删掉即可关闭对应功能：

- `profile-card.js` —— 文章页左侧栏个人名片
- `reward.js` —— 文章末尾打赏区
