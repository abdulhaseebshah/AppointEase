import React from "react";
import { Outlet, Navigate } from "react-router-dom";

const ProtectedRoute = () => {
  const auth = localStorage.getItem("LoggedIn");
  return auth ? <Outlet /> : <Navigate to={"/login"} />;
};

export default ProtectedRoute;
