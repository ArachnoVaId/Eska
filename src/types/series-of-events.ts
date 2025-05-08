export type TabKey = "gmbcc" | "ideas" | "exposure";

export type TabData = {
  [key in TabKey]: {
    title: string;
    image: string;
    logo: string;
    href: string;
  };
};
