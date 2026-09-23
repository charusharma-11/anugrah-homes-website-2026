import {
  Phone,
  Mail,
  MapPin,
  ArrowUpRight,
  Send,
} from "lucide-react";

function Contact() {
  return (
    <section
      id="contact"
      className="premium-contact relative overflow-hidden px-5 py-24 sm:px-8 lg:px-12"
    >

      {/* BACKGROUND ORBITS */}
      <div className="contact-orbit contact-orbit-one">
        <span />
        <span />
        <span />
      </div>

      <div className="contact-orbit contact-orbit-two">
        <span />
        <span />
      </div>

      <div className="relative z-10 mx-auto max-w-[1250px]">

        {/* HEADER */}
        <div className="max-w-3xl">
          <p className="premium-kicker">
            Let's Connect
          </p>

          <h1 className="mt-4 font-serif text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
            Let’s Talk About
            <span className="premium-gradient-text">
              {" "}Your Future
            </span>
          </h1>

          <p className="mt-6 max-w-2xl text-sm leading-7 text-white/60 sm:text-base">
            Have a question about the project, plots, pricing or
            site visit? Get in touch with our team and we will
            help you with the details.
          </p>
        </div>

        {/* CONTENT */}
        <div className="mt-14 grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">

          {/* CONTACT INFORMATION */}
          <div className="premium-contact-panel">

            <div className="premium-contact-glow" />

            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#d5b36d]">
              Contact Information
            </p>

            <h2 className="mt-4 font-serif text-3xl font-semibold text-white">
              We’re here to help.
            </h2>

            <div className="mt-9 space-y-5">

              {/* PHONE */}
              <a
                href="tel:+917678279151"
                className="contact-card group"
              >
                <div className="contact-card-icon">
                  <Phone size={20} />
                </div>

                <div>
                  <p className="contact-small-title">
                    Call Us
                  </p>

                  <p className="contact-main-text group-hover:text-[#d8b56c]">
                    +91 76782 79151
                  </p>
                </div>

                <ArrowUpRight
                  size={18}
                  className="ml-auto text-white/30 transition group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-[#d8b56c]"
                />
              </a>

              {/* SECOND PHONE */}
              <a
                href="tel:+919115253545"
                className="contact-card group"
              >
                <div className="contact-card-icon">
                  <Phone size={20} />
                </div>

                <div>
                  <p className="contact-small-title">
                    Alternate Phone
                  </p>

                  <p className="contact-main-text group-hover:text-[#d8b56c]">
                    +91 91152 53545
                  </p>
                </div>

                <ArrowUpRight
                  size={18}
                  className="ml-auto text-white/30 transition group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-[#d8b56c]"
                />
              </a>

              {/* EMAIL */}
              <a
                href="mailto:info@anugrahhomes.com"
                className="contact-card group"
              >
                <div className="contact-card-icon">
                  <Mail size={20} />
                </div>

                <div className="min-w-0">
                  <p className="contact-small-title">
                    Email Us
                  </p>

                  <p className="break-all contact-main-text group-hover:text-[#d8b56c]">
                    info@anugrahhomes.com
                  </p>
                </div>

                <ArrowUpRight
                  size={18}
                  className="ml-auto shrink-0 text-white/30 transition group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-[#d8b56c]"
                />
              </a>

              {/* LOCATION */}
              <div className="contact-card">
                <div className="contact-card-icon">
                  <MapPin size={20} />
                </div>

                <div>
                  <p className="contact-small-title">
                    Location
                  </p>

                  <p className="contact-main-text">
                    Jattari, Uttar Pradesh
                  </p>
                </div>
              </div>
            </div>

            {/* ORBIT VISUAL */}
            <div className="contact-mini-orbit mt-10">
              <div className="contact-mini-core">
                J
              </div>

              <span />
              <span />
              <span />
            </div>
          </div>

          {/* FORM */}
          <div className="premium-form-panel">

            <div className="mb-8">
              <p className="premium-kicker">
                Enquiry
              </p>

              <h2 className="mt-3 font-serif text-3xl font-semibold text-white sm:text-4xl">
                Send Us A Message
              </h2>
            </div>

            <form className="grid gap-5 sm:grid-cols-2">

              <div>
                <label className="contact-label">
                  Your Name
                </label>

                <input
                  type="text"
                  placeholder="Enter your name"
                  className="contact-input"
                />
              </div>

              <div>
                <label className="contact-label">
                  Phone Number
                </label>

                <input
                  type="tel"
                  placeholder="+91 XXXXX XXXXX"
                  className="contact-input"
                />
              </div>

              <div className="sm:col-span-2">
                <label className="contact-label">
                  Email Address
                </label>

                <input
                  type="email"
                  placeholder="you@example.com"
                  className="contact-input"
                />
              </div>

              <div className="sm:col-span-2">
                <label className="contact-label">
                  Your Message
                </label>

                <textarea
                  rows="5"
                  placeholder="Tell us what you would like to know..."
                  className="contact-input resize-none"
                />
              </div>

              <div className="sm:col-span-2">
                <button
                  type="submit"
                  className="contact-submit"
                >
                  Send Enquiry
                  <Send size={17} />
                </button>
              </div>

            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;