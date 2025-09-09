import styles from "./index.module.css";

import type { InfoSection } from "./infoSections";

import {
  Bug,
  ReceiptText,
  SlidersHorizontal,
  Users,
  WifiOff,
} from "lucide-react";

export default function Section({ id, title, subtitle, icon }: InfoSection) {
  const Icon =
    icon === "ReceiptText"
      ? ReceiptText
      : icon === "Users"
        ? Users
        : icon === "SlidersHorizontal"
          ? SlidersHorizontal
          : icon === "WifiOff"
            ? WifiOff
            : Bug;

  return (
    <div
      id={id}
      className={styles.container}
      data-scroll
      data-scroll-repeat
      data-scroll-ignore-fold
      data-scroll-call="scrollEvent"
    >
      <Icon size={40} style={{ marginBottom: "16px" }} />
      <h2 className={styles.title}>{title}</h2>
      <p className={styles.subtitle}>{subtitle}</p>
    </div>
  );
}
