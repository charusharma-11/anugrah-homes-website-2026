import { ArrowUp, CalendarCheck, MessageCircle } from "lucide-react";

function FloatingActions() {
  const go = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });
  };

  const top = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="fixed bottom-5 right-5 z-40 flex flex-col gap-3">
      <button
        onClick={() => go("contact")}
        className="flex h-12 w-12 items-center justify-center rounded-full bg-[#173f35] text-white shadow-xl transition hover:scale-105 hover:bg-[#b18b4f]"
        title="Contact"
      >
        <MessageCircle size={19} />
      </button>

      <button
        onClick={() => go("contact")}
        className="flex h-12 w-12 items-center justify-center rounded-full bg-[#b18b4f] text-white shadow-xl transition hover:scale-105 hover:bg-[#173f35]"
        title="Site Visit"
      >
        <CalendarCheck size={19} />
      </button>

      <button
        onClick={top}
        className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-[#173f35] shadow-xl ring-1 ring-black/5 transition hover:scale-105"
        title="Back to top"
      >
        <ArrowUp size={19} />
      </button>
    </div>
  );
}

export default FloatingActions;