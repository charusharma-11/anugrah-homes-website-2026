import { ArrowRight, MapPin, Sparkles } from "lucide-react";

function Hero() {
  const go = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden bg-[#f7f3ea] pt-32"
    >
      <div className="absolute -left-32 top-32 h-80 w-80 rounded-full bg-[#789b87]/15 blur-3xl" />
      <div className="absolute right-[-120px] top-20 h-96 w-96 rounded-full border border-[#c8a96b]/20" />

      <div className="relative mx-auto max-w-[1500px] px-5 pb-16 sm:px-8 lg:px-10">
        <div className="grid min-h-[calc(100vh-160px)] items-center gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#c8a96b]/30 bg-white/70 px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-[#173f35]">
              <Sparkles size={14} />
              Residential Plots
            </div>

            <h1 className="font-serif text-5xl font-semibold leading-[1.05] text-[#173f35] sm:text-6xl lg:text-7xl">
              A Better Place
              <span className="block text-[#b18b4f]">
                To Build Your Future.
              </span>
            </h1>

            <p className="mt-7 max-w-xl text-base leading-8 text-[#202522]/65 sm:text-lg">
              Discover thoughtfully planned residential plots at Anugrah
              Homes, Jattari — designed around connectivity, comfort and
              future possibilities.
            </p>

            <div className="mt-7 flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#173f35] text-[#dfc995]">
                <MapPin size={18} />
              </span>

              <div>
                <p className="text-xs uppercase tracking-[0.15em] text-[#789b87]">
                  Project Location
                </p>
                <p className="mt-1 text-sm font-medium text-[#173f35]">
                  Jattari, Uttar Pradesh
                </p>
              </div>
            </div>

            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <button
                onClick={() => go("contact")}
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-[#173f35] px-7 py-4 text-sm font-semibold text-white transition hover:-translate-y-1 hover:bg-[#b18b4f]"
              >
                Book a Site Visit
                <ArrowRight
                  size={17}
                  className="transition group-hover:translate-x-1"
                />
              </button>

              <button
                onClick={() => go("about")}
                className="rounded-full border border-[#173f35]/15 bg-white px-7 py-4 text-sm font-semibold text-[#173f35] transition hover:-translate-y-1 hover:border-[#c8a96b]"
              >
                Explore Project
              </button>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-5 rounded-[3rem] border border-[#c8a96b]/20" />

            <div className="relative overflow-hidden rounded-[2.5rem] border border-white bg-white p-2 shadow-[0_35px_90px_rgba(23,63,53,0.18)]">
              <div className="relative overflow-hidden rounded-[2.1rem]">
                <img
                  src="/images/hero.jpg"
                  alt="Anugrah Homes Jattari"
                  className="h-[430px] w-full object-cover transition duration-700 hover:scale-105 sm:h-[540px] lg:h-[650px]"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#10251e]/75 via-transparent to-transparent" />

                <div className="absolute bottom-6 left-6 right-6">
                  <div className="rounded-2xl bg-[#10251e]/70 p-5 backdrop-blur-md">
                    <p className="text-xs uppercase tracking-[0.18em] text-[#dfc995]">
                      Anugrah Homes
                    </p>

                    <p className="mt-2 font-serif text-2xl font-semibold text-white sm:text-3xl">
                      Your Next Address
                    </p>

                    <p className="mt-2 text-sm leading-6 text-white/70">
                      Residential plots designed for a connected and
                      comfortable future.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-6 -left-3 rounded-2xl bg-white px-5 py-4 shadow-xl sm:-left-6">
              <div className="flex items-center gap-3">
                <MapPin className="text-[#173f35]" size={20} />
                <div>
                  <p className="text-xs text-gray-400">Located In</p>
                  <p className="text-sm font-semibold text-[#173f35]">
                    Jattari, Uttar Pradesh
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;