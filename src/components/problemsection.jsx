import { useEffect, useState } from "react";
import Offer from "../assets/offer.png";

export default function ProblemSection() {
  const [active, setActive] = useState(0);

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
      description: "You have 10–30 minutes free, but no meaningful plan.",
    },
    {
      number: "03",
      title: "Same old routine",
      description:
        "The same places and plans keep repeating every week.",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % problems.length);
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="overflow-hidden bg-[#f4f2ed] px-6 py-24 md:px-10 md:py-32 lg:px-16">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="grid gap-10 md:grid-cols-[1.3fr_0.7fr] md:items-end">
          <div>
            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-neutral-400" />
              <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-neutral-500">
                The Problem
              </p>
            </div>

            <h2 className="mt-7 max-w-5xl text-4xl font-medium leading-[0.95] tracking-[-0.05em] text-neutral-900 md:text-6xl lg:text-7xl">
              Your personal life is
              <br />
              <span className="text-neutral-400">running out of moments.</span>
            </h2>
          </div>

          <div className="max-w-sm md:ml-auto">
            <p className="text-sm leading-7 text-neutral-600">
              The real danger isn't having no time—it's losing the small moments
              that could become your favorite memories.
            </p>

            <div className="mt-5 border-l border-neutral-300 pl-4">
              <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-neutral-400">
                Our solution
              </p>
              <p className="mt-2 text-sm leading-6 text-neutral-500">
                Quest transforms every free 10–30 minutes into a spontaneous
                adventure, giving you meaningful experiences instead of another
                scroll.
              </p>
            </div>
          </div>
        </div>

        {/* Hero Image */}
        <div className="relative mt-20 overflow-hidden rounded-[2rem] md:mt-28 md:rounded-[2.5rem]">
          <div className="h-[430px] md:h-[600px]">
            <img
              src={Offer}
              alt="Friends exploring the city together"
              className="h-full w-full object-cover"
            />
          </div>

          <div className="absolute inset-0 bg-black/25" />

          <div className="absolute left-5 top-5 md:left-8 md:top-8">
            <div className="rounded-full border border-white/30 bg-black/10 px-4 py-2 backdrop-blur-md">
              <span className="text-[11px] font-medium uppercase tracking-[0.18em] text-white">
                The everyday loop
              </span>
            </div>
          </div>

          <div className="absolute inset-0 flex items-end justify-center px-6 pb-24 text-center">
            <div className="translate-y-12 md:translate-y-16">
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

          <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between md:bottom-8 md:left-8 md:right-8">
            <span className="text-xs text-white/60">01 — 03</span>

            <span className="flex h-10 w-10 items-center justify-center rounded-full border border-white/30 bg-white/10 text-white backdrop-blur-md">
              ↓
            </span>
          </div>
        </div>

        {/* Everyday Loop */}
        <div className="mt-20 md:mt-24">
          <div className="mb-6 flex items-center justify-between">
            <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-neutral-400">
              The everyday loop
            </p>

            <p className="text-[11px] text-neutral-400 md:hidden">
              {active + 1} / 3
            </p>

            <p className="hidden md:block text-[11px] text-neutral-400">
              3 common patterns
            </p>
          </div>

          {/* Mobile Auto Slider */}
          <div className="relative overflow-hidden md:hidden">
            <div
              className="flex transition-transform duration-700 ease-in-out"
              style={{ transform: `translateX(-${active * 100}%)` }}
            >
              {problems.map((problem) => (
                <div key={problem.number} className="w-full flex-shrink-0">
                  <div className="rounded-[28px] border border-neutral-300 bg-[#faf8f4] p-7">
                    <p className="text-xs font-medium text-neutral-400">
                      {problem.number}
                    </p>

                    <h3 className="mt-6 text-3xl font-medium leading-tight tracking-[-0.03em] text-neutral-900">
                      {problem.title}
                    </h3>

                    <p className="mt-4 text-sm leading-7 text-neutral-500">
                      {problem.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Indicators */}
            <div className="mt-5 flex justify-center gap-2">
              {problems.map((_, index) => (
                <div
                  key={index}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    active === index
                      ? "w-8 bg-neutral-900"
                      : "w-2 bg-neutral-300"
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Desktop Vertical List */}
          <div className="hidden border-t border-neutral-300 md:block">
            {problems.map((problem) => (
              <div
                key={problem.number}
                className="group grid gap-6 border-b border-neutral-300 py-12 md:grid-cols-[80px_1.2fr_1fr] md:items-center md:gap-10"
              >
                <span className="text-xs font-medium text-neutral-400">
                  {problem.number}
                </span>

                <h3 className="text-4xl font-medium tracking-[-0.03em] text-neutral-900 transition-transform duration-500 group-hover:translate-x-2 lg:text-5xl">
                  {problem.title}
                </h3>

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
            <div>
              <div className="flex items-center gap-3">
                <span className="h-px w-8 bg-neutral-400" />
                <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-neutral-500">
                  Po Get It
                </p>
              </div>

              <p className="mt-6 max-w-xs text-sm leading-6 text-neutral-400">
                A different way to spend the moments you usually overlook.
              </p>
            </div>

            <div>
              <h3 className="max-w-4xl text-3xl font-medium leading-[1.05] tracking-[-0.035em] text-neutral-900 md:text-5xl lg:text-6xl">
                What if those forgotten
                <span className="text-neutral-400"> 10–30 minutes</span> became
                the moments you actually remember?
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