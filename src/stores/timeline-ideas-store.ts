import { TimelineKey } from "@/types/ideas";
import { create } from "zustand";

interface TabState {
  activeTab: TimelineKey;
  setActiveTab: (tab: TimelineKey) => void;
}

export const useTimelineIdeasStore = create<TabState>((set) => ({
  activeTab: "APRIL",
  setActiveTab: (tab) => set({ activeTab: tab }),
}));
