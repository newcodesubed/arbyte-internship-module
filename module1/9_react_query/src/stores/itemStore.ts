import { createStore } from "zustand/vanilla";

export type Item = {
  id: string;
  name: string;
  category: "Monitor" | "Keyboard" | "Mouse";
  color: "Black" | "White" | "Gray";
};

type State = {
  items: Item[];
  filterCategory: "All" | Item["category"];
  filterColor: "All" | Item["color"];
  addItem: (item: Item) => void;
  deleteItem: (id: string) => void;
  setFilterCategory: (cat: State["filterCategory"]) => void;
  setFilterColor: (color: State["filterColor"]) => void;
};

export const itemStore = createStore<State>((set) => ({
  items: [
    { id: "1", name: "Dell UltraSharp", category: "Monitor", color: "Black" },
    { id: "2", name: "Logitech MX Keys", category: "Keyboard", color: "White" },
  ],
  filterCategory: "All",
  filterColor: "All",

  addItem: (item) => set((s) => ({ items: [...s.items, item] })),
  deleteItem: (id) =>
    set((s) => ({ items: s.items.filter((i) => i.id !== id) })),
  setFilterCategory: (cat) => set({ filterCategory: cat }),
  setFilterColor: (color) => set({ filterColor: color }),
}));
