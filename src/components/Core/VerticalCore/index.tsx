"use client";

import styles from "./index.module.css";

import { useCallback, useEffect } from "react";
import LocomotiveScroll from "locomotive-scroll";

import Section from "./Section";
import { useVideoCarrousel } from "@/contexts/VideoCarrouselProvider";
import { InfoSection, Sections } from "@/utils/InfoUtils";

export default function VerticalCore() {
  const { handleChangeVideo } = useVideoCarrousel();

  const handleScrollVideoEvent = useCallback(
    (e: Event) => {
      const { target, way } = (e as CustomEvent).detail;

      if (way === "enter") {
        const idArray = target.id.split("-");
        const index = Number(idArray[3]) - 1;
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
    addEventListener("scrollVideoEvent", handleScrollVideoEvent);

    return () =>
      removeEventListener("scrollVideoEvent", handleScrollVideoEvent);
  }, [handleScrollVideoEvent]);

  const renderItems = useCallback(
    (item: InfoSection) => <Section key={item.id} {...item} />,
    [],
  );

  return (
    <div className={styles.container} data-scroll-container>
      {Sections.map(renderItems)}
    </div>
  );
}
