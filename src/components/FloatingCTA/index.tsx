"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

import useScreenWidth from "@/hooks/useScreenWidth";

export default function FloatingCTA() {
  const screenSize = useScreenWidth();

  const divRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = (e: Event) => {
      const { progress } = (e as CustomEvent).detail;
      if (!divRef.current) return;

      const scale = 0.5 + progress * 0.5;
      divRef.current.style.transform = `scale(${scale})`;
      divRef.current.style.opacity = String(progress);
    };

    window.addEventListener("progressHeroEvent", handler);
    return () => window.removeEventListener("progressHeroEvent", handler);
  }, []);

  return (
    <div
      ref={divRef}
      style={{
        position: "fixed",
        bottom: screenSize === "small" ? 30 : 60,
        right: screenSize === "small" ? 30 : 60,
        opacity: 0,
      }}
    >
      <a href="https://play.google.com/store/apps/details?id=com.alws.divimate">
        <Image
          src={"/images/google-play-badge.png"}
          alt="google-play-badge"
          width={screenSize === "small" ? 104.25 : 135}
          height={screenSize === "small" ? 31 : 40}
        />
      </a>
    </div>
  );
}
