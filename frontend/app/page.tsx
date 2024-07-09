"use client";

import LeftSidebar from "@/components/LeftSidebar";
import RightSidebar from "@/components/RightSidebar";
import Image from "next/image";

export default function Home() {
  return (
    <main className="h-screen overflow-hidden">
      <section className="flex flex-row h-full">
        <LeftSidebar />
        <canvas />
        <RightSidebar />
      </section>
    </main>
  );
}
