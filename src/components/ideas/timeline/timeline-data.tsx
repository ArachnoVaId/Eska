import type { TimelineData, TimelineKey } from "@/types/ideas";
import TimelineApril from "@/components/ideas/timeline/timeline-april";
import TimelineMay from "./timeline-may";
import TimelineJune from "./timeline-june";
import TimelineJuly from "./timeline-july";

export const timelineData: TimelineData = {
  MAY: {
    content: <TimelineMay />,
  },
  JUNE: {
    content: <TimelineJune />,
  },
  JULY: {
    content: <TimelineJuly />,
  },
  APRIL: {
    content: <TimelineApril />,
  },
};

export const timelineKeys: TimelineKey[] = ["APRIL", "MAY", "JUNE", "JULY"];
