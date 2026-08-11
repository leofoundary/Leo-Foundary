import React from "react";

const MiniBar = ({ height, active = false }) => (
  <div
    style={{ height: `${height}%` }}
    className={`flex-1 rounded-t-sm ${
      active ? "bg-emerald-400/50" : "bg-white/[0.08]"
    }`}
  />
);

const ProductVisual = ({ type }) => {
  if (type === "ai") {
    return (
      <div className="product-ui relative h-full w-full overflow-hidden rounded-xl border border-white/10 bg-[#090c0c] p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="flex h-6 w-6 items-center justify-center rounded-md border border-emerald-400/20 bg-emerald-400/10">
              <span className="text-[9px] font-semibold text-emerald-400">
                L
              </span>
            </div>

            <span className="text-[9px] font-medium tracking-wide text-gray-300">
              LeoAI
            </span>
          </div>

          <div className="flex items-center gap-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.7)]" />
            <span className="text-[7px] text-gray-600">
              ONLINE
            </span>
          </div>
        </div>

        <div className="mt-7">
          <p className="text-[8px] text-gray-600">
            GOOD MORNING
          </p>

          <p className="mt-1 text-sm font-light text-gray-200">
            How can I help?
          </p>
        </div>

        <div className="mt-5 rounded-lg border border-white/10 bg-white/[0.025] p-3">
          <div className="flex items-start gap-2">
            <div className="mt-0.5 h-4 w-4 shrink-0 rounded-full bg-emerald-400/10" />

            <div className="flex-1">
              <p className="text-[8px] leading-4 text-gray-400">
                Analyze our sales performance for
                this month and identify opportunities.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-3 rounded-lg border border-emerald-400/10 bg-emerald-400/[0.025] p-3">
          <div className="flex items-center justify-between">
            <span className="text-[7px] font-medium uppercase tracking-wider text-emerald-400/70">
              AI INSIGHT
            </span>

            <span className="text-[7px] text-gray-600">
              JUST NOW
            </span>
          </div>

          <p className="mt-2 text-[9px] leading-4 text-gray-400">
            Revenue is up{" "}
            <span className="text-emerald-400">
              18.4%
            </span>{" "}
            this month.
          </p>

          <div className="mt-3 grid grid-cols-2 gap-2">
            <div className="rounded border border-white/5 bg-white/[0.02] p-2">
              <p className="text-[6px] text-gray-600">
                OPPORTUNITIES
              </p>
              <p className="mt-1 text-[10px] text-gray-300">
                03
              </p>
            </div>

            <div className="rounded border border-white/5 bg-white/[0.02] p-2">
              <p className="text-[6px] text-gray-600">
                CONFIDENCE
              </p>
              <p className="mt-1 text-[10px] text-emerald-400">
                94%
              </p>
            </div>
          </div>
        </div>

        <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between rounded-lg border border-white/10 bg-[#0d1111] px-3 py-2">
          <span className="text-[7px] text-gray-600">
            Ask anything...
          </span>

          <span className="text-[10px] text-emerald-400">
            ↗
          </span>
        </div>
      </div>
    );
  }

  if (type === "flow") {
    return (
      <div className="product-ui relative h-full w-full overflow-hidden rounded-xl border border-white/10 bg-[#090c0c] p-4">
        <div className="flex items-center justify-between">
          <span className="text-[8px] font-medium uppercase tracking-[0.18em] text-gray-500">
            Workflow
          </span>

          <span className="rounded-full border border-emerald-400/20 bg-emerald-400/5 px-2 py-1 text-[6px] text-emerald-400">
            ACTIVE
          </span>
        </div>

        <div className="mt-6 flex items-center justify-between">
          <span className="text-[7px] text-gray-600">
            SALES AUTOMATION
          </span>

          <span className="text-[7px] text-gray-600">
            04 STEPS
          </span>
        </div>

        <div className="mt-5 space-y-2">
          {[
            {
              title: "New lead",
              sub: "CRM trigger",
              active: false,
            },
            {
              title: "AI analysis",
              sub: "Score & qualify",
              active: true,
            },
            {
              title: "Create task",
              sub: "Sales pipeline",
              active: false,
            },
            {
              title: "Send email",
              sub: "Personalized",
              active: true,
            },
          ].map((item, index) => (
            <React.Fragment key={item.title}>
              <div
                className={`rounded-lg border p-3 ${
                  item.active
                    ? "border-emerald-400/20 bg-emerald-400/[0.035]"
                    : "border-white/10 bg-white/[0.02]"
                }`}
              >
                <div className="flex items-center gap-3">
                  <div
                    className={`flex h-6 w-6 items-center justify-center rounded-md ${
                      item.active
                        ? "bg-emerald-400/10 text-emerald-400"
                        : "bg-white/5 text-gray-600"
                    }`}
                  >
                    <span className="text-[7px]">
                      0{index + 1}
                    </span>
                  </div>

                  <div>
                    <p className="text-[8px] text-gray-300">
                      {item.title}
                    </p>

                    <p className="mt-1 text-[6px] text-gray-600">
                      {item.sub}
                    </p>
                  </div>

                  <div className="ml-auto">
                    <span
                      className={`block h-1.5 w-1.5 rounded-full ${
                        item.active
                          ? "bg-emerald-400 shadow-[0_0_7px_rgba(52,211,153,0.6)]"
                          : "bg-gray-700"
                      }`}
                    />
                  </div>
                </div>
              </div>

              {index < 3 && (
                <div className="ml-[22px] h-2 w-px bg-white/10" />
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    );
  }

  if (type === "crm") {
    return (
      <div className="product-ui relative h-full w-full overflow-hidden rounded-xl border border-white/10 bg-[#090c0c] p-4">
        <div className="flex items-center justify-between">
          <span className="text-[8px] font-medium uppercase tracking-[0.18em] text-gray-500">
            Sales Pipeline
          </span>

          <span className="text-[7px] text-emerald-400">
            +18.4%
          </span>
        </div>

        <div className="mt-5 grid grid-cols-3 gap-2">
          {[
            {
              title: "NEW",
              cards: ["Acme Corp", "Nova Labs"],
            },
            {
              title: "ACTIVE",
              cards: ["Vertex", "Orbit"],
            },
            {
              title: "WON",
              cards: ["Nexus"],
            },
          ].map((column) => (
            <div key={column.title}>
              <div className="mb-2 flex items-center justify-between">
                <span className="text-[6px] tracking-wider text-gray-600">
                  {column.title}
                </span>

                <span className="text-[6px] text-gray-700">
                  {column.cards.length}
                </span>
              </div>

              <div className="space-y-2">
                {column.cards.map((card) => (
                  <div
                    key={card}
                    className="rounded-md border border-white/5 bg-white/[0.025] p-2.5"
                  >
                    <div className="flex items-center gap-1.5">
                      <div className="h-4 w-4 rounded-full bg-white/5" />

                      <span className="truncate text-[6px] text-gray-400">
                        {card}
                      </span>
                    </div>

                    <div className="mt-2 h-1 w-12 rounded bg-white/10" />

                    <div className="mt-1.5 flex justify-between">
                      <span className="text-[5px] text-gray-700">
                        Deal
                      </span>

                      <span className="text-[5px] text-emerald-400/60">
                        $24K
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between rounded-lg border border-white/5 bg-white/[0.02] px-3 py-2">
          <span className="text-[7px] text-gray-600">
            24 active deals
          </span>

          <span className="text-[7px] text-gray-400">
            $184K pipeline
          </span>
        </div>
      </div>
    );
  }

  if (type === "erp") {
    return (
      <div className="product-ui relative h-full w-full overflow-hidden rounded-xl border border-white/10 bg-[#090c0c] p-4">
        <div className="flex items-center justify-between">
          <span className="text-[8px] font-medium uppercase tracking-[0.18em] text-gray-500">
            Business Overview
          </span>

          <span className="text-[7px] text-gray-600">
            TODAY
          </span>
        </div>

        <div className="mt-5 grid grid-cols-2 gap-2">
          {[
            ["Revenue", "$84.2K", "+12.4%"],
            ["Orders", "384", "+8.2%"],
            ["Inventory", "1,248", "94%"],
            ["Operations", "94%", "+4.1%"],
          ].map(([label, value, change]) => (
            <div
              key={label}
              className="rounded-lg border border-white/5 bg-white/[0.02] p-3"
            >
              <p className="text-[6px] uppercase tracking-wider text-gray-600">
                {label}
              </p>

              <div className="mt-2 flex items-end justify-between">
                <span className="text-[12px] font-light text-gray-300">
                  {value}
                </span>

                <span className="text-[6px] text-emerald-400">
                  {change}
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-3 rounded-lg border border-white/5 bg-white/[0.02] p-3">
          <div className="flex justify-between">
            <span className="text-[6px] text-gray-600">
              REVENUE
            </span>

            <span className="text-[6px] text-gray-700">
              LAST 30 DAYS
            </span>
          </div>

          <div className="mt-4 flex h-20 items-end gap-1">
            {[
              32,
              45,
              38,
              55,
              48,
              67,
              60,
              76,
              65,
              82,
              73,
              94,
            ].map((height, index) => (
              <MiniBar
                key={index}
                height={height}
                active={index > 7}
              />
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (type === "desk") {
    return (
      <div className="product-ui relative h-full w-full overflow-hidden rounded-xl border border-white/10 bg-[#090c0c] p-4">
        <div className="flex items-center justify-between">
          <span className="text-[8px] font-medium uppercase tracking-[0.18em] text-gray-500">
            Support Inbox
          </span>

          <span className="rounded-full bg-emerald-400/10 px-2 py-1 text-[6px] text-emerald-400">
            12 OPEN
          </span>
        </div>

        <div className="mt-5 space-y-2">
          {[
            {
              name: "Sarah Mitchell",
              message: "Can you help with my order?",
              active: true,
            },
            {
              name: "Alex Morgan",
              message: "I need to update my plan.",
              active: false,
            },
            {
              name: "James Lee",
              message: "Thanks for the quick response.",
              active: false,
            },
          ].map((ticket) => (
            <div
              key={ticket.name}
              className={`rounded-lg border p-3 ${
                ticket.active
                  ? "border-emerald-400/20 bg-emerald-400/[0.035]"
                  : "border-white/5 bg-white/[0.02]"
              }`}
            >
              <div className="flex items-center gap-2">
                <div className="flex h-6 w-6 items-center justify-center rounded-full bg-white/5">
                  <span className="text-[6px] text-gray-500">
                    {ticket.name
                      .split(" ")
                      .map((word) => word[0])
                      .join("")}
                  </span>
                </div>

                <div className="min-w-0 flex-1">
                  <div className="flex justify-between">
                    <span className="text-[7px] text-gray-300">
                      {ticket.name}
                    </span>

                    <span className="text-[6px] text-gray-700">
                      2m
                    </span>
                  </div>

                  <p className="mt-1 truncate text-[6px] text-gray-600">
                    {ticket.message}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="absolute bottom-4 left-4 right-4 rounded-lg border border-white/10 bg-[#0d1111] p-3">
          <div className="flex items-center justify-between">
            <span className="text-[7px] text-gray-600">
              AI SUGGESTED RESPONSE
            </span>

            <span className="text-[7px] text-emerald-400">
              94%
            </span>
          </div>

          <p className="mt-2 text-[7px] leading-4 text-gray-500">
            "Absolutely. I've checked your order
            and can help you with that..."
          </p>
        </div>
      </div>
    );
  }

  if (type === "analytics") {
    return (
      <div className="product-ui relative h-full w-full overflow-hidden rounded-xl border border-white/10 bg-[#090c0c] p-4">
        <div className="flex items-center justify-between">
          <span className="text-[8px] font-medium uppercase tracking-[0.18em] text-gray-500">
            Performance
          </span>

          <span className="text-[7px] text-emerald-400">
            LIVE
          </span>
        </div>

        <div className="mt-6 flex items-end justify-between">
          <div>
            <p className="text-[7px] text-gray-600">
              TOTAL REVENUE
            </p>

            <p className="mt-1 text-[22px] font-light tracking-tight text-white">
              $128,420
            </p>

            <p className="mt-1 text-[7px] text-emerald-400">
              +24.8% this month
            </p>
          </div>

          <div className="rounded-md border border-emerald-400/10 bg-emerald-400/5 px-2 py-1.5">
            <span className="text-[6px] text-emerald-400">
              HEALTHY
            </span>
          </div>
        </div>

        <div className="mt-7 rounded-lg border border-white/5 bg-white/[0.02] p-3">
          <div className="flex justify-between">
            <span className="text-[6px] text-gray-600">
              REVENUE TREND
            </span>

            <span className="text-[6px] text-gray-700">
              30 DAYS
            </span>
          </div>

          <div className="mt-4 flex h-24 items-end gap-1">
            {[
              28,
              39,
              35,
              48,
              44,
              61,
              55,
              70,
              63,
              79,
              72,
              92,
            ].map((height, index) => (
              <MiniBar
                key={index}
                height={height}
                active={index >= 8}
              />
            ))}
          </div>
        </div>

        <div className="mt-3 grid grid-cols-3 gap-2">
          {[
            ["Conversion", "8.42%"],
            ["Customers", "2,841"],
            ["Growth", "24.8%"],
          ].map(([label, value]) => (
            <div
              key={label}
              className="rounded-lg border border-white/5 bg-white/[0.02] p-2.5"
            >
              <p className="text-[5px] uppercase text-gray-600">
                {label}
              </p>

              <p className="mt-1 text-[8px] text-gray-300">
                {value}
              </p>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return null;
};

export default ProductVisual;