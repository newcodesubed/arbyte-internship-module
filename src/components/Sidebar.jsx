import { Home, Flame, Rss, Book, History, ThumbsUp } from "lucide-react";

const Sidebar = () => {
  const navItems = [
    { label: "Home", icon: <Home size={20} /> },
    { label: "Shorts", icon: <Flame size={20} /> },
    { label: "Subscriptions", icon: <Rss size={20} /> },
    { label: "Library", icon: <Book size={20} /> },
    { label: "History", icon: <History size={20} /> },
    { label: "Liked Videos", icon: <ThumbsUp size={20} /> },
  ];

  return (
    <aside className="w-56 bg-white h-screen p-4 border-r hidden md:block">
      <ul className="space-y-4">
        {navItems.map((item) => (
          <li
            key={item.label}
            className="flex items-center gap-3 text-gray-800 hover:bg-gray-100 p-2 rounded-lg cursor-pointer transition"
          >
            {item.icon}
            <span className="text-sm font-medium">{item.label}</span>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default Sidebar;
