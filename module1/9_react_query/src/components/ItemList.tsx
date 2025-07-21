import { useFilterStore } from "../stores/filterStore";
import { useItemStore } from "../stores/itemStore";
import { toast } from "react-toastify";

export const ItemList = () => {
  const items = useFilterStore((s) => s.filteredItems());
  const count = useFilterStore((s) => s.itemCount());
  const removeItem = useItemStore((s) => s.removeItem);
  const addItem = useItemStore((s) => s.addItem);

  const handleDelete = (id: string, itemName: string) => {
    // Optimistic removal
    const deletedItem = items.find((i) => i.id === id);
    removeItem(id);

    setTimeout(() => {
      const success = Math.random() > 0.2;
      if (success) {
        toast.success(`Deleted ${itemName}`);
      } else {
        if (deletedItem) addItem(deletedItem);
        toast.error(`Failed to delete ${itemName}`);
      }
    }, 1000);
  };

  return (
    <div>
      <h3 className="text-lg font-semibold mb-2">Items ({count})</h3>
      <ul className="space-y-2">
        {items.map((item) => (
          <li
            key={item.id}
            className="flex justify-between p-2 border rounded shadow-sm"
          >
            <span>
              {item.name} - {item.category} - {item.color}
            </span>
            <button
              onClick={() => handleDelete(item.id, item.name)}
              className="text-red-500 hover:underline"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};
