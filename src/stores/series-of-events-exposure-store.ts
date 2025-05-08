import { TabKeys } from "@/types/exposure";
import { create } from "zustand";

interface TabState {
  activeTab: TabKeys;
  setActiveTab: (tab: TabKeys) => void;
}

export const useSeriesOfEventsExposureStore = create<TabState>((set) => ({
  activeTab: "CURATED MARKET",
  setActiveTab: (tab) => set({ activeTab: tab }),
}));
