import { TimelineKey, TimelineData } from "@/types/gmbcc";
import TimelineApril from "./timeline-april";
import TimelineMay from "./timeline-may";
import TimelineJune from "./timeline-june";
import TimelineJuly from "./timeline-july";

export const timelineData: TimelineData = {
  APRIL: {
    content: <TimelineApril />,
  },
  MAY: {
    content: <TimelineMay />,
  },
  JUNE: {
    content: <TimelineJune />,
  },
  JULY: {
    content: <TimelineJuly />,
  },
};

export const timelineKeys: TimelineKey[] = ["APRIL", "MAY", "JUNE", "JULY"];
