import type { Metadata } from "next";
import Head from "next/head";
import "./globals.css";
import { Questrial } from "next/font/google";
import { RecordingsProvider } from "./context/RecordingsContext";
import { NowPlayingProvider } from "./context/NowPlayingContext";

const questrial = Questrial({ subsets: ["latin"], weight: "400" });

export const metadata: Metadata = {
  title: "Radyo Klasik",
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
          <Head>
            {/* Primary Meta Tags */}
            <title>Radyo Klasik</title>
            <meta name="description" content="Herkes için klasik müzik!" />

            {/* Google / Search Engine Tags */}
            <meta itemProp="name" content="Radyo Klasik Online" />
            <meta itemProp="description" content="Herkes için klasik müzik!" />
            <meta itemProp="image" content="/radyo-klasik-banner.png" />

            {/* Facebook Meta Tags */}
            <meta property="og:url" content="https://www.radyoklasik.online/" />
            <meta property="og:type" content="website" />
            <meta property="og:title" content="Radyo Klasik Online" />
            <meta
              property="og:description"
              content="Herkes için klasik müzik!"
            />
            <meta property="og:image" content="/radyo-klasik-banner.png" />

            {/* Twitter Meta Tags */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content="Radyo Klasik Online" />
            <meta
              name="twitter:description"
              content="Herkes için klasik müzik!"
            />
            <meta name="twitter:image" content="/radyo-klasik-banner.png" />
          </Head>
          <body className={questrial.className} style={{ overflow: "hidden" }}>
            {children}
          </body>
        </html>
      </NowPlayingProvider>
    </RecordingsProvider>
  );
}
