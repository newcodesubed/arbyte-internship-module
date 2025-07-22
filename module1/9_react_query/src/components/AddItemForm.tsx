import { useItemStore } from "../stores/itemStore";
import { nanoid } from "nanoid";
import { useState } from "react";
import { toast } from "react-toastify";

export const AddItemForm = () => {
  const addItem = useItemStore((s) => s.addItem);
  const removeItem = useItemStore((s) => s.removeItem);
  const [name, setName] = useState("");

  const handleSubmit = () => {
    if (!name.trim()) return;

    const id = nanoid();
    const item = {
      id,
      name,
      category: "Monitor" as const,
      color: "Black" as const,
    };

    addItem(item);

    setTimeout(() => {
      const success = Math.random() > 0.2;
      if (success) {
        toast.success("Item added successfully!");
      } else {
        removeItem(id);
        toast.error("Failed to add item.");
      }
    }, 1000);

    setName("");
  };

  return (
    <div className="mb-4">
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Item name"
        className="border p-2 rounded mr-2"
      />
      <button
        onClick={handleSubmit}
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Add
      </button>
    </div>
  );
};
