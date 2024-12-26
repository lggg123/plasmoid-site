import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { NextUIProvider } from "@nextui-org/react";
import "./globals.css";
import { AnimatedBackground } from "./components/AnimatedBackground";
import { BackgroundSpheres } from "./components/BackgroundSphere";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Plasmoid Coin: The Meme Coin of the Unknown",
  description: "Join the Plasmoid Coin movement, a community-driven cryptocurrency exploring mysterious plasmoid orbs and embracing cosmic curiosity. Launching this Saturday—don't miss your chance to go interstellar!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NextUIProvider>
          <div className="relative min-h-screen">
            <AnimatedBackground />
            <BackgroundSpheres />
            <div className="relative z-10">
              {children}
            </div>
          </div>
        </NextUIProvider>
      </body>
    </html>
  );
}
