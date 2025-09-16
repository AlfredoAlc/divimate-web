import styles from "./index.module.css";

import { Globe, Pickaxe } from "lucide-react";
import Image from "next/image";

export default function ComingSoon() {
  return (
    <div className={styles.container}>
      <div className={styles.titleContainer}>
        <span className={styles.title}>Coming Soon</span>{" "}
        <Pickaxe className={styles.icon} size={36} />
      </div>
      <div className={styles.optionsContainer}>
        <Image
          src={"/images/app-store-badge.svg"}
          alt="app-store-badge"
          width={182.25}
          height={54}
        />
        <div className={styles.webContainer}>
          <Globe size={34} />
          <span style={{ marginLeft: 16 }}>Web</span>
        </div>
      </div>
    </div>
  );
}
