import { useEffect } from "react";
import { useFakeQuery } from "./hooks/useFakeQuery";
import { useItemStore } from "./stores/itemStore";
import { AddItemForm } from "./components/AddItemForm";
import { Filters } from "./components/Filters";
import { ItemList } from "./components/ItemList";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function App() {
  const { data, loading } = useFakeQuery();
  const setItems = useItemStore((s) => s.setItems);

  useEffect(() => {
    if (!loading) {
      const parsed = data.map((name, i) => ({
        id: String(i),
        name,
        category: "Monitor" as const,
        color: "Black" as const,
      }));
      setItems(parsed);
    }
  }, [loading, data, setItems]);

  if (loading) return <div className="text-center mt-10">Loading...</div>;

  return (
    <div className="max-w-xl mx-auto mt-10 p-4">
      <AddItemForm />
      <Filters />
      <ItemList />
      <ToastContainer />
    </div>
  );
}
