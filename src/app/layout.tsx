import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/topbar";
import { Footer } from "@/components/footer";
import { Toaster } from "react-hot-toast";
import { BanCheck } from "@/components/banCheck";

const geistSans = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

const geistMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Monitry Feedbase",
  description: "Contribute your feedback to Monitry and help us improve",
  openGraph: {
    title: "Monitry Feedbase",
    description: "Contribute your feedback to Monitry and help us improve",
    images: [
      {
        url: `https://cdn.monitry.net/u/3wCiKf.png`,
        width: 1291,
        height: 721,
        alt: "Monitry Feedbase",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <BanCheck />
        <Navbar />
        {children}
        <Toaster
          position="bottom-center"
          toastOptions={{
            style: {
              background: "#1a1a1a",
              color: "#fff",
              borderRadius: "12px",
            },
          }}
        />
        <Footer />
      </body>
    </html>
  );
}
