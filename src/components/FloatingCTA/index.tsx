"use client";

import styles from "./index.module.css";

import { useCallback, useEffect, useRef } from "react";

import GooglePlay from "../GooglePlay";
import useScreenWidth from "@/hooks/useScreenWidth";

export default function FloatingCTA() {
  const screenSize = useScreenWidth();

  const divRef = useRef<HTMLDivElement>(null);

  const handleProgressEvent = useCallback((e: Event) => {
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
  }, []);

  const handleProgressOutroEvent = useCallback((e: Event) => {
    const { progress } = (e as CustomEvent).detail;
    if (!divRef.current) return;

    const maxProgress = 0.33333;
    const normalized = Math.min(progress / maxProgress, 1);

    const scale = 1 - 0.5 * normalized;

    divRef.current.style.transform = `scale(${scale})`;
    divRef.current.style.opacity = String(1 - normalized);
  }, []);

  useEffect(() => {
    addEventListener("progressHeroEvent", handleProgressEvent);
    return () => removeEventListener("progressHeroEvent", handleProgressEvent);
  }, [handleProgressEvent]);

  useEffect(() => {
    addEventListener("progressOutroEvent", handleProgressOutroEvent);
    return () =>
      removeEventListener("progressOutroEvent", handleProgressOutroEvent);
  }, [handleProgressOutroEvent]);

  return (
    <div ref={divRef} className={styles.container} style={{ opacity: 0 }}>
      <GooglePlay
        width={screenSize === "small" ? 104.24 : 135}
        height={screenSize === "small" ? 31 : 40}
      />
    </div>
  );
}
