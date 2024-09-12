import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ClientProvider from "./ClientProvider"; // Import the client provider
import Header from "./Header"; // Import the Header component

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "thirdweb SDK + Next starter",
  description: "Starter template for using thirdweb SDK with Next.js App router",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* Move ThirdwebProvider logic to the client provider */}
        <ClientProvider>
          <Header /> {/* Render the Header */}
          {children} {/* Render the page content */}
        </ClientProvider>
      </body>
    </html>
  );
}
