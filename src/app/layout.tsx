import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import TrainerProvider from "./providers/trainerProvider";
import CurrentProvider from "./providers/currentuserProvider";
import ClientProvider from "./providers/clientProvider";
import FoodItemProvider  from "./providers/foodProvider";
// import { ConfigProvider } from "antd";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "GYM APP",
  description: "This is Katlehos gym application",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <TrainerProvider>
          <CurrentProvider>
          <ClientProvider>
            <FoodItemProvider>
            {children}
            </FoodItemProvider>
            </ClientProvider>
          </CurrentProvider>
        </TrainerProvider>
      </body>
    </html>
  );
}
