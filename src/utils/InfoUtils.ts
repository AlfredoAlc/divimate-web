import { ForwardRefExoticComponent, RefAttributes } from "react";
import {
  BookCheck,
  LucideProps,
  ReceiptText,
  SlidersHorizontal,
  Users,
  WifiOff,
} from "lucide-react";

export type InfoSection = {
  id: string;
  title: string;
  subtitle: string;
  Icon: ForwardRefExoticComponent<
    Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>
  >;
  extra?: string;
};

export const Sections: InfoSection[] = [
  {
    id: "info-1",
    title: "Track what everyone owes",
    subtitle:
      "See the balances for all your friends in one screen. If multiple currencies balances are available toggle the currency balance from the header.",
    Icon: ReceiptText,
  },
  {
    id: "info-2",
    title: "Group expenses",
    subtitle:
      "Create groups for any purpose, invite your friends and start adding expenses. Review any expense and see clear balances.",
    Icon: Users,
    extra: "see more",
  },
  {
    id: "info-3",
    title: "Split expenses your way",
    subtitle:
      "You have the flexibility to divide costs however you need. Choose from equal shares, exact amounts, percentages, itemized shares, or adjustments to make sure everyone pays their fair part.",
    Icon: SlidersHorizontal,
  },
  {
    id: "info-4",
    title: "Works offline",
    subtitle:
      "No connection. No problem, continue adding expenses it'll sync later.",
    Icon: WifiOff,
  },
];

export const DARK_VIDEOS = [
  "/videos/info-1-dark.mov",
  "/videos/info-2-dark.mov",
  "/videos/info-3-dark.mov",
  "/videos/info-4-dark.mov",
];

export const LIGHT_VIDEOS = [
  "/videos/info-1-light.mov",
  "/videos/info-2-light.mov",
  "/videos/info-3-light.mov",
  "/videos/info-4-light.mov",
];

export const GroupSections: InfoSection[] = [
  {
    id: "info-1",
    title: "Group notes & checklist",
    subtitle: "Keep every group related information on one place.",
    Icon: BookCheck,
  },
];

export const DARK_GROUP_VIDEOS = ["/videos/group-info-1-dark.mov"];

export const LIGHT_GROUP_VIDEOS = ["/videos/group-info-1-light.mov"];
