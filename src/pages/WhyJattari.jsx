import { ArrowRight, MapPinned, Route, Sparkles } from "lucide-react";

function WhyJattari() {
  const go = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });
  };

  const points = [
    {
      icon: MapPinned,
      title: "Connected Surroundings",
      text: "Explore a residential setting with access to important routes and surrounding destinations.",
    },
    {
      icon: Route,
      title: "Convenient Access",
      text: "The location offers an opportunity to plan everyday movement around your future address.",
    },
    {
      icon: Sparkles,
      title: "Future-Oriented Living",
      text: "A residential environment planned around comfort, accessibility and long-term possibilities.",
    },
  ];

  return (
    <section id="why-jattari" className="bg-[#f7f3ea] py-24">
      <div className="mx-auto max-w-[1450px] px-5 sm:px-8 lg:px-10">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#b18b4f]">
          Why Jattari
        </p>

        <h2 className="mt-3 max-w-3xl font-serif text-4xl font-semibold text-[#173f35] sm:text-5xl lg:text-6xl">
          A Place To Plan
          <span className="block text-[#b18b4f]">
            Your Next Chapter
          </span>
        </h2>

        <p className="mt-6 max-w-2xl text-base leading-8 text-gray-600">
          Discover a residential destination where location, accessibility
          and thoughtful planning come together for a comfortable future.
        </p>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {points.map((point, index) => {
            const Icon = point.icon;

            return (
              <div
                key={point.title}
                className="group relative overflow-hidden rounded-[2rem] border border-[#173f35]/10 bg-white p-7 transition hover:-translate-y-2 hover:shadow-xl"
              >
                <span className="absolute right-6 top-6 text-sm font-semibold text-[#173f35]/15">
                  0{index + 1}
                </span>

                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#173f35] text-[#dfc995]">
                  <Icon size={23} />
                </div>

                <h3 className="mt-7 font-serif text-2xl font-semibold text-[#173f35]">
                  {point.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-gray-500">
                  {point.text}
                </p>

                <div className="mt-7 flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#b18b4f]">
                  Discover More
                  <ArrowRight size={15} />
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-10 flex flex-col gap-5 rounded-[2rem] bg-[#173f35] px-7 py-7 text-white sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="font-serif text-2xl font-semibold">
              Explore Anugrah Homes
            </p>
            <p className="mt-2 text-sm text-white/60">
              Take a closer look at the project, amenities and planned layout.
            </p>
          </div>

          <button
            onClick={() => go("services")}
            className="flex w-fit items-center gap-2 rounded-full bg-[#dfc995] px-6 py-3.5 text-sm font-semibold text-[#10251e] hover:bg-white"
          >
            Explore Project
            <ArrowRight size={17} />
          </button>
        </div>
      </div>
    </section>
  );
}

export default WhyJattari;