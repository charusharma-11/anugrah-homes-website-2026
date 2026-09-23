import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { ChevronDown, Menu, X, ArrowUpRight } from "lucide-react";

function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  const services = [
    ["Amenities", "/amenities"],
    ["Price", "/price"],
    ["Keyplan", "/keyplan"],
    ["Layout", "/layout"],
    ["Gallery", "/gallery"],
  ];

  const closeMenu = () => {
    setMobileOpen(false);
    setServicesOpen(false);

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const navClass = ({ isActive }) =>
    `relative whitespace-nowrap text-[13px] font-semibold tracking-wide transition-all duration-300 ${
      isActive
        ? "text-[#d8b56c]"
        : "text-white/75 hover:text-[#d8b56c]"
    }`;

  return (
    <header className="fixed left-0 right-0 top-0 z-[100]">
      <div className="mx-auto w-full max-w-[1550px] px-3 pt-3 sm:px-5 sm:pt-4 lg:px-8">
        <nav className="premium-navbar">

          <div className="flex min-h-[68px] items-center justify-between gap-4 px-4 sm:px-6 lg:px-7">

            {/* LOGO */}
            <Link
              to="/"
              onClick={closeMenu}
              className="flex shrink-0 items-center gap-3"
            >
              <div className="premium-logo">
                <img
                  src="/images/jattari-logo.png"
                  alt="Jattari"
                  className="h-full w-full object-contain"
                  onError={(e) => {
                    e.currentTarget.src = "/images/anugrah-logo.jpg";
                  }}
                />
              </div>

              <div className="hidden sm:block">
                <p className="font-serif text-[19px] font-bold text-white">
                  Jattari
                </p>

                <p className="mt-0.5 text-[8px] font-bold uppercase tracking-[0.28em] text-[#d8b56c]">
                  Premium Plots
                </p>
              </div>
            </Link>

            {/* DESKTOP NAV */}
            <div className="hidden items-center gap-6 lg:flex xl:gap-8">

              <NavLink to="/" end className={navClass}>
                Home
              </NavLink>

              <NavLink to="/about" className={navClass}>
                About Us
              </NavLink>

              <NavLink to="/why-jattari" className={navClass}>
                Why Jattari
              </NavLink>

              {/* SERVICES */}
              <div className="relative">
                <button
                  type="button"
                  onClick={() =>
                    setServicesOpen((value) => !value)
                  }
                  className="flex items-center gap-1.5 whitespace-nowrap text-[13px] font-semibold tracking-wide text-white/75 transition hover:text-[#d8b56c]"
                >
                  Services

                  <ChevronDown
                    size={15}
                    className={`transition-transform duration-300 ${
                      servicesOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {servicesOpen && (
                  <div className="premium-dropdown absolute left-1/2 top-full mt-4 w-60 -translate-x-1/2 p-2">

                    <div className="mb-1 px-3 py-2">
                      <p className="text-[9px] font-bold uppercase tracking-[0.22em] text-[#ae8747]">
                        Explore Project
                      </p>
                    </div>

                    {services.map(([name, path]) => (
                      <Link
                        key={path}
                        to={path}
                        onClick={closeMenu}
                        className="group flex items-center justify-between rounded-xl px-4 py-3 text-sm font-semibold text-gray-700 transition-all hover:bg-[#173f35] hover:text-white"
                      >
                        {name}

                        <ArrowUpRight
                          size={15}
                          className="text-[#b99652] transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                        />
                      </Link>
                    ))}
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
            </div>

            {/* CONTACT BUTTON */}
            <Link
              to="/contact"
              onClick={closeMenu}
              className="premium-nav-button hidden lg:inline-flex"
            >
              Contact Us
              <ArrowUpRight size={15} />
            </Link>

            {/* MOBILE BUTTON */}
            <button
              type="button"
              onClick={() => setMobileOpen((value) => !value)}
              className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/10 text-white backdrop-blur-md transition hover:bg-[#b99552] lg:hidden"
              aria-label="Toggle navigation"
            >
              {mobileOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>

          {/* MOBILE MENU */}
          {mobileOpen && (
            <div className="border-t border-white/10 px-4 pb-5 pt-4 lg:hidden">

              <div className="space-y-1">

                <Link
                  to="/"
                  onClick={closeMenu}
                  className="mobile-nav-link"
                >
                  Home
                </Link>

                <Link
                  to="/about"
                  onClick={closeMenu}
                  className="mobile-nav-link"
                >
                  About Us
                </Link>

                <Link
                  to="/why-jattari"
                  onClick={closeMenu}
                  className="mobile-nav-link"
                >
                  Why Jattari
                </Link>

                <button
                  type="button"
                  onClick={() =>
                    setServicesOpen((value) => !value)
                  }
                  className="mobile-nav-link flex w-full items-center justify-between"
                >
                  Services

                  <ChevronDown
                    size={17}
                    className={
                      servicesOpen ? "rotate-180" : ""
                    }
                  />
                </button>

                {servicesOpen && (
                  <div className="ml-3 space-y-1 border-l border-[#b99552]/30 pl-3">
                    {services.map(([name, path]) => (
                      <Link
                        key={path}
                        to={path}
                        onClick={closeMenu}
                        className="block rounded-xl px-4 py-3 text-sm text-white/60 transition hover:bg-white/5 hover:text-[#d8b56c]"
                      >
                        {name}
                      </Link>
                    ))}
                  </div>
                )}

                <Link
                  to="/faq"
                  onClick={closeMenu}
                  className="mobile-nav-link"
                >
                  FAQ
                </Link>

                <Link
                  to="/news"
                  onClick={closeMenu}
                  className="mobile-nav-link"
                >
                  News
                </Link>

                <Link
                  to="/contact"
                  onClick={closeMenu}
                  className="mobile-nav-link"
                >
                  Contact
                </Link>

                <Link
                  to="/contact"
                  onClick={closeMenu}
                  className="mt-3 flex items-center justify-center gap-2 rounded-xl bg-[#c8a65f] px-4 py-3.5 text-sm font-bold text-[#10251e]"
                >
                  Contact Us
                  <ArrowUpRight size={16} />
                </Link>
              </div>
            </div>
          )}
        </nav>
      </div>
    </header>
  );
}

export default Navbar;