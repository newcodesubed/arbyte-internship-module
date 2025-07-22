import { useItemStore } from "../stores/itemStore";

export default function ItemList() {
  const items = useItemStore((s) => s.items);
  const deleteItem = useItemStore((s) => s.deleteItem);

  return (
    <div className="space-y-2">
      {items.map((item) => (
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
  );
}
