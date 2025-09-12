import styles from "./index.module.css";

import type { InfoSection } from "@/utils/InfoUtils";

import { useEffect, useRef } from "react";
import {
  Bug,
  ReceiptText,
  SlidersHorizontal,
  Users,
  WifiOff,
} from "lucide-react";

import Info1 from "@/components/Animations/Info1";
import Info2 from "@/components/Animations/Info2";
import Info3 from "@/components/Animations/Info3";
import Info4 from "@/components/Animations/Info4";
import AnimatedVideo from "@/components/VideoCarrousel/AnimatedVideo";
import { useVideoCarrousel } from "@/contexts/VideoCarrouselProvider";
import useTheme from "@/hooks/useTheme";
import { DARK_VIDEOS, LIGHT_VIDEOS } from "@/utils/InfoUtils";

export default function Section({
  id,
  title,
  subtitle,
  icon,
  extra,
}: InfoSection) {
  const theme = useTheme();

  const { currentVideo, isInit, isAnimationVisible } = useVideoCarrousel();

  const videoRef = useRef<HTMLVideoElement>(null);
  const index = Number(id.split("-")[1]) - 1;

  const Icon =
    icon === "ReceiptText"
      ? ReceiptText
      : icon === "Users"
        ? Users
        : icon === "SlidersHorizontal"
          ? SlidersHorizontal
          : icon === "WifiOff"
            ? WifiOff
            : Bug;

  const Animation =
    id === "info-1"
      ? Info1
      : id === "info-2"
        ? Info2
        : id === "info-3"
          ? Info3
          : Info4;

  useEffect(() => {
    addEventListener("progressEvent", (e: Event) => {
      const { target, progress } = (e as CustomEvent).detail;

      target.style.opacity = progress * 1.5;
    });
  }, []);

  return (
    <div id={id} className={styles.container}>
      <Icon className={styles.icon} size={40} />
      <h2 className={styles.title}>{title}</h2>
      <p className={styles.subtitle}>{subtitle}</p>
      {extra && (
        <a
          href="/group"
          className={styles.extraContainer}
          data-scroll
          data-scroll-offset="0,50%"
          data-scroll-event-progress="progressEvent"
        >
          See more groups features
        </a>
      )}
      <div
        id={`video-container-${id}`}
        style={{
          position: "relative",
          width: 240,
          height: 497,
          marginTop: 32,
        }}
        data-scroll
        data-scroll-repeat
        data-scroll-call="scrollVideoEvent"
      >
        <AnimatedVideo
          ref={videoRef}
          animation={<Animation key={`animation-${id}`} />}
          src={theme === "dark" ? DARK_VIDEOS[index] : LIGHT_VIDEOS[index]}
          isInit={currentVideo < index || isInit}
          isAnimationVisible={currentVideo === index && isAnimationVisible}
        />
      </div>
    </div>
  );
}
