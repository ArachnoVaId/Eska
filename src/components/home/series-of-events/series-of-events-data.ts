import { TabData, TabKey } from "@/types/series-of-events";
import logoGmbcc from "@/assets/logo-gmbcc.webp";
import logoIdeas from "@/assets/logo-ideas.webp";
import logoExposure from "@/assets/logo-exposure.webp";
import gmbccImage from "@/assets/gmbcc-picture.webp";
import exposureImage from "@/assets/exposure-picture.webp";
import ideasImage from "@/assets/ideas-picture.webp";

export const tabData: TabData = {
  gmbcc: {
    title: "Gadjah Mada Business Case Competition",
    logo: logoGmbcc,
    image: gmbccImage,
    href: "/gmbcc",
  },
  ideas: {
    title: "Indonesia Studentpreneur",
    logo: logoIdeas,
    image: ideasImage,
    href: "/ideas",
  },
  exposure: {
    title: "Thematic Curated Market",
    logo: logoExposure,
    image: exposureImage,
    href: "/exposure",
  },
};

export const tabKeys: TabKey[] = ["gmbcc", "ideas", "exposure"];
