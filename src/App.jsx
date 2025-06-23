
import { BrowserRouter as Router } from "react-router-dom";
import AppRoutes from "@/router/router.jsx";
import ScrollToTop from "@/router/ScrollToTop.jsx";
import "./App.css";

import Animation from "@/data/Animation.json"
import Lottie from "lottie-react";

function App() {
  return (
    <Router>
      <ScrollToTop />
        <AppRoutes />
    </Router>
  );
}

export default App;
