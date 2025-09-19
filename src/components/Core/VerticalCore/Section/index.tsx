import styles from "./index.module.css";

import type { InfoSection } from "@/utils/InfoUtils";

import { ReactNode, useEffect, useRef } from "react";
import Link from "next/link";

import AnimatedVideo from "@/components/VideoCarrousel/AnimatedVideo";
import { useVideoCarrousel } from "@/contexts/VideoCarrouselProvider";

type SectionProps = {
  video: string;
  animation: ReactNode;
  poster: string;
  index: number;
};

export default function Section({
  id,
  title,
  subtitle,
  Icon,
  extra,
  video,
  poster,
  animation,
  index,
}: InfoSection & SectionProps) {
  const { currentVideo, isAnimationVisible } = useVideoCarrousel();

  const videoRef = useRef<HTMLVideoElement>(null);

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
        <Link
          href="/group"
          className={styles.extraContainer}
          data-scroll
          data-scroll-offset="0,50%"
          data-scroll-event-progress="progressEvent"
        >
          See more groups features
        </Link>
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
          animation={animation}
          src={video}
          poster={poster}
          isAnimationVisible={currentVideo === index && isAnimationVisible}
        />
      </div>
    </div>
  );
}
