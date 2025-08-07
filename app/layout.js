// app/layout.js
import 'bootstrap/dist/css/bootstrap.min.css'; // 从 node_modules 引入，最稳
import './globals.css';

export const metadata = {
  title: 'James Zhang Portfolio',
  description: 'Personal Portfolio',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* 不要用 <base>，让路径自动按 basePath 处理 */}
      </head>
      <body>{children}</body>
    </html>
  );
}
