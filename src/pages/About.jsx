import { ArrowUpRight, CheckCircle2, Leaf, ShieldCheck } from "lucide-react";

function About() {
  const go = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });
  };

  const features = [
    {
      icon: ShieldCheck,
      title: "Thoughtful Planning",
      text: "A planned approach to residential plots with attention to roads, spaces and everyday convenience.",
    },
    {
      icon: Leaf,
      title: "Peaceful Living",
      text: "A setting designed to bring together open surroundings, comfortable living and future possibilities.",
    },
  ];

  return (
    <section id="about" className="relative overflow-hidden bg-white py-24">
      <div className="mx-auto max-w-[1450px] px-5 sm:px-8 lg:px-10">
        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
          <div className="relative">
            <div className="absolute -inset-4 rounded-[2.8rem] border border-[#c8a96b]/20" />

            <div className="relative overflow-hidden rounded-[2.5rem] bg-[#f7f3ea] p-2 shadow-xl">
              <div className="relative overflow-hidden rounded-[2.1rem]">
                <img
                  src="https://www.anugrahhomes.com/_next/image?url=%2Fpark3.jpeg&w=3840&q=75"
                  alt="Anugrah Homes residential project"
                  className="h-[500px] w-full object-cover transition duration-700 hover:scale-105 sm:h-[600px]"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#10251e]/70 via-transparent to-transparent" />

                <div className="absolute bottom-6 left-6 right-6">
                  <div className="rounded-2xl bg-[#10251e]/65 p-5 backdrop-blur-md">
                    <p className="text-xs uppercase tracking-[0.18em] text-[#dfc995]">
                      Anugrah Homes
                    </p>
                    <p className="mt-2 font-serif text-2xl font-semibold text-white">
                      Planned For Better Living
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#b18b4f]">
              About Anugrah Homes
            </p>

            <h2 className="mt-3 font-serif text-4xl font-semibold leading-tight text-[#173f35] sm:text-5xl">
              A Thoughtful Address
              <span className="block text-[#b18b4f]">
                For Your Future
              </span>
            </h2>

            <p className="mt-6 text-base leading-8 text-[#202522]/65">
              Anugrah Homes brings together residential plots, thoughtful
              planning and a location-focused approach for people looking to
              create a future address in Jattari.
            </p>

            <p className="mt-5 text-base leading-8 text-[#202522]/65">
              From the overall layout to connectivity and open spaces, every
              aspect is presented with the idea of making your plot selection
              simple, comfortable and future-focused.
            </p>

            <div className="mt-9 grid gap-4 sm:grid-cols-2">
              {features.map((feature) => {
                const Icon = feature.icon;

                return (
                  <div
                    key={feature.title}
                    className="rounded-[1.5rem] border border-[#173f35]/10 bg-[#f7f3ea]/60 p-5 transition hover:-translate-y-1 hover:bg-white hover:shadow-lg"
                  >
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#173f35] text-[#dfc995]">
                      <Icon size={20} />
                    </div>

                    <h3 className="mt-5 font-serif text-lg font-semibold text-[#173f35]">
                      {feature.title}
                    </h3>

                    <p className="mt-2 text-sm leading-6 text-gray-500">
                      {feature.text}
                    </p>
                  </div>
                );
              })}
            </div>

            <div className="mt-8 space-y-3">
              {[
                "Residential plot-focused planning",
                "Location and connectivity focused approach",
                "Designed around comfortable future living",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 text-sm font-medium text-[#173f35]"
                >
                  <CheckCircle2 size={18} className="text-[#b18b4f]" />
                  {item}
                </div>
              ))}
            </div>

            <button
              onClick={() => go("amenities")}
              className="mt-9 inline-flex items-center gap-2 rounded-full bg-[#173f35] px-6 py-3.5 text-sm font-semibold text-white transition hover:-translate-y-1 hover:bg-[#b18b4f]"
            >
              Explore Amenities
              <ArrowUpRight size={17} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;