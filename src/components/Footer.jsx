import Container from "@/components/Container.jsx";

function Footer() {
  return (
    <footer className="text-white py-12">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Information */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Information</h3>
            <ul className="space-y-2 text-gray-300">
              <li>About Us</li>
              <li>Contact</li>
              <li>Privacy Policy</li>
              <li>Terms of Service</li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-gray-300">
              <li>Prosthetic Design</li>
              <li>CAD Modeling</li>
              <li>3D Printing</li>
              <li>Consultation</li>
            </ul>
          </div>

          {/* Socials */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Socials</h3>
            <ul className="space-y-2 text-gray-300">
              <li>Facebook</li>
              <li>Twitter</li>
              <li>Instagram</li>
              <li>LinkedIn</li>
            </ul>
          </div>
        </div>

        {/* Footer bottom text */}
        <div className="mt-12 text-center text-gray-400 text-sm">
          &copy; {new Date().getFullYear()} Prosthetic. All rights reserved.
        </div>
      </Container>
    </footer>
  );
}

export default Footer;