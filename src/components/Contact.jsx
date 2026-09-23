import { CheckCircle2, Mail, MapPin, Phone, Send } from "lucide-react";
import { useState } from "react";

function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const submitForm = (event) => {
    event.preventDefault();
    setSubmitted(true);
    event.target.reset();
  };

  return (
    <section id="contact" className="bg-[#173f35] py-24 text-white">
      <div className="mx-auto max-w-[1450px] px-5 sm:px-8 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#dfc995]">
              Site Visit & Enquiry
            </p>

            <h2 className="mt-3 font-serif text-4xl font-semibold sm:text-5xl">
              Let's Plan Your
              <span className="block text-[#dfc995]">
                Next Visit
              </span>
            </h2>

            <p className="mt-6 max-w-xl text-base leading-8 text-white/65">
              Share your details and our project team can connect with you
              regarding plot options, pricing and site visit information.
            </p>

            <div className="mt-10 space-y-5">
              <div className="flex items-center gap-4">
                <MapPin className="text-[#dfc995]" />
                <div>
                  <p className="text-sm text-white/40">Location</p>
                  <p className="mt-1 font-medium">
                    Jattari, Uttar Pradesh
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <Phone className="text-[#dfc995]" />
                <div>
                  <p className="text-sm text-white/40">Phone</p>
                  <p className="mt-1 font-medium">
                    Add your official contact number
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <Mail className="text-[#dfc995]" />
                <div>
                  <p className="text-sm text-white/40">Email</p>
                  <p className="mt-1 font-medium">
                    Add your official email address
                  </p>
                </div>
              </div>
            </div>
          </div>

          <form
            onSubmit={submitForm}
            className="rounded-[2rem] bg-white p-6 text-[#173f35] shadow-2xl sm:p-8"
          >
            <h3 className="font-serif text-2xl font-semibold">
              Request a Site Visit
            </h3>

            <div className="mt-7 space-y-4">
              <input
                required
                type="text"
                placeholder="Your Name"
                className="w-full rounded-xl border border-gray-200 px-4 py-3.5 outline-none focus:border-[#b18b4f]"
              />

              <input
                required
                type="tel"
                placeholder="Phone Number"
                className="w-full rounded-xl border border-gray-200 px-4 py-3.5 outline-none focus:border-[#b18b4f]"
              />

              <input
                type="email"
                placeholder="Email Address"
                className="w-full rounded-xl border border-gray-200 px-4 py-3.5 outline-none focus:border-[#b18b4f]"
              />

              <textarea
                rows="4"
                placeholder="Your Message"
                className="w-full resize-none rounded-xl border border-gray-200 px-4 py-3.5 outline-none focus:border-[#b18b4f]"
              />

              <button
                type="submit"
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#173f35] px-5 py-4 font-semibold text-white hover:bg-[#b18b4f]"
              >
                <Send size={17} />
                Submit Enquiry
              </button>

              {submitted && (
                <div className="flex items-center gap-2 rounded-xl bg-green-50 px-4 py-3 text-sm text-green-700">
                  <CheckCircle2 size={18} />
                  Enquiry submitted successfully.
                </div>
              )}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;

