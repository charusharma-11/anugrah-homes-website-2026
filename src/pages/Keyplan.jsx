// import { ArrowRight, Compass, Maximize2, Ruler } from "lucide-react";

// function Keyplan() {
//   const go = (id) => {
//     document.getElementById(id)?.scrollIntoView({
//       behavior: "smooth",
//     });
//   };

//   const items = [
//     [Maximize2, "Planned Plot Layout", "Clear visual representation of the project's plot arrangement."],
//     [Ruler, "Efficient Space Planning", "Understand plots, roads and planned spaces."],
//     [Compass, "Project Orientation", "Understand the overall direction and project structure."],
//   ];

//   return (
//     <section id="keyplan" className="bg-[#f7f3ea] py-24">
//       <div className="mx-auto max-w-[1450px] px-5 sm:px-8 lg:px-10">
//         <div className="text-center">
//           <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#b18b4f]">
//             Keyplan
//           </p>

//           <h2 className="mt-3 font-serif text-4xl font-semibold text-[#173f35] sm:text-5xl">
//             A Layout Designed
//             <span className="block text-[#b18b4f]">
//               Around Better Living
//             </span>
//           </h2>
//         </div>

//         <div className="mt-14 grid items-center gap-10 lg:grid-cols-[1.3fr_0.7fr]">
//           <div className="rounded-[2.5rem] bg-white p-3 shadow-xl">
//             <img
//               src="/images/key-plan.png"
//               alt="Anugrah Homes key plan"
//               className="max-h-[650px] max-width-[500px] rounded-[2rem] object-contain"
//             />
//           </div>

//           <div className="space-y-5">
//             {items.map(([Icon, title, text]) => (
//               <div
//                 key={title}
//                 className="rounded-[1.75rem] border border-[#173f35]/10 bg-white p-6 transition hover:-translate-y-1 hover:shadow-lg"
//               >
//                 <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#173f35] text-[#dfc995]">
//                   <Icon size={20} />
//                 </div>

//                 <h3 className="mt-5 font-serif text-xl font-semibold text-[#173f35]">
//                   {title}
//                 </h3>

//                 <p className="mt-2 text-sm leading-6 text-gray-500">
//                   {text}
//                 </p>
//               </div>
//             ))}

//             <button
//               onClick={() => go("keyplan")}
//               className="inline-flex items-center gap-2 rounded-full bg-[#173f35] px-6 py-3.5 text-sm font-semibold text-white hover:bg-[#b18b4f]"
//             >
//               View keyplan
//               <ArrowRight size={17} />
//             </button>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default Keyplan;

import {
  ArrowRight,
  Compass,
  Maximize2,
  Ruler,
} from "lucide-react";
import { Link } from "react-router-dom";

function Keyplan() {
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
    <section className="min-h-screen bg-[#f7f3ea] px-6 py-32">
      <div className="mx-auto max-w-7xl">

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

        <div className="mt-14 grid items-center gap-10 lg:grid-cols-2">

          <Link
            to="/layout"
            className="group rounded-[32px] bg-white p-4 shadow-xl"
          >
            <div className="overflow-hidden rounded-[24px]">
              <img
                src="/images/key-plan.png"
                alt="Jattari Project Key Plan"
                className="h-[400px] w-full object-contain transition duration-500 group-hover:scale-105"
              />
            </div>

            <div className="flex items-center justify-center gap-2 py-3 font-semibold text-[#173f35]">
              View Full Layout
              <ArrowRight size={17} />
            </div>
          </Link>

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
  );
}

export default Keyplan;





















