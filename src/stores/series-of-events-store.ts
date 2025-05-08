import { create } from "zustand";

type TabKey = "gmbcc" | "ideas" | "exposure";

interface TabState {
  activeTab: TabKey;
  setActiveTab: (tab: TabKey) => void;
}

export const useSeriesOfEventsStore = create<TabState>((set) => ({
  activeTab: "gmbcc",
  setActiveTab: (tab) => set({ activeTab: tab }),
}));
