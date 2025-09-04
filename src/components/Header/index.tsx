import { ChevronDown } from "lucide-react";
import { Racing_Sans_One } from "next/font/google";

import styles from "./index.module.css";

const racingSansOne = Racing_Sans_One({
  weight: "400",
});

export default function Header() {
  return (
    <div className={styles.container}>
      <div className={styles.brandContainer}>
        <p className={`${racingSansOne.className} ${styles.diviText}`}>Divi</p>
        <p className={`${racingSansOne.className} ${styles.mateText}`}>Mate</p>
      </div>
      <div className={styles.optionContainer}>
        <p>Option 1</p>
        <ChevronDown style={{ marginLeft: "4px" }} size={16} />
      </div>
    </div>
  );
}
