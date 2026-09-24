import {
  ArrowRight,
  Camera,
  IndianRupee,
  Map,
  Sparkles,
} from "lucide-react";
import { Link } from "react-router-dom";

function Services() {
  const services = [
    {
      title: "Amenities",
      text: "Explore the thoughtful features planned for the project.",
      icon: Sparkles,
      path: "/amenities",
      number: "01",
    },
    {
      title: "Price",
      text: "Check pricing information and current availability.",
      icon: IndianRupee,
      path: "/price",
      number: "02",
    },
    {
      title: "Keyplan",
      text: "Understand the project planning and plot arrangement.",
      icon: Map,
      path: "/keyplan",
      number: "03",
    },
    {
      title: "Gallery",
      text: "Take a visual tour through project images.",
      icon: Camera,
      path: "/gallery",
      number: "04",
    },
  ];

  return (
    <section id="services" className="bg-white py-24">
      <div className="mx-auto max-w-[1450px] px-5 sm:px-8 lg:px-10">

        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#b18b4f]">
            Explore The Project
          </p>

          <h2 className="mt-3 font-serif text-4xl font-semibold text-[#173f35] sm:text-5xl">
            Everything You Need,
            <span className="block text-[#b18b4f]">
              All In One Place
            </span>
          </h2>

          <p className="mt-5 text-base leading-8 text-gray-600">
            Explore amenities, pricing, keyplan and project visuals.
          </p>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <Link
                key={service.path}
                to={service.path}
                className="group relative rounded-[2rem] border border-[#173f35]/10 bg-[#f7f3ea]/60 p-6 text-left transition hover:-translate-y-2 hover:bg-white hover:shadow-xl"
              >
                <span className="absolute right-5 top-5 text-xs font-semibold text-[#173f35]/20">
                  {service.number}
                </span>

                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#173f35] text-[#dfc995]">
                  <Icon size={21} />
                </div>

                <h3 className="mt-7 font-serif text-xl font-semibold text-[#173f35]">
                  {service.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-gray-500">
                  {service.text}
                </p>

                <span className="mt-6 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#b18b4f] transition group-hover:gap-3">
                  Explore
                  <ArrowRight size={15} />
                </span>
              </Link>
            );
          })}
        </div>

      </div>
    </section>
  );
}

export default Services;