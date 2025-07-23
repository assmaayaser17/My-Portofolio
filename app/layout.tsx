import type { Metadata } from "next";
import { Inter } from 'next/font/google';
import "./globals.css";
import { ThemeProvider } from "@/components/common/theme-provider";
import { Header } from "@/components/common/header";
import ScrollToTopButton from "@/components/common/back-to-top";
import { Toaster } from "@/components/ui/sonner"


const inter = Inter({ subsets: ['latin'] });


export const metadata: Metadata = {
  title: "Mohammd El-Sayed - Full Stack Developer",
  description: "Mohammad El-Sayed is a Full Stack Developer with expertise in building scalable web applications using modern technologies.",
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={inter.className}
      >
        
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Header/>
          {children}
          <ScrollToTopButton/>
          <Toaster/>
        </ThemeProvider>
      </body>
    </html>
  );
}
