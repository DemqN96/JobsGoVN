import type { Metadata } from "next";
import "./globals.css";

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
    <html lang="uk">
      <body>{children}</body>
    </html>
  );
}
