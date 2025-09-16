"use client";

import styles from "./index.module.css";

import type { InfoSection } from "@/utils/InfoUtils";

import { useCallback, useEffect, useRef, useState } from "react";
import LocomotiveScroll from "locomotive-scroll";

import { CoreProps } from "..";
import VideoCarrousel from "../../VideoCarrousel";
import Section from "./Section";
import { useVideoCarrousel } from "@/contexts/VideoCarrouselProvider";

export default function HorizontalCore({
  sections,
  videos,
  animations,
}: CoreProps) {
  const { handleChangeVideo } = useVideoCarrousel();

  const currentHash = useRef<string>(null);

  const [isFixed, setIsFixed] = useState(false);
  const [isBottom, setIsBottom] = useState(false);
  const [width, setWidth] = useState(0);

  const updateWidth = useCallback(() => {
    const el = document.getElementById("fixed-container");
    if (el) setWidth(el.clientWidth);
  }, []);

  const handleScrollEvent = useCallback(
    (e: Event) => {
      const { target, way, from } = (e as CustomEvent).detail;

      const index = sections.findIndex((s) => s.id === target.id);

      if (index === 1 && from === "start") {
        setIsFixed(way === "enter");
      }
      if (index === sections.length - 2) {
        setIsBottom(from === "end" && way === "leave");
      }
    },
    [sections],
  );

  const handleScrollTitleEvent = useCallback(
    (e: Event) => {
      const { target, way } = (e as CustomEvent).detail;

      if (way === "enter") {
        const targetId = target.id.replace("title-", "");
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
    addEventListener("scrollEvent", handleScrollEvent);

    return () => removeEventListener("scrollEvent", handleScrollEvent);
  }, [handleScrollEvent]);

  useEffect(() => {
    addEventListener("scrollTitleEvent", handleScrollTitleEvent);

    return () =>
      removeEventListener("scrollTitleEvent", handleScrollTitleEvent);
  }, [handleScrollTitleEvent]);

  useEffect(() => {
    updateWidth();

    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, [updateWidth]);

  useEffect(() => {
    const { hash } = window.location;
    const hashValue = hash?.split("#")?.[1];

    if (hashValue && hashValue !== currentHash.current) {
      const index = sections.findIndex((s) => s.id === hashValue);
      setIsFixed(true);
      handleChangeVideo(index);
      currentHash.current = hashValue;
    }
  }, [handleChangeVideo, sections, currentHash]);

  const renderItems = useCallback(
    (item: InfoSection) => <Section key={item.id} {...item} />,
    [],
  );

  return (
    <div className={styles.container}>
      <div id="fixed-container" style={{ flex: 1, position: "relative" }}>
        <div
          className={styles.animationsContainer}
          style={{
            position:
              isFixed && !isBottom
                ? "fixed"
                : isBottom
                  ? "absolute"
                  : "relative",
            top: isBottom ? undefined : 0,
            bottom: isBottom ? 0 : undefined,
            width,
          }}
        >
          <VideoCarrousel animations={animations} videos={videos} />
        </div>
      </div>
      <div data-scroll-container style={{ flex: 1 }}>
        {sections.map(renderItems)}
      </div>
    </div>
  );
}
