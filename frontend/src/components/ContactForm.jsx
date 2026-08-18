import React, { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    services: [],
    message: "",
    company_website: "",
  });

  const [status, setStatus] = useState("idle");

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

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (status === "sending") return;

    if (formData.services.length === 0) {
      setStatus("error");
      return;
    }

    setStatus("sending");

    try {
      const response = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          services: formData.services,
          message: formData.message,
          company_website: formData.company_website,
        }),
      });

      const result = await response.json();

      if (!response.ok || !result.success) {
        throw new Error(result.message || "Something went wrong.");
      }

      setStatus("success");

      setFormData({
        name: "",
        email: "",
        services: [],
        message: "",
        company_website: "",
      });

      setTimeout(() => {
        setStatus("idle");
      }, 5000);
    } catch (error) {
      console.error("Contact form error:", error);
      setStatus("error");
    }
  };

  return (
    <section className="relative z-10 w-full px-6 py-24 md:px-12 lg:px-20">
      <div className="mx-auto grid w-full max-w-7xl grid-cols-1 gap-16 lg:grid-cols-2 lg:gap-24">
        {/* LEFT SIDE */}

        <div className="flex flex-col justify-center">
          <div className="mb-6 flex items-center gap-3">
            <span className="h-px w-8 bg-emerald-400" />

            <span className="text-sm font-medium uppercase tracking-[0.25em] text-emerald-400">
              Contact
            </span>
          </div>

          <h1 className="max-w-xl text-5xl font-bold leading-[1.05] tracking-tight text-white md:text-6xl lg:text-7xl">
            Let's build something{" "}
            <span className="text-emerald-400">intelligent.</span>
          </h1>

          <p className="mt-6 max-w-lg text-base leading-7 text-gray-300 md:text-lg">
            Tell us a little about your project and we'll get back to you
            shortly. Whether you're building something new or improving
            something that already exists, we'd love to hear about it.
          </p>

          {/* CONTACT METHODS */}

          <div className="mt-12 space-y-4">
            {/* EMAIL */}

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

                    <span className="absolute left-0 top-0 whitespace-nowrap text-sm text-white transition-transform duration-500 group-hover:-translate-y-full">
                      Mail Us
                    </span>

                    <span className="absolute left-0 top-full whitespace-nowrap text-sm text-emerald-400 transition-transform duration-500 group-hover:-translate-y-full">
                      Send us an email
                    </span>
                  </div>
                </div>

                <span className="text-lg text-emerald-400 transition-transform duration-300 group-hover:translate-x-1">
                  ↗
                </span>
              </div>

              <span className="absolute -inset-10 -z-0 bg-emerald-400/10 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100" />
            </a>

            {/* WHATSAPP */}

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

                  <div className="relative mt-1 h-6 w-max overflow-hidden">
                    <span className="invisible whitespace-nowrap text-sm">
                      Start a conversation
                    </span>

                    <span className="absolute left-0 top-0 whitespace-nowrap text-sm text-white transition-transform duration-500 group-hover:-translate-y-full">
                      Let's chat
                    </span>

                    <span className="absolute left-0 top-full whitespace-nowrap text-sm text-emerald-400 transition-transform duration-500 group-hover:-translate-y-full">
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

            {/* LOCATION */}

            <div className="group relative overflow-hidden rounded-xl border border-white/10 bg-white/[0.02] px-5 py-4 transition-all duration-300 hover:border-emerald-400/30">
              <div className="relative z-10 flex items-center justify-between">
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-gray-400">
                    Based in
                  </p>

                  <div className="relative mt-1 h-6 w-max overflow-hidden">
                    <span className="invisible whitespace-nowrap text-sm">
                      Greater Noida, India
                    </span>

                    <span className="absolute left-0 top-0 text-sm text-white transition-transform duration-500 group-hover:-translate-y-full">
                      India
                    </span>

                    <span className="absolute left-0 top-full text-sm text-emerald-400 transition-transform duration-500 group-hover:-translate-y-full">
                      Greater Noida, India
                    </span>
                  </div>
                </div>

                <span className="text-lg text-emerald-400">◉</span>
              </div>

              <span className="absolute -inset-10 -z-0 bg-emerald-400/10 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100" />
            </div>
          </div>
        </div>

        {/* RIGHT SIDE — FORM */}

        <div className="relative">
          <div className="absolute -inset-10 -z-10 rounded-[40px] bg-emerald-400/[0.04] blur-3xl" />

          <form
            onSubmit={handleSubmit}
            className="relative rounded-2xl border border-white/10 bg-black/60 p-6 backdrop-blur-xl md:p-8 lg:p-10"
          >
            {/* FORM HEADING */}

            <div className="mb-8">
              <p className="text-xs font-medium uppercase tracking-[0.25em] text-emerald-400">
                Start a project
              </p>

              <h2 className="mt-2 text-2xl font-semibold text-white">
                Tell us what you're building.
              </h2>
            </div>

            {/* Honey Pot field */}
            <input
              type="text"
              name="company_website"
              value={formData.company_website}
              onChange={handleChange}
              tabIndex="-1"
              autoComplete="new-password"
              aria-hidden="true"
              style={{
                position: "absolute",
                left: "-9999px",
                width: "1px",
                height: "1px",
                opacity: 0,
                pointerEvents: "none",
              }}
            />
            {/* NAME + EMAIL */}

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

            {/* SERVICES */}

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

              {status === "error" && formData.services.length === 0 && (
                <p className="mt-3 text-xs text-red-400">
                  Please select at least one service.
                </p>
              )}
            </div>

            {/* PROJECT DESCRIPTION */}

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

            {/* STATUS */}

            {status === "success" && (
              <div className="mt-6 rounded-lg border border-emerald-400/20 bg-emerald-400/[0.05] px-4 py-3 text-sm text-emerald-400">
                Your inquiry has been sent successfully. We'll get back to you
                shortly.
              </div>
            )}

            {status === "error" && formData.services.length > 0 && (
              <div className="mt-6 rounded-lg border border-red-400/20 bg-red-400/[0.05] px-4 py-3 text-sm text-red-400">
                Something went wrong while sending your inquiry. Please try
                again or email us directly.
              </div>
            )}

            {/* SUBMIT BUTTON */}

            <button
              type="submit"
              disabled={status === "sending"}
              className={`group relative mt-8 flex h-14 w-full items-center justify-center overflow-hidden rounded-full px-6 font-semibold text-black transition-all duration-300 ${
                status === "sending"
                  ? "cursor-not-allowed bg-emerald-400/60"
                  : "bg-emerald-400 hover:-translate-y-1 hover:shadow-[0_0_25px_rgba(52,211,153,0.25)]"
              }`}
            >
              <span className="absolute -inset-10 bg-emerald-300/40 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100" />

              <span className="relative h-6 w-36 overflow-hidden">
                <span className="absolute left-1/2 top-0 -translate-x-1/2 whitespace-nowrap">
                  {status === "sending" ? "Sending..." : "Send Inquiry"}
                </span>
              </span>

              {status !== "sending" && (
                <span className="relative ml-3 text-lg transition-transform duration-500 group-hover:translate-x-1">
                  →
                </span>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
