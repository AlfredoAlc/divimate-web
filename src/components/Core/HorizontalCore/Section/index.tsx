import styles from "./index.module.css";

import type { InfoSection } from "@/utils/InfoUtils";

import { useEffect } from "react";

export default function Section({
  id,
  title,
  subtitle,
  Icon,
  extra,
}: InfoSection) {
  useEffect(() => {
    addEventListener("progressEvent", (e: Event) => {
      const { target, progress } = (e as CustomEvent).detail;

      target.style.opacity = progress * 1.5;
    });
  }, []);

  return (
    <div
      id={id}
      className={styles.container}
      data-scroll
      data-scroll-repeat
      data-scroll-ignore-fold
      data-scroll-call="scrollEvent"
    >
      <Icon className={styles.icon} size={40} />
      <h2
        id={`title-${id}`}
        className={styles.title}
        data-scroll
        data-scroll-repeat
        data-scroll-call="scrollTitleEvent"
      >
        {title}
      </h2>
      <p className={styles.subtitle}>{subtitle}</p>
      {extra && (
        <a
          href="/group"
          className={styles.extraContainer}
          data-scroll
          data-scroll-offset="0,50%"
          data-scroll-event-progress="progressEvent"
        >
          See more groups features
        </a>
      )}
    </div>
  );
}
