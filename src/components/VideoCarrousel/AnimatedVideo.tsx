"use client";

import styles from "./index.module.css";

import React, {
  forwardRef,
  ReactNode,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
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
    const isAnimationEnded = useRef(false);
    const isVideoReady = useRef(false);

    const [isVideoVisible, setIsVideoVisible] = useState(false);
    const [isAnimating, setIsAnimating] = useState(false);

    const handlePlay = useCallback(
      (ready?: boolean) => {
        if (ref && typeof ref === "object" && ref.current) {
          ref.current.currentTime = 0;
          ref.current
            .play()
            .catch((err) => console.log("Play video error: ", err));
          setIsAnimating(!(isVideoReady.current || ready));
        }
      },
      [ref, isVideoReady],
    );

    useEffect(() => {
      if (isAnimationVisible) {
        setIsAnimating(true);
        isAnimationEnded.current = false;
        setTimeout(() => setIsVideoVisible(true), 500);
        setTimeout(() => {
          isAnimationEnded.current = true;
          handlePlay();
        }, 1750);
      }
    }, [isAnimationVisible, handlePlay]);

    const handleLoaded = useCallback(() => {
      isVideoReady.current = true;
      if (isAnimationEnded.current) handlePlay(true);
    }, [handlePlay, isAnimationEnded]);

    return (
      <AnimatePresence>
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
              autoPlay={false}
              className={styles.videoStyle}
              onLoadedData={handleLoaded}
              poster={poster}
            />
          </motion.div>
        )}
        {isAnimating && <AnimationForeground>{animation}</AnimationForeground>}
      </AnimatePresence>
    );
  },
);
