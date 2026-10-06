# Jinshi Liu — Academic Homepage

简洁的中英文学术主页。默认英文，白底单栏，使用系统字体；无需外部字体、前端框架或 npm 依赖。

## 网址与 GitHub Pages

主页：https://ljs11528.github.io/  
仓库：https://github.com/ljs11528/ljs11528.github.io  
发布源：`master` 分支的根目录。

原来的长地址属于项目主页：`<用户名>.github.io/<仓库名>/`。将仓库改名为与用户名完全一致的 `ljs11528.github.io` 后，发布地址变为用户主页根网址。仓库历史保留。

`liujinshi.github.io/index.html` 保留旧主页路径并跳转到新地址，同时保留锚点与查询参数，请勿删除。GitHub 仓库重命名本身不等于旧 Pages 地址自动跳转。

## 文件与维护

- `script.js`：中英文文案、研究方向、论文、项目、奖励与经历数据。
- `index.html`：完整的默认英文页面，即使不执行 JavaScript 也能阅读。
- `styles.css`：响应式样式。
- `build.mjs`：从数据更新英文 HTML 快照。
- `admissions-copy.md`：独立招生文案。
- `liujinshi.github.io/index.html`：旧网址兼容跳转。
- `.nojekyll`：按静态文件直接发布。

更新数据后运行：

```bash
cd /Users/ljs/research_2026/website
node build.mjs
```

论文保留已有的出版页、arXiv 与公开代码链接；没有代码链接的条目不显示占位文字。项目与奖励不展示团队成员姓名，未提供的本人排序不作推断。项目仅展示周期，不根据结束日期推断实际结题状态。

CoVar 条目采用 arXiv:2601.11670 最新版本的标题与作者顺序。个别历史条目以明确标注的研究主题或概括信息展示，不将改写后的描述冒充正式论文或赛事名称。

## 后续同步推送

如果当前目录没有 Git 元数据，可在临时目录克隆最新仓库，再覆盖本次维护的文件。以下命令保留已有仓库历史，且不会强制推送：

```bash
cd /Users/ljs/research_2026/website
node build.mjs
SITE_SYNC_DIR="$(mktemp -d)"
git clone https://github.com/ljs11528/ljs11528.github.io.git "$SITE_SYNC_DIR/repo"
cp index.html styles.css script.js build.mjs admissions-copy.md README.md .nojekyll "$SITE_SYNC_DIR/repo/"
mkdir -p "$SITE_SYNC_DIR/repo/liujinshi.github.io"
cp liujinshi.github.io/index.html "$SITE_SYNC_DIR/repo/liujinshi.github.io/index.html"
cd "$SITE_SYNC_DIR/repo"
git add index.html styles.css script.js build.mjs admissions-copy.md README.md .nojekyll liujinshi.github.io/index.html
git commit -m "Update academic homepage"
git push origin master
```

如果提示认证失败，请使用 GitHub 官方支持的 HTTPS 令牌认证或 SSH 认证；不要输入 GitHub 账户密码。也可在仓库网页中使用 **Add file → Upload files** 提交更新。

## 本地预览

```bash
cd /Users/ljs/research_2026/website
python3 -m http.server 8765 --bind 127.0.0.1
```

浏览器打开 http://127.0.0.1:8765/。提交后在 GitHub **Actions** 确认 Pages 部署成功，再检查新网址与旧网址的跳转。
