import { ArrowRight, MapPin } from "lucide-react";

function Hero() {
  const scrollToAbout = () => {
    document.getElementById("about")?.scrollIntoView({
      behavior: "smooth",
    });
  };

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden bg-[#f7f1e7]"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="/images/hero.jpg"
          alt="Residential plots in Jattari"
          className="h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-[#f7f1e7] via-[#f7f1e7]/90 to-[#f7f1e7]/30" />
      </div>

      {/* Decorative Circle */}
      <div className="pointer-events-none absolute -right-40 top-20 hidden h-[500px] w-[500px] rounded-full border border-[#b78a52]/25 lg:block" />

      <div className="relative z-10 mx-auto flex min-h-screen max-w-[1500px] items-center px-5 pb-16 pt-24 sm:px-8 lg:px-12 lg:pt-28">
        <div className="w-full max-w-3xl">

          {/* Location */}
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#b78a52]/30 bg-white/85 px-4 py-2 shadow-sm backdrop-blur-sm">
            <MapPin size={15} className="text-[#a65d3b]" />

            <span className="text-xs font-bold uppercase tracking-[0.16em] text-[#3b2a24]">
              Jattari, Aligarh
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="max-w-3xl font-serif text-4xl font-bold leading-[1.05] text-[#3b2a24] sm:text-5xl lg:text-7xl">
            A Better Place
            <span className="block text-[#a65d3b]">
              To Build Your Future.
            </span>
          </h1>

          {/* Description */}
          <p className="mt-6 max-w-2xl text-base leading-8 text-[#625852] sm:text-lg">
            Thoughtfully planned residential plots in Jattari, designed for
            peaceful living, modern convenience and a well-connected future.
          </p>

          {/* Buttons */}
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <button
              onClick={scrollToContact}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[#a65d3b] px-7 py-3.5 text-sm font-bold text-white shadow-lg shadow-[#a65d3b]/20 transition hover:bg-[#84472e]"
            >
              Book a Site Visit
              <ArrowRight size={17} />
            </button>

            <button
              onClick={scrollToAbout}
              className="inline-flex items-center justify-center gap-2 rounded-full border border-[#3b2a24]/15 bg-white/90 px-7 py-3.5 text-sm font-bold text-[#3b2a24] backdrop-blur-sm transition hover:border-[#a65d3b] hover:text-[#a65d3b]"
            >
              Explore Project
              <ArrowRight size={17} />
            </button>
          </div>

          {/* Highlights */}
          <div className="mt-10 grid max-w-xl grid-cols-3 gap-3">
            <div className="rounded-2xl border border-[#3b2a24]/10 bg-white/80 p-4 shadow-sm backdrop-blur-sm">
              <p className="text-xl font-bold text-[#a65d3b]">01</p>
              <p className="mt-1 text-xs font-medium text-[#70665f]">
                Prime Location
              </p>
            </div>

            <div className="rounded-2xl border border-[#3b2a24]/10 bg-white/80 p-4 shadow-sm backdrop-blur-sm">
              <p className="text-xl font-bold text-[#a65d3b]">02</p>
              <p className="mt-1 text-xs font-medium text-[#70665f]">
                Planned Living
              </p>
            </div>

            <div className="rounded-2xl border border-[#3b2a24]/10 bg-white/80 p-4 shadow-sm backdrop-blur-sm">
              <p className="text-xl font-bold text-[#a65d3b]">03</p>
              <p className="mt-1 text-xs font-medium text-[#70665f]">
                Future Ready
              </p>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Curve */}
      <div className="absolute bottom-0 left-0 h-8 w-full rounded-t-[50%] bg-[#f7f1e7]" />
    </section>
  );
}

export default Hero;