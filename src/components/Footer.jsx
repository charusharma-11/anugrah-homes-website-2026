import { Link } from "react-router-dom";
import {
  Phone,
  Mail,
  MapPin,
  ArrowUpRight,
} from "lucide-react";

function Footer() {
  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="premium-footer bg-[#eee4d5] px-5 py-12 sm:px-8 lg:px-10">
      <div className="mx-auto max-w-[1450px]">

        {/* Top Line */}
        <div className="mb-10 h-px bg-[#3b2a24]/15 sm:mb-12" />

        {/* Main Footer */}
        <div className="grid gap-10 sm:gap-12 lg:grid-cols-[1.2fr_0.8fr_1fr] lg:gap-16">

          {/* BRAND */}
          <div className="min-w-0">
            <Link
              to="/"
              onClick={scrollTop}
              className="inline-flex flex-col leading-none"
            >
              <span className="font-serif text-2xl font-extrabold tracking-wide text-black sm:text-3xl">
                JATTARI
              </span>

              <span className="mt-1 text-[10px] font-bold uppercase tracking-[0.22em] text-[#a65d3b]">
                Premium Plots
              </span>
            </Link>

            <p className="mt-5 max-w-md text-sm font-bold leading-7 text-black sm:mt-6">
              Thoughtfully planned residential plots in Jattari,
              designed for comfortable living, connectivity and
              future possibilities.
            </p>

            {/* Decorative Orbit */}
            <div className="footer-orbit mt-7">
              <span />
              <span />
              <span />
            </div>
          </div>

          {/* QUICK LINKS */}
          <div>
            <h4 className="footer-heading text-base font-extrabold text-black">
              Quick Links
            </h4>

            <div className="mt-6 grid grid-cols-2 gap-x-6 gap-y-3 sm:mt-7 sm:gap-y-4">
              <Link to="/" className="footer-link font-bold text-black">
                Home
              </Link>

              <Link to="/about" className="footer-link font-bold text-black">
                About
              </Link>

              <Link
                to="/why-jattari"
                className="footer-link font-bold text-black"
              >
                Why Jattari
              </Link>

              <Link
                to="/amenities"
                className="footer-link font-bold text-black"
              >
                Amenities
              </Link>

              <Link
                to="/price"
                className="footer-link font-bold text-black"
              >
                Price
              </Link>

              <Link
                to="/keyplan"
                className="footer-link font-bold text-black"
              >
                Keyplan
              </Link>

              <Link
                to="/layout"
                className="footer-link font-bold text-black"
              >
                Layout
              </Link>

              <Link
                to="/gallery"
                className="footer-link font-bold text-black"
              >
                Gallery
              </Link>

              <Link
                to="/faq"
                className="footer-link font-bold text-black"
              >
                FAQ
              </Link>

              <Link
                to="/news"
                className="footer-link font-bold text-black"
              >
                News
              </Link>

              <Link
                to="/contact"
                className="footer-link font-bold text-black"
              >
                Contact
              </Link>
            </div>
          </div>

          {/* CONTACT */}
          <div className="min-w-0">
            <h4 className="footer-heading text-base font-extrabold text-black">
              Get In Touch
            </h4>

            <div className="mt-6 space-y-5 sm:mt-7">

              {/* Location */}
              <div className="footer-contact-item flex items-start gap-4">
                <div className="footer-contact-icon flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#173f35] text-[#dfc995]">
                  <MapPin size={17} />
                </div>

                <div className="min-w-0">
                  <p className="footer-contact-label text-xs font-extrabold uppercase tracking-wider text-black">
                    Location
                  </p>

                  <p className="footer-contact-text mt-1 text-sm font-bold text-black">
                    Jattari, Uttar Pradesh
                  </p>
                </div>
              </div>

              {/* Phone */}
              <a
                href="tel:+917678279151"
                className="footer-contact-item flex items-start gap-4"
              >
                <div className="footer-contact-icon flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#173f35] text-[#dfc995]">
                  <Phone size={17} />
                </div>

                <div className="min-w-0">
                  <p className="footer-contact-label text-xs font-extrabold uppercase tracking-wider text-black">
                    Phone
                  </p>

                  <p className="footer-contact-text mt-1 text-sm font-bold text-black">
                    +91 76782 79151
                  </p>
                </div>
              </a>

              {/* Alternate Phone */}
              <a
                href="tel:+919115253545"
                className="footer-contact-item flex items-start gap-4"
              >
                <div className="footer-contact-icon flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#173f35] text-[#dfc995]">
                  <Phone size={17} />
                </div>

                <div className="min-w-0">
                  <p className="footer-contact-label text-xs font-extrabold uppercase tracking-wider text-black">
                    Alternate Phone
                  </p>

                  <p className="footer-contact-text mt-1 text-sm font-bold text-black">
                    +91 91152 53545
                  </p>
                </div>
              </a>

              {/* Email */}
              <a
                href="mailto:info@anugrahhomes.com"
                className="footer-contact-item flex items-start gap-4"
              >
                <div className="footer-contact-icon flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#173f35] text-[#dfc995]">
                  <Mail size={17} />
                </div>

                <div className="min-w-0">
                  <p className="footer-contact-label text-xs font-extrabold uppercase tracking-wider text-black">
                    Email
                  </p>

                  <p className="footer-contact-text mt-1 break-all text-sm font-bold text-black">
                    info@anugrahhomes.com
                  </p>
                </div>
              </a>

            </div>

            {/* Contact Button */}
            <Link
              to="/contact"
              className="mt-7 inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#173f35] px-6 py-3.5 text-sm font-bold text-white transition-all hover:-translate-y-1 hover:bg-[#a65d3b] sm:w-auto"
            >
              Contact Us
              <ArrowUpRight size={16} />
            </Link>
          </div>

        </div>

        {/* Bottom */}
        <div className="mt-10 flex flex-col gap-4 border-t border-[#3b2a24]/15 py-6 text-xs font-bold text-black sm:mt-14 sm:flex-row sm:items-center sm:justify-between">

          <p className="text-black">
            © 2026 Jattari. All rights reserved.
          </p>

          <button
            type="button"
            onClick={scrollTop}
            className="w-fit font-bold text-black transition hover:text-[#a65d3b]"
          >
            Back to Top ↑
          </button>

        </div>

      </div>
    </footer>
  );
}

export default Footer;