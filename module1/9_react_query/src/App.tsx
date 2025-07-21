import { useEffect } from "react";
import { useFakeQuery } from "./hooks/useFakeQuery";
import { useItemStore } from "./stores/itemStore";
import { ItemList } from "./components/ItemList";
import { AddItemForm } from "./components/AddItemForm";
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
        category: "Monitor",
        color: "Black",
      }));
      setItems(parsed);
    }
  }, [loading, data, setItems]);

  if (loading) return <div>Loading...</div>;

  return (
    <div>
      <AddItemForm />
      <ItemList />
      <ToastContainer />
    </div>
  );
}
