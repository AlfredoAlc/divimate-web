"use client";

import type { InfoSection } from "@/utils/InfoUtils";
import type { ReactNode } from "react";

import HorizontalCore from "./HorizontalCore";
import VerticalCore from "./VerticalCore";
import useScreenWidth from "@/hooks/useScreenWidth";

export type CoreProps = {
  sections: InfoSection[];
  videos: string[];
  animations: ReactNode[];
};

export default function Core({ sections, videos, animations }: CoreProps) {
  const screenSize = useScreenWidth();

  if (screenSize === "small")
    return (
      <VerticalCore
        sections={sections}
        videos={videos}
        animations={animations}
      />
    );
  else
    return (
      <HorizontalCore
        sections={sections}
        videos={videos}
        animations={animations}
      />
    );
}
