import { useItemStore } from "../stores/itemStore";
import { useState } from "react";
import { toast } from "react-toastify";
import { nanoid } from "nanoid";

export const AddItemForm = () => {
  const addItem = useItemStore((s) => s.addItem);
  const removeItem = useItemStore((s) => s.removeItem);
  const [name, setName] = useState("");

  const handleSubmit = () => {
    const id = nanoid();
    const item = {
      id,
      name,
      category: "Monitor",
      color: "Black",
    };

    addItem(item);

    setTimeout(() => {
      const success = Math.random() > 0.2; // 80% success
      if (success) {
        toast.success("Item added successfully!");
      } else {
        removeItem(id);
        toast.error("Failed to add item.");
      }
    }, 1000);
  };

  return (
    <div>
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Item name"
      />
      <button onClick={handleSubmit}>Add</button>
    </div>
  );
};
