// import { ArrowRight, Check, IndianRupee, Sparkles } from "lucide-react";

// function Price() {
//   const go = () => {
//     document.getElementById("contact")?.scrollIntoView({
//       behavior: "smooth",
//     });
//   };

//   const features = [
//     "Residential Plot",
//     "Planned Layout",
//     "Road Connectivity",
//     "Essential Amenities",
//     "Peaceful Surroundings",
//   ];

//   return (
//     <section id="price" className="bg-white py-24">
//       <div className="mx-auto max-w-[1450px] px-5 sm:px-8 lg:px-10">
//         <div className="mx-auto max-w-3xl text-center">
//           <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#b18b4f]">
//             Pricing
//           </p>

//           <h2 className="mt-3 font-serif text-4xl font-semibold text-[#173f35] sm:text-5xl">
//             Choose a Plot That
//             <span className="block text-[#b18b4f]">
//               Fits Your Future
//             </span>
//           </h2>

//           <p className="mt-5 text-base leading-8 text-gray-600">
//             Connect with the project team for latest plot sizes, availability
//             and current pricing.
//           </p>
//         </div>

//         <div className="mx-auto mt-14 max-w-5xl rounded-[2.5rem] border border-[#c8a96b]/30 bg-[#f7f3ea] p-6 shadow-xl sm:p-10">
//           <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
//             <div>
//               <div className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-[#789b87]">
//                 <Sparkles size={15} />
//                 Residential Plots
//               </div>

//               <h3 className="mt-3 font-serif text-3xl font-semibold text-[#173f35]">
//                 Premium Plot Options
//               </h3>

//               <div className="mt-7 flex items-center gap-2">
//                 <IndianRupee className="text-[#b18b4f]" size={28} />
//                 <span className="font-serif text-4xl font-bold text-[#173f35]">
//                   On Request
//                 </span>
//               </div>

//               <p className="mt-4 max-w-md text-sm leading-7 text-gray-600">
//                 Get current plot sizes, availability and pricing directly from
//                 the project team.
//               </p>

//               <button
//                 onClick={go}
//                 className="mt-7 inline-flex items-center gap-2 rounded-full bg-[#173f35] px-6 py-3.5 text-sm font-semibold text-white hover:bg-[#b18b4f]"
//               >
//                 Get Current Price
//                 <ArrowRight size={17} />
//               </button>
//             </div>

//             <div className="rounded-[2rem] bg-white p-6 sm:p-8">
//               <p className="font-serif text-xl font-semibold text-[#173f35]">
//                 What's Included
//               </p>

//               <div className="mt-5 space-y-4">
//                 {features.map((feature) => (
//                   <div
//                     key={feature}
//                     className="flex items-center gap-3 border-b border-[#173f35]/10 pb-4 last:border-0"
//                   >
//                     <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#789b87]/15 text-[#173f35]">
//                       <Check size={15} />
//                     </span>

//                     <span className="text-sm font-medium text-gray-600">
//                       {feature}
//                     </span>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default Price;

import { IndianRupee, FileText, Calculator, Phone } from "lucide-react";
import { Link } from "react-router-dom";

function Price() {
  const points = [
    [
      IndianRupee,
      "Plot Pricing",
      "Explore the latest plot pricing and available options directly with the project team.",
    ],
    [
      FileText,
      "Plot Details",
      "Get information about available plot sizes, specifications and project details.",
    ],
    [
      Calculator,
      "Plan Your Budget",
      "Discuss your requirements and understand the options available according to your budget.",
    ],
  ];

  return (
    <section className="min-h-screen bg-[#f7f1e7] px-6 py-32">
      <div className="mx-auto max-w-7xl">

        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#a65d3b]">
          Services / Price
        </p>

        <h1 className="mt-4 text-4xl font-bold text-[#3b2a24] md:text-6xl">
          Plot Price & Details
        </h1>

        <p className="mt-6 max-w-4xl text-lg leading-8 text-[#70665f]">
          Get the latest information about available residential plots,
          pricing, sizes and other project-related details.
        </p>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {points.map(([Icon, title, text]) => (
            <div
              key={title}
              className="rounded-[28px] bg-white p-7 shadow-lg"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#173f35] text-[#dfc995]">
                <Icon size={23} />
              </div>

              <h2 className="mt-6 text-2xl font-semibold text-[#173f35]">
                {title}
              </h2>

              <p className="mt-3 leading-7 text-[#70665f]">
                {text}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-14 rounded-[32px] bg-[#173f35] p-8 text-white md:p-12">
          <h2 className="text-3xl font-bold md:text-4xl">
            Want Current Pricing?
          </h2>

          <p className="mt-4 max-w-2xl leading-7 text-white/75">
            Contact the project team for current pricing, available plot
            options and detailed project information.
          </p>

          <Link
            to="/contact"
            className="mt-7 inline-flex items-center gap-2 rounded-full bg-[#dfc995] px-6 py-3 font-semibold text-[#173f35]"
          >
            <Phone size={18} />
            Contact Us
          </Link>
        </div>

      </div>
    </section>
  );
}

export default Price;