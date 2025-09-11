"use client";

import styles from "./index.module.css";

import { motion } from "motion/react";

import { draw } from "../AnimationForeground";
import { getColor } from "@/app/globals";
import { useVideoCarrousel } from "@/contexts/VideoCarrouselProvider";

export default function Info4() {
  const text = getColor("text");
  const success = getColor("success");
  const error = getColor("error");
  const gray = getColor("gray");
  const grayAzure = getColor("grayAzure");
  const backgroundAlt1 = getColor("backgroundAlt1");
  const backgroundAlt2 = getColor("backgroundAlt2");
  const backgroundAlt3 = getColor("backgroundAlt3");
  const backgroundAlt5 = getColor("backgroundAlt5");

  const { setIsAnimationVisible } = useVideoCarrousel();

  return (
    <motion.svg
      key={`svg-info-4`}
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
        y1="41"
        x2="234"
        y2="41"
        stroke={text}
        variants={draw}
        custom={1.5}
        className={styles.shape}
        style={{ strokeWidth: 0.5 }}
      />

      {/*header icon*/}
      <motion.line
        x1="6"
        y1="134"
        x2="65"
        y2="134"
        stroke={text}
        variants={draw}
        custom={1}
        className={styles.shape}
        style={{ strokeWidth: 0.5 }}
      />
      <motion.circle
        cx="81"
        cy="143"
        r="17"
        stroke={text}
        variants={draw}
        custom={1.5}
        className={styles.shape}
        style={{ strokeWidth: 1 }}
      />
      <motion.line
        x1="96"
        y1="134"
        x2="237"
        y2="134"
        stroke={text}
        variants={draw}
        custom={1}
        className={styles.shape}
        style={{ strokeWidth: 0.5 }}
      />

      {/*title*/}
      <motion.line
        x1="34"
        y1="172"
        x2="98"
        y2="172"
        stroke={text}
        variants={draw}
        custom={2}
        className={styles.shape}
      />
      <motion.line
        x1="34"
        y1="185"
        x2="104"
        y2="185"
        stroke={text}
        variants={draw}
        custom={2}
        className={styles.shape}
        style={{ strokeWidth: 2 }}
      />

      {/*options*/}
      <motion.rect
        width="40"
        height="18"
        x="19"
        y="212"
        rx="4"
        stroke={text}
        variants={draw}
        custom={1}
        className={styles.shape}
        style={{ strokeWidth: 0.5 }}
      />
      <motion.rect
        width="40"
        height="18"
        x="70"
        y="212"
        rx="4"
        stroke={text}
        variants={draw}
        custom={1}
        className={styles.shape}
        style={{ strokeWidth: 0.5 }}
      />
      <motion.rect
        width="40"
        height="18"
        x="120"
        y="212"
        rx="4"
        stroke={grayAzure}
        variants={draw}
        custom={1}
        className={styles.shape}
        style={{ strokeWidth: 0.5 }}
      />

      {/*list title*/}
      <motion.line
        x1="16"
        y1="263"
        x2="48"
        y2="263"
        stroke={text}
        variants={draw}
        custom={2}
        className={styles.shape}
      />

      {/*expense 1*/}
      <motion.line
        x1="18"
        y1="286"
        x2="24"
        y2="286"
        stroke={gray}
        variants={draw}
        custom={2}
        className={styles.shape}
        style={{ strokeWidth: 0.5 }}
      />
      <motion.line
        x1="14"
        y1="298"
        x2="28"
        y2="298"
        stroke={gray}
        variants={draw}
        custom={2}
        className={styles.shape}
        style={{ strokeWidth: 1 }}
      />
      <motion.rect
        width="22"
        height="22"
        x="36"
        y="282"
        rx="5"
        stroke={backgroundAlt3}
        variants={draw}
        custom={2}
        className={styles.shape}
        style={{ strokeWidth: 1 }}
      />
      <motion.line
        x1="70"
        y1="293"
        x2="116"
        y2="293"
        stroke={gray}
        variants={draw}
        custom={2}
        className={styles.shape}
        style={{ strokeWidth: 2 }}
      />

      {/*expense 2*/}
      <motion.line
        x1="18"
        y1="313"
        x2="24"
        y2="313"
        stroke={gray}
        variants={draw}
        custom={2}
        className={styles.shape}
        style={{ strokeWidth: 0.5 }}
      />
      <motion.line
        x1="14"
        y1="325"
        x2="28"
        y2="325"
        stroke={gray}
        variants={draw}
        custom={2}
        className={styles.shape}
        style={{ strokeWidth: 1 }}
      />
      <motion.rect
        width="22"
        height="22"
        x="36"
        y="308"
        rx="5"
        stroke={backgroundAlt3}
        variants={draw}
        custom={2}
        className={styles.shape}
        style={{ strokeWidth: 1 }}
      />
      <motion.line
        x1="70"
        y1="315"
        x2="104"
        y2="315"
        stroke={text}
        variants={draw}
        custom={2}
        className={styles.shape}
        style={{ strokeWidth: 2 }}
      />
      <motion.line
        x1="70"
        y1="327"
        x2="116"
        y2="327"
        stroke={gray}
        variants={draw}
        custom={2}
        className={styles.shape}
        style={{ strokeWidth: 1 }}
      />
      <motion.line
        x1="207"
        y1="314"
        x2="230"
        y2="314"
        stroke={gray}
        variants={draw}
        custom={2}
        className={styles.shape}
        style={{ strokeWidth: 1 }}
      />
      <motion.line
        x1="204"
        y1="324"
        x2="230"
        y2="324"
        stroke={success}
        variants={draw}
        custom={2}
        className={styles.shape}
        style={{ strokeWidth: 2 }}
      />

      {/*expense 3*/}
      <motion.line
        x1="18"
        y1="340"
        x2="24"
        y2="340"
        stroke={gray}
        variants={draw}
        custom={2}
        className={styles.shape}
        style={{ strokeWidth: 0.5 }}
      />
      <motion.line
        x1="14"
        y1="352"
        x2="28"
        y2="352"
        stroke={gray}
        variants={draw}
        custom={2}
        className={styles.shape}
        style={{ strokeWidth: 1 }}
      />
      <motion.rect
        width="22"
        height="22"
        x="36"
        y="336"
        rx="5"
        stroke={backgroundAlt5}
        variants={draw}
        custom={2}
        className={styles.shape}
        style={{ strokeWidth: 1 }}
      />
      <motion.line
        x1="70"
        y1="342"
        x2="96"
        y2="342"
        stroke={text}
        variants={draw}
        custom={2}
        className={styles.shape}
        style={{ strokeWidth: 2 }}
      />
      <motion.line
        x1="70"
        y1="354"
        x2="116"
        y2="354"
        stroke={gray}
        variants={draw}
        custom={2}
        className={styles.shape}
        style={{ strokeWidth: 1 }}
      />
      <motion.line
        x1="207"
        y1="341"
        x2="230"
        y2="341"
        stroke={gray}
        variants={draw}
        custom={2}
        className={styles.shape}
        style={{ strokeWidth: 1 }}
      />
      <motion.line
        x1="204"
        y1="351"
        x2="230"
        y2="351"
        stroke={success}
        variants={draw}
        custom={2}
        className={styles.shape}
        style={{ strokeWidth: 2 }}
      />

      {/*expense 4*/}
      <motion.line
        x1="18"
        y1="367"
        x2="24"
        y2="367"
        stroke={gray}
        variants={draw}
        custom={2}
        className={styles.shape}
        style={{ strokeWidth: 0.5 }}
      />
      <motion.line
        x1="14"
        y1="379"
        x2="28"
        y2="379"
        stroke={gray}
        variants={draw}
        custom={2}
        className={styles.shape}
        style={{ strokeWidth: 1 }}
      />
      <motion.rect
        width="22"
        height="22"
        x="36"
        y="363"
        rx="5"
        stroke={backgroundAlt2}
        variants={draw}
        custom={2}
        className={styles.shape}
        style={{ strokeWidth: 1 }}
      />
      <motion.line
        x1="70"
        y1="369"
        x2="92"
        y2="369"
        stroke={text}
        variants={draw}
        custom={2}
        className={styles.shape}
        style={{ strokeWidth: 2 }}
      />
      <motion.line
        x1="70"
        y1="381"
        x2="150"
        y2="381"
        stroke={gray}
        variants={draw}
        custom={2}
        className={styles.shape}
        style={{ strokeWidth: 1 }}
      />
      <motion.line
        x1="190"
        y1="368"
        x2="230"
        y2="368"
        stroke={gray}
        variants={draw}
        custom={2}
        className={styles.shape}
        style={{ strokeWidth: 1 }}
      />
      <motion.line
        x1="204"
        y1="378"
        x2="230"
        y2="378"
        stroke={error}
        variants={draw}
        custom={2}
        className={styles.shape}
        style={{ strokeWidth: 2 }}
      />

      {/*expense 5*/}
      <motion.line
        x1="18"
        y1="395"
        x2="24"
        y2="395"
        stroke={gray}
        variants={draw}
        custom={2}
        className={styles.shape}
        style={{ strokeWidth: 0.5 }}
      />
      <motion.line
        x1="14"
        y1="406"
        x2="28"
        y2="406"
        stroke={gray}
        variants={draw}
        custom={2}
        className={styles.shape}
        style={{ strokeWidth: 1 }}
      />
      <motion.rect
        width="22"
        height="22"
        x="36"
        y="390"
        rx="5"
        stroke={backgroundAlt1}
        variants={draw}
        custom={2}
        className={styles.shape}
        style={{ strokeWidth: 1 }}
      />
      <motion.line
        x1="70"
        y1="397"
        x2="120"
        y2="397"
        stroke={text}
        variants={draw}
        custom={2}
        className={styles.shape}
        style={{ strokeWidth: 2 }}
      />
      <motion.line
        x1="70"
        y1="408"
        x2="150"
        y2="408"
        stroke={gray}
        variants={draw}
        custom={2}
        className={styles.shape}
        style={{ strokeWidth: 1 }}
      />
      <motion.line
        x1="190"
        y1="395"
        x2="230"
        y2="395"
        stroke={gray}
        variants={draw}
        custom={2}
        className={styles.shape}
        style={{ strokeWidth: 1 }}
      />
      <motion.line
        x1="204"
        y1="405"
        x2="230"
        y2="405"
        stroke={error}
        variants={draw}
        custom={2}
        className={styles.shape}
        style={{ strokeWidth: 2 }}
      />
    </motion.svg>
  );
}
