import Hero from "./sections/hero";
import Service from "./sections/service";
import Working from "./sections/working";
import Professionals from "./sections/professionals";
import Testimonials from "./sections/testimonials";
import Footer from "./footer";

function LandingPage() {
  return (
    <>
      <Hero />
      <Service />
      <Working />
      <Professionals />
      <Testimonials />
      <Footer />
    </>
  );
}

export default LandingPage;
