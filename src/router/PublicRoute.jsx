import { useContext } from "react";
import { AuthContext } from "@/context/AuthContext.jsx";
import { Navigate, Outlet } from "react-router-dom";

const PublicRoute = ({ redirectTo = "/dashboard" }) => {
  const { isAuthenticated, loading } = useContext(AuthContext);

  if (loading) return <div>Loading...</div>;
  return !isAuthenticated ? <Outlet /> : <Navigate to={redirectTo} replace />;
};

export default PublicRoute;