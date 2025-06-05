import { Search } from "lucide-react";

const Searchbar = () => {
  return (
    <header className="flex items-center justify-between p-4 border-b bg-white sticky top-0 z-50">
      {/* Left: Logo */}
      <div className="text-xl font-bold text-red-600">YouTube</div>

      {/* Center: Search Bar */}
      <div className="flex flex-1 max-w-2xl mx-4">
        <input
          type="text"
          placeholder="Search"
          className="flex-grow border border-gray-300 rounded-l-full px-4 py-2 focus:outline-none"
        />
        <button className="bg-gray-100 border border-l-0 border-gray-300 rounded-r-full px-4 hover:bg-gray-200">
          <Search size={20} />
        </button>
      </div>

      {/* Right: User Avatar */}
      <img
        src="https://i.pravatar.cc/40?img=10"
        alt="User Avatar"
        className="w-10 h-10 rounded-full"
      />
    </header>
  );
};

export default Searchbar;
