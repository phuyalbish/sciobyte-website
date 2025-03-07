import Footer from "@/components/Footer.jsx";
import Header from "@/components/Header.jsx";

export default function PageLayout({ children }) {
  return (
    <div className="flex flex-col ">
      <Header />
      <main className="flex-1 bg-gray-100 overflow-auto">{children}</main>
      <Footer />
    </div>
  );
}
