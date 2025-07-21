import { create } from "zustand";
import { useItemStore } from "./itemStore";

type FilterState = {
  category: "All" | "Monitor" | "Keyboard" | "Mouse";
  color: "All" | "Black" | "White";
  setCategory: (cat: FilterState["category"]) => void;
  setColor: (color: FilterState["color"]) => void;
  filteredItems: () => ReturnType<typeof useItemStore.getState>["items"];
  itemCount: () => number;
};

export const useFilterStore = create<FilterState>((set, get) => ({
  category: "All",
  color: "All",
  setCategory: (category) => set({ category }),
  setColor: (color) => set({ color }),
  filteredItems: () => {
    const { items } = useItemStore.getState();
    const { category, color } = get();

    return items.filter((item) => {
      const catMatch = category === "All" || item.category === category;
      const colorMatch = color === "All" || item.color === color;
      return catMatch && colorMatch;
    });
  },
  itemCount: () => get().filteredItems().length,
}));
