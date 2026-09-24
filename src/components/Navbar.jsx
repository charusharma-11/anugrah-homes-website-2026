import { useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import { Link, NavLink } from "react-router-dom";

function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  const closeMenu = () => {
    setMobileOpen(false);
    setServicesOpen(false);
  };

  const navClass = ({ isActive }) =>
    `transition-colors duration-200 ${
      isActive
        ? "text-[#A65D3B] font-semibold"
        : "text-[#3B2A24] hover:text-[#A65D3B]"
    }`;

  return (
    <header className="fixed top-0 left-0 z-50 w-full border-b border-[#E5D8C8] bg-[#F7F1E7]/95 backdrop-blur-md">
      <div className="mx-auto flex h-[76px] max-w-[1400px] items-center justify-between px-5 sm:px-8 lg:px-10">

        {/* LOGO */}
        <Link to="/" className="flex flex-col leading-none">
  <span className="font-serif text-xl font-bold tracking-wide text-[#173f35]">
    JATTARI
  </span>
  <span className="mt-1 text-[9px] font-semibold uppercase tracking-[0.22em] text-[#b18b4f]">
    Premium Plots
  </span>
</Link>
        {/* DESKTOP NAV */}
        <nav className="hidden items-center gap-8 text-[15px] lg:flex xl:gap-10">

          <NavLink to="/" end className={navClass}>
            Home
          </NavLink>

          <NavLink to="/about" className={navClass}>
            About Us
          </NavLink>

          <NavLink to="/why-jattari" className={navClass}>
            Why Jattari
          </NavLink>

          {/* SERVICES DROPDOWN */}
          <div
            className="relative"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <button
              type="button"
              onClick={() => setServicesOpen(!servicesOpen)}
              className="flex items-center gap-1.5 text-[#3B2A24] transition-colors hover:text-[#A65D3B]"
            >
              Services
              <ChevronDown
                size={16}
                className={`transition-transform ${
                  servicesOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            {servicesOpen && (
              <div className="absolute left-1/2 top-full mt-3 w-56 -translate-x-1/2 rounded-2xl border border-[#E5D8C8] bg-white p-2 shadow-xl">

                <Link
                  to="/amenities"
                  onClick={closeMenu}
                  className="block rounded-xl px-4 py-3 text-sm text-[#3B2A24] hover:bg-[#F7F1E7] hover:text-[#A65D3B]"
                >
                  Amenities
                </Link>

                <Link
                  to="/price"
                  onClick={closeMenu}
                  className="block rounded-xl px-4 py-3 text-sm text-[#3B2A24] hover:bg-[#F7F1E7] hover:text-[#A65D3B]"
                >
                  Price
                </Link>

                <Link
                  to="/keyplan"
                  onClick={closeMenu}
                  className="block rounded-xl px-4 py-3 text-sm text-[#3B2A24] hover:bg-[#F7F1E7] hover:text-[#A65D3B]"
                >
                  Keyplan
                </Link>

              

                <Link
                  to="/gallery"
                  onClick={closeMenu}
                  className="block rounded-xl px-4 py-3 text-sm text-[#3B2A24] hover:bg-[#F7F1E7] hover:text-[#A65D3B]"
                >
                  Gallery
                </Link>

              </div>
            )}
          </div>

          <NavLink to="/faq" className={navClass}>
            FAQ
          </NavLink>

          <NavLink to="/news" className={navClass}>
            News
          </NavLink>

          <NavLink to="/contact" className={navClass}>
            Contact
          </NavLink>

        </nav>

        {/* MOBILE MENU BUTTON */}
        <button
          type="button"
          onClick={() => setMobileOpen(!mobileOpen)}
          className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#3B2A24] text-white lg:hidden"
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>

      </div>

      {/* MOBILE MENU */}
      {mobileOpen && (
        <div className="border-t border-[#E5D8C8] bg-[#F7F1E7] px-5 py-5 shadow-lg lg:hidden">

          <div className="flex flex-col gap-1">

            <NavLink to="/" end onClick={closeMenu} className={navClass}>
              <div className="rounded-xl px-4 py-3">
                Home
              </div>
            </NavLink>

            <NavLink to="/about" onClick={closeMenu} className={navClass}>
              <div className="rounded-xl px-4 py-3">
                About Us
              </div>
            </NavLink>

            <NavLink
              to="/why-jattari"
              onClick={closeMenu}
              className={navClass}
            >
              <div className="rounded-xl px-4 py-3">
                Why Jattari
              </div>
            </NavLink>

            {/* MOBILE SERVICES */}
            <button
              type="button"
              onClick={() => setServicesOpen(!servicesOpen)}
              className="flex w-full items-center justify-between rounded-xl px-4 py-3 text-left text-[#3B2A24]"
            >
              <span>Services</span>

              <ChevronDown
                size={17}
                className={`transition-transform ${
                  servicesOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            {servicesOpen && (
              <div className="ml-5 border-l border-[#D7C6B4] pl-3">

                <Link
                  to="/amenities"
                  onClick={closeMenu}
                  className="block rounded-xl px-4 py-3 text-sm text-[#5B4840] hover:bg-white hover:text-[#A65D3B]"
                >
                  Amenities
                </Link>

                <Link
                  to="/price"
                  onClick={closeMenu}
                  className="block rounded-xl px-4 py-3 text-sm text-[#5B4840] hover:bg-white hover:text-[#A65D3B]"
                >
                  Price
                </Link>

                <Link
                  to="/keyplan"
                  onClick={closeMenu}
                  className="block rounded-xl px-4 py-3 text-sm text-[#5B4840] hover:bg-white hover:text-[#A65D3B]"
                >
                  Keyplan
                </Link>

                <Link
                  to="/layout"
                  onClick={closeMenu}
                  className="block rounded-xl px-4 py-3 text-sm text-[#5B4840] hover:bg-white hover:text-[#A65D3B]"
                >
                  Layout
                </Link>

                <Link
                  to="/gallery"
                  onClick={closeMenu}
                  className="block rounded-xl px-4 py-3 text-sm text-[#5B4840] hover:bg-white hover:text-[#A65D3B]"
                >
                  Gallery
                </Link>

              </div>
            )}

            <NavLink to="/faq" onClick={closeMenu} className={navClass}>
              <div className="rounded-xl px-4 py-3">
                FAQ
              </div>
            </NavLink>

            <NavLink to="/news" onClick={closeMenu} className={navClass}>
              <div className="rounded-xl px-4 py-3">
                News
              </div>
            </NavLink>

            <NavLink to="/contact" onClick={closeMenu} className={navClass}>
              <div className="rounded-xl px-4 py-3">
                Contact
              </div>
            </NavLink>

          </div>
        </div>
      )}
    </header>
  );
}

export default Navbar;