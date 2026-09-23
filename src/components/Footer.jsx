function Footer() {
  const go = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <footer className="bg-[#10251e] px-5 py-14 text-white sm:px-8 lg:px-10">
      <div className="mx-auto max-w-[1450px]">
        <div className="grid gap-10 md:grid-cols-3">

          {/* Brand */}
          <div>
            <div className="flex items-center gap-3">
              <div className="h-11 w-11 overflow-hidden rounded-xl bg-white">
                <img
                  src="https://www.anugrahhomes.com/_next/image?url=%2Flogo-2.png&w=640&q=75"
                  alt="Anugrah Homes"
                  className="h-full w-full object-contain"
                />
              </div>

              <div>
                <h3 className="font-serif text-2xl font-semibold">
                  Anugrah Homes
                </h3>

                <p className="mt-1 text-[10px] uppercase tracking-[0.2em] text-[#dfc995]">
                  Premium Plots
                </p>
              </div>
            </div>

            <p className="mt-5 max-w-sm text-sm leading-7 text-white/55">
              Residential plots in Jattari designed around thoughtful
              planning, connectivity and future possibilities.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-white">
              Quick Links
            </h4>

            <div className="mt-5 grid grid-cols-2 gap-3 text-sm text-white/60">
              {[
                ["Home", "home"],
                ["About Us", "about"],
                ["Why Jattari", "why-jattari"],
                ["Amenities", "amenities"],
                ["Price", "price"],
                ["Gallery", "gallery"],
              ].map(([name, id]) => (
                <button
                  key={id}
                  onClick={() => go(id)}
                  className="text-left transition hover:text-[#dfc995]"
                >
                  {name}
                </button>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-white">
              Connect With Us
            </h4>

            <p className="mt-5 text-sm leading-7 text-white/55">
              Jattari, Uttar Pradesh
            </p>

            <p className="mt-2 text-sm text-white/55">
              Add your official phone and email here.
            </p>

            <button
              onClick={() => go("contact")}
              className="mt-5 rounded-full bg-[#dfc995] px-5 py-3 text-sm font-semibold text-[#10251e] transition hover:bg-white"
            >
              Contact Us
            </button>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 flex flex-col justify-between gap-4 border-t border-white/10 pt-6 text-xs text-white/40 sm:flex-row">
          <p>
            © 2026 Anugrah Homes. All rights reserved.
          </p>

          <button
            onClick={() => go("home")}
            className="transition hover:text-[#dfc995]"
          >
            Back to Top ↑
          </button>
        </div>
      </div>
    </footer>
  );
}

export default Footer;