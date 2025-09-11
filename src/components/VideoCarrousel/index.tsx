"use client";

import styles from "./index.module.css";

import React, { useMemo, useRef } from "react";
import { AnimatePresence, motion } from "motion/react";

import AnimationBackground from "../AnimationBackground";
import { useVideoCarrousel } from "@/contexts/VideoCarrouselProvider";

type VideoCarrouselProps = {
  videos: string[];
  width?: number;
  height?: number;
};

export default function VideoCarrousel({
  videos,
  width = 240,
  height = 497,
}: VideoCarrouselProps) {
  const { currentVideo, isInit, isAnimationVisible } = useVideoCarrousel();

  const tempVideoRef = useRef<HTMLVideoElement>(null);

  const videoRefs = useMemo(
    () => videos.map(() => tempVideoRef),
    [videos, tempVideoRef],
  );

  return (
    <div style={{ width, height, position: "relative" }}>
      <AnimatePresence
        onExitComplete={() => videoRefs[currentVideo].current?.play()}
      >
        {isAnimationVisible ? (
          <AnimationBackground />
        ) : !isInit ? (
          <motion.div
            key={`container-${currentVideo}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className={styles.container}
            style={{ width, height }}
          >
            {videoRefs.map((ref, i) => (
              <video
                key={i}
                ref={ref}
                src={videos[currentVideo]}
                loop
                muted
                playsInline
                className={styles.videoStyle}
              />
            ))}
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  );
}
