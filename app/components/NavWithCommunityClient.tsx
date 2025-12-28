"use client";
import dynamic from "next/dynamic";

const NavWithCommunity = dynamic(() => import("./NavWithCommunity"), { ssr: false });

export default NavWithCommunity;