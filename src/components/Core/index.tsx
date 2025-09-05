"use client";

import styles from "./index.module.css";

import type { InfoSection } from "./Section/infoSections";

import { useCallback, useEffect, useRef, useState } from "react";
import LocomotiveScroll from "locomotive-scroll";

import Section from "./Section";
import { Sections } from "./Section/infoSections";

export default function Core() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const [isFixed, setIsFixed] = useState(false);
  const [width, setWidth] = useState(0);

  const updateWidth = useCallback(() => {
    const el = document.getElementById("fixed-container");
    if (el) setWidth(el.clientWidth);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isFixed]);

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
    addEventListener("scrollEvent", (e: Event) => {
      const { target, way } = (e as CustomEvent).detail;

      if (target.id === "info-2") {
        setIsFixed(way === "enter");
        updateWidth();
      }
    });
  }, [updateWidth]);

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
        <div
          style={{
            width: "35vh",
            height: "35vh",
            backgroundColor: "blue",
          }}
        />
      </div>
      <div ref={scrollContainerRef} data-scroll-container style={{ flex: 1 }}>
        {Sections.map(renderItems)}
        <div
          id="info-2"
          className={styles.infoContainer}
          style={{ backgroundColor: "aliceblue" }}
          data-scroll
          data-scroll-repeat
          data-scroll-ignore-fold
          data-scroll-call="scrollEvent"
        >
          <h2>Some text for divimate infosdfsdf</h2>
        </div>
      </div>
    </div>
  );
}
