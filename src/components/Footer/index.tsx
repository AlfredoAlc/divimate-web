import styles from "./index.module.css";

import Image from "next/image";

import useTheme from "@/hooks/useTheme";

export default function Footer() {
  const theme = useTheme();

  return (
    <div className={styles.container}>
      <p className={styles.text}>Find us on:</p>
      <a
        href="https://www.facebook.com/profile.php?id=61579293178791"
        target="_blank"
      >
        <Image
          alt="facebook"
          src={"/images/facebook.png"}
          width={28}
          height={28}
          style={{ marginRight: 22 }}
        />
      </a>
      <a href="https://x.com/divimate" target="_blank">
        <Image
          alt="x"
          src={`/images/x-${theme}.png`}
          width={23}
          height={23}
          style={{ marginRight: 16 }}
        />
      </a>
      <a href="https://www.youtube.com/@Divimate" target="_blank">
        <Image
          alt="youtube"
          src={"/images/youtube.png"}
          width={51}
          height={48}
          style={{ marginRight: 14 }}
        />
      </a>
    </div>
  );
}
