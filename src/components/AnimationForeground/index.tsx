"use client";

import styles from "./index.module.css";

import { ReactNode } from "react";
import { motion, Variants } from "motion/react";

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

type AnimationForegroundProps = {
  children: ReactNode;
};

export default function AnimationForeground({
  children,
}: AnimationForegroundProps) {
  return (
    <motion.div
      key={`container-animation-background`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className={styles.container}
    >
      {children}
    </motion.div>
  );
}
