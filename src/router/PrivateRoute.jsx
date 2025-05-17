import { useContext } from "react";
import { AuthContext } from "@/context/AuthContext.jsx";
import { Navigate, Outlet } from "react-router-dom";

const PrivateRoute = ({ condition, redirectTo = "/login" }) => {
  const { isAuthenticated, loading } = useContext(AuthContext);

  if (loading) return <div>Loading...</div>;

  return condition ? <Outlet /> : <Navigate to={redirectTo} replace />;
};

export default PrivateRoute;