import { useEffect, useState } from "react";

export default function useScreenWidth() {
  const [screenSize, setScreenSize] = useState<"small" | "large">("large");

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 768px)");
    setScreenSize(mediaQuery.matches ? "small" : "large");

    const listener = (e: MediaQueryListEvent) =>
      setScreenSize(e.matches ? "small" : "large");
    mediaQuery.addEventListener("change", listener);

    return () => mediaQuery.removeEventListener("change", listener);
  }, []);

  return screenSize;
}
