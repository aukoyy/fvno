import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ConfigProvider, App } from "antd";
import "./globals.css";
import Header from "./components/header";
import Footer from "./components/footer";

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

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <ConfigProvider
          theme={{
            token: {
              colorPrimary: "#69585F", // fv-taupe
              colorLink: "black",
              colorLinkHover: "gray",
            },
          }}
        >
          <App>
            <Header />
            {children}
            <Footer />
          </App>
        </ConfigProvider>
      </body>
    </html>
  );
}
