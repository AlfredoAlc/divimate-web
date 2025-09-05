export type InfoSection = {
  id: string;
  title: string;
  subtitle: string;
  icon: string;
};

export const Sections: InfoSection[] = [
  {
    id: "info-1",
    title: "Track what everyone owes",
    subtitle:
      "See the balances for all your friends in one screen. If multiple currencies balances are available toggle the currency balance from the header.",
    icon: "ReceiptText",
  },
];
