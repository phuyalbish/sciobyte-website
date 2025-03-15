import Footer from "@/components/Footer.jsx";
import Header from "@/components/Header.jsx";
import Navbar from "@/components/Navbar";
import whatsapp from "@/assets/whatsapp.png";
export default function PageLayout({ children }) {
  return (
    <div className="flex relative w-[100vw] flex-col bg-gray-100">
      <Header />
      <div className="sticky  top-0 z-50">
        <Navbar />
      </div>
      <main className="flex-1  relative bg-gray-100">
        {children}
        <img
          src={whatsapp}
          alt=""
          className="w-16 h-16 object-cover z-30 fixed bottom-5 left-5"
        />
      </main>
      <Footer />
    </div>
  );
}
