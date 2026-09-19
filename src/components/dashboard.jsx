export default function LifeDashboard() {
  const metrics = [
    {
      value: "63",
      label: "Meaningful Actions",
      description: "Small things you chose to do",
    },
    {
      value: "1,480",
      label: "Meaningful Minutes",
      description: "Time spent living, not scrolling",
    },
    {
      value: "31",
      label: "Places Explored",
      description: "New corners of your city",
    },
    {
      value: "19",
      label: "Memories",
      description: "Moments worth remembering",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-[#f6f6f2] px-6 py-24 sm:px-10 lg:px-16 lg:py-32">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div>
            <span className="mb-5 inline-flex rounded-full border border-black/10 bg-white px-4 py-2 text-xs font-medium tracking-wide text-black/60">
              YOUR LIFE DASHBOARD
            </span>

            <h2 className="max-w-xl text-4xl font-medium leading-[1.05] tracking-[-0.04em] text-[#171717] sm:text-5xl lg:text-6xl">
              Your life,
              <br />
              <span className="text-black/40">not your screen time.</span>
            </h2>
          </div>

          <p className="max-w-lg text-base leading-7 text-black/55 lg:ml-auto lg:text-lg">
            Po Get It turns the little moments into something you can see.
            Over time, your dashboard becomes a record of the places you went,
            things you did, and memories you made.
          </p>
        </div>

        {/* Dashboard */}
        <div className="relative mt-16 overflow-hidden rounded-[32px] border border-black/10 bg-[#171717] p-4 shadow-[0_30px_100px_rgba(0,0,0,0.12)] sm:p-6 lg:mt-20 lg:p-8">
          {/* Top bar */}
          <div className="flex flex-col gap-5 border-b border-white/10 pb-6 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.18em] text-white/35">
                Life dashboard
              </p>

              <h3 className="mt-2 text-xl font-medium tracking-tight text-white">
                Your 2026 so far
              </h3>
            </div>

            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-[#b8f36b]" />
              <span className="text-sm text-white/45">
                You&apos;re making it count
              </span>
            </div>
          </div>

          {/* Metrics */}
          <div className="grid gap-3 py-6 sm:grid-cols-2 lg:grid-cols-4">
            {metrics.map((metric, index) => (
              <div
                key={metric.label}
                className={`group relative min-h-[190px] overflow-hidden rounded-[24px] border border-white/10 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-white/20 ${
                  index === 0
                    ? "bg-[#b8f36b] text-[#171717]"
                    : "bg-white/[0.055] text-white"
                }`}
              >
                <div className="flex h-full flex-col justify-between">
                  <div className="flex items-start justify-between">
                    <span
                      className={`text-xs ${
                        index === 0 ? "text-black/45" : "text-white/35"
                      }`}
                    >
                      0{index + 1}
                    </span>

                    <span
                      className={`flex h-8 w-8 items-center justify-center rounded-full border text-xs ${
                        index === 0
                          ? "border-black/10 text-black/50"
                          : "border-white/10 text-white/40"
                      }`}
                    >
                      ↗
                    </span>
                  </div>

                  <div>
                    <div className="text-4xl font-medium tracking-[-0.05em] sm:text-5xl">
                      {metric.value}
                    </div>

                    <p
                      className={`mt-3 text-sm font-medium ${
                        index === 0 ? "text-black/75" : "text-white/80"
                      }`}
                    >
                      {metric.label}
                    </p>

                    <p
                      className={`mt-1 text-xs leading-5 ${
                        index === 0 ? "text-black/45" : "text-white/35"
                      }`}
                    >
                      {metric.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom dashboard */}
          <div className="grid gap-3 lg:grid-cols-[1.35fr_0.65fr]">
            {/* Activity chart */}
            <div className="rounded-[24px] border border-white/10 bg-white/[0.055] p-6 sm:p-7">
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-xs uppercase tracking-[0.15em] text-white/30">
                    Meaningful time
                  </p>

                  <p className="mt-2 text-2xl font-medium tracking-tight text-white">
                    1,480 min
                  </p>
                </div>

                <span className="rounded-full bg-white/10 px-3 py-1.5 text-xs text-white/45">
                  Last 6 months
                </span>
              </div>

              {/* Chart */}
              <div className="mt-8 flex h-36 items-end gap-2 sm:gap-3">
                {[42, 58, 46, 76, 63, 88, 71, 96, 82, 100, 91, 108].map(
                  (height, index) => (
                    <div
                      key={index}
                      className="group relative flex h-full flex-1 items-end"
                    >
                      <div
                        className="w-full rounded-t-lg bg-white/15 transition-all duration-500 group-hover:bg-[#b8f36b]"
                        style={{ height: `${height}%` }}
                      />
                    </div>
                  )
                )}
              </div>

              <div className="mt-4 flex justify-between text-[10px] uppercase tracking-wider text-white/20">
                <span>Jan</span>
                <span>Feb</span>
                <span>Mar</span>
                <span>Apr</span>
                <span>May</span>
                <span>Jun</span>
              </div>
            </div>

            {/* Memory card */}
            <div className="relative overflow-hidden rounded-[24px] bg-[#dce8d0] p-6 text-[#171717] sm:p-7">
              <div className="relative z-10 flex h-full flex-col justify-between">
                <div>
                  <p className="text-xs uppercase tracking-[0.15em] text-black/35">
                    Latest memory
                  </p>

                  <h4 className="mt-3 max-w-[220px] text-2xl font-medium leading-tight tracking-tight">
                    Sunset walk through a new part of town.
                  </h4>
                </div>

                <div className="mt-12">
                  <div className="flex items-center gap-3">
                    <div className="flex h-9 w-9 items-center justify-center rounded-full bg-black text-xs text-white">
                      19
                    </div>

                    <div>
                      <p className="text-xs font-medium">
                        Memories collected
                      </p>
                      <p className="text-[11px] text-black/40">
                        Keep going.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Decorative circles */}
              <div className="absolute -right-12 -top-12 h-40 w-40 rounded-full border border-black/10" />
              <div className="absolute -right-5 -top-5 h-24 w-24 rounded-full border border-black/10" />
            </div>
          </div>
        </div>

        {/* Bottom statement */}
        <div className="mt-12 flex flex-col gap-5 border-t border-black/10 pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="max-w-md text-sm leading-6 text-black/45">
            The goal isn&apos;t to track everything you do. It&apos;s to
            remember the things that actually mattered.
          </p>

          <div className="flex items-center gap-3 text-sm font-medium text-black/60">
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-black text-white">
              →
            </span>
            Build a life worth looking back on
          </div>
        </div>
      </div>
    </section>
  );
}