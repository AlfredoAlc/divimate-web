"use client";

import React, { ReactNode, useMemo, useRef } from "react";

import AnimatedVideo from "./AnimatedVideo";
import { useVideoCarrousel } from "@/contexts/VideoCarrouselProvider";

type VideoCarrouselProps = {
  videos: string[];
  animations: ReactNode[];
  width?: number;
  height?: number;
};

export default function VideoCarrousel({
  videos,
  animations,
  width = 240,
  height = 497,
}: VideoCarrouselProps) {
  const { currentVideo, isInit, isAnimationVisible } = useVideoCarrousel();

  const tempVideoRef = useRef<HTMLVideoElement>(null);

  const videoRefs = useMemo(
    () => videos.map(() => tempVideoRef),
    [videos, tempVideoRef],
  );

  return (
    <div style={{ width, height, position: "relative" }}>
      {videoRefs.map((ref, i) => (
        <AnimatedVideo
          key={i}
          ref={ref}
          src={videos[currentVideo]}
          animation={animations[currentVideo]}
          isInit={isInit}
          isAnimationVisible={isAnimationVisible}
        />
      ))}
    </div>
  );
}
