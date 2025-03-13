import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "@/pages/HomePage.jsx";
import AboutUs from "@/pages/AboutUsPage.jsx";
import Contact from "@/pages/ContactPage.jsx";
import Blogs from "@/pages/BlogListPage.jsx";
import BlogDetail from "@/pages/BlogDetailPage.jsx";

import NotFound from "@/pages/NotFoundPage.jsx";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<AboutUs />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/blogs" element={<Blogs />} />
      <Route path="/blog/:slug" element={<BlogDetail />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRoutes;
