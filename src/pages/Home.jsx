import Hero from "../components/Hero";
import About from "../components/About";
import WhyJattari from "../components/WhyJattari";
import Services from "../components/Services";
import Amenities from "../components/Amenities";
import Price from "../components/Price";
import Keyplan from "../components/Keyplan";
import LayoutSection from "../components/LayoutSection";
import Gallery from "../components/Gallery";
import FAQ from "../components/FAQ";
import News from "../components/News";
import Contact from "../components/Contact";

function Home() {
  return (
    <>
      <Hero />
      <About />
      <WhyJattari />
      <Services />
      <Amenities />
      <Price />
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