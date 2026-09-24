import { useState } from "react";
import {
  ArrowRight,
  Compass,
  Maximize2,
  Ruler,
  X,
  ZoomIn,
} from "lucide-react";

function Keyplan() {
  const [showKeyplan, setShowKeyplan] = useState(false);

  const items = [
    [
      Maximize2,
      "Planned Plot Layout",
      "Clear visual representation of the project's plot arrangement.",
    ],
    [
      Ruler,
      "Efficient Space Planning",
      "Understand plots, roads and planned spaces.",
    ],
    [
      Compass,
      "Project Orientation",
      "Understand the overall direction and project structure.",
    ],
  ];

  return (
    <>
      <section className="min-h-screen bg-[#f7f3ea] px-6 py-32">
        <div className="mx-auto max-w-7xl">

          {/* Heading */}
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#b18b4f]">
            Services / Keyplan
          </p>

          <h1 className="mt-4 text-4xl font-bold text-[#173f35] md:text-6xl">
            A Layout Designed
            <span className="block text-[#b18b4f]">
              Around Better Living
            </span>
          </h1>

          <p className="mt-6 max-w-4xl text-lg leading-8 text-[#70665f]">
            Explore the project key plan to understand the overall arrangement,
            orientation and organization of the residential development.
          </p>

          {/* Content */}
          <div className="mt-14 grid items-center gap-10 lg:grid-cols-2">

            {/* Keyplan Image */}
            <button
              type="button"
              onClick={() => setShowKeyplan(true)}
              className="group w-full rounded-[32px] bg-white p-4 text-left shadow-xl"
            >
              <div className="relative overflow-hidden rounded-[24px]">

                <img
                  src="/images/key-plan.png"
                  alt="Jattari Project Key Plan"
                  className="h-[400px] w-full object-contain transition duration-500 group-hover:scale-105"
                />

                {/* Hover Overlay */}
                <div className="absolute inset-0 flex items-center justify-center bg-[#173f35]/0 transition duration-300 group-hover:bg-[#173f35]/20">
                  <div className="flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-[#173f35] opacity-0 shadow-lg transition duration-300 group-hover:opacity-100">
                    <ZoomIn size={17} />
                    View Full Keyplan
                  </div>
                </div>

              </div>

              <div className="flex items-center justify-center gap-2 py-3 font-semibold text-[#173f35]">
                View Full Keyplan
                <ArrowRight size={17} />
              </div>
            </button>

            {/* Features */}
            <div className="space-y-5">

              {items.map(([Icon, title, text]) => (
                <div
                  key={title}
                  className="rounded-[24px] bg-white p-6 shadow-md"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#173f35] text-[#dfc995]">
                    <Icon size={20} />
                  </div>

                  <h2 className="mt-5 text-xl font-semibold text-[#173f35]">
                    {title}
                  </h2>

                  <p className="mt-2 leading-6 text-[#70665f]">
                    {text}
                  </p>
                </div>
              ))}

            </div>
          </div>
        </div>
      </section>

      {/* Fullscreen Keyplan */}
      {showKeyplan && (
        <div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm sm:p-8"
          onClick={() => setShowKeyplan(false)}
        >

          {/* Close Button */}
          <button
            type="button"
            onClick={() => setShowKeyplan(false)}
            className="absolute right-4 top-4 z-10 flex h-11 w-11 items-center justify-center rounded-full bg-white text-[#173f35] shadow-xl transition hover:bg-[#a65d3b] hover:text-white sm:right-7 sm:top-7"
            aria-label="Close keyplan"
          >
            <X size={22} />
          </button>

          {/* Large Image */}
          <div
            className="flex max-h-[92vh] max-w-[95vw] items-center justify-center"
            onClick={(event) => event.stopPropagation()}
          >
            <img
              src="/images/key-plan.png"
              alt="Full Jattari Project Key Plan"
              className="max-h-[90vh] max-w-full rounded-2xl bg-white object-contain p-2 shadow-2xl sm:rounded-3xl sm:p-4"
            />
          </div>

        </div>
      )}
    </>
  );
}

export default Keyplan;