import PageLayout from "@/components/PageLayout";
import { BrowserRouter as Router } from "react-router-dom";
import AppRoutes from "@/router/router.jsx";
import ScrollToTop from "@/router/ScrollToTop.jsx";
import "./App.css";

function App() {
  return (
    <Router>
      <ScrollToTop />
      {/* <PageLayout>
        <AppRoutes />
      </PageLayout> */}
      <div className="w-full h-[100vh] flex items-center justify-center">
            <div className="text-xl font-liches">Under Construction !</div>
      </div>
    </Router>
  );
}

export default App;
