import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import ProtectedRoute from "./components/ProtectedRoute";
import AdminRoute from "./components/AdminRoute";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import DashboardUsers from "./pages/DashboardUsers ";
import DashboardSettings from "./pages/DashboardSettings ";
import AddProduct from "./pages/AddProduct ";

export default function App() {
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
  </Router>;
}
