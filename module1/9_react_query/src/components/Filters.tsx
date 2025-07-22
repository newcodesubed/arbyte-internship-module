import { useItemStore } from "../stores/itemStore";
import type { Category, Color } from "../stores/itemStore";

export default function Filters() {
  const filterCategory = useItemStore((s) => s.filterCategory);
  const filterColor = useItemStore((s) => s.filterColor);
  const setFilterCategory = useItemStore((s) => s.setFilterCategory);
  const setFilterColor = useItemStore((s) => s.setFilterColor);

  return (
    <div className="flex gap-2 mb-4">
      <select
        value={filterCategory}
        onChange={(e) => setFilterCategory(e.target.value as Category)}
        className="border px-2 py-1 rounded"
      >
        <option>All</option>
        <option>Monitor</option>
        <option>Keyboard</option>
        <option>Mouse</option>
      </select>

      <select
        value={filterColor}
        onChange={(e) => setFilterColor(e.target.value as Color)}
        className="border px-2 py-1 rounded"
      >
        <option>All</option>
        <option>Black</option>
        <option>White</option>
        <option>Red</option>
        <option>Blue</option>
      </select>
    </div>
  );
}
