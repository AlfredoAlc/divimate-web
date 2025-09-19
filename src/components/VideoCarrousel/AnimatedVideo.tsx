"use client";

import styles from "./index.module.css";

import React, {
  forwardRef,
  ReactNode,
  useCallback,
  useEffect,
  useState,
} from "react";
import { AnimatePresence, motion } from "motion/react";

import AnimationForeground from "../AnimationForeground";
import useTheme from "@/hooks/useTheme";

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
    const theme = useTheme();

    const [isVideoVisible, setIsVideoVisible] = useState(false);

    const border =
      theme === "light"
        ? "linear-gradient(135deg, #000 0%, #444 25%, #111 50%, #666 75%, #000 100%)"
        : "linear-gradient(135deg,#d7d7d7 0%,#f5f5f5 20%,#b0b0b0 40%,#ffffff 60%,#a0a0a0 80%,#e0e0e0 100%)";

    const handlePlay = useCallback(() => {
      if (ref && typeof ref === "object" && ref.current) {
        ref.current.currentTime = 0;
        ref.current
          .play()
          .catch((err) => console.log("Play video error: ", err));
      }
    }, [ref]);

    useEffect(() => {
      if (isAnimationVisible) setTimeout(() => setIsVideoVisible(true), 500);
    }, [isAnimationVisible]);

    return (
      <AnimatePresence onExitComplete={handlePlay}>
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
              backgroundImage: `url(${poster}), ${border}`,
            }}
          >
            <video
              ref={ref}
              src={src}
              loop
              muted
              playsInline
              autoPlay={false}
              className={styles.videoStyle}
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
