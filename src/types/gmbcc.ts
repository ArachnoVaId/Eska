import { ReactNode } from "react";

export type TabKey = "PRE-EVENTS" | "COMPETITION" | "SIDE-EVENTS";

export type TabData = {
  [key in TabKey]: {
    image: string;
    content: string;
  };
};

export type TimelineKey = "APRIL" | "MAY" | "JUNE" | "JULY";

export type TimelineData = {
  [key in TimelineKey]: {
    content: ReactNode;
  };
};

export type Testimonial = {
  content: string;
  from: string;
};

export type RegistrantType = "individual" | "team";

export type Price = {
  [key in RegistrantType]: {
    earlyBirdPrice?: string;
    earlyBirdPriceInter?: string;
    normalPrice?: string;
    normalPriceInter?: string;
    extendedPrice?: string;
    extendedPriceInter?: string;
  };
};
