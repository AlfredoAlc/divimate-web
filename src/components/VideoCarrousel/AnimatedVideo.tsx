"use client";

import styles from "./index.module.css";

import React, { forwardRef, ReactNode, useRef, useState } from "react";
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
    const isPlaying = useRef(false);

    const [isLoaded, setIsLoaded] = useState(false);

    return (
      <AnimatePresence
        onExitComplete={() => {
          if (
            ref &&
            typeof ref === "object" &&
            ref.current &&
            isLoaded &&
            !isInit
          ) {
            ref.current
              .play()
              .then(() => (isPlaying.current = true))
              .catch((err) => console.log("Play video error: ", err));
          }
        }}
      >
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
            visibility: isInit || isAnimationVisible ? "hidden" : "visible",
          }}
        >
          <video
            ref={ref}
            src={src}
            loop
            muted
            playsInline
            preload="auto"
            autoPlay={false}
            className={styles.videoStyle}
            onLoadedData={() => {
              if (ref && typeof ref === "object" && ref.current) {
                ref.current.currentTime = 0;
                ref.current.pause();
                setIsLoaded(true);

                if (isPlaying.current) {
                  ref.current.play();
                  isPlaying.current = false;
                }
              }
            }}
          />
        </motion.div>
        {isAnimationVisible && isLoaded && (
          <AnimationForeground>{animation}</AnimationForeground>
        )}
      </AnimatePresence>
    );
  },
);
