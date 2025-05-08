export type TabKeys =
  | "CURATED MARKET"
  | "INTERACTIVE SPACE"
  | "ENTERTAINMENT"
  | "PRE-EVENT ACTIVATION";

export type TabData = {
  [key in TabKeys]: {
    content: string;
    image: string;
  };
};
