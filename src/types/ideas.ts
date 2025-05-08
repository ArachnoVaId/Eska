import { ReactNode } from "react";

export type TabKey =
  | "Insight Series"
  | "Webinar"
  | "Bootcamp"
  | "Sustainable Insight"
  | "Social Project"
  | "Ideas Summit";

export type TabData = {
  [key in TabKey]: {
    buttonLabel: string;
    content: string;
  };
};

export type TimelineKey = "APRIL" | "MAY" | "JUNE" | "JULY";

export type TimelineData = {
  [key in TimelineKey]: {
    content: ReactNode;
  };
}
