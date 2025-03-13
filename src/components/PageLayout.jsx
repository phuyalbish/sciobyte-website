import Footer from "@/components/Footer.jsx";
import Header from "@/components/Header.jsx";
import Navbar from "@/components/Navbar";

export default function PageLayout({ children }) {
  return (
    <div className="flex flex-col ">
      <div className="flex fixed top-0 w-screen flex-col z-50">
        <Header />
        <Navbar />
      </div>
      <main className="flex-1 bg-gray-100 pt-[16vh] overflow-auto">
        {children}
      </main>
      <Footer />
    </div>
  );
}
