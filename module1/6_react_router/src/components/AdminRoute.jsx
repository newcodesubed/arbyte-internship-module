import { Navigate } from "react-router-dom";

export default function AdminRoute({ auth, children }) {
  if (!auth.isAuthenticated || auth.role !== "admin")
    return <Navigate to="/login" replace />;
  return children;
}
