import { useEffect, useState } from "react";
import Navbar from "./scenes/navbar";
import type { SelectedPage } from "@/shared/types";
import Home from "./scenes/home";
import Benefits from "./scenes/benefits";
import OurClasses from "./scenes/ourclasses";
import ContactUs from "./scenes/ContactUs";
import Footer from "./scenes/footer";
import PricingPlans from "./scenes/pricingPlan";
import Testimonials from "./scenes/testimonials";

function App() {
  const [selectedPage, setSelectedPage] = useState<SelectedPage>("home");
  const [isTopOfPage, setIsTopOfPage] = useState<boolean>(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsTopOfPage(true);
        setSelectedPage("home");
      } else {
        setIsTopOfPage(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div>
      <Navbar
        isTopOfPage={isTopOfPage}
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
      />

      <Home setSelectedPage={setSelectedPage} />
      <Benefits setSelectedPage={setSelectedPage} />
      <OurClasses setSelectedPage={setSelectedPage} />
      <PricingPlans />
      <Testimonials />
      <ContactUs setSelectedPage={setSelectedPage} />
      <Footer />
    </div>
  );
}

export default App;
