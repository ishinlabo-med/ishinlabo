import type { Metadata } from "next";
import { Noto_Sans_JP, Playfair_Display, Klee_One } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const notoSansJP = Noto_Sans_JP({
  variable: "--font-noto",
  subsets: ["latin"],
  weight: ["400", "500", "700", "900"],
  display: "swap",
});

const playfairDisplay = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  display: "swap",
});

const kleeOne = Klee_One({
  variable: "--font-klee",
  subsets: ["latin"],
  weight: ["400", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "医進ラボ | 医学部受験専門オンライン個別指導塾",
    template: "%s | 医進ラボ",
  },
  description:
    "現役医学生・医師による完全オンライン個別指導。弱点を徹底分析し、医学部合格への最短距離を伴走します。個別指導・小論文・面接対策コース提供。",
  keywords: ["医学部受験", "オンライン個別指導", "医進ラボ", "小論文", "面接対策", "医学部予備校"],
  openGraph: {
    type: "website",
    locale: "ja_JP",
    siteName: "医進ラボ",
    title: "医進ラボ | 医学部受験専門オンライン個別指導塾",
    description:
      "現役医学生・医師による完全オンライン個別指導。医学部合格への最短距離を伴走します。",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className={`${notoSansJP.variable} ${playfairDisplay.variable} ${kleeOne.variable}`}>
      <body className="antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
