import styles from "./page.module.css";
import Core from "@/components/Core";
import Header from "@/components/Header";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <div className={styles.page}>
      <main
        style={{
          minHeight: "100vh",
          width: "1000px",
          padding: "8px",
        }}
      >
        <Header />
        <Hero />
        <Core />
      </main>
    </div>
  );
}
