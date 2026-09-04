# Jinshi Liu Academic Homepage

这是一个无需构建工具的静态学术主页，适合直接部署到 GitHub Pages。主页内容集中在 `script.js` 的数据区，双语文案由页面右上角的语言按钮切换。

## 文件

- `index.html`：主页结构与可访问的语义化内容。
- `styles.css`：响应式视觉样式。
- `script.js`：双语文案、论文/项目/奖励/教育经历数据，以及筛选交互。
- `admissions-copy.md`：招生场景可直接复制使用的精简版文案。

## 发布

将主页文件放到 GitHub Pages 对应仓库的发布分支根目录即可。当前页面没有使用后端、构建步骤或外部 JavaScript 依赖；页面字体来自 Google Fonts，若访问受限会自动回退到系统字体。

## 推送到原来的 GitHub Pages

在完成 GitHub 登录或认证后，可在终端执行下面的命令，将当前主页文件推送到原仓库的 `master` 分支：

```bash
cd /Users/ljs/research_2026/website
PAGES_TMP="$(mktemp -d)"
git clone https://github.com/ljs11528/liujinshi.github.io.git "$PAGES_TMP/repo"
cp index.html styles.css script.js admissions-copy.md README.md "$PAGES_TMP/repo/"
cd "$PAGES_TMP/repo"
git add index.html styles.css script.js admissions-copy.md README.md
git commit -m "Update academic homepage"
git push origin master
```

如果仓库实际使用的发布分支不是 `master`，请把最后一条命令中的 `master` 换成实际分支名。推送成功后，打开 [原主页](https://ljs11528.github.io/liujinshi.github.io/) 并刷新即可。

## 上线前建议确认

1. 页面公开邮箱已更新为 `jsl@szu.edu.cn`。
2. 若后续有新的论文代码仓库，只需在 `script.js` 对应论文对象增加 `code` 字段。
