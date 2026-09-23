import { ArrowUpRight, Camera, X } from "lucide-react";
import { useState } from "react";

function Gallery() {
  const [selected, setSelected] = useState(null);

  const images = [
    ["https://www.anugrahhomes.com/_next/image?url=%2FDSC08298.JPG&w=3840&q=75", "Project View"],
    ["https://www.anugrahhomes.com/_next/image?url=%2FIMG_5889.JPG&w=3840&q=75", "Residential Development"],
    ["/images/gallery-3.jpg", "Project Surroundings"],
    ["/images/gallery-4.jpg", "Site View"],
    ["/images/gallery-5.jpg", "Project Details"],
    ["/images/gallery-6.jpg", "Residential Plots"],
    ["/images/gallery-7.jpg", "Anugrah Homes"],
  ];

  return (
    <section id="gallery" className="bg-[#f7f3ea] py-24">
      <div className="mx-auto max-w-[1450px] px-5 sm:px-8 lg:px-10">
        <div className="text-center">
          <p className="flex items-center justify-center gap-2 text-sm font-semibold uppercase tracking-[0.2em] text-[#b18b4f]">
            <Camera size={16} />
            Project Gallery
          </p>

          <h2 className="mt-3 font-serif text-4xl font-semibold text-[#173f35] sm:text-5xl">
            Explore The
            <span className="block text-[#b18b4f]">
              Project Visually
            </span>
          </h2>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {images.map(([src, title], index) => (
            <button
              key={src}
              onClick={() => setSelected({ src, title })}
              className={`group relative overflow-hidden rounded-[2rem] bg-white shadow-sm ${
                index === 0 || index === 5 ? "lg:col-span-2" : ""
              }`}
            >
              <img
                src={src}
                alt={title}
                className="h-[280px] w-full object-cover transition duration-700 group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#10251e]/75 via-transparent to-transparent" />

              <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between text-left">
                <div>
                  <p className="text-xs uppercase tracking-[0.15em] text-[#dfc995]">
                    Anugrah Homes
                  </p>

                  <p className="mt-1 font-serif text-xl font-semibold text-white">
                    {title}
                  </p>
                </div>

                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white/15 text-white backdrop-blur">
                  <ArrowUpRight size={18} />
                </span>
              </div>
            </button>
          ))}
        </div>
      </div>

      {selected && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/85 p-5"
          onClick={() => setSelected(null)}
        >
          <button
            onClick={() => setSelected(null)}
            className="absolute right-5 top-5 flex h-11 w-11 items-center justify-center rounded-full bg-white text-[#173f35]"
          >
            <X size={20} />
          </button>

          <img
            src={selected.src}
            alt={selected.title}
            className="max-h-[88vh] max-w-[92vw] rounded-2xl object-contain"
            onClick={(event) => event.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
}

export default Gallery;