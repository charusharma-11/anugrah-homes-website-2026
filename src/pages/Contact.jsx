// import { Mail, MapPin, Phone, Send } from "lucide-react";

// function Contact() {
//   return (
//     <section
//       id="contact"
//       className="bg-[#f7f1e7] px-5 py-20 sm:px-8 lg:px-12"
//     >
//       <div className="mx-auto max-w-[1200px]">

//         {/* Heading */}
//         <div className="mb-12 text-center">
//           <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#a65d3b]">
//             Get In Touch
//           </p>

//           <h2 className="mt-3 font-serif text-4xl font-bold text-[#3b2a24] sm:text-5xl">
//             Contact Us
//           </h2>

//           <p className="mx-auto mt-4 max-w-2xl text-[#70665f]">
//             Have questions about the project or want to schedule a site visit?
//             Send us your details and our team will get in touch with you.
//           </p>
//         </div>

//         {/* Main Contact Box */}
//         <div className="overflow-hidden rounded-[28px] border border-[#3b2a24]/10 bg-white shadow-[0_20px_60px_rgba(59,42,36,0.10)]">

//           <div className="grid lg:grid-cols-[0.85fr_1.15fr]">

//             {/* Contact Details */}
//             <div className="bg-[#3b2a24] p-7 text-white sm:p-9 lg:p-10">

//               <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#d2b17d]">
//                 Contact Details
//               </p>

//               <h3 className="mt-3 font-serif text-3xl font-bold">
//                 Let's Talk
//               </h3>

//               <p className="mt-4 text-sm leading-7 text-white/70">
//                 Connect with our team for project details, pricing,
//                 availability or a site visit.
//               </p>

//               {/* Table-style details */}
//               <div className="mt-8 overflow-hidden rounded-2xl border border-white/10">

//                 {/* Email */}
//                 <a
//                   href="mailto:info@anugrahhomes.com"
//                   className="flex items-center gap-4 border-b border-white/10 px-5 py-5 transition hover:bg-white/5"
//                 >
//                   <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#a65d3b]">
//                     <Mail size={18} />
//                   </div>

//                   <div>
//                     <p className="text-xs font-semibold uppercase tracking-wider text-white/50">
//                       Email
//                     </p>

//                     <p className="mt-1 text-sm font-semibold text-white">
//                       info@anugrahhomes.com
//                     </p>
//                   </div>
//                 </a>

//                 {/* Phone 1 */}
//                 <a
//                   href="tel:+917678279151"
//                   className="flex items-center gap-4 border-b border-white/10 px-5 py-5 transition hover:bg-white/5"
//                 >
//                   <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#a65d3b]">
//                     <Phone size={18} />
//                   </div>

//                   <div>
//                     <p className="text-xs font-semibold uppercase tracking-wider text-white/50">
//                       Phone
//                     </p>

//                     <p className="mt-1 text-sm font-semibold text-white">
//                       +91 76782 79151
//                     </p>
//                   </div>
//                 </a>

//                 {/* Phone 2 */}
//                 <a
//                   href="tel:+919115253545"
//                   className="flex items-center gap-4 border-b border-white/10 px-5 py-5 transition hover:bg-white/5"
//                 >
//                   <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#a65d3b]">
//                     <Phone size={18} />
//                   </div>

//                   <div>
//                     <p className="text-xs font-semibold uppercase tracking-wider text-white/50">
//                       Alternate Phone
//                     </p>

//                     <p className="mt-1 text-sm font-semibold text-white">
//                       +91 91152 53545
//                     </p>
//                   </div>
//                 </a>

//                 {/* Location */}
//                 <div className="flex items-center gap-4 px-5 py-5">
//                   <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#a65d3b]">
//                     <MapPin size={18} />
//                   </div>

//                   <div>
//                     <p className="text-xs font-semibold uppercase tracking-wider text-white/50">
//                       Location
//                     </p>

//                     <p className="mt-1 text-sm font-semibold text-white">
//                       Jattari, Aligarh, Uttar Pradesh
//                     </p>
//                   </div>
//                 </div>

//               </div>
//             </div>

//             {/* Enquiry Form */}
//             <div className="p-7 sm:p-9 lg:p-10">

//               <div className="mb-7">
//                 <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#a65d3b]">
//                   Enquiry
//                 </p>

//                 <h3 className="mt-2 font-serif text-3xl font-bold text-[#3b2a24]">
//                   Send Your Enquiry
//                 </h3>
//               </div>

//               <form
//                 onSubmit={(e) => e.preventDefault()}
//                 className="space-y-5"
//               >

//                 {/* Name + Phone */}
//                 <div className="grid gap-5 sm:grid-cols-2">

//                   <div>
//                     <label className="mb-2 block text-sm font-semibold text-[#3b2a24]">
//                       Full Name
//                     </label>

//                     <input
//                       type="text"
//                       placeholder="Enter your name"
//                       className="w-full rounded-xl border border-[#3b2a24]/10 bg-[#f7f1e7] px-4 py-3.5 text-sm text-[#3b2a24] outline-none transition focus:border-[#a65d3b] focus:bg-white"
//                     />
//                   </div>

//                   <div>
//                     <label className="mb-2 block text-sm font-semibold text-[#3b2a24]">
//                       Phone Number
//                     </label>

//                     <input
//                       type="tel"
//                       placeholder="Enter phone number"
//                       className="w-full rounded-xl border border-[#3b2a24]/10 bg-[#f7f1e7] px-4 py-3.5 text-sm text-[#3b2a24] outline-none transition focus:border-[#a65d3b] focus:bg-white"
//                     />
//                   </div>

//                 </div>

//                 {/* Email */}
//                 <div>
//                   <label className="mb-2 block text-sm font-semibold text-[#3b2a24]">
//                     Email Address
//                   </label>

//                   <input
//                     type="email"
//                     placeholder="Enter your email"
//                     className="w-full rounded-xl border border-[#3b2a24]/10 bg-[#f7f1e7] px-4 py-3.5 text-sm text-[#3b2a24] outline-none transition focus:border-[#a65d3b] focus:bg-white"
//                   />
//                 </div>

//                 {/* Message */}
//                 <div>
//                   <label className="mb-2 block text-sm font-semibold text-[#3b2a24]">
//                     Your Enquiry
//                   </label>

//                   <textarea
//                     rows="5"
//                     placeholder="Tell us what you would like to know..."
//                     className="w-full resize-none rounded-xl border border-[#3b2a24]/10 bg-[#f7f1e7] px-4 py-3.5 text-sm text-[#3b2a24] outline-none transition focus:border-[#a65d3b] focus:bg-white"
//                   />
//                 </div>

//                 {/* Submit */}
//                 <button
//                   type="submit"
//                   className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#a65d3b] px-6 py-3.5 text-sm font-bold text-white shadow-md transition hover:bg-[#84472e]"
//                 >
//                   Send Enquiry
//                   <Send size={17} />
//                 </button>

//               </form>
//             </div>

//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default Contact;


import { Mail, Phone, MapPin } from "lucide-react";

function Contact() {
  return (
    <section className="min-h-screen bg-[#f7f1e7] px-6 py-32">
      <div className="mx-auto max-w-7xl">

        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#a65d3b]">
          Contact Us
        </p>

        <h1 className="mt-4 text-4xl font-bold text-[#3b2a24] md:text-6xl">
          Let's Talk About Your Future Plot
        </h1>

        <p className="mt-6 max-w-4xl text-lg leading-8 text-[#70665f]">
          Have questions about the project, plot availability, pricing or
          site visits? Get in touch with the project team.
        </p>

        <div className="mt-14 grid gap-10 lg:grid-cols-2">

          <div className="rounded-[32px] bg-[#173f35] p-8 text-white md:p-10">

            <h2 className="text-3xl font-bold">
              Get In Touch
            </h2>

            <p className="mt-4 leading-7 text-white/70">
              Contact us for project details, pricing, plot availability and
              site visit information.
            </p>

            <div className="mt-10 space-y-7">

              <a
                href="mailto:info@anugrahhomes.com"
                className="flex items-center gap-4"
              >
                <Mail className="text-[#dfc995]" />
                <span>info@anugrahhomes.com</span>
              </a>

              <a
                href="tel:+917678279151"
                className="flex items-center gap-4"
              >
                <Phone className="text-[#dfc995]" />
                <span>+91 76782 79151</span>
              </a>

              <a
                href="tel:+919115253545"
                className="flex items-center gap-4"
              >
                <Phone className="text-[#dfc995]" />
                <span>+91 91152 53545</span>
              </a>

              <div className="flex items-start gap-4">
                <MapPin className="mt-1 text-[#dfc995]" />
                <span>Jattari, Aligarh, Uttar Pradesh</span>
              </div>

            </div>
          </div>

          <form
            onSubmit={(e) => e.preventDefault()}
            className="rounded-[32px] bg-white p-8 shadow-xl md:p-10"
          >
            <h2 className="text-3xl font-bold text-[#173f35]">
              Send An Enquiry
            </h2>

            <div className="mt-7 space-y-5">

              <input
                type="text"
                placeholder="Your Name"
                className="w-full rounded-xl border border-gray-200 px-4 py-4 outline-none focus:border-[#a65d3b]"
              />

              <input
                type="tel"
                placeholder="Phone Number"
                className="w-full rounded-xl border border-gray-200 px-4 py-4 outline-none focus:border-[#a65d3b]"
              />

              <input
                type="email"
                placeholder="Email Address"
                className="w-full rounded-xl border border-gray-200 px-4 py-4 outline-none focus:border-[#a65d3b]"
              />

              <textarea
                rows="5"
                placeholder="Tell us what you would like to know..."
                className="w-full rounded-xl border border-gray-200 px-4 py-4 outline-none focus:border-[#a65d3b]"
              />

              <button
                type="submit"
                className="w-full rounded-full bg-[#173f35] px-6 py-4 font-semibold text-white transition hover:bg-[#a65d3b]"
              >
                Submit Enquiry
              </button>

            </div>
          </form>

        </div>
      </div>
    </section>
  );
}

export default Contact;