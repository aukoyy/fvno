import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ConfigProvider } from "antd";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Full Vase",
  description: "Full Vases hjem på nett",
};
  
export default function RootLayout({children}: {children: React.ReactNode;}) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased mb-18`}>
        <ConfigProvider
          theme={{
            token: {
              colorPrimary: '#6E8BA2', // fv-cyan-600
            },
          }}
        >
          {children}
        </ConfigProvider>
      </body>
    </html>
  );
}
