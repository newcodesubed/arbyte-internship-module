import { useState } from "react";
import { useStore } from "zustand";
import { itemStore } from "../stores/itemStore";
import type { Item } from "../stores/itemStore";
import { nanoid } from "nanoid";

export default function AddItemForm() {
  const addItem = useStore(itemStore, (s) => s.addItem);

  const [name, setName] = useState("");
  const [category, setCategory] = useState<Item["category"]>("Monitor");
  const [color, setColor] = useState<Item["color"]>("Black");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) return;

    addItem({ id: nanoid(), name, category, color });
    setName("");
    setCategory("Monitor");
    setColor("Black");
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-2 p-2">
      <input
        type="text"
        value={name}
        placeholder="Item name"
        onChange={(e) => setName(e.target.value)}
        className="border p-1 w-full"
      />
      <div className="flex gap-2">
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value as Item["category"])}
          className="border p-1"
        >
          <option>Monitor</option>
          <option>Keyboard</option>
          <option>Mouse</option>
        </select>
        <select
          value={color}
          onChange={(e) => setColor(e.target.value as Item["color"])}
          className="border p-1"
        >
          <option>Black</option>
          <option>White</option>
          <option>Gray</option>
        </select>
        <button
          type="submit"
          className="bg-blue-500 text-white px-2 py-1 rounded"
        >
          Add
        </button>
      </div>
    </form>
  );
}
