// app/layout.js
import './globals.css';

export const metadata = {
  title: 'James Zhang Portfolio',
  description: 'Personal Portfolio',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <base href="/my-portfolio-bootstrap/" />
        <link rel="stylesheet" href="bootstrap.min.css" />
      </head>
      <body>{children}</body>
    </html>
  );
}
