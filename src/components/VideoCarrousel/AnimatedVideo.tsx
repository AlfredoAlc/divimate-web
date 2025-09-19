"use client";

import styles from "./index.module.css";

import React, { forwardRef, ReactNode, useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";

import AnimationForeground from "../AnimationForeground";

type VideoCarrouselProps = {
  animation: ReactNode;
  width?: number;
  height?: number;
  src: string;
  poster?: string;
  isAnimationVisible?: boolean;
};

export default forwardRef<HTMLVideoElement, VideoCarrouselProps>(
  function AnimatedVideo(
    { animation, width = 240, height = 497, src, poster, isAnimationVisible },
    ref,
  ) {
    const [isVideoVisible, setIsVideoVisible] = useState(false);

    useEffect(() => {
      if (isAnimationVisible) setTimeout(() => setIsVideoVisible(true), 500);
    }, [isAnimationVisible]);

    return (
      <AnimatePresence
        onExitComplete={() => {
          if (ref && typeof ref === "object" && ref.current) {
            ref.current.currentTime = 0;
            ref.current
              .play()
              .catch((err) => console.log("Play video error: ", err));
          }
        }}
      >
        {isVideoVisible && (
          <motion.div
            key={`container-${src}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className={styles.container}
            style={{
              width,
              height,
            }}
          >
            <video
              ref={ref}
              src={src}
              loop
              muted
              playsInline
              //autoPlay={false}
              className={styles.videoStyle}
              poster={poster}
            />
          </motion.div>
        )}
        {isAnimationVisible && (
          <AnimationForeground>{animation}</AnimationForeground>
        )}
      </AnimatePresence>
    );
  },
);
