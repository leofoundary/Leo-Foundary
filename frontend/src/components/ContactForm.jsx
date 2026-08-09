import React, { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    services: [],
    message: "",
    budget: "",
    timeline: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const services = ["Website", "Web App", "AI", "CRM", "ERP", "Automation"];

  const toggleService = (service) => {
    setFormData((prev) => ({
      ...prev,
      services: prev.services.includes(service)
        ? prev.services.filter((item) => item !== service)
        : [...prev.services, service],
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    setFormData({
      name: "",
      email: "",
      services: [],
      message: "",
      budget: "",
      timeline: "",
    });
  };

  return (
    <section className="relative z-10 w-full px-6 py-24 md:px-12 lg:px-20">
      <div className="mx-auto grid w-full max-w-7xl grid-cols-1 gap-16 lg:grid-cols-2 lg:gap-24">
        {/* =====================================================
            LEFT SIDE
        ===================================================== */}

        <div className="flex flex-col justify-center">
          {/* Small label */}

          <div className="mb-6 flex items-center gap-3">
            <span className="h-px w-8 bg-emerald-400" />

            <span className="text-sm font-medium uppercase tracking-[0.25em] text-emerald-400">
              Contact
            </span>
          </div>

          {/* Main heading */}

          <h1 className="max-w-xl text-5xl font-bold leading-[1.05] tracking-tight text-white md:text-6xl lg:text-7xl">
            Let's build something{" "}
            <span className="text-emerald-400">intelligent.</span>
          </h1>

          {/* Supporting text */}

          <p className="mt-6 max-w-lg text-base leading-7 text-gray-300 md:text-lg">
            Tell us a little about your project and we'll get back to you
            shortly. Whether you're building something new or improving
            something that already exists, we'd love to hear about it.
          </p>

          {/* Contact methods */}

          <div className="mt-12 space-y-4">
            {/* Email */}

            <a
              href="mailto:leofoundary@gmail.com"
              className="group relative block overflow-hidden rounded-xl border border-white/10 bg-white/[0.02] px-5 py-4 transition-all duration-300 hover:border-emerald-400/30 hover:bg-emerald-400/[0.03]"
            >
              <div className="relative z-10 flex items-center justify-between">
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-gray-400">
                    Email
                  </p>

                  <div className="relative mt-1 h-6 w-max overflow-hidden">
                    <span className="invisible whitespace-nowrap text-sm">
                      Send us an email
                    </span>
                    <span className="whitespace-nowrap absolute left-0 top-0 text-sm text-white transition-transform duration-500 [transition-timing-function:cubic-bezier(0.76,0,0.24,1)] group-hover:-translate-y-full">
                      Mail Us
                    </span>

                    <span className="whitespace-nowrap absolute left-0 top-full text-sm text-emerald-400 transition-transform duration-500 [transition-timing-function:cubic-bezier(0.76,0,0.24,1)] group-hover:-translate-y-full">
                      Send us an email
                    </span>
                  </div>
                </div>

                <span className="text-lg text-emerald-400 transition-transform duration-300 group-hover:translate-x-1">
                  ↗
                </span>
              </div>

              {/* Glow */}

              <span className="absolute -inset-10 -z-0 bg-emerald-400/10 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100" />
            </a>

            {/* WhatsApp */}

            <a
              href="https://wa.me/9627898780"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative block overflow-hidden rounded-xl border border-white/10 bg-white/[0.02] px-5 py-4 transition-all duration-300 hover:border-emerald-400/30 hover:bg-emerald-400/[0.03]"
            >
              <div className="relative z-10 flex items-center justify-between">
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-gray-400">
                    WhatsApp
                  </p>

                  <div className="relative mt-1 h-6 overflow-hidden w-max">
                    <span className="invisible whitespace-nowrap text-sm">
                      Start a conversation
                    </span>

                    <span className="whitespace-nowrap absolute left-0 top-0 text-sm text-white transition-transform duration-500 [transition-timing-function:cubic-bezier(0.76,0,0.24,1)] group-hover:-translate-y-full">
                      Let's chat
                    </span>

                    <span className="whitespace-nowrap absolute left-0 top-full text-sm text-emerald-400 transition-transform duration-500 [transition-timing-function:cubic-bezier(0.76,0,0.24,1)] group-hover:-translate-y-full">
                      Start a conversation
                    </span>
                  </div>
                </div>

                <span className="text-lg text-emerald-400 transition-transform duration-300 group-hover:translate-x-1">
                  ↗
                </span>
              </div>

              <span className="absolute -inset-10 -z-0 bg-emerald-400/10 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100" />
            </a>

            {/* Location */}

            <div className="group relative overflow-hidden rounded-xl border border-white/10 bg-white/[0.02] px-5 py-4 transition-all duration-300 hover:border-emerald-400/30">
              <div className="relative z-10 flex items-center justify-between">
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-gray-400">
                    Based in
                  </p>

                  <div className="relative mt-1 h-6 w-max overflow-hidden">
                    <span className="invisible whitespace-nowrap text-sm">
                      Greate Noida, India
                    </span>
                    <span className="absolute left-0 top-0 text-sm text-white transition-transform duration-500 [transition-timing-function:cubic-bezier(0.76,0,0.24,1)] group-hover:-translate-y-full">
                      India
                    </span>

                    <span className="absolute left-0 top-full text-sm text-emerald-400 transition-transform duration-500 [transition-timing-function:cubic-bezier(0.76,0,0.24,1)] group-hover:-translate-y-full">
                      Greate Noida, India
                    </span>
                  </div>
                </div>

                <span className="text-lg text-emerald-400">◉</span>
              </div>

              <span className="absolute -inset-10 -z-0 bg-emerald-400/10 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100" />
            </div>
          </div>
        </div>

        {/* =====================================================
            RIGHT SIDE — FORM
        ===================================================== */}

        <div className="relative">
          {/* Form glow */}

          <div className="absolute -inset-10 -z-10 rounded-[40px] bg-emerald-400/[0.04] blur-3xl" />

          <form
            onSubmit={handleSubmit}
            className="relative rounded-2xl border border-white/10 bg-black/60 p-6 backdrop-blur-xl md:p-8 lg:p-10"
          >
            {/* Form heading */}

            <div className="mb-8">
              <p className="text-xs font-medium uppercase tracking-[0.25em] text-emerald-400">
                Start a project
              </p>

              <h2 className="mt-2 text-2xl font-semibold text-white">
                Tell us what you're building.
              </h2>
            </div>

            {/* =================================================
                NAME + EMAIL
            ================================================= */}

            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              <div>
                <label className="mb-2 block text-sm text-gray-300">Name</label>

                <input
                  type="text"
                  name="name"
                  placeholder="Your name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full rounded-lg border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white outline-none placeholder:text-gray-500 transition-all duration-300 focus:border-emerald-400/50 focus:bg-emerald-400/[0.03] focus:ring-1 focus:ring-emerald-400/20"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm text-gray-300">
                  Work Email
                </label>

                <input
                  type="email"
                  name="email"
                  placeholder="you@company.com"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full rounded-lg border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white outline-none placeholder:text-gray-500 transition-all duration-300 focus:border-emerald-400/50 focus:bg-emerald-400/[0.03] focus:ring-1 focus:ring-emerald-400/20"
                />
              </div>
            </div>

            {/* =================================================
                SERVICES
            ================================================= */}

            <div className="mt-7">
              <label className="mb-3 block text-sm text-gray-300">
                What are you looking to build?
              </label>

              <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
                {services.map((service) => {
                  const isSelected = formData.services.includes(service);

                  return (
                    <button
                      key={service}
                      type="button"
                      onClick={() => toggleService(service)}
                      className={`group relative overflow-hidden rounded-lg border px-3 py-3 text-left text-sm transition-all duration-300 ${
                        isSelected
                          ? "border-emerald-400/60 bg-emerald-400/10 text-emerald-400"
                          : "border-white/10 bg-white/[0.02] text-gray-300 hover:border-emerald-400/30 hover:text-white"
                      }`}
                    >
                      <span className="relative z-10">{service}</span>

                      <span
                        className={`absolute -inset-6 bg-emerald-400/10 blur-xl transition-opacity duration-300 ${
                          isSelected
                            ? "opacity-100"
                            : "opacity-0 group-hover:opacity-100"
                        }`}
                      />
                    </button>
                  );
                })}
              </div>
            </div>

            {/* =================================================
                PROJECT DESCRIPTION
            ================================================= */}

            <div className="mt-7">
              <label className="mb-2 block text-sm text-gray-300">
                Tell us about your project
              </label>

              <textarea
                rows="5"
                required
                value={formData.message}
                onChange={handleChange}
                name="message"
                placeholder="What are you trying to build, what problem are you solving, or what would you like us to improve?"
                className="w-full resize-none rounded-lg border border-white/10 bg-white/[0.03] px-4 py-3 text-sm leading-6 text-white outline-none placeholder:text-gray-500 transition-all duration-300 focus:border-emerald-400/50 focus:bg-emerald-400/[0.03] focus:ring-1 focus:ring-emerald-400/20"
              />
            </div>

            {/* =================================================
                BUDGET + TIMELINE
            ================================================= */}

            <div className="mt-7 grid grid-cols-1 gap-5 sm:grid-cols-2">
              <div>
                <label className="mb-2 block text-sm text-gray-300">
                  Estimated Budget
                </label>

                <select
                  name="budget"
                  value={formData.budget}
                  onChange={handleChange}
                  className="w-full appearance-none rounded-lg border border-white/10 bg-black px-4 py-3 text-sm text-gray-300 outline-none transition-all duration-300 focus:border-emerald-400/50"
                >
                  <option value="">Select budget</option>
                  <option>Under $500</option>
                  <option>$500 – $1,000</option>
                  <option>$1,000 – $5,000</option>
                  <option>$5,000 – $10,000</option>
                  <option>$10,000+</option>
                  <option>Not sure yet</option>
                </select>
              </div>

              <div>
                <label className="mb-2 block text-sm text-gray-300">
                  Timeline
                </label>

                <select
                  name="timeline"
                  value={formData.timeline}
                  onChange={handleChange}
                  className="w-full appearance-none rounded-lg border border-white/10 bg-black px-4 py-3 text-sm text-gray-300 outline-none transition-all duration-300 focus:border-emerald-400/50"
                >
                  <option value="">Select timeline</option>
                  <option>As soon as possible</option>
                  <option>Within 1 month</option>
                  <option>1 – 3 months</option>
                  <option>3+ months</option>
                  <option>Just exploring</option>
                </select>
              </div>
            </div>

            {/* =================================================
                SUBMIT BUTTON
            ================================================= */}

            <button
              type="submit"
              className="group relative mt-8 flex h-14 w-full items-center justify-center overflow-hidden rounded-full bg-emerald-400 px-6 font-semibold text-black transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_25px_rgba(52,211,153,0.25)]"
            >
              {/* Glow */}

              <span className="absolute -inset-10 bg-emerald-300/40 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100" />

              {/* Text window */}

              <span className="relative h-6 w-36 overflow-hidden">
                {/* Current text */}

                <span className="absolute left-1/2 top-0 -translate-x-1/2 whitespace-nowrap transition-transform duration-500 [transition-timing-function:cubic-bezier(0.76,0,0.24,1)] group-hover:-translate-y-full">
                  Send Inquiry
                </span>

                {/* Hover text */}

                <span className="absolute left-1/2 top-full -translate-x-1/2 whitespace-nowrap text-emerald-950 transition-transform duration-500 [transition-timing-function:cubic-bezier(0.76,0,0.24,1)] group-hover:-translate-y-full">
                  Let's Talk
                </span>
              </span>

              {/* Arrow */}

              <span className="relative ml-3 text-lg transition-transform duration-500 group-hover:translate-x-1">
                →
              </span>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
