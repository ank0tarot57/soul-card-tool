import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "バースデイカード診断｜生年月日から見る、あなたの魅力と心のテーマ",
  description:
    "バースデイカードとは、生年月日から導かれる「パーソナルカード」と「ソウルカード」の2枚のこと。表に出やすい魅力や人との関わり方、そして心の奥でくり返し向き合うテーマを、タロットカードを通してやさしく読み解きます。桜餅あん子のバースデイカード診断。",
  icons: {
    icon: "/icon.png",
    apple: "/apple-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ja"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
