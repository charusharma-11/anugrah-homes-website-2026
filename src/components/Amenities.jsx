import {
  Car,
  Dumbbell,
  Fence,
  Flower2,
  Lightbulb,
  ShieldCheck,
  Trees,
  Waves,
} from "lucide-react";

function Amenities() {
  const items = [
    [Trees, "Green Spaces", "Open and green surroundings for a pleasant environment."],
    [Fence, "Gated Community", "A structured residential environment with defined access."],
    [Lightbulb, "Street Lighting", "Planned lighting for comfortable movement around the project."],
    [Car, "Internal Roads", "Internal road planning for convenient access to plots."],
    [ShieldCheck, "Security", "A project environment planned with safety and convenience in mind."],
    [Flower2, "Landscaped Areas", "Thoughtful spaces that add visual appeal to the surroundings."],
    [Waves, "Water Facilities", "Essential water-related infrastructure planned for the project."],
    [Dumbbell, "Lifestyle Spaces", "Spaces planned around comfortable residential living."],
  ];

  return (
    <section id="amenities" className="bg-[#f7f3ea] py-24">
      <div className="mx-auto max-w-[1450px] px-5 sm:px-8 lg:px-10">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#b18b4f]">
            Amenities
          </p>

          <h2 className="mt-3 font-serif text-4xl font-semibold text-[#173f35] sm:text-5xl">
            Amenities Designed
            <span className="block text-[#b18b4f]">
              For Comfortable Living
            </span>
          </h2>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {items.map(([Icon, title, text]) => (
            <div
              key={title}
              className="rounded-[2rem] border border-[#173f35]/10 bg-white p-6 transition hover:-translate-y-2 hover:shadow-xl"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#173f35] text-[#dfc995]">
                <Icon size={21} />
              </div>

              <h3 className="mt-6 font-serif text-xl font-semibold text-[#173f35]">
                {title}
              </h3>

              <p className="mt-3 text-sm leading-6 text-gray-500">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Amenities;