"use client";

import styles from "./index.module.css";

import type { InfoSection } from "./Section/utils";

import { useCallback, useEffect, useRef, useState } from "react";
import LocomotiveScroll from "locomotive-scroll";

import VideoCarrousel from "../VideoCarrousel";
import Section from "./Section";
import { DARK_VIDEOS, LIGHT_VIDEOS, Sections } from "./Section/utils";
import useTheme from "@/hooks/useTheme";

export default function Core() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const theme = useTheme();

  const isLeaving = useRef(false);

  const [currentVideo, setCurrentVideo] = useState(0);
  const [isFixed, setIsFixed] = useState(false);
  const [width, setWidth] = useState(0);

  const updateWidth = useCallback(() => {
    const el = document.getElementById("fixed-container");
    if (el) setWidth(el.clientWidth);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isFixed]);

  const handleScrollEvent = useCallback(
    (e: Event) => {
      const { target, way } = (e as CustomEvent).detail;

      if (target.id === "info-1")
        isLeaving.current = way === "enter" && isFixed;

      if (target.id === "info-2") {
        setIsFixed(way === "enter" || !isLeaving.current);
        updateWidth();
      }
    },
    [updateWidth, isLeaving, isFixed],
  );

  const handleScrollTitleEvent = useCallback((e: Event) => {
    const { target, way } = (e as CustomEvent).detail;

    if (way === "enter") {
      const idArray = target.id.split("-");
      const index = Number(idArray[2]) - 1;
      setCurrentVideo(index);
    }
  }, []);

  useEffect(() => {
    if (scrollContainerRef.current) {
      const scroll = new LocomotiveScroll({
        lenisOptions: {
          content: scrollContainerRef.current,
          smoothWheel: true,
        },
      });

      return () => {
        scroll.destroy();
      };
    }
  }, [scrollContainerRef]);

  useEffect(() => {
    addEventListener("scrollEvent", handleScrollEvent);
  }, [handleScrollEvent]);

  useEffect(() => {
    addEventListener("scrollTitleEvent", handleScrollTitleEvent);
  }, [handleScrollTitleEvent]);

  useEffect(() => {
    updateWidth();

    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, [updateWidth]);

  const renderItems = useCallback(
    (item: InfoSection) => <Section key={item.id} {...item} />,
    [],
  );

  return (
    <div className={styles.container}>
      <div id="fixed-container" style={{ flex: isFixed ? 1 : 0 }} />
      <div
        className={styles.animationsContainer}
        style={{
          position: isFixed ? "fixed" : "relative",
          top: isFixed ? 0 : undefined,
          width,
        }}
      >
        <VideoCarrousel
          currentVideo={currentVideo}
          videos={theme === "dark" ? DARK_VIDEOS : LIGHT_VIDEOS}
        />
      </div>
      <div ref={scrollContainerRef} data-scroll-container style={{ flex: 1 }}>
        {Sections.map(renderItems)}
      </div>
    </div>
  );
}
