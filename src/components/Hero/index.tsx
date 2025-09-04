import Image from "next/image";

import styles from "./index.module.css";

export default function Hero() {
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <h1 style={{ marginBottom: 32 }}>Split expenses without the stress</h1>
        <p style={{ lineHeight: 2, paddingRight: "35%" }}>
          DiviMate helps you track, split, and settle group expenses — whether
          you’re traveling, sharing a home, or just hanging out with friends.
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
            src={"/images/group-expenses.png"}
            alt="divimate-app"
            width={240}
            height={539}
          />
        </div>
      </div>
    </div>
  );
}
