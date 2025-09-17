import styles from "./index.module.css";

import GooglePlay from "../GooglePlay";

export default function Outro() {
  return (
    <div
      className={styles.container}
      data-scroll
      data-scroll-event-progress="progressOutroEvent"
    >
      <h1 className={styles.title}>
        Ready to split expenses? Download DiviMate today.
      </h1>
      <div className={styles.playContainer}>
        <GooglePlay />
      </div>
    </div>
  );
}
