"use client"
import "./ui/globals.css";
import "@/styles/index.scss";
import { Poppins } from "next/font/google";
import Footer from "@/components/Footer/Footer";
import SiteHeader from "./SiteHeader";
import GoogleAnalytics from "../components/GoogleAnalytics/google.analytics";
import GlobalState from "../components/GlobalState/GlobalState";

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  
  return (
    <>
    <GoogleAnalytics />
    <GlobalState>
      <html lang="en" className={poppins.className}>
        <body className="">
          <div className="bg-[#f8f8f8] text-base dark:bg-neutral-900/95 text-neutral-900 dark:text-neutral-200">
            <SiteHeader />
            {children}
            <Footer />
          </div>
        </body>
      </html>
    </GlobalState>
    </>
  );
}
