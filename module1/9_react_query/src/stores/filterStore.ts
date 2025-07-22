import { create } from "zustand";
import { useItemStore } from "./itemStore";
import type { Item } from "./itemStore";

export type CategoryFilter = "All" | "Monitor" | "Keyboard" | "Mouse";
export type ColorFilter = "All" | "Black" | "White";

type State = {
  category: CategoryFilter;
  color: ColorFilter;
  setCategory: (category: CategoryFilter) => void;
  setColor: (color: ColorFilter) => void;
  filteredItems: () => Item[];
  itemCount: () => number;
};

export const useFilterStore = create<State>((set, get) => ({
  category: "All",
  color: "All",
  setCategory: (category) => set({ category }),
  setColor: (color) => set({ color }),
  filteredItems: () => {
    const { category, color } = get();
    let items = useItemStore.getState().items;
    if (category !== "All")
      items = items.filter((i) => i.category === category);
    if (color !== "All") items = items.filter((i) => i.color === color);
    return items;
  },
  itemCount: () => get().filteredItems().length,
}));
