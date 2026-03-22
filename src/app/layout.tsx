import type { Metadata } from "next";
import { Noto_Sans_JP, Playfair_Display, Klee_One } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StickyCtaBar from "@/components/StickyCtaBar";

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
  metadataBase: new URL("https://ishinlabo.com"),
  title: {
    default: "医進ラボ | 医学部受験専門オンライン個別指導塾",
    template: "%s | 医進ラボ",
  },
  description:
    "現役医学生・医師による完全オンライン個別指導。弱点を徹底分析し、医学部合格への最短距離を伴走します。個別指導・小論文・面接対策コース提供。",
  keywords: [
    "医学部受験",
    "オンライン個別指導",
    "医進ラボ",
    "小論文",
    "面接対策",
    "医学部予備校",
    "医学部塾",
    "医学部オンライン",
    "個別指導塾",
    "慶應医学部",
    "医師",
    "医学生",
  ],
  authors: [{ name: "医進ラボ", url: "https://ishinlabo.com" }],
  creator: "医進ラボ",
  publisher: "医進ラボ",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "ja_JP",
    url: "https://ishinlabo.com",
    siteName: "医進ラボ",
    title: "医進ラボ | 医学部受験専門オンライン個別指導塾",
    description:
      "現役医学生・医師による完全オンライン個別指導。医学部合格への最短距離を伴走します。",
  },
  twitter: {
    card: "summary_large_image",
    title: "医進ラボ | 医学部受験専門オンライン個別指導塾",
    description:
      "現役医学生・医師による完全オンライン個別指導。弱点を徹底分析し、医学部合格への最短距離を伴走します。",
    site: "@ishinlabo",
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
        <StickyCtaBar />
      </body>
    </html>
  );
}
