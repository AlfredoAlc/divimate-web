import styles from "./index.module.css";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { AnimatePresence } from "motion/react";
import { Racing_Sans_One } from "next/font/google";
import Link from "next/link";

import FeaturesMenu from "../FeaturesMenu";

const racingSansOne = Racing_Sans_One({
  weight: "400",
});

export default function Large() {
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
          <p style={{ color: "white" }}>Features</p>
          <ChevronDown
            style={{ marginLeft: "4px", color: "white" }}
            size={16}
          />
        </div>
        <AnimatePresence>
          {isFeaturesVisible && (
            <FeaturesMenu setIsVisibleAction={setIsFeaturesVisible} />
          )}
        </AnimatePresence>
      </div>
      <Link className={styles.optionContainer} href={"/privacy-policy"}>
        <p style={{ color: "white" }}>Privacy policy</p>
      </Link>
    </div>
  );
}
