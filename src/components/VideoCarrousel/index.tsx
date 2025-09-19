"use client";

import React, { createRef, ReactNode, useMemo } from "react";

import AnimatedVideo from "./AnimatedVideo";
import { useVideoCarrousel } from "@/contexts/VideoCarrouselProvider";

type VideoCarrouselProps = {
  videos: string[];
  animations: ReactNode[];
  posters: string[];
  width?: number;
  height?: number;
};

export default function VideoCarrousel({
  videos,
  animations,
  posters,
  width = 240,
  height = 497,
}: VideoCarrouselProps) {
  const { currentVideo, isAnimationVisible } = useVideoCarrousel();

  const videoRefs = useMemo(
    () => videos.map(() => createRef<HTMLVideoElement>()),
    [videos],
  );

  return (
    <div style={{ width, height, position: "relative" }}>
      <AnimatedVideo
        key={currentVideo}
        ref={videoRefs[currentVideo]}
        src={videos[currentVideo]}
        animation={animations[currentVideo]}
        poster={posters[currentVideo]}
        isAnimationVisible={isAnimationVisible}
      />
    </div>
  );
}
