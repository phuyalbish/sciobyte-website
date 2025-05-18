import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import ScrollToTop from "@/router/ScrollToTop";
import Spinner from "@/components/skeleton/Spinner.jsx"
import PrivateRoute from "@/router/PrivateRoute";
import PublicRoute from "@/router/PublicRoute";
const Company = lazy(() => import('@/pages/CompanyPage.jsx'));
import { useContext } from "react";
import { AuthContext } from "@/context/AuthContext.jsx";
import PageLayout from "@/components/PageLayout.jsx";
import DashboardLayout from "@/components/DashboardLayout.jsx";

const CreatePage = lazy(() => import('@/pages/CreatePage.jsx'));
const FAQPage = lazy(() => import('@/pages/FAQPage.jsx'));
const FavouriteTreks = lazy(() => import('@/pages/FavouriteTreksPage.jsx'));
const IndivisualTrekPage = lazy(() => import('@/pages/IndivisualTrekPage.jsx'));
const IndivisualCategoryPage = lazy(() => import('@/pages/IndivisualCategoryPage.jsx'));
const IndivisualRegionPage = lazy(() => import('@/pages/IndivisualRegionPage.jsx'));
const IndivisualDistrictPage = lazy(() => import('@/pages/IndivisualDistrictPage.jsx'));
const PrivacyPolicy = lazy(() => import('@/pages/PrivacyPolicy.jsx'));
const TermsAndCondition = lazy(() => import('@/pages/TermsAndCondition.jsx'));
const Contact = lazy(() => import('@/pages/ContactPage.jsx'));
const Blogs = lazy(() => import('@/pages/BlogListPage.jsx'));
const BlogDetail = lazy(() => import('@/pages/BlogDetailPage.jsx'));
const NotFound = lazy(() =>  import("@/pages/NotFoundPage.jsx"));


const Login = lazy(() =>  import("@/dashboard/pages/LoginPage.jsx"));
const Dashboard = lazy(() =>  import("@/dashboard/pages/DashboardPage.jsx"));
const TrekDashboardSection = lazy(() =>  import("@/dashboard/pages/TrekDashboardSection.jsx"));
const RegionDashboardSection = lazy(() =>  import("@/dashboard/pages/RegionDashboardSection.jsx"));
const CategoryDashboardSection = lazy(() =>  import("@/dashboard/pages/CategoryDashboardSection.jsx"));
const DistrictDashboardSection = lazy(() =>  import("@/dashboard/pages/DistrictDashboardSection.jsx"));

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
                <Route path="/about" element={<Company />} />
                <Route path="/about/:id" element={<Company />} />
                <Route path="/create" element={<CreatePage />} />
                <Route path="/faqs" element={<FAQPage />} />
                <Route path="/liked" element={<FavouriteTreks />} />
                <Route path="/privacy" element={<PrivacyPolicy />} />
                <Route path="/termsandcondition" element={<TermsAndCondition />} />
                <Route path="/trek/:id" element={<IndivisualTrekPage />} />
                <Route path="/category/:id" element={<IndivisualCategoryPage />} />
                <Route path="/region/:id" element={<IndivisualRegionPage />} />
                <Route path="/district/:id" element={<IndivisualDistrictPage />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/blogs" element={<Blogs />} />
                <Route path="/blog/:slug" element={<BlogDetail />} />
            </Route>


            <Route element={<PublicRoute />}>
                <Route path="/login" element={<Login />} />
            </Route>


            <Route element={<PrivateRoute condition={isAuthenticated} />}>
              <Route element={<DashboardLayout />}>
                  <Route path="/dashboard" element={<Dashboard />} />
                  <Route path="/dashboard/trek" element={<TrekDashboardSection />} />
                  <Route path="/dashboard/category" element={<CategoryDashboardSection />} />
                  <Route path="/dashboard/region" element={<RegionDashboardSection />} />
                  <Route path="/dashboard/district" element={<DistrictDashboardSection />} />
              </Route>
            </Route>


            {/* <Route element={<PrivateRoute condition={isAuthenticated && isStaff} />}>
              <Route path="/admin-tools" element={<AdminTools />} />
            </Route>

            <Route element={<PrivateRoute condition={isAuthenticated && isSuperuser} />}>
              <Route path="/superuser-panel" element={<SuperuserPanel />} />
            </Route> */}

        </Routes>
      </Suspense>
    </>
  );
};

export default AppRoutes;