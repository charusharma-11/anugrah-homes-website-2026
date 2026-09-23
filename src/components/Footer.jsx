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
    <footer className="premium-footer">

      <div className="mx-auto max-w-[1450px]">

        <div className="mb-12 h-px bg-gradient-to-r from-transparent via-[#c8a65f]/60 to-transparent" />

        <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr_1fr]">

          {/* BRAND */}
          <div>
            <Link
              to="/"
              onClick={scrollTop}
              className="inline-flex items-center gap-3"
            >
              <div className="premium-footer-logo">
                <img
                  src="/images/jattari-logo.png"
                  alt="Jattari"
                  className="h-full w-full object-contain"
                  onError={(e) => {
                    e.currentTarget.src = "/images/anugrah-logo.jpg";
                  }}
                />
              </div>

              <div>
                <h3 className="font-serif text-2xl font-semibold text-white">
                  Jattari
                </h3>

                <p className="mt-1 text-[9px] font-bold uppercase tracking-[0.25em] text-[#d4b36e]">
                  Premium Plots
                </p>
              </div>
            </Link>

            <p className="mt-6 max-w-md text-sm leading-7 text-white/55">
              Thoughtfully planned residential plots in Jattari,
              designed for comfortable living, connectivity and
              future possibilities.
            </p>

            {/* DECORATIVE ORBIT */}
            <div className="footer-orbit mt-8">
              <span />
              <span />
              <span />
            </div>
          </div>

          {/* LINKS */}
          <div>
            <h4 className="footer-heading">
              Quick Links
            </h4>

            <div className="mt-7 grid grid-cols-2 gap-x-5 gap-y-4">

              <Link to="/" className="footer-link">Home</Link>
              <Link to="/about" className="footer-link">About</Link>
              <Link to="/why-jattari" className="footer-link">Why Jattari</Link>
              <Link to="/amenities" className="footer-link">Amenities</Link>
              <Link to="/price" className="footer-link">Price</Link>
              <Link to="/keyplan" className="footer-link">Keyplan</Link>
              <Link to="/layout" className="footer-link">Layout</Link>
              <Link to="/gallery" className="footer-link">Gallery</Link>
              <Link to="/faq" className="footer-link">FAQ</Link>
              <Link to="/news" className="footer-link">News</Link>
              <Link to="/contact" className="footer-link">Contact</Link>

            </div>
          </div>

          {/* CONTACT */}
          <div>
            <h4 className="footer-heading">
              Get In Touch
            </h4>

            <div className="mt-7 space-y-5">

              <div className="footer-contact-item">
                <div className="footer-contact-icon">
                  <MapPin size={17} />
                </div>

                <div>
                  <p className="footer-contact-label">
                    Location
                  </p>

                  <p className="footer-contact-text">
                    Jattari, Uttar Pradesh
                  </p>
                </div>
              </div>

              <a
                href="tel:+917678279151"
                className="footer-contact-item group"
              >
                <div className="footer-contact-icon">
                  <Phone size={17} />
                </div>

                <div>
                  <p className="footer-contact-label">
                    Phone
                  </p>

                  <p className="footer-contact-text group-hover:text-[#d9b978]">
                    +91 76782 79151
                  </p>
                </div>
              </a>

              <a
                href="tel:+919115253545"
                className="footer-contact-item group"
              >
                <div className="footer-contact-icon">
                  <Phone size={17} />
                </div>

                <div>
                  <p className="footer-contact-label">
                    Alternate Phone
                  </p>

                  <p className="footer-contact-text group-hover:text-[#d9b978]">
                    +91 91152 53545
                  </p>
                </div>
              </a>

              <a
                href="mailto:info@anugrahhomes.com"
                className="footer-contact-item group"
              >
                <div className="footer-contact-icon">
                  <Mail size={17} />
                </div>

                <div className="min-w-0">
                  <p className="footer-contact-label">
                    Email
                  </p>

                  <p className="break-all footer-contact-text group-hover:text-[#d9b978]">
                    info@anugrahhomes.com
                  </p>
                </div>
              </a>

            </div>

            <Link
              to="/contact"
              className="mt-7 inline-flex items-center gap-2 rounded-full bg-[#c8a65f] px-6 py-3.5 text-sm font-bold text-[#10251e] transition-all hover:-translate-y-1 hover:bg-white"
            >
              Contact Us
              <ArrowUpRight size={16} />
            </Link>
          </div>
        </div>

        <div className="mt-14 flex flex-col justify-between gap-4 border-t border-white/10 py-6 text-xs text-white/35 sm:flex-row">
          <p>
            © 2026 Jattari. All rights reserved.
          </p>

          <button
            type="button"
            onClick={scrollTop}
            className="transition hover:text-[#d9b978]"
          >
            Back to Top ↑
          </button>
        </div>
      </div>
    </footer>
  );
}

export default Footer;