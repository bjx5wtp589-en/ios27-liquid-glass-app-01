export const metadata = {
  title: "Next.js CF Pages Template",
  description: "一键部署到 Cloudflare Pages 的 Next.js 模板",
}

export default function RootLayout({ children }) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  )
}
