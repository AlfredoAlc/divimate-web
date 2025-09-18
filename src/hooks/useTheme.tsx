import { useEffect, useState } from "react";

type ColorsProps = {
  light: { [key: string]: string };
  dark: { [key: string]: string };
};

export const Colors: ColorsProps = {
  light: {
    background: "#e8e8e8",
    foreground: "#171717",
    azure: "#1f628e",
    grayAzure: "#88a9c3",
    accent: "#452aef",
    text: "#11181c",
    error: "#f62913",
    success: "#257e1a",
    gray: "#ababab",
    backgroundAlt1: "#40a6ff",
    backgroundAlt2: "#e2c08d",
    backgroundAlt3: "#8bce97",
    backgroundAlt4: "#f8af49",
    backgroundAlt5: "#7a70b2",
    backgroundAlt6: "#74d1ea",
  },
  dark: {
    background: "#181818",
    foreground: "#ededed",
    azure: "#1f628e",
    grayAzure: "#88a9c3",
    accent: "#5c45f5",
    text: "#ecedee",
    error: "#ff5a36",
    success: "#9afd82",
    gray: "#979797",
    backgroundAlt1: "#40a6ff",
    backgroundAlt2: "#e2c08d",
    backgroundAlt3: "#8bce97",
    backgroundAlt4: "#f8af49",
    backgroundAlt5: "#7a70b2",
    backgroundAlt6: "#74d1ea",
  },
};

export default function useTheme() {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    setTheme(mediaQuery.matches ? "dark" : "light");

    const listener = (e: MediaQueryListEvent) =>
      setTheme(e.matches ? "dark" : "light");
    mediaQuery.addEventListener("change", listener);

    return () => mediaQuery.removeEventListener("change", listener);
  }, []);

  return theme;
}
