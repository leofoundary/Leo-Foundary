import React, { useLayoutEffect, useRef } from "react";
import { Link } from "react-router-dom";
import {
  ArrowUpRight,
  Globe,
  Bot,
  Users,
  Building2,
  Workflow,
  Code2,
} from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    title: "Websites & Web Apps",
    description: "Modern digital experiences built around your business.",
    icon: Globe,
    href: "/products#web-development",
  },
  {
    title: "AI Solutions",
    description:
      "Intelligent systems and AI agents that reduce repetitive work.",
    icon: Bot,
    href: "/products#ai-solutions",
  },
  {
    title: "CRM Systems",
    description:
      "Manage leads, customers, sales and relationships in one place.",
    icon: Users,
    href: "/products#crm",
  },
  {
    title: "ERP Systems",
    description: "Connect your operations, people and business data.",
    icon: Building2,
    href: "/products#erp",
  },
  {
    title: "Business Automation",
    description:
      "Automate repetitive workflows and make your business faster.",
    icon: Workflow,
    href: "/products#automation",
  },
  {
    title: "Custom Software",
    description:
      "Dashboards, portals, APIs and software built around your needs.",
    icon: Code2,
    href: "/products#custom-software",
  },
];

const HomeServices = () => {
  const sectionRef = useRef(null);

useLayoutEffect(() => {
  const ctx = gsap.context(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 70%",
        toggleActions: "play none none reverse",
      },
    });

    tl.from(".services-label", {
      y: 30,
      opacity: 0,
      duration: 0.6,
      ease: "power3.out",
    })
      .from(
        ".services-title",
        {
          y: 60,
          opacity: 0,
          duration: 0.8,
          ease: "power4.out",
        },
        "-=0.3"
      )
      .from(
        ".services-description",
        {
          y: 30,
          opacity: 0,
          duration: 0.7,
          ease: "power3.out",
        },
        "-=0.35"
      )
      .from(
        ".services-button",
        {
          y: 25,
          opacity: 0,
          duration: 0.6,
          ease: "power3.out",
        },
        "-=0.35"
      )
      gsap.fromTo(
  ".service-card",
  {
    y: 80,
    opacity: 0,
  },
  {
    y: 0,
    opacity: 1,
    duration: 0.6,
    stagger: 0.15,
    ease: "power4.out",
    scrollTrigger: {
      trigger: sectionRef.current,
      start: "top 95%",
      toggleActions: "play none none reverse",
    },
  }
);
  }, sectionRef);

  return () => ctx.revert();
}, []);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen w-full overflow-hidden px-6 py-24 text-white"
    >
      {/* Background glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-emerald-400/[0.03] blur-[120px]" />

      <div className="relative mx-auto grid max-w-7xl gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
        {/* LEFT SIDE */}
        <div className="max-w-xl">
          <p className="services-label mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-emerald-400">
            Our Services
          </p>

          <h2 className="services-title text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">
            What We <span className="text-emerald-400">Do.</span>
          </h2>

          <div className="mt-6 h-[2px] w-20 bg-emerald-400" />

          <div className="services-description">
            <p className="mt-6 max-w-lg text-base leading-7 text-gray-400 md:text-lg">
              We build intelligent software, AI systems and digital
              experiences that help businesses operate smarter, faster and
              more efficiently.
            </p>

            <p className="mt-4 max-w-lg text-base leading-7 text-gray-500">
              From your first idea to a complete production system, we turn
              complex problems into simple digital solutions.
            </p>
          </div>

          {/* View all button */}
          <Link
            to="/services"
            className="services-button group relative mt-8 inline-flex items-center gap-3 overflow-hidden rounded-lg border border-emerald-400/30 bg-emerald-400/10 px-6 py-3 text-sm font-medium text-emerald-300 transition-all duration-300 hover:border-emerald-400/60 hover:bg-emerald-400/15 hover:shadow-[0_0_30px_rgba(52,211,153,0.15)]"
          >
            <span>View All Services</span>

            <ArrowUpRight
              size={18}
              className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </Link>
        </div>

        {/* RIGHT SIDE */}
        <div className="grid gap-4 sm:grid-cols-2">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <Link
                to={service.href}
                key={service.title}
                className={`service-card group relative z-0 min-h-[220px] overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] p-6 transition-all duration-500 hover:z-10 hover:-translate-y-1 hover:border-emerald-400/30 hover:bg-emerald-400/[0.04] hover:shadow-[0_0_40px_rgba(52,211,153,0.08)] 
                  ${index % 2 === 1 ? "sm:translate-y-8" : ""}
                }`}
              >
                {/* Card glow */}
                <div className="pointer-events-none absolute -right-20 -top-20 h-40 w-40 rounded-full bg-emerald-400/[0.04] blur-3xl transition-all duration-500 group-hover:bg-emerald-400/[0.1]" />

                {/* Icon */}
                <div className="relative flex h-11 w-11 items-center justify-center rounded-xl border border-emerald-400/20 bg-emerald-400/5 text-emerald-400 transition-all duration-300 group-hover:border-emerald-400/40 group-hover:bg-emerald-400/10 group-hover:shadow-[0_0_25px_rgba(52,211,153,0.15)]">
                  <Icon size={22} strokeWidth={1.6} />
                </div>

                {/* Content */}
                <div className="relative mt-8">
                  <h3 className="text-xl font-semibold text-white">
                    {service.title}
                  </h3>

                  <p className="mt-3 max-w-sm text-sm leading-6 text-gray-500 transition-colors duration-300 group-hover:text-gray-400">
                    {service.description}
                  </p>
                </div>

                {/* Explore */}
                <div className="absolute bottom-6 right-6 overflow-hidden">
                  <div className="relative h-6 w-[100px] overflow-hidden">
                    {/* Default arrow */}
                    <span className="block text-gray-600 transition-all duration-500 [transition-timing-function:cubic-bezier(0.76,0,0.24,1)] group-hover:-translate-y-full">
                      <ArrowUpRight size={20} />
                    </span>

                    {/* Hover text */}
                    <span className="absolute left-0 top-full flex items-center gap-1 whitespace-nowrap text-sm font-medium text-emerald-400 transition-all duration-500 [transition-timing-function:cubic-bezier(0.76,0,0.24,1)] group-hover:-translate-y-full">
                      Explore
                      <ArrowUpRight size={16} />
                    </span>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HomeServices;