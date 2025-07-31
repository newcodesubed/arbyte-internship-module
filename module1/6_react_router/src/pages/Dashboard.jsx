import { Navigate } from "react-router-dom";

export default function AdminRoute({ auth, children }) {
  if (!auth.isAuthenticated) return <Navigate to="/login" replace />;
  if (auth.role !== "admin") return <Navigate to="/not-authorized" replace />;
  return children;
}
