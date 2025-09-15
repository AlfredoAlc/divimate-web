"use client";

import "../globals.css";

import GroupInfo1 from "@/components/Animations/GroupInfo1";
import Core from "@/components/Core";
import GroupsHero from "@/components/GroupsHero";
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
    <div className="page">
      <VideoCarrouselProvider>
        <main>
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
