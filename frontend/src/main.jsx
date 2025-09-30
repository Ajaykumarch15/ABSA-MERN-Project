import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import LandingPage from "./pages/LandingPage";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import AdminDashboard from "./pages/AdminDashboard";
import UserDashboard from "./pages/UserDashboard";
import PrivateRoute from "./utils/PrivateRoute";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<LandingPage />} />
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<Signup />} />

          {/* Protected Routes */}
          <Route
            path="admin"
            element={<PrivateRoute role="admin"><AdminDashboard /></PrivateRoute>}
          />
          <Route
            path="user"
            element={<PrivateRoute role="user"><UserDashboard /></PrivateRoute>}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
