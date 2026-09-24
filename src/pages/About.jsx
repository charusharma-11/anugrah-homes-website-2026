// // import { ArrowUpRight, CheckCircle2, Leaf, ShieldCheck } from "lucide-react";

// // function About() {
// //   const go = (id) => {
// //     document.getElementById(id)?.scrollIntoView({
// //       behavior: "smooth",
// //     });
// //   };

// //   const features = [
// //     {
// //       icon: ShieldCheck,
// //       title: "Thoughtful Planning",
// //       text: "A planned approach to residential plots with attention to roads, spaces and everyday convenience.",
// //     },
// //     {
// //       icon: Leaf,
// //       title: "Peaceful Living",
// //       text: "A setting designed to bring together open surroundings, comfortable living and future possibilities.",
// //     },
// //   ];

// //   return (
// //     <section id="about" className="relative overflow-hidden bg-white py-24">
// //       <div className="mx-auto max-w-[1450px] px-5 sm:px-8 lg:px-10">
// //         <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
// //           <div className="relative">
// //             <div className="absolute -inset-4 rounded-[2.8rem] border border-[#c8a96b]/20" />

// //             <div className="relative overflow-hidden rounded-[2.5rem] bg-[#f7f3ea] p-2 shadow-xl">
// //               <div className="relative overflow-hidden rounded-[2.1rem]">
// //                 <img
// //                   src="https://www.anugrahhomes.com/_next/image?url=%2Fpark3.jpeg&w=3840&q=75"
// //                   alt="Anugrah Homes residential project"
// //                   className="h-[500px] w-full object-cover transition duration-700 hover:scale-105 sm:h-[600px]"
// //                 />

// //                 <div className="absolute inset-0 bg-gradient-to-t from-[#10251e]/70 via-transparent to-transparent" />

// //                 <div className="absolute bottom-6 left-6 right-6">
// //                   <div className="rounded-2xl bg-[#10251e]/65 p-5 backdrop-blur-md">
// //                     <p className="text-xs uppercase tracking-[0.18em] text-[#dfc995]">
// //                       Anugrah Homes
// //                     </p>
// //                     <p className="mt-2 font-serif text-2xl font-semibold text-white">
// //                       Planned For Better Living
// //                     </p>
// //                   </div>
// //                 </div>
// //               </div>
// //             </div>
// //           </div>

// //           <div>
// //             <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#b18b4f]">
// //               About Anugrah Homes
// //             </p>

// //             <h2 className="mt-3 font-serif text-4xl font-semibold leading-tight text-[#173f35] sm:text-5xl">
// //               A Thoughtful Address
// //               <span className="block text-[#b18b4f]">
// //                 For Your Future
// //               </span>
// //             </h2>

// //             <p className="mt-6 text-base leading-8 text-[#202522]/65">
// //               Anugrah Homes brings together residential plots, thoughtful
// //               planning and a location-focused approach for people looking to
// //               create a future address in Jattari.
// //             </p>

// //             <p className="mt-5 text-base leading-8 text-[#202522]/65">
// //               From the overall layout to connectivity and open spaces, every
// //               aspect is presented with the idea of making your plot selection
// //               simple, comfortable and future-focused.
// //             </p>

// //             <div className="mt-9 grid gap-4 sm:grid-cols-2">
// //               {features.map((feature) => {
// //                 const Icon = feature.icon;

// //                 return (
// //                   <div
// //                     key={feature.title}
// //                     className="rounded-[1.5rem] border border-[#173f35]/10 bg-[#f7f3ea]/60 p-5 transition hover:-translate-y-1 hover:bg-white hover:shadow-lg"
// //                   >
// //                     <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#173f35] text-[#dfc995]">
// //                       <Icon size={20} />
// //                     </div>

// //                     <h3 className="mt-5 font-serif text-lg font-semibold text-[#173f35]">
// //                       {feature.title}
// //                     </h3>

// //                     <p className="mt-2 text-sm leading-6 text-gray-500">
// //                       {feature.text}
// //                     </p>
// //                   </div>
// //                 );
// //               })}
// //             </div>

// //             <div className="mt-8 space-y-3">
// //               {[
// //                 "Residential plot-focused planning",
// //                 "Location and connectivity focused approach",
// //                 "Designed around comfortable future living",
// //               ].map((item) => (
// //                 <div
// //                   key={item}
// //                   className="flex items-center gap-3 text-sm font-medium text-[#173f35]"
// //                 >
// //                   <CheckCircle2 size={18} className="text-[#b18b4f]" />
// //                   {item}
// //                 </div>
// //               ))}
// //             </div>

// //             <button
// //               onClick={() => go("amenities")}
// //               className="mt-9 inline-flex items-center gap-2 rounded-full bg-[#173f35] px-6 py-3.5 text-sm font-semibold text-white transition hover:-translate-y-1 hover:bg-[#b18b4f]"
// //             >
// //               Explore Amenities
// //               <ArrowUpRight size={17} />
// //             </button>
// //           </div>
// //         </div>
// //       </div>
// //     </section>
// //   );
// // }

// // export default About;

// import { Building2, MapPin, ShieldCheck, Trees } from "lucide-react";

// function About() {
//   const points = [
//     [
//       Building2,
//       "Thoughtfully Planned",
//       "The project is planned with organized plots, internal connectivity and spaces designed around residential requirements.",
//     ],
//     [
//       MapPin,
//       "Connected Location",
//       "Jattari offers a residential setting with access to surrounding roads, local facilities and nearby development areas.",
//     ],
//     [
//       Trees,
//       "Green Environment",
//       "Open areas and planned green spaces contribute to a pleasant and comfortable residential atmosphere.",
//     ],
//     [
//       ShieldCheck,
//       "Focused on Convenience",
//       "The planning considers accessibility, comfortable movement and practical requirements of everyday living.",
//     ],
//   ];

//   return (
//     <section className="min-h-screen bg-[#f7f1e7] px-6 py-32">
//       <div className="mx-auto max-w-7xl">

//         <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#a65d3b]">
//           About Us
//         </p>

//         <h1 className="mt-4 text-4xl font-bold text-[#3b2a24] md:text-6xl">
//           About Jattari
//         </h1>

//         <p className="mt-6 max-w-4xl text-lg leading-8 text-[#70665f]">
//           Jattari is a thoughtfully planned residential project designed to
//           provide a comfortable and well-organized environment for families,
//           homeowners and future residents.
//         </p>

//         <div className="mt-14 grid items-center gap-12 lg:grid-cols-2">

//           <div className="overflow-hidden rounded-[32px] bg-white p-4 shadow-xl">
//             <img
//               src="https://www.anugrahhomes.com/_next/image?url=%2Fpark3.jpeg&w=3840&q=75"
//               alt="Jattari residential project"
//               className="h-[420px] w-full rounded-[26px] object-cover"
//             />
//           </div>

//           <div>
//             <h2 className="text-3xl font-bold text-[#173f35] md:text-4xl">
//               A Place Planned Around Better Living
//             </h2>

//             <p className="mt-5 leading-8 text-[#70665f]">
//               The project focuses on creating a balanced residential
//               environment where plot planning, road connectivity, open spaces
//               and essential facilities come together.
//             </p>

//             <p className="mt-4 leading-8 text-[#70665f]">
//               From the overall layout to individual plot planning, the
//               development is designed to make the surroundings practical,
//               accessible and comfortable for everyday residential life.
//             </p>

//             <p className="mt-4 leading-8 text-[#70665f]">
//               Whether you are planning to build your future home or looking
//               for a residential plot, the project provides a structured
//               environment where you can explore different possibilities.
//             </p>
//           </div>

//         </div>

//         <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
//           {points.map(([Icon, title, text]) => (
//             <div
//               key={title}
//               className="rounded-[26px] bg-white p-6 shadow-lg transition hover:-translate-y-1 hover:shadow-xl"
//             >
//               <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#173f35] text-[#dfc995]">
//                 <Icon size={21} />
//               </div>

//               <h3 className="mt-5 text-xl font-semibold text-[#173f35]">
//                 {title}
//               </h3>

//               <p className="mt-3 text-sm leading-6 text-[#70665f]">
//                 {text}
//               </p>
//             </div>
//           ))}
//         </div>

//       </div>
//     </section>
//   );
// }

// export default About;

import { Building2, MapPin, ShieldCheck, Trees } from "lucide-react";

function About() {
  const points = [
    [
      Building2,
      "Thoughtfully Planned",
      "The project is planned with organized plots, internal connectivity and spaces designed around residential requirements.",
    ],
    [
      MapPin,
      "Connected Location",
      "Jattari offers a residential setting with access to surrounding roads, local facilities and nearby development areas.",
    ],
    [
      Trees,
      "Green Environment",
      "Open areas and planned green spaces contribute to a pleasant and comfortable residential atmosphere.",
    ],
    [
      ShieldCheck,
      "Focused on Convenience",
      "The planning considers accessibility, comfortable movement and practical requirements of everyday living.",
    ],
  ];

  return (
    <section
      id="about"
      className="min-h-screen overflow-hidden bg-[#f7f1e7] px-6 py-32"
    >
      <div className="mx-auto max-w-7xl">
        {/* Heading */}
        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#a65d3b]">
          About Us
        </p>

        <h1 className="mt-4 text-4xl font-bold text-[#3b2a24] md:text-6xl">
          About Jattari
        </h1>

        <p className="mt-6 max-w-4xl text-lg leading-8 text-[#70665f]">
          Jattari is a thoughtfully planned residential project designed to
          provide a comfortable and well-organized environment for families,
          homeowners and future residents.
        </p>

        {/* Image + Content */}
        <div className="mt-14 grid items-center gap-12 lg:grid-cols-2">
          <div className="overflow-hidden rounded-[32px] bg-white p-4 shadow-xl">
            <img
              src="https://www.anugrahhomes.com/_next/image?url=%2Fpark3.jpeg&w=3840&q=75"
              alt="Jattari residential project"
              className="h-[420px] w-full rounded-[26px] object-cover"
            />
          </div>

          <div>
            <h2 className="text-3xl font-bold text-[#173f35] md:text-4xl">
              A Place Planned Around Better Living
            </h2>

            <p className="mt-5 leading-8 text-[#70665f]">
              The project focuses on creating a balanced residential
              environment where plot planning, road connectivity, open spaces
              and essential facilities come together.
            </p>

            <p className="mt-4 leading-8 text-[#70665f]">
              From the overall layout to individual plot planning, the
              development is designed to make the surroundings practical,
              accessible and comfortable for everyday residential life.
            </p>

            <p className="mt-4 leading-8 text-[#70665f]">
              Whether you are planning to build your future home or looking
              for a residential plot, the project provides a structured
              environment where you can explore different possibilities.
            </p>
          </div>
        </div>

        {/* Circular Cards */}
        <div className="about-card-orbit mt-20">
          <div className="about-card-orbit-inner">
            {points.map(([Icon, title, text], index) => (
              <div
                key={title}
                className={`about-orbit-card about-orbit-card-${index + 1}`}
              >
                <div className="about-orbit-card-content">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#173f35] text-[#dfc995]">
                    <Icon size={21} />
                  </div>

                  <h3 className="mt-5 text-xl font-semibold text-[#173f35]">
                    {title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-[#70665f]">
                    {text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;