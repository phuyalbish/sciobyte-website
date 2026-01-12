import Container from "@/components/Container.jsx";
import { BiHomeAlt2 } from "react-icons/bi";

function Header() {
  return (
      <div className="text-xl text-white py-8 w-full bg-black">
        <Container>
          <div className="flex flex-row justify-between items-center">
              <a href="/" className="flex items-center gap-2 text-white hover:opacity-70 transition-colors duration-500 ease-in-out text-sm group">
                <BiHomeAlt2 className="text-base group-hover:-translate-y-[1px] transition-transform duration-300" /> 
                <span className="font-medium tracking-wide">ScioByte</span>
              </a>
            <div className="flex gap-4 text-sm font-light tracking-wide">
              <a href="/about" className="text-white hover:opacity-70 transition-colors duration-500 ease-in-out">About</a>
              <a href="/services" className="text-white hover:opacity-70 transition-colors duration-500 ease-in-out">Services</a>
              <a href="/contact" className="text-white hover:opacity-70 transition-colors duration-500 ease-in-out">Contact</a>
            </div>
          </div>
        </Container>
      </div>
  )
}

export default Header