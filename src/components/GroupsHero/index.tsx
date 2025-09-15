import styles from "./index.module.css";

import Header from "../Header";

export default function GroupsHero() {
  return (
    <div className={styles.gradientBackground}>
      <Header />
      <div className={styles.container}>
        <div className={styles.textContainer}>
          <h2 className={styles.heading}>
            Plan together, spend together, and settle up together.
          </h2>
          <h3 className={styles.subHeading}>
            Groups make it easy to manage shared expenses with friends,
            roommates, or travel buddies.
          </h3>
        </div>
      </div>
    </div>
  );
}
