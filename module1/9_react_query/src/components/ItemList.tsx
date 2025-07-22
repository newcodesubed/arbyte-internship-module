import { useStore } from "zustand";
import { itemStore } from "../stores/itemStore";

export default function ItemList() {
  const items = useStore(itemStore, (s) => s.items);
  const filterCategory = useStore(itemStore, (s) => s.filterCategory);
  const filterColor = useStore(itemStore, (s) => s.filterColor);
  const deleteItem = useStore(itemStore, (s) => s.deleteItem);

  const filteredItems = items.filter(
    (item) =>
      (filterCategory === "All" || item.category === filterCategory) &&
      (filterColor === "All" || item.color === filterColor)
  );

  return (
    <div className="p-2">
      <p className="text-sm text-gray-600 mb-2">
        Showing {filteredItems.length} of {items.length} items
      </p>
      <div className="space-y-1">
        {filteredItems.map((item) => (
          <div key={item.id} className="flex justify-between border-b py-1">
            <span>
              {item.name} — {item.category} — {item.color}
            </span>
            <button
              onClick={() => deleteItem(item.id)}
              className="text-red-500 hover:underline"
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
