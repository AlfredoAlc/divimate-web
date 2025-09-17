import styles from "./index.module.css";

import { Globe, Hourglass } from "lucide-react";
import Image from "next/image";

export default function ComingSoon() {
  return (
    <div className={styles.container}>
      <div className={styles.titleContainer}>
        <span className={styles.title}>Coming Soon</span>{" "}
        <Hourglass className={styles.icon} size={36} />
      </div>
      <div className={styles.optionsContainer}>
        <div className={styles.appImageContainer}>
          <Image
            src={"/images/app-store-badge.svg"}
            alt="app-store-badge"
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw"
          />
        </div>
        <div className={styles.webContainer}>
          <Globe size={34} color="white" />
          <span style={{ marginLeft: 16, color: "white" }}>Web</span>
        </div>
      </div>
    </div>
  );
}
