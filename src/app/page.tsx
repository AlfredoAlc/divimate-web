"use client";

import "./globals.css";

import Info1 from "@/components/Animations/Info1";
import Info2 from "@/components/Animations/Info2";
import Info3 from "@/components/Animations/Info3";
import Info4 from "@/components/Animations/Info4";
import Core from "@/components/Core";
import FloatingCTA from "@/components/FloatingCTA";
import Hero from "@/components/Hero";
import Outro from "@/components/Outro";
import { VideoCarrouselProvider } from "@/contexts/VideoCarrouselProvider";
import useTheme from "@/hooks/useTheme";
import { DARK_VIDEOS, LIGHT_VIDEOS, Sections } from "@/utils/InfoUtils";

export default function Home() {
  const theme = useTheme();

  return (
    <div className="page">
      <VideoCarrouselProvider>
        <main>
          <Hero />
          <Core
            videos={theme === "dark" ? DARK_VIDEOS : LIGHT_VIDEOS}
            animations={[
              <Info1 key="animation-balances" />,
              <Info2 key="animation-group-expenses" />,
              <Info3 key="animation-split-expenses" />,
              <Info4 key="animation-wifi-off" />,
            ]}
            sections={Sections}
          />
          <FloatingCTA />
          <Outro />
        </main>
      </VideoCarrouselProvider>
    </div>
  );
}
