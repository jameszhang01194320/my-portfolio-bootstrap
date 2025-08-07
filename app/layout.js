// app/layout.js
import 'bootstrap/dist/css/bootstrap.min.css'
import './globals.css'

export const metadata = {
  title: 'James Zhang Portfolio',
  description: 'Personal Portfolio',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <base href="/my-portfolio-bootstrap/" />
      </head>
      <body>{children}</body>
    </html>
  );
}
