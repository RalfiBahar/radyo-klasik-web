import type { Metadata } from "next";
import "./globals.css";
//import "./fonts.css";
import { Questrial } from "next/font/google";
import { RecordingsProvider } from "./context/RecordingsContext";
import { NowPlayingProvider } from "./context/NowPlayingContext";
const questrial = Questrial({ subsets: ["latin"], weight: "400" });

export const metadata: Metadata = {
  title: "Radio Klasik",
  description: "Herkes için klasik müzik!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <RecordingsProvider>
      <NowPlayingProvider>
        <html lang="en">
          <body className={questrial.className}>{children}</body>
        </html>
      </NowPlayingProvider>
    </RecordingsProvider>
  );
}
