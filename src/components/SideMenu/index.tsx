import styles from "./index.module.css";

import { Dispatch, SetStateAction, useCallback, useEffect } from "react";
import { ReceiptText, SlidersHorizontal, Users, WifiOff } from "lucide-react";
import { motion } from "motion/react";
import Link from "next/link";
import { redirect } from "next/navigation";

import { useLocomotive } from "@/contexts/LocomotiveProvider";

type SideMenuProps = {
  setIsVisibleAction: Dispatch<SetStateAction<boolean>>;
};

export default function SideMenu({ setIsVisibleAction }: SideMenuProps) {
  const { scroll } = useLocomotive();

  useEffect(() => {
    scroll?.stop();

    return () => scroll?.start();
  }, [scroll]);

  const handleScrollTo = useCallback(
    (id: string) => {
      scroll?.start();

      const target = document.getElementById(id);
      if (target) scroll?.scrollTo(target, { offset: 60 });
      else redirect(`/#${id}`);
    },
    [scroll],
  );

  return (
    <motion.div
      className={styles.container}
      onClick={() => setIsVisibleAction(false)}
      initial={{ opacity: 0, translateX: 300 }}
      animate={{ translateX: 0, opacity: 1 }}
      exit={{ translateX: 300, opacity: 0 }}
      transition={{ duration: 0.25, ease: "easeInOut" }}
    >
      <div className={styles.innerContainer}>
        <Link className={styles.titleContainer} href="/">
          <p>Features</p>
        </Link>
        <div
          className={styles.optionContainer}
          onClick={() => handleScrollTo("balances")}
        >
          <ReceiptText className={styles.icon} />
          <p>Balances</p>
        </div>
        <div
          className={styles.optionContainer}
          onClick={() => handleScrollTo("group-expenses")}
        >
          <Users className={styles.icon} />
          <p>Group Expenses</p>
        </div>
        <div
          className={styles.optionContainer}
          onClick={() => handleScrollTo("split-expenses")}
        >
          <SlidersHorizontal className={styles.icon} />
          <p>Split Expenses</p>
        </div>
        <div
          className={styles.optionContainer}
          style={{ marginBottom: 4 }}
          onClick={() => handleScrollTo("wifi-off")}
        >
          <WifiOff className={styles.icon} />
          <p>Offline</p>
        </div>
        <Link className={styles.titleContainer} href="/privacy-policy">
          <p>Privacy policy</p>
        </Link>
      </div>
    </motion.div>
  );
}
