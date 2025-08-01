import type { Metadata } from "next";
import { Red_Hat_Text } from "next/font/google";
import "./globals.css";
import Background from "./layout/background";


const redHatText = Red_Hat_Text({
  variable: "--font-red-hat-text",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "Frontend Mentor | Launch countdown timer",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${redHatText.className} font-bold`}>
        <Background>
          {children}
        </Background>
      </body>
    </html>
  );
}
