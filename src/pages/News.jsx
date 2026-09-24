// import { ArrowUpRight, Newspaper } from "lucide-react";

// function News() {
//   const posts = [
//     {
//       title: "New Residential Plot Opportunities in Jattari",
//       text: "Explore the project sections to understand plots, planning and available information.",
//     },
//     {
//       title: "Discover Jattari",
//       text: "Learn more about the location-focused approach behind the Anugrah Homes project.",
//     },
//     {
//       title: "Plan Your Site Visit",
//       text: "Connect with the project team to discuss plot options and arrange a visit.",
//     },
//   ];

//   return (
//     <section id="news" className="bg-[#f7f3ea] py-24">
//       <div className="mx-auto max-w-[1450px] px-5 sm:px-8 lg:px-10">
//         <div className="text-center">
//           <Newspaper className="mx-auto text-[#b18b4f]" size={28} />

//           <p className="mt-3 text-sm font-semibold uppercase tracking-[0.2em] text-[#b18b4f]">
//             News & Updates
//           </p>

//           <h2 className="mt-3 font-serif text-4xl font-semibold text-[#173f35] sm:text-5xl">
//             Latest From The Project
//           </h2>
//         </div>

//         <div className="mt-14 grid gap-6 md:grid-cols-3">
//           {posts.map((post) => (
//             <article
//               key={post.title}
//               className="group rounded-[2rem] border border-[#173f35]/10 bg-white p-7 transition hover:-translate-y-2 hover:shadow-xl"
//             >
//               <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#173f35] text-[#dfc995]">
//                 <Newspaper size={20} />
//               </div>

//               <h3 className="mt-7 font-serif text-2xl font-semibold text-[#173f35]">
//                 {post.title}
//               </h3>

//               <p className="mt-4 text-sm leading-7 text-gray-500">
//                 {post.text}
//               </p>

//               <span className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-[#b18b4f]">
//                 Explore
//                 <ArrowUpRight size={16} />
//               </span>
//             </article>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

// export default News;
import { CalendarDays, ArrowRight } from "lucide-react";

function News() {
  const updates = [
    [
      "Project Updates",
      "Stay connected with the latest developments and project-related updates.",
    ],
    [
      "Layout & Planning",
      "Explore information about project planning, plot arrangement and development features.",
    ],
    [
      "Site Visit Updates",
      "Get in touch with the project team for information about site visits and availability.",
    ],
  ];

  return (
    <section className="min-h-screen bg-[#f7f1e7] px-6 py-32">
      <div className="mx-auto max-w-7xl">

        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#a65d3b]">
          News & Updates
        </p>

        <h1 className="mt-4 text-4xl font-bold text-[#3b2a24] md:text-6xl">
          Latest Project Updates
        </h1>

        <p className="mt-6 max-w-4xl text-lg leading-8 text-[#70665f]">
          Stay informed about project information, planning updates and
          important developments related to Jattari.
        </p>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {updates.map(([title, text]) => (
            <article
              key={title}
              className="rounded-[28px] bg-white p-7 shadow-lg"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#173f35] text-[#dfc995]">
                <CalendarDays size={21} />
              </div>

              <h2 className="mt-6 text-2xl font-semibold text-[#173f35]">
                {title}
              </h2>

              <p className="mt-3 leading-7 text-[#70665f]">
                {text}
              </p>

              <div className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[#a65d3b]">
                Explore More
                <ArrowRight size={16} />
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}

export default News;