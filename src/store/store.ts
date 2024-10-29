import { LayoutItem } from "@/utils/types";
import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

interface LayoutState {
  layout: LayoutItem[];
  saveLayout: (layout: LayoutItem[]) => void;
  clearLayout: () => void;
}

// Create the Zustand store with devtools and persist middleware
export const useLayoutStore = create<LayoutState>()(
  devtools(
    persist(
      (set) => ({
        layout: [], // initial layout state
        saveLayout: (newLayout: LayoutItem[]) => set({ layout: newLayout }), // function to update the layout
        clearLayout: () => set({ layout: [] }), // function to clear the layout
      }),
      {
        name: "dashboard-storage", // name of the storage item
      }
    ),
  )
);
