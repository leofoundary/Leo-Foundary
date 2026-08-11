import React, { useState } from "react";
import { Plus } from "lucide-react";

const faqData = [
  {
    question: "What kind of products does LeoFoundary build?",
    answer:
      "We design and build digital products, platforms, websites, and experiences around real ideas and business needs.",
  },
  {
    question: "Do you work with early-stage ideas?",
    answer:
      "Yes. You don't need to have everything figured out. We can help shape an idea from the early concept stage and turn it into something tangible.",
  },
  {
    question: "Do you handle both design and development?",
    answer:
      "Yes. Our process brings product thinking, design, and development together so the idea doesn't get lost between different teams.",
  },
  {
    question: "How does a project usually start?",
    answer:
      "We start with a conversation about your idea, goals, users, and challenges. From there, we figure out what needs to be built and the best way to approach it.",
  },
  {
    question: "How long does a project take?",
    answer:
      "It depends on the scope and complexity. After understanding the project, we'll give you a clearer idea of the timeline before we begin.",
  },
  {
    question: "What if I'm not sure exactly what I need?",
    answer:
      "That's completely fine. You can come to us with a problem, an idea, or even just a rough direction. We'll help figure out what makes sense from there.",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex((current) =>
      current === index ? null : index
    );
  };

  return (
    <section
      id="faq"
      className="
        relative
        overflow-hidden
        px-6
        py-32
        text-white
        md:px-10
        md:py-40
        lg:px-14
      "
    >
      <div className="mx-auto max-w-6xl">
        {/* Heading */}

        <div className="mb-20 text-center md:mb-24">
          <p
            className="
              text-[10px]
              font-medium
              uppercase
              tracking-[0.4em]
              text-emerald-400
            "
          >
            FAQ
          </p>

          <h2
            className="
              mt-6
              text-5xl
              font-light
              leading-[0.95]
              tracking-[-0.06em]
              md:text-6xl
              lg:text-7xl
            "
          >
            Questions,
            <span className="font-bold text-emerald-400">
              {" "}
              answered.
            </span>
          </h2>

          <p
            className="
              mx-auto
              mt-7
              max-w-xl
              text-sm
              font-light
              leading-7
              text-gray-300
              md:text-base
            "
          >
            A few things you might want to know
            before we start building together.
          </p>
        </div>

        {/* FAQ LIST */}

        <div className="mx-auto max-w-4xl">
          {faqData.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={faq.question}
                className="
                  border-t
                  border-white/10
                  last:border-b
                "
              >
                <button
                  type="button"
                  onClick={() => toggleFAQ(index)}
                  className="
                    group
                    flex
                    w-full
                    items-center
                    justify-between
                    gap-8
                    py-7
                    text-left
                    md:py-8
                  "
                  aria-expanded={isOpen}
                >
                  <div className="flex items-start gap-5 md:gap-8">
                    {/* Number */}

                    <span
                      className="
                        pt-1
                        text-[9px]
                        font-medium
                        tracking-[0.2em]
                        text-gray-700
                      "
                    >
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    {/* Question */}

                    <span
                      className={`
                        text-base
                        font-light
                        leading-6
                        transition-colors
                        duration-300
                        md:text-lg
                        ${
                          isOpen
                            ? "text-white"
                            : "text-gray-400 group-hover:text-white"
                        }
                      `}
                    >
                      {faq.question}
                    </span>
                  </div>

                  {/* Plus */}

                  <span
                    className={`
                      flex
                      h-8
                      w-8
                      shrink-0
                      items-center
                      justify-center
                      rounded-full
                      border
                      transition-all
                      duration-300
                      ${
                        isOpen
                          ? "rotate-45 border-emerald-400/30 bg-emerald-400/10 text-emerald-400"
                          : "border-white/10 text-gray-500 group-hover:border-white/20 group-hover:text-white"
                      }
                    `}
                  >
                    <Plus size={15} strokeWidth={1.5} />
                  </span>
                </button>

                {/* Answer */}

                <div
                  className={`
                    grid
                    transition-[grid-template-rows,opacity]
                    duration-500
                    ease-[cubic-bezier(0.22,1,0.36,1)]
                    ${
                      isOpen
                        ? "grid-rows-[1fr] opacity-100"
                        : "grid-rows-[0fr] opacity-0"
                    }
                  `}
                >
                  <div className="overflow-hidden">
                    <div className="pb-8 pl-10 md:pl-16">
                      <p
                        className="
                          max-w-2xl
                          text-sm
                          font-light
                          leading-7
                          text-gray-300
                          md:text-base
                        "
                      >
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Small closing line */}

        <div className="mt-16 text-center">
          <p className="text-[12p5] font-light text-gray-700">
            Still have questions?{" "}
            <a
              href="#contact"
              className="
                text-gray-500
                underline
                underline-offset-4
                transition-colors
                duration-300
                hover:text-emerald-400
              "
            >
              Let's talk.
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default FAQ;