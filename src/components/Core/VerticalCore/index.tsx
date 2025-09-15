"use client";

import styles from "./index.module.css";

import type { InfoSection } from "@/utils/InfoUtils";

import { useCallback, useEffect } from "react";
import LocomotiveScroll from "locomotive-scroll";

import { CoreProps } from "..";
import Section from "./Section";
import { useVideoCarrousel } from "@/contexts/VideoCarrouselProvider";

export default function VerticalCore({
  sections,
  videos,
  animations,
}: CoreProps) {
  const { handleChangeVideo } = useVideoCarrousel();

  const handleScrollVideoEvent = useCallback(
    (e: Event) => {
      const { target, way } = (e as CustomEvent).detail;

      if (way === "enter") {
        const targetId = target.id.replace("video-container-", "");
        const index = sections.findIndex((s) => s.id === targetId);
        handleChangeVideo(index);
      }
    },
    [handleChangeVideo, sections],
  );

  useEffect(() => {
    const scroll = new LocomotiveScroll({
      lenisOptions: { smoothWheel: true },
    });

    return () => {
      scroll.destroy();
    };
  }, []);

  useEffect(() => {
    addEventListener("scrollVideoEvent", handleScrollVideoEvent);

    return () =>
      removeEventListener("scrollVideoEvent", handleScrollVideoEvent);
  }, [handleScrollVideoEvent]);

  const renderItems = useCallback(
    (item: InfoSection, i: number) => (
      <Section
        key={item.id}
        {...item}
        index={i}
        video={videos[i]}
        animation={animations[i]}
      />
    ),
    [videos, animations],
  );

  return (
    <div className={styles.container} data-scroll-container>
      {sections.map(renderItems)}
    </div>
  );
}
