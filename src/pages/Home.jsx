import Hero from "../components/Hero";
import Services from "../components/Services";

import About from "./About";
import WhyJattari from "./WhyJattari";
import Amenities from "./Amenities";
import Keyplan from "./Keyplan";
import LayoutSection from "./LayoutSection";
import Gallery from "./Gallery";
import FAQ from "./FAQ";
import News from "./News";
import Contact from "./Contact";

function Home() {
  return (
    <>
      <Hero />
      <About />
      <WhyJattari />
      <Services />
      <Amenities />
      <Keyplan />
      <LayoutSection />
      <Gallery />
      <FAQ />
      <News />
      <Contact />
    </>
  );
}

export default Home;