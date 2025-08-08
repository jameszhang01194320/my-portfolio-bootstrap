// app/Providers.jsx
"use client";
import { ThemeProvider } from "next-themes";

export default function Providers({ children }) {
    return (
        <ThemeProvider
            attribute="data-bs-theme"   // ✅ 让 Bootstrap 识别
            defaultTheme="dark"         // James 默认是深色
            enableSystem={false}
        >
            {children}
        </ThemeProvider>
    );
}
