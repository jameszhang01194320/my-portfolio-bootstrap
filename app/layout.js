// app/layout.js
import 'bootstrap/dist/css/bootstrap.min.css';
import './globals.css';

export const metadata = {
  title: 'James Zhang Portfolio',
  description: 'Personal Portfolio',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* 这里放 favicon 或额外 <meta>，不要放 <base>、不要放 bootstrap.min.css 的手写 <link> */}
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>{children}</body>
    </html>
  );
}
