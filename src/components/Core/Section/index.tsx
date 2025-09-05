import styles from "./index.module.css";

import type { InfoSection } from "./infoSections";

import { ReceiptText } from "lucide-react";

export default function Section({ id, title, subtitle, icon }: InfoSection) {
  const getIcon = (i: string) => {
    switch (i) {
      case "ReceiptText":
        return <ReceiptText size={40} style={{ marginBottom: "16px" }} />;
    }
  };

  return (
    <div id={id} className={styles.container}>
      {getIcon(icon)}
      <h2 className={styles.title}>{title}</h2>
      <p className={styles.subtitle}>{subtitle}</p>
    </div>
  );
}
