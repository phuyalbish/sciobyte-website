import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import ScrollToTop from "@/router/ScrollToTop";
import Spinner from "@/components/skeleton/Spinner.jsx"
const Company = lazy(() => import('@/pages/CompanyPage.jsx'));



// const Company = lazy(() =>
//   new Promise((resolve) =>
//     setTimeout(() => resolve(import('@/pages/CompanyPage.jsx')), 5000) 
//   )
// );

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

import Home from "@/pages/HomePage.jsx";

const AppRoutes = () => {
  return (
    <>
      <ScrollToTop />
      
      <Suspense fallback={<div className="p-10 w-full h-[100vh] bg-white flex items-center justify-center fixed inset-0 z-50 text-center"><Spinner/></div>}>
        <Routes>
          <Route path="/" element={<Home />} />
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
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </>
  );
};

export default AppRoutes;