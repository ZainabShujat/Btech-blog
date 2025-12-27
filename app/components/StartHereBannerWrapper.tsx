"use client";
import dynamic from "next/dynamic";
const StartHereBanner = dynamic(() => import("./StartHereBanner"), { ssr: false });

export default function StartHereBannerWrapper() {
  return <StartHereBanner />;
}