import { TabKey } from "@/types/ideas";
import { create } from "zustand";

interface TabState {
  activeTab: TabKey;
  setActiveTab: (tab: TabKey) => void;
}

export const useInsightSeriesStore = create<TabState>((set) => ({
  activeTab: "Insight Series",
  setActiveTab: (tab) => set({ activeTab: tab }),
}));
