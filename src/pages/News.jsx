import { CalendarDays, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

function News() {
  const updates = [
    [
      "Project Updates",
      "Stay connected with the latest developments and project-related updates.",
      "/amenities",
    ],
    [
      "Layout & Planning",
      "Explore information about project planning, plot arrangement and development features.",
      "/layout",
    ],
    [
      "Site Visit Updates",
      "Get in touch with the project team for information about site visits and availability.",
      "/contact",
    ],
  ];

  return (
    <section
      id="news"
      className="min-h-screen overflow-hidden bg-[#f7f1e7] px-6 py-32"
    >
      <div className="mx-auto max-w-7xl">
        {/* Heading */}
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

        {/* Circular 3 Card Arrangement */}
        <div className="news-card-orbit mt-20">
          <div className="news-card-orbit-inner">
            {updates.map(([title, text, path], index) => (
              <article
                key={title}
                className={`news-orbit-card news-orbit-card-${index + 1}`}
              >
                <div className="news-orbit-card-content">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#173f35] text-[#dfc995]">
                    <CalendarDays size={21} />
                  </div>

                  <h2 className="mt-6 text-2xl font-semibold text-[#173f35]">
                    {title}
                  </h2>

                  <p className="mt-3 leading-7 text-[#70665f]">
                    {text}
                  </p>

                  <Link
                    to={path}
                    className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[#a65d3b] transition-all hover:gap-3"
                  >
                    Explore
                    <ArrowRight size={16} />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default News;