"use client";

import styles from "./page.module.css";
import GroupInfo1 from "@/components/Animations/GroupInfo1";
import Core from "@/components/Core";
import GroupsHero from "@/components/GroupsHero";
import Header from "@/components/Header";
import { VideoCarrouselProvider } from "@/contexts/VideoCarrouselProvider";
import useTheme from "@/hooks/useTheme";
import {
  DARK_GROUP_VIDEOS,
  GroupSections,
  LIGHT_GROUP_VIDEOS,
} from "@/utils/InfoUtils";

export default function GroupPage() {
  const theme = useTheme();

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
          <Core
            videos={theme === "dark" ? DARK_GROUP_VIDEOS : LIGHT_GROUP_VIDEOS}
            animations={[<GroupInfo1 key="group-info-1" />]}
            sections={GroupSections}
          />
        </main>
      </VideoCarrouselProvider>
    </div>
  );
}
