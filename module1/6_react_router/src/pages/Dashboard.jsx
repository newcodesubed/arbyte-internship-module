import { Outlet, Link } from "react-router-dom";

export default function Dashboard() {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">Admin Dashboard</h1>
      <div className="flex gap-4 mt-2">
        <Link to="users" className="text-blue-500">
          Users
        </Link>
        <Link to="settings" className="text-blue-500">
          Settings
        </Link>
        <Link to="add-product" className="text-blue-500">
          Add Product
        </Link>
      </div>
      <Outlet />
    </div>
  );
}
