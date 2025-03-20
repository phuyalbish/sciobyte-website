import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "@/pages/HomePage.jsx";
import Company from "@/pages/CompanyPage.jsx";
import IndivisualTrekPage from "@/pages/IndivisualTrekPage.jsx";
import IndivisualTypePage from "@/pages/IndivisualTypePage.jsx";
import IndivisualCategoryPage from "@/pages/IndivisualCategoryPage.jsx";
import IndivisualDistrictPage from "@/pages/IndivisualDistrictPage.jsx";
import Contact from "@/pages/ContactPage.jsx";
import Blogs from "@/pages/BlogListPage.jsx";
import BlogDetail from "@/pages/BlogDetailPage.jsx";

import NotFound from "@/pages/NotFoundPage.jsx";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/company" element={<Company />} />
      <Route path="/travel/:id" element={<IndivisualTrekPage />} />
      <Route path="/type/:id" element={<IndivisualTypePage />} />
      <Route path="/category/:id" element={<IndivisualCategoryPage />} />
      <Route path="/district/:id" element={<IndivisualDistrictPage />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/blogs" element={<Blogs />} />
      <Route path="/blog/:slug" element={<BlogDetail />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRoutes;
