import { TabKey } from "@/types/gmbcc";
import { create } from "zustand";

interface TabState {
  activeTab: TabKey;
  setActiveTab: (tab: TabKey) => void;
}

export const useSeriesOfEventsGmbccStore = create<TabState>((set) => ({
  activeTab: "PRE-EVENTS",
  setActiveTab: (tab) => set({ activeTab: tab }),
}));
