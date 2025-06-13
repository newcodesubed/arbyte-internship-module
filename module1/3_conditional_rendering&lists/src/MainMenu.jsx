import { useState } from "react";
import menuData from "./menuData";
import MenuItem from "./MenuItem";

function MainMenu({ user }) {
  const [filter, setFilter] = useState("All");

  const filteredData =
    filter === "All" ? menuData : menuData.filter(item => item.category === filter);

  const categories = ["All", ...new Set(menuData.map(item => item.category))];

  return (
    <div className="p-4">
      {/* Header */}
      <header className="flex justify-between items-center mb-4">
        <div className="text-lg font-semibold">
          {user.name} ({user.number})
        </div>
        <div>
          <select
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            className="bg-white text-black px-3 py-1 rounded"
          >
            {categories.map(cat => (
              <option key={cat} value={cat}>{cat}</option>
            ))}
          </select>
        </div>
      </header>

      {/* Menu Items */}
      <div className="flex flex-wrap gap-4">
        {filteredData.map((item, index) => (
          <MenuItem key={index} item={item} />
        ))}
      </div>
    </div>
  );
}

export default MainMenu;
