import type { Metadata } from "next";
import Header from "@/components/header";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ActiveSectionContextProvider from "@/context/active-section-context";
import { Toaster } from "react-hot-toast"; 
import Footer from "@/components/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Aiden Suh",
  description: "Aiden is a first-year student at the University of Waterloo, who is interested in computer science, finance, and everything in-between.",
  icons: [
    {
      rel: 'icon',
      url: '/favicon.ico',
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gray-50 text-gray-950 relative pt-28 sm:pt-36 overflow-x-hidden`}>
        <div className="max-w-[100vw]">
          <div className="bg-[#f7dfdf] absolute top-[-6rem] -z-10 right-[-5rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[500rem] sm:w-[68.75rem]"></div>
          <div className="bg-[#eae7fc] absolute top-[-1rem] -z-10 left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[20rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-24rem] xl:left-[-15rem] 2xl:left-[-5rem]"></div>

          <ActiveSectionContextProvider>
            <Header />
            {children}
            <Toaster position="top-center" />
            <Footer />
          </ActiveSectionContextProvider>
        </div>
      </body>
    </html>
  );
}
