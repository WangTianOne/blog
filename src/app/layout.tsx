import type { Metadata } from "next";
import localFont from "next/font/local";
import "./ui/globals.css";

const jetBrainsMono = localFont({
  src: "./fonts/JetBrainsMono-Regular.ttf",
  variable: "--font-jetbrains-mono",
  weight: "100 900",
});
const alibaba = localFont({
  src: "./fonts/Alibaba-PuHuiTi-Regular.ttf",
  variable: "--font-alibaba",
  weight: "100 900",
});
const jetBrainsMonoSemiBold = localFont({
  src: "./fonts/JetBrainsMono-SemiBold.ttf",
  variable: "--font-jetbrains-mono-semi-bold",
  weight: "400 900",
});
const jetBrainsMonoSemiBoldItalic = localFont({
  src: "./fonts/JetBrainsMono-SemiBoldItalic.ttf",
  variable: "--font-jetbrains-mono-semi-bold-italic",
  weight: "400 900",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${jetBrainsMono.variable} ${alibaba.variable} ${jetBrainsMonoSemiBold.variable} ${jetBrainsMonoSemiBoldItalic.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
