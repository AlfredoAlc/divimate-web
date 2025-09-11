"use client";

import styles from "./index.module.css";

import { motion, Variants } from "motion/react";

import Info1 from "./Info1";
import { useVideoCarrousel } from "@/contexts/VideoCarrouselProvider";

export const draw: Variants = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: (i: number) => {
    const delay = i * 0.5;
    return {
      pathLength: 1,
      opacity: 1,
      transition: {
        pathLength: { delay, type: "spring", duration: 1.5, bounce: 0 },
        opacity: { delay, duration: 0.01 },
      },
    };
  },
};

export default function AnimationBackground() {
  const { currentVideo } = useVideoCarrousel();

  return (
    <motion.div
      key={`container-animation-background`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className={styles.container}
    >
      <Info1 />
    </motion.div>
  );
}
