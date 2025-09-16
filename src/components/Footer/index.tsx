import styles from "./index.module.css";

import Image from "next/image";

export default function Footer() {
  return (
    <div
      className={styles.container}
      data-scroll
      data-scroll-event-progress="progressFooterEvent"
    >
      <h1 className={styles.title}>
        Ready to split expenses? Download DiviMate today.
      </h1>
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
  );
}
