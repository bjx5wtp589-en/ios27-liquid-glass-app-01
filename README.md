# Next.js Cloudflare Pages 一键部署模板

任何人 Fork 本仓库，填入自己的 Cloudflare 凭证，推送代码即可自动部署到自己的 Cloudflare Pages。

## 使用步骤

1. **Fork 本仓库**

2. **获取 Cloudflare 凭证**
   - 登录 Cloudflare 后台，主页右下角复制 **Account ID**
   - 头像 → My Profile → API Tokens → Create Token
   - 模板选择 `Edit Cloudflare Workers`，权限包含 Workers & Pages 编辑权限
   - 生成后立刻复制保存（关掉页面就看不到了）

3. **配置仓库秘钥**
   - 进入 Fork 后的仓库 → Settings → Secrets and variables → Actions → New repository secret
   - 秘钥1：名称 `CLOUDFLARE_API_TOKEN`，值粘贴你的 API Token
   - 秘钥2：名称 `CLOUDFLARE_ACCOUNT_ID`，值粘贴你的 Account ID

4. **修改项目名**
   - 打开 `.github/workflows/deploy.yml`
   - 把 `projectName: "替换成你的CF Pages项目名称"` 改成你在 Cloudflare Pages 后台创建的项目名

5. **触发部署**
   - 随便修改一个文件，提交到 main 分支
   - GitHub Actions 自动构建并部署到你的 Cloudflare Pages
   - 部署完成后访问 `https://你的项目名.pages.dev`

## 说明

- 本模板使用 Next.js 静态导出（`output: "export"`），仅支持纯前端页面
- 不支持服务端 API 路由（App Router 的 server API）
- 如需带后端 API，需改用 Cloudflare Pages Functions 或单独部署 Worker
