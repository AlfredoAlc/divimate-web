"use client";

import styles from "./index.module.css";

import Image from "next/image";

import ComingSoon from "../ComingSoon";
import GooglePlay from "../GooglePlay";
import Header from "../Header";
import useTheme from "@/hooks/useTheme";

export default function Hero() {
  const theme = useTheme();

  return (
    <div
      className={styles.gradientBackground}
      data-scroll
      data-scroll-event-progress="progressHeroEvent"
    >
      <Header />
      <div style={{ minHeight: "100vh", flexDirection: "row" }}>
        <div className={styles.container}>
          <div className={styles.textContainer}>
            <h1 className={styles.heading}>
              Split expenses without the stress
            </h1>
            <p className={styles.subHeading}>
              DiviMate helps you track, split, and settle group expenses —
              whether you’re traveling, sharing a home, or just hanging out with
              friends.
            </p>
            <div className={styles.playContainer}>
              <GooglePlay />
            </div>
          </div>
          <div className={styles.imageContainer}>
            <div className={styles.innerImageContainer}>
              <Image
                className={styles.shadow}
                src={`/images/landing-${theme}.png`}
                alt="group-expense-list-divimate"
                width={270}
                height={581}
                priority={true}
              />
            </div>
          </div>
        </div>
        <ComingSoon />
      </div>
    </div>
  );
}
