import { TimelineKey } from "@/types/gmbcc";
import { create } from "zustand";

interface TabState {
  activeTab: TimelineKey;
  setActiveTab: (tab: TimelineKey) => void;
}

export const useTimelineGmbccStore = create<TabState>((set) => ({
  activeTab: "APRIL",
  setActiveTab: (tab) => set({ activeTab: tab }),
}));
