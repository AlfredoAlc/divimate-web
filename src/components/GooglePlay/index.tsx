import Image from "next/image";

type GooglePlayProps = {
  width?: number;
  height?: number;
};

export default function GooglePlay({
  width = 162,
  height = 48,
}: GooglePlayProps) {
  return (
    <a
      href="https://play.google.com/store/apps/details?id=com.alws.divimate"
      target="_blank"
      style={{
        position: "relative",
        width,
        height,
      }}
    >
      <Image
        src={"/images/google-play-badge.png"}
        alt="google-play-badge"
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw"
      />
    </a>
  );
}
