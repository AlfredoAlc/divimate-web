import styles from "./index.module.css";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { Racing_Sans_One } from "next/font/google";
import Link from "next/link";

import FeaturesMenu from "../FeaturesMenu";

const racingSansOne = Racing_Sans_One({
  weight: "400",
});

export default function Header() {
  const [isFeaturesVisible, setIsFeaturesVisible] = useState(false);

  return (
    <div className={styles.container}>
      <Link className={styles.brandContainer} href="/">
        <p className={`${racingSansOne.className} ${styles.diviText}`}>Divi</p>
        <p className={`${racingSansOne.className} ${styles.mateText}`}>Mate</p>
      </Link>
      <div
        onMouseEnter={() => setIsFeaturesVisible(true)}
        onMouseLeave={(e) => {
          const target = e.target as HTMLElement;
          if (target.nodeName === "DIV") setIsFeaturesVisible(false);
        }}
      >
        <div className={styles.optionContainer} style={{ padding: 0 }}>
          <p>Features</p>
          <ChevronDown style={{ marginLeft: "4px" }} size={16} />
        </div>
        {isFeaturesVisible && (
          <FeaturesMenu setIsVisibleAction={setIsFeaturesVisible} />
        )}
      </div>
      <Link className={styles.optionContainer} href={"/privacy-policy"}>
        <p>Privacy policy</p>
      </Link>
    </div>
  );
}
