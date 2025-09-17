import Large from "./Large";
import Small from "./Small";
import useScreenWidth from "@/hooks/useScreenWidth";

export default function Header() {
  const screenWidth = useScreenWidth();

  if (screenWidth === "large") return <Large />;
  else return <Small />;
}
