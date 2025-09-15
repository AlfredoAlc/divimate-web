"use client";

import styles from "./index.module.css";

import {
  Dispatch,
  SetStateAction,
  useCallback,
  useEffect,
  useRef,
} from "react";
import LocomotiveScroll from "locomotive-scroll";
import { ReceiptText, SlidersHorizontal, Users, WifiOff } from "lucide-react";
import { redirect } from "next/navigation";

type FeaturesMenuProps = {
  setIsVisibleAction: Dispatch<SetStateAction<boolean>>;
};

export default function FeaturesMenu({
  setIsVisibleAction,
}: FeaturesMenuProps) {
  const scroll = useRef<LocomotiveScroll>(null);

  useEffect(() => {
    scroll.current = new LocomotiveScroll({
      lenisOptions: { smoothWheel: true },
    });

    return () => {
      scroll.current?.destroy();
    };
  }, []);

  const handleScrollTo = useCallback(
    (id: string) => {
      const target = document.getElementById(id);
      if (target) {
        scroll.current?.scrollTo(target, {
          offset: 60,
          onComplete: () => setIsVisibleAction(false),
        });
      } else {
        redirect(`/#${id}`);
      }
    },
    [setIsVisibleAction],
  );

  return (
    <div className={styles.container}>
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
    </div>
  );
}
