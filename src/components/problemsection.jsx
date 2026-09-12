export default function ProblemSection() {
  const problems = [
    {
      number: "01",
      title: "Too much scrolling",
      description:
        "Endless feeds consume your free time without creating memories.",
    },
    {
      number: "02",
      title: "Nothing comes to mind",
      description:
        "You have 10–30 minutes free, but no meaningful plan.",
    },
    {
      number: "03",
      title: "Same old routine",
      description:
        "The same places and plans keep repeating every week.",
    },
  ];

  return (
    <section className="overflow-hidden bg-[#f4f2ed] px-6 py-24 md:px-10 md:py-32 lg:px-16">
      <div className="mx-auto max-w-7xl">

        {/* Header */}
        <div className="grid gap-10 md:grid-cols-[1.3fr_0.7fr] md:items-end">
          <div>
            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-neutral-400" />

              <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-neutral-500">
                The problem
              </p>
            </div>

            <h2 className="mt-7 max-w-4xl text-4xl font-medium leading-[0.98] tracking-[-0.04em] text-neutral-900 md:text-6xl lg:text-7xl">
              What happens when
              <br />
              you have{" "}
              <span className="text-neutral-400">nothing planned?</span>
            </h2>
          </div>

          <p className="max-w-sm text-sm leading-7 text-neutral-500 md:ml-auto">
            A spare moment should feel like an opportunity. Instead, it often
            disappears before we even notice.
          </p>
        </div>

        {/* Image */}
        <div className="relative mt-20 overflow-hidden rounded-[2rem] md:mt-28 md:rounded-[2.5rem]">
          <div className="h-[430px] md:h-[600px]">
            <img
              src="https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&w=1800&q=85"
              alt="Friends exploring the city together"
              className="h-full w-full object-cover"
            />
          </div>

          {/* Overlay */}
          <div className="absolute inset-0 bg-black/25" />

          {/* Top label */}
          <div className="absolute left-5 top-5 md:left-8 md:top-8">
            <div className="rounded-full border border-white/30 bg-black/10 px-4 py-2 backdrop-blur-md">
              <span className="text-[11px] font-medium uppercase tracking-[0.18em] text-white">
                The everyday loop
              </span>
            </div>
          </div>

          {/* Image text */}
          <div className="absolute inset-0 flex items-center justify-center px-6 text-center">
            <div>
              <p className="mb-5 text-[11px] uppercase tracking-[0.25em] text-white/60">
                It doesn't have to be this way
              </p>

              <h3 className="text-4xl font-medium leading-[0.95] tracking-[-0.04em] text-white md:text-6xl lg:text-7xl">
                Your city has
                <br />
                <span className="text-white/55">more to offer.</span>
              </h3>
            </div>
          </div>

          {/* Bottom corner */}
          <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between md:bottom-8 md:left-8 md:right-8">
            <span className="text-xs text-white/60">
              01 — 03
            </span>

            <span className="flex h-10 w-10 items-center justify-center rounded-full border border-white/30 bg-white/10 text-white backdrop-blur-md">
              ↓
            </span>
          </div>
        </div>

        {/* Problems */}
        <div className="mt-20 md:mt-24">
          <div className="mb-6 flex items-center justify-between">
            <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-neutral-400">
              The everyday loop
            </p>

            <p className="text-[11px] text-neutral-400">
              3 common patterns
            </p>
          </div>

          <div className="border-t border-neutral-300">
            {problems.map((problem) => (
              <div
                key={problem.number}
                className="group grid gap-6 border-b border-neutral-300 py-8 md:grid-cols-[80px_1.2fr_1fr] md:items-center md:gap-10 md:py-12"
              >
                {/* Number */}
                <span className="text-xs font-medium text-neutral-400">
                  {problem.number}
                </span>

                {/* Title */}
                <h3 className="text-3xl font-medium tracking-[-0.03em] text-neutral-900 transition-transform duration-500 group-hover:translate-x-2 md:text-4xl lg:text-5xl">
                  {problem.title}
                </h3>

                {/* Description */}
                <p className="max-w-sm text-sm leading-6 text-neutral-500 md:ml-auto">
                  {problem.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Transition */}
        <div className="mt-24 border-t border-neutral-300 pt-12 md:mt-32 md:pt-16">
          <div className="grid gap-10 md:grid-cols-[0.7fr_1.3fr] md:items-end">
            
            {/* Small label */}
            <div>
              <div className="flex items-center gap-3">
                <span className="h-px w-8 bg-neutral-400" />

                <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-neutral-500">
                  UrbanQuest
                </p>
              </div>

              <p className="mt-6 max-w-xs text-sm leading-6 text-neutral-400">
                A different way to spend the moments you usually overlook.
              </p>
            </div>

            {/* Main statement */}
            <div>
              <h3 className="max-w-4xl text-3xl font-medium leading-[1.05] tracking-[-0.035em] text-neutral-900 md:text-5xl lg:text-6xl">
                What if those forgotten
                <span className="text-neutral-400"> 10–30 minutes</span>{" "}
                became the moments you actually remember?
              </h3>

              <div className="mt-8 flex items-center gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-neutral-900 text-sm text-white transition-transform duration-300 hover:rotate-45">
                  ↗
                </div>

                <span className="text-sm text-neutral-500">
                  One small quest can change the moment.
                </span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}