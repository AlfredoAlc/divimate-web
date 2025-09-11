"use client";

import styles from "./index.module.css";

import { motion } from "motion/react";

import { draw } from "../AnimationForeground";
import { getColor } from "@/app/globals";
import { useVideoCarrousel } from "@/contexts/VideoCarrouselProvider";

export default function Info3() {
  const text = getColor("text");
  const success = getColor("success");
  const gray = getColor("gray");

  const { setIsAnimationVisible } = useVideoCarrousel();

  return (
    <motion.svg
      key={`svg-info-3`}
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

      {/*paid by user*/}
      <motion.circle
        cx="26"
        cy="60"
        r="16"
        stroke={text}
        variants={draw}
        custom={2}
        className={styles.shape}
        style={{ strokeWidth: 2 }}
      />
      <motion.line
        x1="52"
        y1="58"
        x2="128"
        y2="58"
        stroke={text}
        variants={draw}
        custom={2.5}
        className={styles.shape}
      />
      <motion.line
        x1="226"
        y1="56"
        x2="227"
        y2="58"
        stroke={text}
        variants={draw}
        custom={2.5}
        className={styles.shape}
        style={{ strokeWidth: 0.5 }}
      />
      <motion.line
        x1="226"
        y1="59"
        x2="227"
        y2="58"
        stroke={text}
        variants={draw}
        custom={2.5}
        className={styles.shape}
        style={{ strokeWidth: 0.5 }}
      />

      {/*header separator*/}
      <motion.line
        x1="6"
        y1="80"
        x2="234"
        y2="80"
        stroke={text}
        variants={draw}
        custom={1.5}
        className={styles.shape}
        style={{ strokeWidth: 0.5 }}
      />

      {/*header*/}
      <motion.line
        x1="90"
        y1="102"
        x2="150"
        y2="102"
        stroke={text}
        variants={draw}
        custom={2}
        className={styles.shape}
      />
      <motion.line
        x1="40"
        y1="120"
        x2="198"
        y2="120"
        stroke={text}
        variants={draw}
        custom={2}
        className={styles.shape}
        style={{ strokeWidth: 2 }}
      />

      {/*user 1*/}
      <motion.circle
        cx="25"
        cy="192"
        r="10"
        stroke={text}
        variants={draw}
        custom={2}
        className={styles.shape}
        style={{ strokeWidth: 2 }}
      />
      <motion.line
        x1="46"
        y1="192"
        x2="88"
        y2="192"
        stroke={text}
        variants={draw}
        custom={2.5}
        className={styles.shape}
      />
      <motion.rect
        width="10"
        height="10"
        x="214"
        y="187"
        rx="1"
        stroke={success}
        variants={draw}
        custom={1.5}
        className={styles.shape}
        style={{ strokeWidth: 0.5 }}
      />
      <motion.line
        x1="216"
        y1="192"
        x2="218"
        y2="194"
        stroke={success}
        variants={draw}
        custom={3}
        className={styles.shape}
        style={{ strokeWidth: 1 }}
      />
      <motion.line
        x1="218"
        y1="194"
        x2="223"
        y2="189"
        stroke={success}
        variants={draw}
        custom={3.5}
        className={styles.shape}
        style={{ strokeWidth: 1 }}
      />

      {/*user 2*/}
      <motion.circle
        cx="25"
        cy="224"
        r="10"
        stroke={text}
        variants={draw}
        custom={2}
        className={styles.shape}
        style={{ strokeWidth: 2 }}
      />
      <motion.line
        x1="46"
        y1="224"
        x2="98"
        y2="224"
        stroke={text}
        variants={draw}
        custom={2.5}
        className={styles.shape}
      />
      <motion.rect
        width="10"
        height="10"
        x="214"
        y="218"
        rx="1"
        stroke={text}
        variants={draw}
        custom={1.5}
        className={styles.shape}
        style={{ strokeWidth: 0.5 }}
      />

      {/*user 3*/}
      <motion.circle
        cx="25"
        cy="255"
        r="10"
        stroke={text}
        variants={draw}
        custom={2}
        className={styles.shape}
        style={{ strokeWidth: 2 }}
      />
      <motion.line
        x1="46"
        y1="255"
        x2="88"
        y2="255"
        stroke={text}
        variants={draw}
        custom={2.5}
        className={styles.shape}
      />
      <motion.rect
        width="10"
        height="10"
        x="214"
        y="250"
        rx="1"
        stroke={success}
        variants={draw}
        custom={1.5}
        className={styles.shape}
        style={{ strokeWidth: 0.5 }}
      />
      <motion.line
        x1="216"
        y1="254"
        x2="218"
        y2="257"
        stroke={success}
        variants={draw}
        custom={3}
        className={styles.shape}
        style={{ strokeWidth: 1 }}
      />
      <motion.line
        x1="218"
        y1="257"
        x2="223"
        y2="252"
        stroke={success}
        variants={draw}
        custom={3.5}
        className={styles.shape}
        style={{ strokeWidth: 1 }}
      />

      {/*footer*/}

      <motion.line
        x1="6"
        y1="433"
        x2="234"
        y2="433"
        stroke={text}
        variants={draw}
        custom={1.5}
        className={styles.shape}
        style={{ strokeWidth: 0.5 }}
      />
      <motion.line
        x1="66"
        y1="457"
        x2="130"
        y2="457"
        stroke={text}
        variants={draw}
        custom={2.5}
        className={styles.shape}
      />
      <motion.line
        x1="84"
        y1="469"
        x2="112"
        y2="469"
        stroke={gray}
        variants={draw}
        custom={2.5}
        className={styles.shape}
        style={{ strokeWidth: 2 }}
      />
      <motion.line
        x1="188"
        y1="462"
        x2="196"
        y2="462"
        stroke={text}
        variants={draw}
        custom={2.5}
        className={styles.shape}
        style={{ strokeWidth: 2 }}
      />
      <motion.rect
        width="10"
        height="10"
        x="202"
        y="457"
        rx="1"
        stroke={text}
        variants={draw}
        custom={1.5}
        className={styles.shape}
        style={{ strokeWidth: 0.5 }}
      />
    </motion.svg>
  );
}
