// import { ChevronDown, HelpCircle } from "lucide-react";
// import { useState } from "react";

// function FAQ() {
//   const [open, setOpen] = useState(0);

//   const faqs = [
//     [
//       "Where is Anugrah Homes located?",
//       "Anugrah Homes is presented as a residential plot project in Jattari, Uttar Pradesh.",
//     ],
//     [
//       "What type of property is available?",
//       "The project focuses on residential plots. Current plot sizes and availability can be confirmed with the project team.",
//     ],
//     [
//       "How can I know the current price?",
//       "Use the contact section to request current pricing and availability from the project team.",
//     ],
//     [
//       "Can I visit the project?",
//       "Yes. You can use the Site Visit option on the website to submit an enquiry.",
//     ],
//     [
//       "Where can I see the project layout?",
//       "The Keyplan and Layout sections provide visual references for the project planning.",
//     ],
//     [
//       "Where can I see project images?",
//       "The Gallery section contains the available project images.",
//     ],
//   ];

//   return (
//     <section id="faq" className="bg-white py-24">
//       <div className="mx-auto max-w-4xl px-5 sm:px-8">
//         <div className="text-center">
//           <HelpCircle className="mx-auto text-[#b18b4f]" size={28} />

//           <p className="mt-3 text-sm font-semibold uppercase tracking-[0.2em] text-[#b18b4f]">
//             FAQ
//           </p>

//           <h2 className="mt-3 font-serif text-4xl font-semibold text-[#173f35] sm:text-5xl">
//             Frequently Asked Questions
//           </h2>
//         </div>

//         <div className="mt-12 space-y-4">
//           {faqs.map(([question, answer], index) => (
//             <div
//               key={question}
//               className="overflow-hidden rounded-2xl border border-[#173f35]/10"
//             >
//               <button
//                 onClick={() => setOpen(open === index ? -1 : index)}
//                 className="flex w-full items-center justify-between gap-5 px-6 py-5 text-left"
//               >
//                 <span className="font-semibold text-[#173f35]">
//                   {question}
//                 </span>

//                 <ChevronDown
//                   size={19}
//                   className={`shrink-0 transition ${
//                     open === index ? "rotate-180" : ""
//                   }`}
//                 />
//               </button>

//               {open === index && (
//                 <div className="border-t border-[#173f35]/10 px-6 py-5 text-sm leading-7 text-gray-500">
//                   {answer}
//                 </div>
//               )}
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

// export default FAQ;

const faqs = [
  [
    "What is the Jattari project?",
    "Jattari is a planned residential project focused on organized residential plots, internal connectivity, green spaces and project amenities.",
  ],
  [
    "What plot options are available?",
    "Available plot sizes and options can vary. Contact the project team for current availability and detailed plot information.",
  ],
  [
    "Where can I see the project layout?",
    "You can explore the Keyplan and Project Layout sections from the Services menu to understand the overall project planning.",
  ],
  [
    "How can I know the current price?",
    "For the latest pricing and availability, contact the project team directly through the Contact page.",
  ],
  [
    "Can I schedule a site visit?",
    "Yes. You can contact the project team to discuss your requirements and schedule a site visit.",
  ],
  [
    "How can I contact the project team?",
    "You can use the Contact page to reach the project team through phone or email.",
  ],
];

function FAQ() {
  return (
    <section className="min-h-screen bg-[#f7f1e7] px-6 py-32">
      <div className="mx-auto max-w-5xl">

        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#a65d3b]">
          Frequently Asked Questions
        </p>

        <h1 className="mt-4 text-4xl font-bold text-[#3b2a24] md:text-6xl">
          Frequently Asked Questions
        </h1>

        <p className="mt-6 text-lg leading-8 text-[#70665f]">
          Find answers to common questions about the Jattari residential
          project, layout, pricing and site visits.
        </p>

        <div className="mt-12 space-y-5">
          {faqs.map(([question, answer]) => (
            <div
              key={question}
              className="rounded-[24px] bg-white p-7 shadow-md"
            >
              <h2 className="text-xl font-semibold text-[#173f35]">
                {question}
              </h2>

              <p className="mt-3 leading-7 text-[#70665f]">
                {answer}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default FAQ;