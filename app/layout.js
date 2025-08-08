// app/layout.js
import "bootstrap/dist/css/bootstrap.min.css";
import Providers from "./Providers";
import Navbar from "@/components/Navbar";

export const metadata = {
  title: "James Zhang Portfolio",
  description: "Personal Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <Providers>
          <Navbar />         {/* ✅ 放到 Providers 里面 */}
          {children}
        </Providers>
      </body>
    </html>
  );
}
