import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import ScrollToTop from "@/router/ScrollToTop";
import Spinner from "@/components/skeleton/Spinner.jsx"
import PrivateRoute from "@/router/PrivateRoute";
import PublicRoute from "@/router/PublicRoute";
import { useContext } from "react";
import { AuthContext } from "@/context/AuthContext.jsx";
import PageLayout from "@/components/PageLayout.jsx";
import DashboardLayout from "@/components/DashboardLayout.jsx";

const NotFound = lazy(() =>  import("@/pages/NotFoundPage.jsx"));


const Login = lazy(() =>  import("@/dashboard/pages/LoginPage.jsx"));
const Dashboard = lazy(() =>  import("@/dashboard/pages/DashboardPage.jsx"));

import Home from "@/pages/HomePage.jsx";

const AppRoutes = () => {


  const { isAuthenticated } = useContext(AuthContext);

  return (
    <>
      <ScrollToTop />
      
      <Suspense fallback={<div className="p-10 w-full h-[100vh] bg-white flex items-center justify-center fixed inset-0 z-50 text-center"><Spinner/></div>}>
        <Routes>
            <Route element={<PageLayout />}>
                <Route path="/" element={<Home />} />
                <Route path="*" element={<NotFound />} />
            </Route>


            <Route element={<PublicRoute />}>
                <Route path="/login" element={<Login />} />
            </Route>


            <Route element={<PrivateRoute condition={isAuthenticated} />}>
              <Route element={<DashboardLayout />}>
                  <Route path="/dashboard" element={<Dashboard />} />
              </Route>
            </Route>
        </Routes>
      </Suspense>
    </>
  );
};

export default AppRoutes;