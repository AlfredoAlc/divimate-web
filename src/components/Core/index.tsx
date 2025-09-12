"use client";

import HorizontalCore from "./HorizontalCore";
import VerticalCore from "./VerticalCore";
import useScreenWidth from "@/hooks/useScreenWidth";

export default function Core() {
  const screenSize = useScreenWidth();

  if (screenSize === "small") return <VerticalCore />;
  else return <HorizontalCore />;
}
