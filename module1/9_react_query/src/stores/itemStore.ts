import { create } from "zustand";
import { devtools } from "zustand/middleware";

export type Item = {
  id: string;
  name: string;
  category: "Monitor" | "Keyboard" | "Mouse";
  color: "Black" | "White";
};

type State = {
  items: Item[];
};

type Actions = {
  setItems: (items: Item[]) => void;
  addItem: (item: Item) => void;
  removeItem: (id: string) => void;
};

export const useItemStore = create<State & Actions>()(
  devtools((set) => ({
    items: [],
    setItems: (items) => set({ items }),
    addItem: (item) =>
      set((state) => ({
        items: [item, ...state.items],
      })),
    removeItem: (id) =>
      set((state) => ({
        items: state.items.filter((i) => i.id !== id),
      })),
  }))
);
