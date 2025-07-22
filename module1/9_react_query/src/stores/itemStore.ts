import { create } from "zustand";

export type Category = "Monitor" | "Keyboard" | "Mouse" | "All";
export type Color = "Black" | "White" | "Red" | "Blue" | "All";

export type Item = {
  id: string;
  name: string;
  category: Category;
  color: Color;
};

type State = {
  items: Item[];
  filterCategory: Category;
  filterColor: Color;

  addItem: (item: Item) => void;
  deleteItem: (id: string) => void;
  setFilterCategory: (category: Category) => void;
  setFilterColor: (color: Color) => void;

  filteredItems: () => Item[];
  counts: () => { total: number; filtered: number };
};

export const useItemStore = create<State>((set, get) => ({
  items: [
    { id: "1", name: "Dell UltraSharp", category: "Monitor", color: "Black" },
    { id: "2", name: "Logitech MX Keys", category: "Keyboard", color: "White" },
  ],
  filterCategory: "All",
  filterColor: "All",

  addItem: (item) =>
    set((state) => ({
      items: [...state.items, item],
    })),

  deleteItem: (id) =>
    set((state) => ({
      items: state.items.filter((item) => item.id !== id),
    })),

  setFilterCategory: (category) => set({ filterCategory: category }),
  setFilterColor: (color) => set({ filterColor: color }),

  filteredItems: () => {
    const { items, filterCategory, filterColor } = get();
    return items.filter(
      (item) =>
        (filterCategory === "All" || item.category === filterCategory) &&
        (filterColor === "All" || item.color === filterColor)
    );
  },

  counts: () => {
    const total = get().items.length;
    const filtered = get().filteredItems().length;
    return { total, filtered };
  },
}));
