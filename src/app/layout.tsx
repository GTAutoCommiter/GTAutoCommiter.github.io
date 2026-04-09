import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import { ThemeProvider } from "@/components/layout/ThemeProvider";
import "@/styles/globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "GTAutoCommiter | 个人网站",
    template: "%s | GTAutoCommiter",
  },
  description: "基于 Next.js 构建的高质量个人作品集与博客网站",
  keywords: ["Next.js", "React", "Tailwind CSS", "TypeScript", "博客", "作品集"],
  authors: [{ name: "GTAutoCommiter" }],
  openGraph: {
    type: "website",
    locale: "zh_CN",
    url: "https://gtautocommiter.github.io",
    title: "GTAutoCommiter | 个人网站",
    description: "基于 Next.js 构建的高质量个人作品集与博客网站",
    siteName: "GTAutoCommiter",
  },
  twitter: {
    card: "summary_large_image",
    title: "GTAutoCommiter | Personal Site",
    description: "A high-quality personal portfolio and blog site built with Next.js",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN" suppressHydrationWarning>
      <body className={`${inter.className} min-h-screen flex flex-col`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Header />
          <main className="flex-grow container mx-auto px-4 py-8">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
