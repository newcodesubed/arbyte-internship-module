import { useState } from "react";
import menuData from "./menuData";
import MenuItem from "./MenuItem";
import { Utensils, Pizza, Drumstick, CupSoda, Star } from "lucide-react";
import ListRenderer from "./ListRenderer";

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
          <ListRenderer
            data={[user]} // 👈 wrap the user object in an array
            keyExtractor={(user) => user.id}
            renderItem={(user) => (
              <div className="p-2 border rounded flex">
                <h3>
                  {user.name} {user.number}
                </h3>
              </div>
            )}
          />
        </div>

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
        <ListRenderer
          data={filteredData}
          itemKey={(item) => item.id}
          renderItem={(item) => <MenuItem item={item} />}
        />
      </div>
    </div>
  );
}

export default MainMenu;
