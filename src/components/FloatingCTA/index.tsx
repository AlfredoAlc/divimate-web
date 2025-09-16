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

      if (progress < 0.5) {
        divRef.current.style.transform = "scale(0.5)";
        divRef.current.style.opacity = "0";
      } else {
        const normalized = (progress - 0.5) / 0.5;
        const scale = 0.5 + normalized * 0.5;
        divRef.current.style.transform = `scale(${scale})`;
        divRef.current.style.opacity = String(normalized);
      }
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
        transform: "scale(0.5)",
        opacity: 0,
        transition: "transform 0.2s ease-out, opacity 0.2s ease-out",
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
