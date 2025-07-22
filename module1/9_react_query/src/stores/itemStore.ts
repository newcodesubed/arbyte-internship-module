export type Item = {
  id: string;
  name: string;
  category: "Monitor" | "Keyboard" | "Mouse";
  color: "Black" | "White";
};

import { create } from "zustand";

type State = {
  items: Item[];
  setItems: (items: Item[]) => void;
  addItem: (item: Item) => void;
  removeItem: (id: string) => void;
};

export const useItemStore = create<State>((set) => ({
  items: [],
  setItems: (items) => set({ items }),
  addItem: (item) => set((s) => ({ items: [...s.items, item] })),
  removeItem: (id) =>
    set((s) => ({ items: s.items.filter((item) => item.id !== id) })),
}));
