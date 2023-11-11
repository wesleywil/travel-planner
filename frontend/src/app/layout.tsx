import type { Metadata } from "next";
import { Inter } from "next/font/google";

import { Providers } from "./provider";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Travel Plans",
  description: "A web application that allows users to plan for future travels",
  icons: {
    icon: "/icon_tp.svg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
