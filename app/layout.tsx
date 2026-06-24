import type { Metadata } from "next";
import { Montserrat, Inter } from "next/font/google";
import "./globals.css";

// Заголовки — геометричний гротеск з кирилицею (заміна Halvar Breitschrift), текст — Inter.
const montserrat = Montserrat({
  subsets: ["latin", "cyrillic"],
  weight: ["600", "700", "800", "900"],
  variable: "--font-display",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin", "cyrillic"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Jobs Go VN — Робота в Європі. Офіційне працевлаштування.",
  description:
    "Jobs Go VN — офіційне працевлаштування громадян у країнах ЄС. Підбір вакансій, оформлення документів, повний супровід. Працюємо дистанційно та в офісі (Вінниця).",
  keywords:
    "робота в Європі, працевлаштування за кордоном, вакансії ЄС, Польща, Чехія, Німеччина, Jobs Go VN",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="uk" className={`${montserrat.variable} ${inter.variable}`}>
      <body>{children}</body>
    </html>
  );
}
