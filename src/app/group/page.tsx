import styles from "./page.module.css";
import GroupsHero from "@/components/GroupsHero";
import Header from "@/components/Header";
import { VideoCarrouselProvider } from "@/contexts/VideoCarrouselProvider";

export default function GroupPage() {
  return (
    <div className={styles.page}>
      <VideoCarrouselProvider>
        <main
          style={{
            minHeight: "100vh",
            width: "1000px",
            padding: "8px",
            position: "relative",
          }}
        >
          <div className={styles.gradientBackground} />
          <Header />
          <GroupsHero />
          {/*<Core />*/}
        </main>
      </VideoCarrouselProvider>
    </div>
  );
}
