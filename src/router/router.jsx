import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import ScrollToTop from "@/router/ScrollToTop";
import Spinner from "@/components/skeleton/Spinner.jsx"
import PageLayout from "@/components/PageLayout.jsx";

const NotFound = lazy(() =>  import("@/pages/NotFoundPage.jsx"));


import Home from "@/pages/HomePage.jsx";
import Service from "@/pages/ServicePage.jsx";
import Started from "@/pages/StartedPage.jsx";
import AboutUs from "@/pages/AboutUs.jsx";
import ContactUs from "@/pages/ContactUs.jsx";
import PrivacyPolicy from "@/pages/PrivacyPolicy";
import TermsOfService from "@/pages/TermsOfService.jsx";
const AppRoutes = () => {


  return (
    <>
      <ScrollToTop />
      
      <Suspense fallback={<div className="p-10 w-full h-[100vh] bg-white flex items-center justify-center fixed inset-0 z-50 text-center"><Spinner/></div>}>
        <Routes>
            <Route element={<PageLayout />}>
                <Route path="/" element={<Home />} />
                <Route path="/services" element={<Service />} />
                <Route path="/started" element={<Started />} />
                <Route path="/about" element={<AboutUs />} />
                <Route path="/contact" element={<ContactUs />} />
                <Route path="/privacy-policy" element={<PrivacyPolicy />} />
                <Route path="/terms-of-service" element={<TermsOfService />} />
                <Route path="*" element={<NotFound />} />
            </Route>

        </Routes>
      </Suspense>
    </>
  );
};

export default AppRoutes;