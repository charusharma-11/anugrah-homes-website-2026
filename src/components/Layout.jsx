import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import FloatingActions from "./FloatingActions";
import Footer from "./Footer";

function Layout() {
  return (
    <>
      <Navbar />
      <main>
        <Outlet />
      </main>
      <FloatingActions />
      <Footer />
    </>
  );
}

export default Layout;