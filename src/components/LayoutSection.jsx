import { ArrowRight, Car, Compass, Home, Trees } from "lucide-react";

function LayoutSection() {
  const go = () => {
    document.getElementById("gallery")?.scrollIntoView({
      behavior: "smooth",
    });
  };

  const items = [
    [Home, "Residential Plots", "Explore the planned residential plot arrangement."],
    [Car, "Internal Roads", "Understand the road structure connecting project areas."],
    [Trees, "Open Spaces", "View the overall placement of planned open areas."],
    [Compass, "Project Orientation", "Understand the overall project direction."],
  ];

  return (
    <section id="layout" className="bg-white py-24">
      <div className="mx-auto max-w-[1450px] px-5 sm:px-8 lg:px-10">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#b18b4f]">
            Project Layout
          </p>

          <h2 className="mt-3 font-serif text-4xl font-semibold text-[#173f35] sm:text-5xl">
            Everything Planned
            <span className="block text-[#b18b4f]">
              With Purpose
            </span>
          </h2>
        </div>

        <div className="mt-14 grid items-center gap-10 lg:grid-cols-[1.3fr_0.7fr]">
          <div className="rounded-[2.5rem] bg-[#f7f3ea] p-3 shadow-xl">
            <img
              src="/images/layout-plan.png"
              alt="Anugrah Homes project layout plan"
              className="max-h-[650px] w-full rounded-[2rem] object-contain"
            />
          </div>

          <div className="space-y-5">
            {items.map(([Icon, title, text]) => (
              <div
                key={title}
                className="rounded-[1.75rem] border border-[#173f35]/10 bg-white p-6 transition hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="flex items-center gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#173f35] text-[#dfc995]">
                    <Icon size={19} />
                  </div>

                  <h3 className="font-serif text-xl font-semibold text-[#173f35]">
                    {title}
                  </h3>
                </div>

                <p className="mt-3 text-sm leading-6 text-gray-500">
                  {text}
                </p>
              </div>
            ))}

            <button
              onClick={go}
              className="inline-flex items-center gap-2 rounded-full bg-[#173f35] px-6 py-3.5 text-sm font-semibold text-white hover:bg-[#b18b4f]"
            >
              View Gallery
              <ArrowRight size={17} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default LayoutSection;