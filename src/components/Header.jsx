
import Container from "@/components/Container.jsx";
function Header() {
  return (
      <div className="text-xl text-white py-8 w-full bg-black">
        <Container>
          <div className="flex flex-row justify-between items-center">
              <a href="/" className="text-white hover:text-blue-500 transition-colors duration-500 ease-in-out text-sm">ScioByte</a>
            <div className="flex gap-4 text-sm">
              <a href="/about" className="text-white hover:text-blue-500 transition-colors duration-500 ease-in-out">About</a>
              <a href="/services" className="text-white hover:text-blue-500 transition-colors duration-500 ease-in-out">Services</a>
              <a href="/contact" className="text-white hover:text-blue-500 transition-colors duration-500 ease-in-out">Contact</a>
            </div>
          </div>
        </Container>
      </div>
  )
}

export default Header