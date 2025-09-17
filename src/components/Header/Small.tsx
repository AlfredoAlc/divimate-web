import styles from "./index.module.css";

import { useState } from "react";
import { Menu } from "lucide-react";
import { AnimatePresence } from "motion/react";
import { Racing_Sans_One } from "next/font/google";
import Link from "next/link";
import { usePathname } from "next/navigation";

import SideMenu from "../SideMenu";
import { getColor } from "@/app/globals";

const racingSansOne = Racing_Sans_One({
  weight: "400",
});

export default function Small() {
  const [isMenuVisible, setIsMenuVisible] = useState(false);

  const text = getColor("text");

  const pathname = usePathname();

  return (
    <div className={styles.container}>
      <Link className={styles.brandContainer} href="/">
        <p className={`${racingSansOne.className} ${styles.diviText}`}>Divi</p>
        <p className={`${racingSansOne.className} ${styles.mateText}`}>Mate</p>
      </Link>
      <div
        className={styles.iconContainer}
        onClick={() => setIsMenuVisible(true)}
      >
        <Menu
          color={pathname === "/privacy-policy" ? text : "white"}
          size={24}
        />
      </div>
      <AnimatePresence>
        {isMenuVisible && <SideMenu setIsVisibleAction={setIsMenuVisible} />}
      </AnimatePresence>
    </div>
  );
}
