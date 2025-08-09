// app/layout.js
import "bootstrap/dist/css/bootstrap.min.css";
import Providers from "./Providers";
import Navbar from "@/components/Navbar";
import BootstrapClient from "./BootstrapClient";

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <Providers>
          <BootstrapClient />   {/* ✅ 全站只需挂一次 */}
          <Navbar />
          {children}
        </Providers>
      </body>
    </html>
  );
}
