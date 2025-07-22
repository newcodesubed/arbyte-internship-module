import AddItemForm from "./components/AddItemForm";
import ItemList from "./components/ItemList";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function App() {
  return (
    <div className="max-w-md mx-auto p-4">
      <h1 className="text-xl font-bold mb-4">Inventory</h1>
      <AddItemForm />
      <ItemList />
      <ToastContainer />
    </div>
  );
}
