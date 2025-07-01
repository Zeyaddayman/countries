import type { Metadata } from "next";
import { Nunito_Sans } from "next/font/google";
import "./globals.css";
import ThemeProvider from "./providers/ThemeProvider";
import Header from "./components/Header";

const NunitoSans = Nunito_Sans({
  subsets: ["latin"],
  weight: ["300", "600", "800"]
})

export const metadata: Metadata = {
  title: "World Countries Explorer",
  description: "Explore detailed information about all countries worldwide. Filter by region or search for specific countries to find population, capital, languages, and more.",
  keywords: ["countries", "world countries", "country data", "country information", "geography", "population statistics", "country search"],
  openGraph: {
    title: "World Countries Explorer",
    description: "Browse comprehensive data about every country in the world",
    url: "https://world-countries-explorer-theta.vercel.app",
    siteName: "World Countries Explorer",
    images: [
      {
        url: "https://world-countries-explorer-theta.vercel.app/images/world-countries-explorer-preview.png",
        width: 1200,
        height: 627
      }
    ],
    type: "website"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${NunitoSans.className} antialiased`}
      >
        <ThemeProvider>
          <Header />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
