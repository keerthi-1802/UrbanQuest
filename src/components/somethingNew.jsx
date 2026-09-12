"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

export default function DoSomethingNow() {
  const sectionRef = useRef(null);
  const [time, setTime] = useState("20 min");

  const quests = [
    {
      title: "Go somewhere\nwithout a plan.",
      description:
        "Pick a direction, leave your usual route and see where you end up.",
      meta: "25 min · Free · Solo",
    },
    {
      title: "Find a new\ncoffee spot.",
      description:
        "Walk to a café you've never visited and make the next half hour yours.",
      meta: "30 min · ₹200 · Solo",
    },
    {
      title: "Call someone\nyou miss.",
      description:
        "Forget the text. Give someone a call and have a real conversation.",
      meta: "15 min · Free · Social",
    },
  ];

  const times = ["10 min", "20 min", "30 min", "1 hour"];

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".board-item", {
        y: 35,
        opacity: 0,
        duration: 0.8,
        stagger: 0.12,
        ease: "power3.out",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="bg-[#f3f1eb] px-5 py-24 md:px-8 lg:px-12"
    >
      <div className="mx-auto max-w-7xl">

        {/* Header */}
        <div className="board-item flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <div>
            <p className="mb-5 text-xs font-medium uppercase tracking-[0.2em] text-black/35">
               — Do Something Now
            </p>

            <h2 className="max-w-4xl text-5xl font-medium leading-[0.9] tracking-[-0.055em] text-[#151515] md:text-7xl lg:text-[88px]">
              Make your free time
              <br />
              <span className="text-black/25">count for something.</span>
            </h2>
          </div>

          <p className="max-w-xs text-sm leading-6 text-black/45">
            One small gap in your day can become a memory.
          </p>
        </div>

        {/* Quest board */}
        <div className="relative mt-16 overflow-hidden rounded-[36px] bg-[#e4dfd4] p-5 md:p-8 lg:p-10">

          {/* Decorative text */}
          <div className="pointer-events-none absolute right-8 top-6 hidden select-none text-[100px] font-medium leading-none tracking-[-0.08em] text-black/[0.035] lg:block">
            QUEST
          </div>

          {/* Controls */}
          <div className="board-item relative z-10 flex flex-wrap items-center gap-2">
            <span className="mr-2 text-xs uppercase tracking-[0.15em] text-black/35">
              I've got
            </span>

            {times.map((item) => (
              <button
                key={item}
                onClick={() => setTime(item)}
                className={`rounded-full px-4 py-2 text-xs transition-all duration-300 ${
                  time === item
                    ? "bg-[#151515] text-white"
                    : "bg-white/50 text-black/45 hover:bg-white"
                }`}
              >
                {item}
              </button>
            ))}
          </div>

          {/* Main recommendation */}
          <div className="board-item relative mt-6 grid min-h-[540px] gap-5 lg:grid-cols-[1.5fr_0.5fr]">

            {/* Main quest */}
            <div className="relative flex flex-col justify-between overflow-hidden rounded-[30px] bg-[#171717] p-7 text-white md:p-10">

              {/* Number */}
              <div className="flex items-start justify-between">
                <span className="text-xs text-white/30">
                  YOUR NEXT QUEST
                </span>

                <span className="text-xs text-white/30">
                  01
                </span>
              </div>

              {/* Giant title */}
              <div>
                <div className="mb-6 flex gap-2">
                  <span className="rounded-full bg-white/10 px-3 py-1.5 text-[11px]">
                    {time}
                  </span>

                  <span className="rounded-full bg-white/10 px-3 py-1.5 text-[11px]">
                    Solo
                  </span>

                  <span className="rounded-full bg-white/10 px-3 py-1.5 text-[11px]">
                    Free
                  </span>
                </div>

                <h3 className="whitespace-pre-line max-w-3xl text-5xl font-medium leading-[0.88] tracking-[-0.055em] md:text-7xl lg:text-[80px]">
                  {quests[0].title}
                </h3>

                <p className="mt-7 max-w-md text-sm leading-6 text-white/40">
                  {quests[0].description}
                </p>
              </div>

              {/* CTA */}
              <div className="mt-10 flex items-center justify-between">
                <button className="group flex items-center gap-3 rounded-full bg-white px-6 py-3.5 text-sm font-medium text-black">
                  Start quest

                  <span className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
                    ↗
                  </span>
                </button>

                <span className="hidden text-xs text-white/25 sm:block">
                  No planning required
                </span>
              </div>
            </div>

            {/* Alternatives */}
            <div className="flex flex-col gap-5">

              {quests.slice(1).map((quest, index) => (
                <div
                  key={quest.title}
                  className="group flex flex-1 flex-col justify-between rounded-[30px] bg-[#f7f5ef] p-6 transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="flex justify-between">
                    <span className="text-xs text-black/25">
                      0{index + 2}
                    </span>

                    <span className="text-xs text-black/25">
                      alternative
                    </span>
                  </div>

                  <div>
                    <h4 className="whitespace-pre-line text-3xl font-medium leading-[0.95] tracking-[-0.04em]">
                      {quest.title}
                    </h4>

                    <p className="mt-4 text-xs leading-5 text-black/40">
                      {quest.description}
                    </p>
                  </div>

                  <div className="mt-6 flex items-center justify-between">
                    <span className="text-[10px] uppercase tracking-[0.12em] text-black/30">
                      {quest.meta}
                    </span>

                    <span className="flex h-9 w-9 items-center justify-center rounded-full border border-black/10 transition-all duration-300 group-hover:bg-black group-hover:text-white">
                      ↗
                    </span>
                  </div>
                </div>
              ))}

            </div>
          </div>

          {/* Bottom */}
          <div className="board-item mt-5 flex flex-col justify-between gap-4 border-t border-black/10 pt-5 sm:flex-row sm:items-center">
            <span className="text-xs text-black/30">
              Not feeling it?
            </span>

            <button className="group flex items-center gap-2 text-sm font-medium">
              Give me something unexpected

              <span className="transition-transform duration-300 group-hover:rotate-45">
                ↗
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}