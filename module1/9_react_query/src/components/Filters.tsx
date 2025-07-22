import { useStore } from "zustand";
import { itemStore } from "../stores/itemStore";

export default function Filters() {
  const filterCategory = useStore(itemStore, (s) => s.filterCategory);
  const filterColor = useStore(itemStore, (s) => s.filterColor);
  const setFilterCategory = useStore(itemStore, (s) => s.setFilterCategory);
  const setFilterColor = useStore(itemStore, (s) => s.setFilterColor);

  return (
    <div className="flex gap-4 p-2">
      <select
        value={filterCategory}
        onChange={(e) =>
          setFilterCategory(e.target.value as typeof filterCategory)
        }
        className="border p-1"
      >
        <option>All</option>
        <option>Monitor</option>
        <option>Keyboard</option>
        <option>Mouse</option>
      </select>

      <select
        value={filterColor}
        onChange={(e) => setFilterColor(e.target.value as typeof filterColor)}
        className="border p-1"
      >
        <option>All</option>
        <option>Black</option>
        <option>White</option>
        <option>Gray</option>
      </select>
    </div>
  );
}
