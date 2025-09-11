"use client";

import styles from "./index.module.css";

import { motion } from "motion/react";

import { draw } from ".";
import { getColor } from "@/app/globals";
import { useVideoCarrousel } from "@/contexts/VideoCarrouselProvider";

export default function Info1() {
  const text = getColor("text");
  const error = getColor("error");
  const success = getColor("success");
  const gray = getColor("gray");
  const azure = getColor("azure");
  const grayAzure = getColor("grayAzure");

  const { setIsAnimationVisible, setIsInit } = useVideoCarrousel();

  return (
    <motion.svg
      key={`svg-1`}
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

      {/*first user*/}
      <motion.circle
        cx="26"
        cy="64"
        r="16"
        stroke={text}
        variants={draw}
        custom={2}
        className={styles.shape}
        style={{ strokeWidth: 2 }}
      />
      <motion.line
        x1="52"
        y1="64"
        x2="102"
        y2="64"
        stroke={text}
        variants={draw}
        custom={2.5}
        className={styles.shape}
      />
      <motion.line
        x1="190"
        y1="59"
        x2="230"
        y2="59"
        stroke={gray}
        variants={draw}
        custom={2.5}
        className={styles.shape}
        style={{ strokeWidth: 1 }}
      />
      <motion.line
        x1="200"
        y1="70"
        x2="230"
        y2="70"
        stroke={success}
        variants={draw}
        custom={2.5}
        className={styles.shape}
      />
      <motion.line
        x1="6"
        y1="84"
        x2="234"
        y2="84"
        stroke={text}
        variants={draw}
        custom={1}
        className={styles.shape}
        style={{ strokeWidth: 0.5 }}
      />

      {/*second user*/}
      <motion.circle
        cx="26"
        cy="102"
        r="16"
        stroke={text}
        variants={draw}
        custom={2}
        className={styles.shape}
        style={{ strokeWidth: 2 }}
      />
      <motion.line
        x1="52"
        y1="104"
        x2="90"
        y2="104"
        stroke={text}
        variants={draw}
        custom={2.5}
        className={styles.shape}
      />
      <motion.line
        x1="212"
        y1="104"
        x2="228"
        y2="104"
        stroke={azure}
        variants={draw}
        custom={2.5}
        className={styles.shape}
        style={{ strokeWidth: 2 }}
      />
      <motion.line
        x1="6"
        y1="122"
        x2="234"
        y2="122"
        stroke={text}
        variants={draw}
        custom={1}
        className={styles.shape}
        style={{ strokeWidth: 0.5 }}
      />

      {/*third user*/}
      <motion.circle
        cx="26"
        cy="140"
        r="16"
        stroke={text}
        variants={draw}
        custom={2}
        className={styles.shape}
        style={{ strokeWidth: 2 }}
      />
      <motion.line
        x1="54"
        y1="142"
        x2="104"
        y2="142"
        stroke={text}
        variants={draw}
        custom={2.5}
        className={styles.shape}
      />
      <motion.rect
        width="15"
        height="13"
        x="176"
        y="135"
        rx="3"
        stroke={text}
        variants={draw}
        custom={1}
        className={styles.shape}
        style={{ strokeWidth: 1 }}
      />
      <motion.line
        x1="206"
        y1="136"
        x2="230"
        y2="136"
        stroke={gray}
        variants={draw}
        custom={2.5}
        className={styles.shape}
        style={{ strokeWidth: 1 }}
      />
      <motion.line
        x1="200"
        y1="146"
        x2="230"
        y2="146"
        stroke={error}
        variants={draw}
        custom={2.5}
        className={styles.shape}
      />
      <motion.line
        x1="6"
        y1="161"
        x2="234"
        y2="161"
        stroke={text}
        variants={draw}
        custom={1}
        className={styles.shape}
        style={{ strokeWidth: 0.5 }}
      />

      {/*fourth user*/}
      <motion.circle
        cx="26"
        cy="180"
        r="16"
        stroke={text}
        variants={draw}
        custom={2}
        className={styles.shape}
        style={{ strokeWidth: 2 }}
      />
      <motion.line
        x1="54"
        y1="180"
        x2="104"
        y2="180"
        stroke={text}
        variants={draw}
        custom={2.5}
        className={styles.shape}
      />
      <motion.rect
        width="15"
        height="13"
        x="169"
        y="173"
        rx="3"
        stroke={text}
        variants={draw}
        custom={1}
        className={styles.shape}
        style={{ strokeWidth: 1 }}
      />
      <motion.line
        x1="192"
        y1="174"
        x2="230"
        y2="174"
        stroke={gray}
        variants={draw}
        custom={2.5}
        className={styles.shape}
        style={{ strokeWidth: 1 }}
      />
      <motion.line
        x1="200"
        y1="184"
        x2="230"
        y2="184"
        stroke={success}
        variants={draw}
        custom={2.5}
        className={styles.shape}
      />
      <motion.line
        x1="6"
        y1="199"
        x2="234"
        y2="199"
        stroke={text}
        variants={draw}
        custom={1}
        className={styles.shape}
        style={{ strokeWidth: 0.5 }}
      />

      {/*fifth user*/}
      <motion.circle
        cx="26"
        cy="218"
        r="16"
        stroke={text}
        variants={draw}
        custom={2}
        className={styles.shape}
        style={{ strokeWidth: 2 }}
      />
      <motion.line
        x1="54"
        y1="218"
        x2="104"
        y2="218"
        stroke={text}
        variants={draw}
        custom={2.5}
        className={styles.shape}
      />
      <motion.rect
        width="15"
        height="13"
        x="169"
        y="212"
        rx="3"
        stroke={text}
        variants={draw}
        custom={1}
        className={styles.shape}
        style={{ strokeWidth: 1 }}
      />
      <motion.line
        x1="192"
        y1="212"
        x2="230"
        y2="212"
        stroke={gray}
        variants={draw}
        custom={2.5}
        className={styles.shape}
        style={{ strokeWidth: 1 }}
      />
      <motion.line
        x1="200"
        y1="223"
        x2="230"
        y2="223"
        stroke={success}
        variants={draw}
        custom={2.5}
        className={styles.shape}
      />
      <motion.line
        x1="6"
        y1="237"
        x2="234"
        y2="237"
        stroke={text}
        variants={draw}
        custom={1}
        className={styles.shape}
        style={{ strokeWidth: 0.5 }}
      />

      {/*button*/}
      <motion.rect
        width="88"
        height="24"
        x="76"
        y="246"
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
