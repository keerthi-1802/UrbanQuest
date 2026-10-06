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
    <section className="relative overflow-hidden bg-[#f6f6f2] px-4 py-10 sm:px-10 sm:py-18 lg:px-16 lg:py-32">
      <div className="mx-auto max-w-7xl">

        {/* Header */}
        <div className="grid gap-5 sm:gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div>
            <span className="mb-3 inline-flex rounded-full border border-black/10 bg-white px-3 py-1.5 text-[10px] font-medium tracking-wide text-black/60 sm:mb-5 sm:px-4 sm:py-2 sm:text-xs">
              YOUR LIFE DASHBOARD
            </span>

            <h2 className="max-w-xl text-3xl font-medium leading-[1.05] tracking-[-0.04em] text-[#171717] sm:text-5xl lg:text-6xl">
              Your life,
              <br />
              <span className="text-black/40">not your screen time.</span>
            </h2>
          </div>

          <p className="max-w-lg text-sm leading-6 text-black/55 sm:text-base sm:leading-7 lg:ml-auto lg:text-lg">
            Po Get It turns the little moments into something you can see.
            Over time, your dashboard becomes a record of the places you went,
            things you did, and memories you made.
          </p>
        </div>

        {/* Dashboard */}
        <div className="relative mt-8 overflow-hidden rounded-[24px] border border-black/10 bg-[#171717] p-3 shadow-[0_20px_60px_rgba(0,0,0,0.12)] sm:mt-16 sm:rounded-[32px] sm:p-6 lg:mt-20 lg:p-8">

          {/* Top bar */}
          <div className="flex flex-col gap-3 border-b border-white/10 pb-4 sm:gap-5 sm:pb-6 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-[10px] uppercase tracking-[0.18em] text-white/35 sm:text-xs">
                Life dashboard
              </p>

              <h3 className="mt-1.5 text-lg font-medium tracking-tight text-white sm:mt-2 sm:text-xl">
                Your 2026 so far
              </h3>
            </div>

            <div className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-[#b8f36b] sm:h-2 sm:w-2" />

              <span className="text-xs text-white/45 sm:text-sm">
                You&apos;re making it count
              </span>
            </div>
          </div>

          {/* Metrics */}
          <div className="grid grid-cols-2 gap-2.5 py-4 sm:gap-3 sm:py-6 lg:grid-cols-4">
            {metrics.map((metric, index) => (
              <div
                key={metric.label}
                className={`group relative min-h-[135px] overflow-hidden rounded-[18px] border border-white/10 p-4 transition-all duration-300 hover:-translate-y-1 hover:border-white/20 sm:min-h-[190px] sm:rounded-[24px] sm:p-6 ${
                  index === 0
                    ? "bg-[#b8f36b] text-[#171717]"
                    : "bg-white/[0.055] text-white"
                }`}
              >
                <div className="flex h-full flex-col justify-between">

                  <div className="flex items-start justify-between">
                    <span
                      className={`text-[10px] sm:text-xs ${
                        index === 0
                          ? "text-black/45"
                          : "text-white/35"
                      }`}
                    >
                      0{index + 1}
                    </span>

                    <span
                      className={`flex h-6 w-6 items-center justify-center rounded-full border text-[10px] sm:h-8 sm:w-8 sm:text-xs ${
                        index === 0
                          ? "border-black/10 text-black/50"
                          : "border-white/10 text-white/40"
                      }`}
                    >
                      ↗
                    </span>
                  </div>

                  <div>
                    <div className="text-3xl font-medium tracking-[-0.05em] sm:text-5xl">
                      {metric.value}
                    </div>

                    <p
                      className={`mt-1.5 text-xs font-medium sm:mt-3 sm:text-sm ${
                        index === 0
                          ? "text-black/75"
                          : "text-white/80"
                      }`}
                    >
                      {metric.label}
                    </p>

                    <p
                      className={`mt-0.5 text-[10px] leading-4 sm:mt-1 sm:text-xs sm:leading-5 ${
                        index === 0
                          ? "text-black/45"
                          : "text-white/35"
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
          <div className="grid gap-2.5 sm:gap-3 lg:grid-cols-[1.35fr_0.65fr]">

            {/* Activity chart */}
            <div className="rounded-[18px] border border-white/10 bg-white/[0.055] p-4 sm:rounded-[24px] sm:p-7">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <p className="text-[10px] uppercase tracking-[0.15em] text-white/30 sm:text-xs">
                    Meaningful time
                  </p>

                  <p className="mt-1 text-xl font-medium tracking-tight text-white sm:mt-2 sm:text-2xl">
                    1,480 min
                  </p>
                </div>

                <span className="rounded-full bg-white/10 px-2 py-1 text-[9px] text-white/45 sm:px-3 sm:py-1.5 sm:text-xs">
                  Last 6 months
                </span>
              </div>

              {/* Chart */}
              <div className="mt-5 flex h-24 items-end gap-1.5 sm:mt-8 sm:h-36 sm:gap-3">
                {[42, 58, 46, 76, 63, 88, 71, 96, 82, 100, 91, 108].map(
                  (height, index) => (
                    <div
                      key={index}
                      className="group relative flex h-full flex-1 items-end"
                    >
                      <div
                        className="w-full rounded-t-md bg-white/15 transition-all duration-500 group-hover:bg-[#b8f36b] sm:rounded-t-lg"
                        style={{ height: `${height}%` }}
                      />
                    </div>
                  )
                )}
              </div>

              <div className="mt-2.5 flex justify-between text-[8px] uppercase tracking-wider text-white/20 sm:mt-4 sm:text-[10px]">
                <span>Jan</span>
                <span>Feb</span>
                <span>Mar</span>
                <span>Apr</span>
                <span>May</span>
                <span>Jun</span>
              </div>
            </div>

            {/* Memory card */}
            <div className="relative min-h-[190px] overflow-hidden rounded-[18px] bg-[#dce8d0] p-4 text-[#171717] sm:min-h-[260px] sm:rounded-[24px] sm:p-7">
              <div className="relative z-10 flex h-full flex-col justify-between">

                <div>
                  <p className="text-[10px] uppercase tracking-[0.15em] text-black/35 sm:text-xs">
                    Latest memory
                  </p>

                  <h4 className="mt-2 max-w-[220px] text-xl font-medium leading-tight tracking-tight sm:mt-3 sm:text-2xl">
                    Sunset walk through a new part of town.
                  </h4>
                </div>

                <div className="mt-6 sm:mt-12">
                  <div className="flex items-center gap-2.5 sm:gap-3">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-black text-[10px] text-white sm:h-9 sm:w-9 sm:text-xs">
                      19
                    </div>

                    <div>
                      <p className="text-[10px] font-medium sm:text-xs">
                        Memories collected
                      </p>

                      <p className="text-[9px] text-black/40 sm:text-[11px]">
                        Keep going.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Decorative circles */}
              <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full border border-black/10 sm:-right-12 sm:-top-12 sm:h-40 sm:w-40" />

              <div className="absolute -right-5 -top-5 h-20 w-20 rounded-full border border-black/10 sm:h-24 sm:w-24" />
            </div>
          </div>
        </div>

        {/* Bottom statement */}
        <div className="mt-7 flex flex-col gap-4 border-t border-black/10 pt-5 sm:mt-12 sm:gap-5 sm:pt-8 lg:flex-row lg:items-center lg:justify-between">
          <p className="max-w-md text-xs leading-5 text-black/45 sm:text-sm sm:leading-6">
            The goal isn&apos;t to track everything you do. It&apos;s to
            remember the things that actually mattered.
          </p>

          <div className="flex items-center gap-2.5 text-xs font-medium text-black/60 sm:gap-3 sm:text-sm">
            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-black text-white sm:h-8 sm:w-8">
              →
            </span>

            Build a life worth looking back on
          </div>
        </div>

      </div>
    </section>
  );
}