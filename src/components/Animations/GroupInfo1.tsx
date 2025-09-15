"use client";

import styles from "./index.module.css";

import { motion } from "motion/react";

import { draw } from "../AnimationForeground";
import { getColor } from "@/app/globals";
import { useVideoCarrousel } from "@/contexts/VideoCarrouselProvider";

export default function GroupInfo1() {
  const text = getColor("text");
  const grayAzure = getColor("grayAzure");

  const { setIsAnimationVisible, setIsInit } = useVideoCarrousel();

  return (
    <motion.svg
      key={`svg-info-2`}
      width="240"
      height="497"
      viewBox="0 0 240 497"
      initial="hidden"
      animate="visible"
      className={styles.container}
      onAnimationStart={() => setIsInit(false)}
      onAnimationComplete={() => setIsAnimationVisible(false)}
    >
      {/*border*/}
      <motion.rect
        width="236"
        height="493"
        x="2"
        y="2"
        rx="20"
        stroke={text}
        variants={draw}
        custom={1}
        className={styles.shape}
      />

      {/*back arrow*/}
      <motion.line
        x1="17"
        y1="22"
        x2="21"
        y2="18"
        stroke={grayAzure}
        variants={draw}
        custom={1}
        className={styles.shape}
        style={{ strokeWidth: 1 }}
      />
      <motion.line
        x1="17"
        y1="22"
        x2="25"
        y2="22"
        stroke={grayAzure}
        variants={draw}
        custom={1}
        className={styles.shape}
        style={{ strokeWidth: 1 }}
      />
      <motion.line
        x1="17"
        y1="22"
        x2="21"
        y2="26"
        stroke={grayAzure}
        variants={draw}
        custom={1}
        className={styles.shape}
        style={{ strokeWidth: 1 }}
      />

      {/*title*/}
      <motion.line
        x1="48"
        y1="24"
        x2="106"
        y2="24"
        stroke={grayAzure}
        variants={draw}
        custom={1.5}
        className={styles.shape}
      />

      {/*search bar*/}
      <motion.rect
        width="220"
        height="30"
        x="10"
        y="38"
        rx="2"
        stroke={text}
        variants={draw}
        custom={1}
        className={styles.shape}
        style={{ strokeWidth: 1 }}
      />
      <motion.circle
        cx="24"
        cy="52"
        r="3"
        stroke={text}
        variants={draw}
        custom={2}
        className={styles.shape}
        style={{ strokeWidth: 1 }}
      />
      <motion.line
        x1="26"
        y1="54"
        x2="30"
        y2="58"
        stroke={text}
        variants={draw}
        custom={2}
        className={styles.shape}
        style={{ strokeWidth: 1 }}
      />
      <motion.line
        x1="40"
        y1="53"
        x2="86"
        y2="53"
        stroke={text}
        variants={draw}
        custom={2}
        className={styles.shape}
        style={{ strokeWidth: 2 }}
      />

      {/*header separator*/}
      <motion.line
        x1="6"
        y1="73"
        x2="234"
        y2="73"
        stroke={text}
        variants={draw}
        custom={1.5}
        className={styles.shape}
        style={{ strokeWidth: 0.5 }}
      />

      {/*add button*/}
      <motion.circle
        cx="200"
        cy="404"
        r="17"
        stroke={grayAzure}
        variants={draw}
        custom={2}
        className={styles.shape}
        style={{ strokeWidth: 2 }}
      />
      <motion.line
        x1="196"
        y1="404"
        x2="204"
        y2="404"
        stroke={grayAzure}
        variants={draw}
        custom={2.5}
        className={styles.shape}
        style={{ strokeWidth: 2 }}
      />
      <motion.line
        x1="200"
        y1="400"
        x2="200"
        y2="408"
        stroke={grayAzure}
        variants={draw}
        custom={2.5}
        className={styles.shape}
        style={{ strokeWidth: 2 }}
      />
    </motion.svg>
  );
}
