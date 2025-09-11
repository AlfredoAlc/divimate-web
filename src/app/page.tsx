import styles from "./page.module.css";
import Core from "@/components/Core";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import { VideoCarrouselProvider } from "@/contexts/VideoCarrouselProvider";

export default function Home() {
  return (
    <div className={styles.page}>
      <VideoCarrouselProvider>
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
      </VideoCarrouselProvider>
    </div>
  );
}
