function Contact() {
  return (
    <section className="min-h-screen bg-[#f7f1e7] px-6 py-32">
      <div className="mx-auto max-w-5xl">

        {/* Heading */}
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#a65d3b]">
            Contact Us
          </p>

          <h1 className="mt-4 text-4xl font-bold text-[#3b2a24] md:text-6xl">
            Let's Talk About Your Future Plot
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-[#70665f]">
            Have questions about the project, plot availability, pricing or
            site visits? Send us your details and our team will get in touch
            with you.
          </p>
        </div>

        {/* Send An Enquiry */}
        <div className="mx-auto mt-14 max-w-3xl">
          <form
            onSubmit={(e) => e.preventDefault()}
            className="rounded-[32px] bg-white p-8 shadow-xl md:p-10"
          >
            <div className="text-center">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#a65d3b]">
                Enquiry
              </p>

              <h2 className="mt-2 text-3xl font-bold text-[#173f35]">
                Send An Enquiry
              </h2>
            </div>

            <div className="mt-8 space-y-5">

              {/* Name */}
              <div>
                <label className="mb-2 block text-sm font-semibold text-[#3b2a24]">
                  Your Name
                </label>

                <input
                  type="text"
                  placeholder="Enter your name"
                  className="w-full rounded-xl border border-gray-200 bg-[#f7f1e7] px-4 py-4 outline-none transition focus:border-[#a65d3b] focus:bg-white"
                />
              </div>

              {/* Phone */}
              <div>
                <label className="mb-2 block text-sm font-semibold text-[#3b2a24]">
                  Phone Number
                </label>

                <input
                  type="tel"
                  placeholder="Enter phone number"
                  className="w-full rounded-xl border border-gray-200 bg-[#f7f1e7] px-4 py-4 outline-none transition focus:border-[#a65d3b] focus:bg-white"
                />
              </div>

              {/* Email */}
              <div>
                <label className="mb-2 block text-sm font-semibold text-[#3b2a24]">
                  Email Address
                </label>

                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full rounded-xl border border-gray-200 bg-[#f7f1e7] px-4 py-4 outline-none transition focus:border-[#a65d3b] focus:bg-white"
                />
              </div>

              {/* Message */}
              <div>
                <label className="mb-2 block text-sm font-semibold text-[#3b2a24]">
                  Your Enquiry
                </label>

                <textarea
                  rows="5"
                  placeholder="Tell us what you would like to know..."
                  className="w-full resize-none rounded-xl border border-gray-200 bg-[#f7f1e7] px-4 py-4 outline-none transition focus:border-[#a65d3b] focus:bg-white"
                />
              </div>

              {/* Submit */}
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