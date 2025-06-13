import { motion } from "framer-motion";

function MenuItem({ item }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="bg-white text-black flex w-full md:w-1/2 lg:w-1/3 rounded-xl overflow-hidden shadow-lg"
    >
      {/* Left Content */}
      <div className="p-4 flex-1">
        <h3 className="text-xl font-bold">{item.name}</h3>
        <ul className="text-sm mt-1 list-disc list-inside">
          {item.ingredients.map((ing, idx) => (
            <li key={idx}>{ing}</li>
          ))}
        </ul>
        <div className="text-orange-500 font-semibold mt-2">{item.price}</div>
        <div className="text-xs text-gray-600">{item.location}</div>
      </div>

      {/* Right Image */}
      <div className="w-32 h-32 overflow-hidden">
        <img
          src={item.image}
          alt={item.name}
          className="object-cover w-full h-full"
        />
      </div>
    </motion.div>
  );
}

export default MenuItem;
