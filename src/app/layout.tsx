import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "./Components/Navbar/page";
import { CartProvider } from "@/context/CartContext";
import { AuthProvider } from './context/AuthContext'

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Next Shop - Your Modern E-commerce Store",
  description: "Discover amazing products at great prices",
  icons: {
    icon: "/favicon.ico"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body className="antialiased bg-gray-50">
        <AuthProvider>
          <CartProvider>
            <Navbar />
            <div className="min-h-screen">{children}</div>
          </CartProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
