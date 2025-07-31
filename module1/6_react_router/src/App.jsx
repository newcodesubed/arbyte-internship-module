import React, { useState, Suspense, lazy } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  Link,
} from "react-router-dom";
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
const NotAuthorized = lazy(() => import("./pages/NotAuthorized"));

export default function App() {
  const [auth, setAuth] = useState({ isAuthenticated: false, role: null });

  const login = (role) => setAuth({ isAuthenticated: true, role });
  const logout = () => setAuth({ isAuthenticated: false, role: null });

  return (
    <Router>
      <NavBar auth={auth} logout={logout} />

      <Suspense fallback={<div className="p-4">Loading...</div>}>
        <Routes>
          {/* Redirect to login if not authenticated */}
          <Route
            path="/"
            element={
              auth.isAuthenticated ? (
                <Navigate to="/home" />
              ) : (
                <Navigate to="/login" />
              )
            }
          />

          <Route path="/login" element={<Login login={login} />} />
          <Route path="/register" element={<Register />} />

          {/* Home is protected for both roles */}
          <Route
            path="/home"
            element={
              <ProtectedRoute auth={auth}>
                <Home />
              </ProtectedRoute>
            }
          />

          <Route
            path="/post/:id"
            element={
              <ProtectedRoute auth={auth}>
                <PostDetail />
              </ProtectedRoute>
            }
          />

          {/* Admin Dashboard */}
          <Route
            path="/dashboard"
            element={
              <AdminRoute auth={auth}>
                <Dashboard />
              </AdminRoute>
            }
          >
            <Route path="users" element={<DashboardUsers />} />
            <Route path="settings" element={<DashboardSettings />} />
            <Route path="add-product" element={<AddProduct />} />
          </Route>

          {/* Not Authorized Page */}
          <Route path="/not-authorized" element={<NotAuthorized />} />

          {/* Catch all route */}
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

function NavBar({ auth, logout }) {
  return (
    <div className="p-4 flex gap-4 bg-gray-200">
      {auth.isAuthenticated && (
        <>
          <Link to="/home">Home</Link>
          {auth.role === "admin" && <Link to="/dashboard">Dashboard</Link>}
        </>
      )}
      {!auth.isAuthenticated && (
        <>
          <Link to="/login">Login</Link>
          <Link to="/register">Register</Link>
        </>
      )}
      {auth.isAuthenticated && (
        <button
          onClick={logout}
          className="ml-auto bg-red-500 text-white px-2 rounded"
        >
          Logout ({auth.role})
        </button>
      )}
    </div>
  );
}
