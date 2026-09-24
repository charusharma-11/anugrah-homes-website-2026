// import { BrowserRouter, Routes, Route } from "react-router-dom";

// import Layout from "./components/Layout";
// import Home from "./pages/Home";

// import Amenities from "./pages/Amenities";
// import Price from "./pages/Price";
// import Keyplan from "./pages/Keyplan";
// import LayoutSection from "./pages/LayoutSection";
// import Gallery from "./pages/Gallery";

// function App() {
//   return (
//     <BrowserRouter>
//       <Routes>

//         <Route element={<Layout />}>

//           <Route path="/" element={<Home />} />

//           {/* Services Pages */}
//           <Route path="/amenities" element={<Amenities />} />
//           <Route path="/price" element={<Price />} />
//           <Route path="/keyplan" element={<Keyplan />} />
//           <Route path="/layout" element={<LayoutSection />} />
//           <Route path="/gallery" element={<Gallery />} />

//         </Route>

//       </Routes>
//     </BrowserRouter>
//   );
// }

// export default App;
















// // import { BrowserRouter, Routes, Route } from "react-router-dom";

// // import Layout from "./components/Layout";

// // import Home from "./pages/Home";
// // import About from "./pages/About";
// // import WhyJattari from "./pages/WhyJattari";
// // import Amenities from "./pages/Amenities";
// // import Price from "./pages/Price";
// // import Keyplan from "./pages/Keyplan";
// // import LayoutSection from "./pages/LayoutSection";
// // import Gallery from "./pages/Gallery";
// // import FAQ from "./pages/FAQ";
// // import News from "./pages/News";
// // import Contact from "./pages/Contact";

// // function App() {
// //   return (
// //     <BrowserRouter>
// //       <Routes>
// //         <Route element={<Layout />}>

// //           {/* HOME */}
// //           <Route path="/" element={<Home />} />

// //           {/* MAIN PAGES */}
// //           <Route path="/about" element={<About />} />
// //           <Route path="/why-jattari" element={<WhyJattari />} />
// //           <Route path="/faq" element={<FAQ />} />
// //           <Route path="/news" element={<News />} />
// //           <Route path="/contact" element={<Contact />} />

// //           {/* SERVICES */}
// //           <Route path="/amenities" element={<Amenities />} />
// //           <Route path="/price" element={<Price />} />
// //           <Route path="/keyplan" element={<Keyplan />} />
// //           <Route path="/layout" element={<LayoutSection />} />
// //           <Route path="/gallery" element={<Gallery />} />

// //         </Route>
// //       </Routes>
// //     </BrowserRouter>
// //   );
// // }

// // export default App;

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "./components/Layout";

import Home from "./pages/Home";
import About from "./pages/About";
import WhyJattari from "./pages/WhyJattari";
import Amenities from "./pages/Amenities";
import Price from "./pages/Price";
import Keyplan from "./pages/Keyplan";
import LayoutSection from "./pages/LayoutSection";
import Gallery from "./pages/Gallery";
import FAQ from "./pages/FAQ";
import News from "./pages/News";
import Contact from "./pages/Contact";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>

          <Route path="/" element={<Home />} />

          <Route path="/about" element={<About />} />

          <Route path="/why-jattari" element={<WhyJattari />} />

          <Route path="/amenities" element={<Amenities />} />

          <Route path="/price" element={<Price />} />

          <Route path="/keyplan" element={<Keyplan />} />

          <Route path="/layout" element={<LayoutSection />} />

          <Route path="/gallery" element={<Gallery />} />

          <Route path="/faq" element={<FAQ />} />

          <Route path="/news" element={<News />} />

          <Route path="/contact" element={<Contact />} />

        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;