import { create } from "zustand";

export type Category = "Monitor" | "Keyboard" | "Mouse";
export type Color = "Black" | "White" | "Red" | "Blue";

export type Item = {
  id: string;
  name: string;
  category: Category;
  color: Color;
};

type State = {
  items: Item[];
  addItem: (item: Item) => void;
  deleteItem: (id: string) => void;
};

export const useItemStore = create<State>((set) => ({
  items: [
    { id: "1", name: "Dell UltraSharp", category: "Monitor", color: "Black" },
    { id: "2", name: "Logitech MX Keys", category: "Keyboard", color: "White" },
  ],
  addItem: (item) =>
    set((state) => ({
      items: [...state.items, item],
    })),
  deleteItem: (id) =>
    set((state) => ({
      items: state.items.filter((item) => item.id !== id),
    })),
}));
