import { useFilterStore } from "../stores/filterStore";

export const ItemList = () => {
  const items = useFilterStore((s) => s.filteredItems());
  const count = useFilterStore((s) => s.itemCount());

  return (
    <div>
      <h3>Items ({count})</h3>
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            {item.name} - {item.category} - {item.color}
          </li>
        ))}
      </ul>
    </div>
  );
};
