import { useFilterStore } from "../stores/filterStore";
import type { CategoryFilter, ColorFilter } from "../stores/filterStore";

export const Filters = () => {
  const category = useFilterStore((s) => s.category);
  const color = useFilterStore((s) => s.color);
  const setCategory = useFilterStore((s) => s.setCategory);
  const setColor = useFilterStore((s) => s.setColor);

  return (
    <div className="flex gap-4 mb-4">
      <select
        value={category}
        onChange={(e) => setCategory(e.target.value as CategoryFilter)}
        className="border p-2 rounded"
      >
        <option value="All">All Categories</option>
        <option value="Monitor">Monitor</option>
        <option value="Keyboard">Keyboard</option>
        <option value="Mouse">Mouse</option>
      </select>

      <select
        value={color}
        onChange={(e) => setColor(e.target.value as ColorFilter)}
        className="border p-2 rounded"
      >
        <option value="All">All Colors</option>
        <option value="Black">Black</option>
        <option value="White">White</option>
      </select>
    </div>
  );
};
