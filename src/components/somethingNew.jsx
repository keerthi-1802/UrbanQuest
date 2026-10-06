"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

export default function DoSomethingNow() {
  const sectionRef = useRef(null);
  const contentRef = useRef(null);

  const [time, setTime] = useState("20 min");

  const questData = {
    "10 min": [
      {
        title: "Call someone\nyou miss.",
        description:
          "Skip the text. Call a friend or family member and have a genuine conversation.",
        meta: "10 min · Free · Social",
        tags: ["10 min", "Social", "Free"],
      },
      {
        title: "Watch the\nsunrise.",
        description: "Step outside and enjoy ten quiet minutes with the sky.",
        meta: "10 min · Free · Mindful",
      },
      {
        title: "Write three\nthings you're grateful for.",
        description: "A tiny habit that can reset your mood instantly.",
        meta: "10 min · Free · Journal",
      },
    ],

    "20 min": [
      {
        title: "Go somewhere\nwithout a plan.",
        description:
          "Pick a direction, leave your usual route and discover something unexpected.",
        meta: "20 min · Free · Solo",
        tags: ["20 min", "Solo", "Free"],
      },
      {
        title: "Photograph five\ninteresting doors.",
        description: "Turn your neighborhood into a creative photo challenge.",
        meta: "20 min · Free · Photography",
      },
      {
        title: "Read in a\npublic park.",
        description: "Bring a book and enjoy twenty peaceful minutes outdoors.",
        meta: "20 min · Free · Relax",
      },
    ],

    "30 min": [
      {
        title: "Find a new\ncoffee spot.",
        description:
          "Walk to a café you've never visited and make the next half hour yours.",
        meta: "30 min · ₹200 · Solo",
        tags: ["30 min", "Solo", "₹200"],
      },
      {
        title: "Sketch your\nfavorite street.",
        description: "Capture the feeling of your city with a quick drawing.",
        meta: "30 min · Free · Creative",
      },
      {
        title: "Visit a local\nbookstore.",
        description: "Browse without buying anything—just explore new ideas.",
        meta: "30 min · Free · Explore",
      },
    ],

    "1 hour": [
      {
        title: "Take a golden\nhour photo walk.",
        description:
          "Leave your destination behind and capture the city as the light changes.",
        meta: "1 hour · Free · Photography",
        tags: ["1 hour", "Creative", "Free"],
      },
      {
        title: "Explore a\nmuseum corner.",
        description:
          "Spend an hour discovering one exhibition you've never noticed.",
        meta: "1 hour · ₹100 · Culture",
      },
      {
        title: "Cycle to a\nhidden viewpoint.",
        description:
          "Find a place you've never watched the city from before.",
        meta: "1 hour · Free · Adventure",
      },
    ],
  };

  const currentQuests = questData[time];

  // Initial animation
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

  // Animate content when time changes
  useEffect(() => {
    if (!contentRef.current) return;

    gsap.fromTo(
      contentRef.current,
      { opacity: 0, y: 24 },
      {
        opacity: 1,
        y: 0,
        duration: 0.55,
        ease: "power3.out",
      }
    );
  }, [time]);

  return (
    <section
      ref={sectionRef}
      className="bg-[#f3f1eb] px-5 py-8 md:px-8 md:py-12 lg:px-12 lg:py-16"
    >
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="board-item flex flex-col justify-between gap-5 md:flex-row md:items-end md:gap-8">
          <div>
            <p className="mb-4 text-xs font-medium uppercase tracking-[0.2em] text-black/35 md:mb-5">
              — Do Something Now
            </p>

            <h2 className="max-w-4xl text-4xl font-medium leading-[0.9] tracking-[-0.055em] text-[#151515] md:text-7xl lg:text-[88px]">
              Make your free time
              <br />
              <span className="text-black/25">
                count for something.
              </span>
            </h2>
          </div>

          <p className="max-w-xs text-sm leading-5 text-black/45 md:leading-6">
            One small gap in your day can become a memory.
          </p>
        </div>

        {/* Quest Board */}
        <div className="relative mt-10 overflow-hidden rounded-[24px] bg-[#e4dfd4] p-4 md:mt-16 md:rounded-[36px] md:p-8 lg:p-10">
          {/* Background word */}
          <div className="pointer-events-none absolute right-8 top-6 hidden select-none text-[100px] font-medium tracking-[-0.08em] text-black/[0.035] lg:block">
            QUEST
          </div>

          {/* Time Selector */}
          <div className="board-item relative z-10 flex flex-wrap items-center gap-2">
            <span className="mr-1 text-xs uppercase tracking-[0.15em] text-black/35 md:mr-2">
              I've got
            </span>

            {Object.keys(questData).map((item) => (
              <button
                key={item}
                onClick={() => setTime(item)}
                className={`rounded-full px-3.5 py-2 text-[11px] transition-all duration-300 md:px-4 md:text-xs ${
                  time === item
                    ? "bg-[#151515] text-white"
                    : "bg-white/50 text-black/45 hover:bg-white"
                }`}
              >
                {item}
              </button>
            ))}
          </div>

          {/* Dynamic Content */}
          <div
            ref={contentRef}
            key={time}
            className="board-item relative mt-4 grid min-h-[390px] gap-3 md:mt-6 md:min-h-[540px] md:gap-5 lg:grid-cols-[1.5fr_0.5fr]"
          >
            {/* Main Quest */}
            <div className="flex flex-col justify-between rounded-[24px] bg-[#171717] p-5 text-white md:rounded-[30px] md:p-10">
              {/* Top */}
              <div className="flex justify-between">
                <span className="text-[10px] text-white/30 md:text-xs">
                  YOUR NEXT QUEST
                </span>

                <span className="text-[10px] text-white/30 md:text-xs">
                  01
                </span>
              </div>

              {/* Main Content */}
              <div>
                {/* Tags */}
                <div className="mb-4 flex flex-wrap gap-1.5 md:mb-6 md:gap-2">
                  {currentQuests[0].tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-white/10 px-2.5 py-1 text-[10px] md:px-3 md:py-1.5 md:text-[11px]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Title */}
                <h3 className="max-w-3xl whitespace-pre-line text-4xl font-medium leading-[0.88] tracking-[-0.055em] md:text-7xl lg:text-[80px]">
                  {currentQuests[0].title}
                </h3>

                {/* Description */}
                <p className="mt-4 max-w-md text-xs leading-5 text-white/40 md:mt-7 md:text-sm md:leading-6">
                  {currentQuests[0].description}
                </p>
              </div>

              {/* Bottom */}
              <div className="mt-6 flex items-center justify-between md:mt-10">
                <button className="group flex items-center gap-2.5 rounded-full bg-white px-5 py-3 text-xs font-medium text-black md:gap-3 md:px-6 md:py-3.5 md:text-sm">
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

            {/* Alternative Quests */}
            <div className="flex flex-col gap-3 md:gap-5">
              {currentQuests.slice(1).map((quest, index) => (
                <div
                  key={quest.title}
                  className="group flex flex-1 flex-col justify-between rounded-[24px] bg-[#f7f5ef] p-5 transition-all duration-300 hover:-translate-y-1 md:rounded-[30px] md:p-6"
                >
                  {/* Top */}
                  <div className="flex justify-between">
                    <span className="text-[10px] text-black/25 md:text-xs">
                      0{index + 2}
                    </span>

                    <span className="text-[10px] text-black/25 md:text-xs">
                      alternative
                    </span>
                  </div>

                  {/* Content */}
                  <div>
                    <h4 className="whitespace-pre-line text-2xl font-medium leading-[0.95] tracking-[-0.04em] md:text-3xl">
                      {quest.title}
                    </h4>

                    <p className="mt-3 text-[11px] leading-5 text-black/40 md:mt-4 md:text-xs">
                      {quest.description}
                    </p>
                  </div>

                  {/* Bottom */}
                  <div className="mt-4 flex items-center justify-between md:mt-6">
                    <span className="text-[9px] uppercase tracking-[0.12em] text-black/30 md:text-[10px]">
                      {quest.meta}
                    </span>

                    <span className="flex h-8 w-8 items-center justify-center rounded-full border border-black/10 text-sm transition-all duration-300 group-hover:bg-black group-hover:text-white md:h-9 md:w-9">
                      ↗
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Footer */}
          <div className="board-item mt-4 flex flex-col justify-between gap-3 border-t border-black/10 pt-4 sm:flex-row sm:items-center md:mt-5 md:gap-4 md:pt-5">
            <span className="text-xs text-black/30">
              Not feeling it?
            </span>

            <button className="group flex items-center gap-2 text-xs font-medium md:text-sm">
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

