import styles from "./index.module.css";

import { ChevronDown } from "lucide-react";
import { Racing_Sans_One } from "next/font/google";
import Link from "next/link";

const racingSansOne = Racing_Sans_One({
  weight: "400",
});

export default function Header() {
  return (
    <div className={styles.container}>
      <Link className={styles.brandContainer} href="/">
        <p className={`${racingSansOne.className} ${styles.diviText}`}>Divi</p>
        <p className={`${racingSansOne.className} ${styles.mateText}`}>Mate</p>
      </Link>
      <div className={styles.optionContainer}>
        <p>Option 1</p>
        <ChevronDown style={{ marginLeft: "4px" }} size={16} />
      </div>
    </div>
  );
}
