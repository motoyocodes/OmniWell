const Footer = () => {
  return (
    <footer className="pb-16 pt-4 bg-button-primary text-white">
      <div className="justify-center mx-auto w-5/6 gap-16 md:flex">
        {/* Section 1: About / Logo */}
        <div className="mt-16 basis-1/2 md:mt-0">
          <h3 className="text-2xl font-bold">Omniwell Gym</h3>
          <p className="mt-4">
            Your ultimate fitness destination. Join our classes, train with
            expert coaches, and achieve your wellness goals.
          </p>
        </div>

        {/* Section 2: Navigation / Quick Links */}
        <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className="text-xl font-semibold">Quick Links</h4>
          <ul className="mt-4 space-y-2">
            <li>
              <a href="#ourclasses" className="hover:underline">
                Our Classes
              </a>
            </li>
            <li>
              <a href="#contactus" className="hover:underline">
                Join Now
              </a>
            </li>
            <li>
              <a href="#home" className="hover:underline">
                About Us
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:underline">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Section 3: Social / Contact */}
        <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className="text-xl font-semibold">Contact Us</h4>
          <p className="mt-4">Email: info@omniwellgym.com</p>
          <p>Phone: +123 456 7890</p>
          <div className="mt-4 flex space-x-4">
            <a href="#" className="hover:text-gray-300">
              Facebook
            </a>
            <a href="#" className="hover:text-gray-300">
              Instagram
            </a>
            <a href="#" className="hover:text-gray-300">
              Twitter
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
