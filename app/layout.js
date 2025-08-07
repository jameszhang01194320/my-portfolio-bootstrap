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

        {/* ✅ Bootstrap CDN */}
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css"
          integrity="sha384-1CmrxMRARb6aLqgBO7WkRyWq6cS8e5csXv5P4eakv1I0vAAHavbY09x7M6D3Bdp1"
          crossOrigin="anonymous"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
