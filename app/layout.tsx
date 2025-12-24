import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script"; // <-- ADD THIS
import "./globals.css";

import Nav from "./components/Nav";
import Footer from "./components/Footer";
import WinterTheme from "./components/WinterTheme";
import EidTheme from "./components/EidTheme";
import BirthdayTheme from "./components/BirthdayTheme";
import EngineersDayTheme from "./components/EngineersDayTheme";
import DoctorsDayTheme from "./components/DoctorsDayTheme";
import MentalHealthDayTheme from "./components/MentalHealthDayTheme";
import TeachersDayTheme from "./components/TeachersDayTheme";
import WomensDayTheme from "./components/WomensDayTheme";
import MothersDayTheme from "./components/MothersDayTheme";
import FathersDayTheme from "./components/FathersDayTheme";
import SiblingsDayTheme from "./components/SiblingsDayTheme";
import EarthDayTheme from "./components/EarthDayTheme";
import FriendshipDayTheme from "./components/FriendshipDayTheme";
import NewYearsDayTheme from "./components/NewYearsDayTheme";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Notes From a BTech Brain",
  description: "Insights on tech, world events, and personal growth — by a BTech student.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      {/* ✅ GOOGLE ANALYTICS SCRIPT */}
      <Script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-G-FWR505Z901"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-FWR505Z901', {
            page_path: window.location.pathname,
          });
        `}
      </Script>

      <body
        suppressHydrationWarning
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <WinterTheme />
        <EidTheme />
        <BirthdayTheme />
        <EngineersDayTheme />
        <DoctorsDayTheme />
        <MentalHealthDayTheme />
        <TeachersDayTheme />
        <WomensDayTheme />
        <MothersDayTheme />
        <FathersDayTheme />
        <SiblingsDayTheme />
        <EarthDayTheme />
        <FriendshipDayTheme />
        <NewYearsDayTheme />
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
