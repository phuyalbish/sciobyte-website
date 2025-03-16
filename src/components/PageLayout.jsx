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

        <a
          href={`https://web.whatsapp.com/send?phone=+9779849828857&text=Hello Aashish, I want to know more about the packages you provide`}
          target="_blank"
          className="rounded-lg fixed z-30  bottom-5 left-5 w-16 h-16  text-white text-lg font-bold cursor-pointer flex justify-center gap-3 items-center"
        >
          <img
            src={whatsapp}
            alt=""
            className="w-14 h-14  object-cover z-30 "
          />
        </a>
      </main>
      <Footer />
    </div>
  );
}
