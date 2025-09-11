"use client";

import styles from "./index.module.css";

import { motion } from "motion/react";

import { draw } from "../AnimationForeground";
import { getColor } from "@/app/globals";
import { useVideoCarrousel } from "@/contexts/VideoCarrouselProvider";

export default function Info2() {
  const text = getColor("text");
  const error = getColor("error");
  const gray = getColor("gray");
  const grayAzure = getColor("grayAzure");

  const { setIsAnimationVisible } = useVideoCarrousel();

  return (
    <motion.svg
      key={`svg-info-2`}
      width="240"
      height="497"
      viewBox="0 0 240 497"
      initial="hidden"
      animate="visible"
      className={styles.container}
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

      {/*menu icon*/}
      <motion.line
        x1="14"
        y1="21"
        x2="24"
        y2="21"
        stroke={grayAzure}
        variants={draw}
        custom={1}
        className={styles.shape}
        style={{ strokeWidth: 0.5 }}
      />
      <motion.line
        x1="14"
        y1="24"
        x2="24"
        y2="24"
        stroke={grayAzure}
        variants={draw}
        custom={1}
        className={styles.shape}
        style={{ strokeWidth: 0.5 }}
      />
      <motion.line
        x1="14"
        y1="27"
        x2="24"
        y2="27"
        stroke={grayAzure}
        variants={draw}
        custom={1}
        className={styles.shape}
        style={{ strokeWidth: 0.5 }}
      />
      <motion.line
        x1="38"
        y1="24"
        x2="95"
        y2="24"
        stroke={text}
        variants={draw}
        custom={1.5}
        className={styles.shape}
      />
      <motion.line
        x1="102"
        y1="24"
        x2="130"
        y2="24"
        stroke={error}
        variants={draw}
        custom={1.5}
        className={styles.shape}
      />
      <motion.rect
        width="19"
        height="13"
        x="136"
        y="17"
        rx="3"
        stroke={text}
        variants={draw}
        custom={1}
        className={styles.shape}
        style={{ strokeWidth: 1 }}
      />

      {/*header separator*/}
      <motion.line
        x1="6"
        y1="36"
        x2="234"
        y2="36"
        stroke={text}
        variants={draw}
        custom={1.5}
        className={styles.shape}
        style={{ strokeWidth: 0.5 }}
      />

      {/*first group*/}
      <motion.rect
        width="26"
        height="26"
        x="10"
        y="49"
        rx="5"
        stroke={text}
        variants={draw}
        custom={1}
        className={styles.shape}
        style={{ strokeWidth: 2 }}
      />
      <motion.line
        x1="48"
        y1="62"
        x2="94"
        y2="62"
        stroke={text}
        variants={draw}
        custom={2.5}
        className={styles.shape}
      />
      <motion.rect
        width="15"
        height="13"
        x="176"
        y="56"
        rx="3"
        stroke={text}
        variants={draw}
        custom={1}
        className={styles.shape}
        style={{ strokeWidth: 1 }}
      />
      <motion.line
        x1="206"
        y1="56"
        x2="230"
        y2="56"
        stroke={gray}
        variants={draw}
        custom={2.5}
        className={styles.shape}
        style={{ strokeWidth: 1 }}
      />
      <motion.line
        x1="200"
        y1="66"
        x2="230"
        y2="66"
        stroke={error}
        variants={draw}
        custom={2.5}
        className={styles.shape}
      />

      {/*button*/}
      <motion.rect
        width="70"
        height="24"
        x="85"
        y="87"
        rx="4"
        stroke={grayAzure}
        variants={draw}
        custom={1}
        className={styles.shape}
        style={{ strokeWidth: 1 }}
      />
    </motion.svg>
  );
}
