import React, { useState, Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import ProtectedRoute from "./components/ProtectedRoute";
import AdminRoute from "./components/AdminRoute";

const Home = lazy(() => import("./pages/Home"));
const Login = lazy(() => import("./pages/Login"));
const Register = lazy(() => import("./pages/Register"));
const PostDetail = lazy(() => import("./pages/PostDetail"));
const Dashboard = lazy(() => import("./pages/Dashboard"));
const DashboardUsers = lazy(() => import("./pages/DashboardUsers"));
const DashboardSettings = lazy(() => import("./pages/DashboardSettings"));
const AddProduct = lazy(() => import("./pages/AddProduct"));

export default function App() {
  const [auth, setAuth] = useState({ isAuthenticated: false, role: null });

  const login = (role) => setAuth({ isAuthenticated: true, role });
  const logout = () => setAuth({ isAuthenticated: false, role: null });

  return (
    <Router>
      <div className="p-4 flex gap-4 bg-gray-200">
        <Link to="/">Home</Link>
        <Link to="/login">Login</Link>
        <Link to="/register">Register</Link>
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/add-product">Add Product</Link>
        {auth.isAuthenticated && (
          <button
            onClick={logout}
            className="ml-auto bg-red-500 text-white px-2 rounded"
          >
            Logout ({auth.role})
          </button>
        )}
      </div>

      <Suspense fallback={<div className="p-4">Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login login={login} />} />
          <Route path="/register" element={<Register />} />
          <Route path="/post/:id" element={<PostDetail />} />

          <Route
            path="/dashboard"
            element={
              <ProtectedRoute auth={auth}>
                <Dashboard />
              </ProtectedRoute>
            }
          >
            <Route path="users" element={<DashboardUsers />} />
            <Route path="settings" element={<DashboardSettings />} />
          </Route>

          <Route
            path="/add-product"
            element={
              <AdminRoute auth={auth}>
                <AddProduct />
              </AdminRoute>
            }
          />
        </Routes>
      </Suspense>
    </Router>
  );
}
