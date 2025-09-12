"use client";

import styles from "./index.module.css";

import type { InfoSection } from "@/utils/InfoUtils";

import { useCallback, useEffect, useRef, useState } from "react";
import LocomotiveScroll from "locomotive-scroll";

import Info1 from "../../Animations/Info1";
import Info2 from "../../Animations/Info2";
import Info3 from "../../Animations/Info3";
import Info4 from "../../Animations/Info4";
import VideoCarrousel from "../../VideoCarrousel";
import Section from "./Section";
import { useVideoCarrousel } from "@/contexts/VideoCarrouselProvider";
import useTheme from "@/hooks/useTheme";
import { DARK_VIDEOS, LIGHT_VIDEOS, Sections } from "@/utils/InfoUtils";

export default function HorizontalCore() {
  const theme = useTheme();

  const { handleChangeVideo } = useVideoCarrousel();

  const isLeaving = useRef(false);

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

  const handleScrollTitleEvent = useCallback(
    (e: Event) => {
      const { target, way } = (e as CustomEvent).detail;

      if (way === "enter") {
        const idArray = target.id.split("-");
        const index = Number(idArray[2]) - 1;
        handleChangeVideo(index);
      }
    },
    [handleChangeVideo],
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
          animations={[
            <Info1 key="animation-info-1" />,
            <Info2 key="animation-info-2" />,
            <Info3 key="animation-info-3" />,
            <Info4 key="animation-info-4" />,
          ]}
          videos={theme === "dark" ? DARK_VIDEOS : LIGHT_VIDEOS}
        />
      </div>
      <div data-scroll-container style={{ flex: 1 }}>
        {Sections.map(renderItems)}
      </div>
    </div>
  );
}
