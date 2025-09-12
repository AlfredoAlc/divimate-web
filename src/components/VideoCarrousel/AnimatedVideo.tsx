"use client";

import styles from "./index.module.css";

import React, { forwardRef, ReactNode } from "react";
import { AnimatePresence, motion } from "motion/react";

import AnimationForeground from "../AnimationForeground";

type VideoCarrouselProps = {
  animation: ReactNode;
  width?: number;
  height?: number;
  src: string;
  isInit?: boolean;
  isAnimationVisible?: boolean;
};

export default forwardRef<HTMLVideoElement, VideoCarrouselProps>(
  function AnimatedVideo(
    { animation, width = 240, height = 497, src, isInit, isAnimationVisible },
    ref,
  ) {
    return (
      <AnimatePresence
        onExitComplete={() => {
          if (ref && typeof ref === "object")
            ref.current
              ?.play()
              .catch((err) => console.log("Play video error: ", err));
        }}
      >
        {isAnimationVisible ? (
          <AnimationForeground>{animation}</AnimationForeground>
        ) : !isInit ? (
          <motion.div
            key={`container-${src}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className={styles.container}
            style={{ width, height }}
          >
            <video
              ref={ref}
              src={src}
              loop
              muted
              playsInline
              className={styles.videoStyle}
            />
          </motion.div>
        ) : null}
      </AnimatePresence>
    );
  },
);
