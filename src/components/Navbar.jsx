import { useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";

function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  const go = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });

    setMobileOpen(false);
    setServicesOpen(false);
  };

  const services = [
    ["Amenities", "amenities"],
    ["Price", "price"],
    ["Keyplan", "keyplan"],
    ["Layout", "layout"],
    ["Gallery", "gallery"],
  ];

  return (
    <header className="fixed left-0 top-0 z-50 w-full">
      <div className="mx-auto max-w-[1500px] px-4 pt-4 sm:px-6 lg:px-10">
        <nav className="rounded-2xl border border-black/5 bg-white/95 px-5 py-4 shadow-lg backdrop-blur-xl">
          <div className="flex min-h-[58px] items-center justify-between gap-8">
            <button
              onClick={() => go("home")}
              className="flex shrink-0 items-center gap-3"
            >
              <div className="h-11 w-11 overflow-hidden rounded-xl">
                <img
                  src="https://www.anugrahhomes.com/_next/image?url=%2Flogo-2.png&w=640&q=75"
                  alt="Anugrah Homes"
                  className="h-full w-full object-contain"
                />
              </div>

              <div className="hidden text-left sm:block">
                <p className="font-serif text-lg font-bold leading-tight text-[#173f35]">
                  Anugrah Homes
                </p>
                <p className="mt-1 text-[9px] font-semibold uppercase tracking-[0.22em] text-[#b18b4f]">
                  Premium Plots
                </p>
              </div>
            </button>

            <div className="hidden items-center gap-9 xl:flex">
              <button onClick={() => go("home")} className="nav-link">
                Home
              </button>

              <button onClick={() => go("about")} className="nav-link">
                About Us
              </button>

              <button onClick={() => go("why-jattari")} className="nav-link">
                Why Jattari
              </button>

              <div className="relative">
                <button
                  onClick={() => setServicesOpen(!servicesOpen)}
                  className="nav-link flex items-center gap-2"
                >
                  Services
                  <ChevronDown
                    size={15}
                    className={servicesOpen ? "rotate-180" : ""}
                  />
                </button>

                {servicesOpen && (
                  <div className="absolute left-1/2 top-full mt-4 w-56 -translate-x-1/2 rounded-2xl border border-black/5 bg-white p-2 shadow-xl">
                    {services.map(([name, id]) => (
                      <button
                        key={id}
                        onClick={() => go(id)}
                        className="flex w-full items-center justify-between rounded-xl px-4 py-3 text-sm text-gray-700 hover:bg-[#f7f3ea]"
                      >
                        {name}
                        <span className="text-[#b18b4f]">→</span>
                      </button>
                    ))}
                  </div>
                )}
              </div>

              <button onClick={() => go("faq")} className="nav-link">
                FAQ
              </button>

              <button onClick={() => go("news")} className="nav-link">
                News
              </button>
            </div>

            

            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="flex h-10 w-10 items-center justify-center rounded-full bg-[#173f35] text-white xl:hidden"
              aria-label="Menu"
            >
              {mobileOpen ? <X size={19} /> : <Menu size={19} />}
            </button>
          </div>

          {mobileOpen && (
            <div className="mt-5 border-t border-black/10 pt-5 xl:hidden">
              <div className="space-y-1">
                {[
                  ["Home", "home"],
                  ["About Us", "about"],
                  ["Why Jattari", "why-jattari"],
                  ["FAQ", "faq"],
                  ["News", "news"],
                ].map(([name, id]) => (
                  <button
                    key={id}
                    onClick={() => go(id)}
                    className="mobile-link"
                  >
                    {name}
                  </button>
                ))}

                <button
                  onClick={() => setServicesOpen(!servicesOpen)}
                  className="flex w-full items-center justify-between rounded-xl px-4 py-3.5 text-sm font-medium text-gray-700 hover:bg-[#f7f3ea]"
                >
                  Services
                  <ChevronDown
                    size={16}
                    className={servicesOpen ? "rotate-180" : ""}
                  />
                </button>

                {servicesOpen && (
                  <div className="ml-4 space-y-1 border-l border-[#c8a96b]/30 pl-3">
                    {services.map(([name, id]) => (
                      <button
                        key={id}
                        onClick={() => go(id)}
                        className="block w-full rounded-lg px-4 py-2.5 text-left text-sm text-gray-600 hover:bg-[#f7f3ea]"
                      >
                        {name}
                      </button>
                    ))}
                  </div>
                )}

                
              </div>
            </div>
          )}
        </nav>
      </div>
    </header>
  );
}

export default Navbar;