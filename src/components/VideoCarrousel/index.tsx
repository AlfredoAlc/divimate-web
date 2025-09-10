"use client";

import styles from "./index.module.css";

import React, { useMemo, useRef } from "react";

type VideoCarrouselProps = {
  videos: string[];
  currentVideo: number;
  width?: number;
  height?: number;
};

export default function VideoCarrousel({
  videos,
  currentVideo,
  width = 240,
  height = 497,
}: VideoCarrouselProps) {
  const tempVideoRef = useRef<HTMLVideoElement>(null);

  const videoRefs = useMemo(
    () => videos.map(() => tempVideoRef),
    [videos, tempVideoRef],
  );

  return (
    <div className={styles.container} style={{ width, height }}>
      {videoRefs.map((ref, i) => (
        <video
          key={i}
          ref={ref}
          src={videos[currentVideo]}
          loop
          muted
          autoPlay
          playsInline
          className={styles.videoStyle}
        />
      ))}
    </div>
  );
}
