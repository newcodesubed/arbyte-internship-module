import { useItemStore } from "../stores/itemStore";

export default function ItemList() {
  const filteredItems = useItemStore((s) => s.filteredItems());
  const counts = useItemStore((s) => s.counts());
  const deleteItem = useItemStore((s) => s.deleteItem);

  return (
    <div>
      <p className="text-sm text-gray-600 mb-2">
        Showing {counts.filtered} of {counts.total} items
      </p>
      <div className="space-y-2">
        {filteredItems.map((item) => (
          <div
            key={item.id}
            className="flex justify-between items-center border-b py-1"
          >
            <span>
              {item.name} - {item.category} - {item.color}
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
