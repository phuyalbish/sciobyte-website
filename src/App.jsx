import PageLayout from "@/components/PageLayout";
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
      {/* <PageLayout>
        <AppRoutes />
      </PageLayout> */}
      <div className="w-full h-[100vh] flex  flex-col items-center justify-center">
        <div className=" w-[90vw] md:w-[50vw] ">
        <Lottie animationData={Animation}  loop={true}/>
        </div>
            <div className="text-xl font-liches">Under Construction !</div>
      </div>
    </Router>
  );
}

export default App;
