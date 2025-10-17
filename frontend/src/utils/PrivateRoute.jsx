import React from "react";
import { Navigate } from "react-router-dom";

function PrivateRoute({ children, role }) {
  const token = localStorage.getItem("token");
  const user = JSON.parse(localStorage.getItem("user"));

  // 🧠 If no token, redirect to login
  if (!token || !user) {
    return <Navigate to="/login" replace />;
  }

  // 🚫 If user doesn't have the required role, redirect to their dashboard
  if (role && user.role !== role) {
    return user.role === "admin" ? (
      <Navigate to="/admin" replace />
    ) : (
      <Navigate to="/user" replace />
    );
  }

  // ✅ Otherwise, show protected component
  return children;
}

export default PrivateRoute;
