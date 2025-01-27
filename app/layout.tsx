import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import {ClerkProvider} from '@clerk/nextjs'

const poppins = Poppins({
  subsets: ["latin"],
  weight: ['400', '500', '600', '700'],
  variable: '--font-poppins'
});

export const metadata: Metadata = {
  title: "Safari Shape",
  description: "Creating Meal Plans & Fitness for a Healthy Africa",
  icons: {
    icon: '/assets/images/7.png'
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
    <html lang="en">
      <body
        className={poppins.v}
      >
        {children}
      </body>
    </html>
    </ClerkProvider>
  );
}
