import type { Metadata } from "next";
import Header from "@/components/header";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ActiveSectionContextProvider from "@/context/active-section-context";
import { Toaster } from "react-hot-toast"; 
import Footer from "@/components/footer";
import { Analytics } from '@vercel/analytics/next';
import ThemeSwitch from "@/components/theme-switch";
import ThemeContextProvider from "@/context/theme-context";
import ParticleField from '@/components/ParticleField';


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
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gray-50 text-gray-950 relative pt-28 sm:pt-36 overflow-x-hidden dark:bg-gray-900 dark:text-gray-50 dark:bg-opacity-90`}>
        <div className="max-w-[100vw]">
          {/* Gradient Blurs */}
          <div className="bg-[#ffdfdf] absolute top-[-6rem] -z-10 right-[-5rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] dark:bg-[#946263] dark:opacity-30" />
          <div className="bg-[#dce7ff] absolute top-[-1rem] -z-10 left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-24rem] xl:left-[-15rem] 2xl:left-[-5rem] dark:bg-[#676394] dark:opacity-30" />
          
          <ThemeContextProvider>
            <ActiveSectionContextProvider>
              <ParticleField />
              <Header />
              {children}
              <Toaster position="top-center" />
              <Footer />
            </ActiveSectionContextProvider>
            <ThemeSwitch />
            <Analytics />
          </ThemeContextProvider>
        </div>
      </body>
    </html>
  );
}
