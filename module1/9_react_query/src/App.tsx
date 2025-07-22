import AddItemForm from "./components/AddItemForm";
import Filters from "./components/Filters";
import ItemList from "./components/ItemList";

export default function App() {
  return (
    <main className="max-w-md mx-auto mt-8 space-y-4">
      <h1 className="text-xl font-bold text-center">Inventory</h1>
      <AddItemForm />
      <Filters />
      <ItemList />
    </main>
  );
}
