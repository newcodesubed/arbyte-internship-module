import { useState } from "react";
import menuData from "./menuData";
import MenuItem from "./MenuItem";
import { Utensils, Pizza, Drumstick, CupSoda, Star } from "lucide-react";

function MainMenu({ user }) {
  const [filter, setFilter] = useState("All");
  const categoryIcons = {
    veg: <Pizza size={16} className="inline-block mr-1" />,
    "non-veg": <Drumstick size={16} className="inline-block mr-1" />,
    drinks: <CupSoda size={16} className="inline-block mr-1" />,
    All: <Star size={16} className="inline-block mr-1" />,
  };

  const filteredData =
    filter === "All"
      ? menuData
      : menuData.filter((item) => item.category === filter);

  const categories = ["All", ...new Set(menuData.map((item) => item.category))];

  return (
    <div className="p-4">
      {/* Header */}
      <header className="flex justify-between items-center mb-4">
        <div className="text-lg font-semibold">
          {user.name} ({user.number})
        </div>
        {/* <div>
          <select
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            className="bg-white text-black px-3 py-1 rounded"
          >
            {categories.map(cat => (
              <option key={cat} value={cat}>{cat}</option>
            ))}
          </select>
        </div> */}
        {/* second */}
        {/* <select
  value={filter}
  onChange={(e) => setFilter(e.target.value)}
  className="bg-white text-black px-3 py-1 rounded"
>
  {categories.map((cat) => (
    <option key={cat} value={cat}>
      {cat}
    </option>
  ))}
</select> */}
        <div className="flex flex-wrap gap-2 mb-4">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`flex items-center gap-1 px-3 py-1 rounded-full border ${
                filter === cat
                  ? "bg-white text-yellow-400 font-bold"
                  : "bg-yellow-300 text-white"
              }`}
            >
              {categoryIcons[cat] || <Utensils size={16} />} {cat}
            </button>
          ))}
        </div>
      </header>

      {/* Menu Items */}
      <div className="grid gap-4 grid-cols-1 sm:grid-cols-2  lg:grid-cols-3">
        {filteredData.map((item, idx) => (
          <MenuItem key={`${item.name}-${idx}`} item={item} />
        ))}
      </div>
    </div>
  );
}

export default MainMenu;
