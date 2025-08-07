// app/layout.js
import 'bootstrap/dist/css/bootstrap.min.css'; // 用 npm 版，路径永远对
import './globals.css';

export const metadata = {
  title: 'James Zhang Portfolio',
  description: 'Personal Portfolio',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
