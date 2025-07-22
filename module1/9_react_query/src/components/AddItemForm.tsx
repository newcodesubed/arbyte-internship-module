import { useState } from "react";
import { useItemStore } from "../stores/itemStore";
import type { Category, Color } from "../stores/itemStore";
import { toast } from "react-toastify";

export default function AddItemForm() {
  const addItem = useItemStore((s) => s.addItem);

  const [name, setName] = useState("");
  const [category, setCategory] = useState<Category>("Monitor");
  const [color, setColor] = useState<Color>("Black");

  const handleAdd = () => {
    if (!name.trim()) {
      toast.error("Name is required");
      return;
    }

    addItem({
      id: Date.now().toString(),
      name,
      category,
      color,
    });

    toast.success("Item added successfully");
    setName("");
    setCategory("Monitor");
    setColor("Black");
  };

  return (
    <div className="space-y-2 p-4 border rounded-xl">
      <input
        className="border px-2 py-1 w-full rounded"
        placeholder="Item name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <select
        className="border px-2 py-1 w-full rounded"
        value={category}
        onChange={(e) => setCategory(e.target.value as Category)}
      >
        <option>Monitor</option>
        <option>Keyboard</option>
        <option>Mouse</option>
      </select>
      <select
        className="border px-2 py-1 w-full rounded"
        value={color}
        onChange={(e) => setColor(e.target.value as Color)}
      >
        <option>Black</option>
        <option>White</option>
        <option>Red</option>
        <option>Blue</option>
      </select>
      <button
        onClick={handleAdd}
        className="bg-blue-600 text-white px-4 py-1 rounded w-full"
      >
        Add
      </button>
    </div>
  );
}
