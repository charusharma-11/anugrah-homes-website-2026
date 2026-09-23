import { ArrowUpRight, Newspaper } from "lucide-react";

function News() {
  const posts = [
    {
      title: "New Residential Plot Opportunities in Jattari",
      text: "Explore the project sections to understand plots, planning and available information.",
    },
    {
      title: "Discover Jattari",
      text: "Learn more about the location-focused approach behind the Anugrah Homes project.",
    },
    {
      title: "Plan Your Site Visit",
      text: "Connect with the project team to discuss plot options and arrange a visit.",
    },
  ];

  return (
    <section id="news" className="bg-[#f7f3ea] py-24">
      <div className="mx-auto max-w-[1450px] px-5 sm:px-8 lg:px-10">
        <div className="text-center">
          <Newspaper className="mx-auto text-[#b18b4f]" size={28} />

          <p className="mt-3 text-sm font-semibold uppercase tracking-[0.2em] text-[#b18b4f]">
            News & Updates
          </p>

          <h2 className="mt-3 font-serif text-4xl font-semibold text-[#173f35] sm:text-5xl">
            Latest From The Project
          </h2>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {posts.map((post) => (
            <article
              key={post.title}
              className="group rounded-[2rem] border border-[#173f35]/10 bg-white p-7 transition hover:-translate-y-2 hover:shadow-xl"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#173f35] text-[#dfc995]">
                <Newspaper size={20} />
              </div>

              <h3 className="mt-7 font-serif text-2xl font-semibold text-[#173f35]">
                {post.title}
              </h3>

              <p className="mt-4 text-sm leading-7 text-gray-500">
                {post.text}
              </p>

              <span className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-[#b18b4f]">
                Explore
                <ArrowUpRight size={16} />
              </span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default News;