import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "@/pages/HomePage.jsx";
import AboutUs from "@/pages/AboutUsPage.jsx";
import IndivisualTrek from "@/pages/IndivisualTrekPage.jsx";
import IndivisualDistrictPage from "@/pages/IndivisualDistrictPage.jsx";
import Contact from "@/pages/ContactPage.jsx";
import Blogs from "@/pages/BlogListPage.jsx";
import NotFound from "@/pages/NotFoundPage.jsx";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<AboutUs />} />
      <Route path="/trek/:id" element={<IndivisualTrek />} />
      <Route path="/district/:id" element={<IndivisualDistrictPage />} />
      <Route path="/about" element={<AboutUs />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/blogs" element={<Blogs />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRoutes;
