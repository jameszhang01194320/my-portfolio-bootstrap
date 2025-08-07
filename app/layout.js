// app/layout.js
import 'bootstrap/dist/css/bootstrap.min.css'
import './globals.css'

export const metadata = {
  title: 'James Zhang Portfolio',
  description: 'My personal portfolio using Next.js and Bootstrap',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
