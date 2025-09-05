import { ReactNode } from "react";
import Image from "next/image";

type PhoneFrameProps = {
  children: ReactNode;
  width: number;
  height: number;
};

export default function PhoneFrame({
  children,
  width = 255,
  height = 540,
}: PhoneFrameProps) {
  return (
    <div
      style={{
        position: "relative",
        width,
        height,
      }}
    >
      {children}
      <Image
        src="/images/phone-frame.png"
        alt="phone-frame"
        width={width}
        height={height}
        style={{
          position: "absolute",
          pointerEvents: "none",
          top: 0,
          left: 0,
        }}
      />
    </div>
  );
}
