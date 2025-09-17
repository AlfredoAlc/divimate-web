"use client";

import styles from "./index.module.css";

import Image from "next/image";

import ComingSoon from "../ComingSoon";
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
              <a href="https://play.google.com/store/apps/details?id=com.alws.divimate">
                <Image
                  src={"/images/google-play-badge.png"}
                  alt="google-play-badge"
                  width={162}
                  height={48}
                />
              </a>
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
              />
            </div>
          </div>
        </div>
        <ComingSoon />
      </div>
    </div>
  );
}
