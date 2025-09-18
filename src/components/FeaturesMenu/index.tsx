"use client";

import styles from "./index.module.css";

import { Dispatch, SetStateAction, useCallback } from "react";
import { ReceiptText, SlidersHorizontal, Users, WifiOff } from "lucide-react";
import { motion } from "motion/react";
import { redirect } from "next/navigation";

import { useLocomotive } from "@/contexts/LocomotiveProvider";

type FeaturesMenuProps = {
  setIsVisibleAction: Dispatch<SetStateAction<boolean>>;
};

export default function FeaturesMenu({
  setIsVisibleAction,
}: FeaturesMenuProps) {
  const { scroll } = useLocomotive();

  const handleScrollTo = useCallback(
    (id: string) => {
      setIsVisibleAction(false);

      const target = document.getElementById(id);
      if (target) scroll?.scrollTo(target);
      else redirect(`/#${id}`);
    },
    [setIsVisibleAction, scroll],
  );

  return (
    <motion.div
      className={styles.container}
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      exit={{ scale: 0.8, opacity: 0 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
    >
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
    </motion.div>
  );
}
