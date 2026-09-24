import { useLayoutEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import step1 from "../assets/step1.jpeg";
import step2 from "../assets/step2.jpeg";
import quest from "../assets/Quest.jpeg";
import Explore from "../assets/explore.jpeg";
import Journey from "../assets/Journey.jpeg";

gsap.registerPlugin(ScrollTrigger);

const features = [
  {
    number: "01",
    eyebrow: "Onboarding",
    title: "Choose what you love exploring.",
    description:
      "Personalize Quest by selecting activities like Walking, Photography, Café Exploration, or Mindfulness. Every recommendation starts with your interests.",
    image: step1,
  },
  {
    number: "02",
    eyebrow: "Daily Schedule",
    title: "Pick the time you actually have.",
    description:
      "Whether it's 15, 30, or 60 minutes, Quest adapts the distance, checkpoints, and experience to fit your everyday routine.",
    image: step2,
  },
  {
    number: "03",
    eyebrow: "Today's Quest",
    title: "Receive one meaningful adventure.",
    description:
      "Get a curated quest with walking distance, estimated time, XP rewards, and a clear destination—ready whenever you are.",
    image: quest,
  },
  {
    number: "04",
    eyebrow: "Explore",
    title: "Discover cafés, heritage & hidden places.",
    description:
      "Browse nearby experiences with curated local spots, directions, and instant quests designed around your city.",
    image: Explore,
  },
  {
    number: "05",
    eyebrow: "Journey",
    title: "Turn every walk into lasting memories.",
    description:
      "Track completed quests, build streaks, earn achievements, and watch your personal exploration journey grow over time.",
    image: Journey,
  },
];

export default function AboutSection() {
  const sectionRef = useRef(null);
  const stageRef = useRef(null);

  const imageRefs = useRef([]);
  const contentRefs = useRef([]);

  const activeRef = useRef(0);
  const [activeIndex, setActiveIndex] = useState(0);
  const [mobileIndex, setMobileIndex] = useState(0);

  const nextSlide = () => {
    setMobileIndex((prev) => Math.min(prev + 1, features.length - 1));
  };

  const prevSlide = () => {
    setMobileIndex((prev) => Math.max(prev - 1, 0));
  };

  useLayoutEffect(() => {
    const section = sectionRef.current;
    const stage = stageRef.current;

    if (!section || !stage) return;

    const ctx = gsap.context(() => {
      const images = imageRefs.current.filter(Boolean);
      const contents = contentRefs.current.filter(Boolean);

      if (!images.length || !contents.length) return;


      // Initial state
      gsap.set(images, {
        autoAlpha: 0,
        scale: 1.03,
        y: 20,
        force3D: true,
      });

      gsap.set(contents, {
        autoAlpha: 0,
        y: 30,
        force3D: true,
      });

      gsap.set(images[0], {
        autoAlpha: 1,
        scale: 1,
        y: 0,
      });

      gsap.set(contents[0], {
        autoAlpha: 1,
        y: 0,
      });

      const timeline = gsap.timeline({
        defaults: { ease: "power3.inOut" },
      });

      const transitionDuration = 0.28;
      const STEP = 1.25; // more sensitive: 1 swipe ≈ 1 screen

      for (let index = 1; index < features.length; index++) {
        const previous = index - 1;
        const current = index;
        const pos = previous * STEP;

        timeline
          .to(images[previous], {
            autoAlpha: 0,
            scale: 0.96,
            y: -18,
            duration: transitionDuration,
          }, pos)
          .fromTo(images[current], {
            autoAlpha: 0,
            scale: 1.03,
            y: 18,
          }, {
            autoAlpha: 1,
            scale: 1,
            y: 0,
            duration: transitionDuration,
          }, pos)
          .to(contents[previous], {
            autoAlpha: 0,
            y: -24,
            duration: 0.22,
          }, pos)
          .fromTo(contents[current], {
            autoAlpha: 0,
            y: 24,
          }, {
            autoAlpha: 1,
            y: 0,
            duration: 0.22,
          }, pos + 0.04);
      }

      // ScrollTrigger
      ScrollTrigger.create({
        trigger: stage,
        start: "top top",
        end: `+=${features.length * 100}%`, // 500%
        pin: true,
        pinSpacing: true,
        scrub: 0.15,
        anticipatePin: 1,
        invalidateOnRefresh: true,
        animation: timeline,

        onUpdate: (self) => {
          const index = Math.round(
            self.progress * (features.length - 1)
          );

          if (index !== activeRef.current) {
            activeRef.current = index;
            setActiveIndex(index);
          }
        },
      });

      requestAnimationFrame(() => ScrollTrigger.refresh());
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative bg-[#06080C] text-white"
    >
      {/* ======================================================
          BACKGROUND
      ======================================================= */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div
          className="
            absolute
            left-[5%]
            top-[10%]
            h-[500px]
            w-[500px]
            rounded-full
            bg-blue-500/[0.055]
            blur-[150px]
          "
        />

        <div
          className="
            absolute
            right-[0%]
            top-[45%]
            h-[650px]
            w-[650px]
            rounded-full
            bg-cyan-400/[0.035]
            blur-[170px]
          "
        />

        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage: `
              linear-gradient(
                rgba(255,255,255,0.5) 1px,
                transparent 1px
              ),
              linear-gradient(
                90deg,
                rgba(255,255,255,0.5) 1px,
                transparent 1px
              )
            `,
            backgroundSize: "80px 80px",
          }}
        />
      </div>

      {/* ======================================================
          INTRO
      ======================================================= */}

      <div className="relative mx-auto flex min-h-[70vh] max-w-7xl items-center px-6 py-20 lg:px-12">
        <div className="max-w-4xl">
          <div className="mb-6 flex items-center gap-3">
            <span className="h-px w-10 bg-cyan-400" />
            <span className="text-xs font-medium uppercase tracking-[0.28em] text-cyan-300">
              The Quest Experience
            </span>
          </div>

          <h2 className="text-5xl font-medium leading-[0.95] tracking-[-0.05em] sm:text-6xl lg:text-8xl">
            From choosing
            <br />
            your interests
            <br />
            <span className="text-white/30">to real-world quests.</span>
          </h2>

          <p className="mt-8 max-w-xl text-base leading-7 text-white/55 sm:text-lg">
            Quest transforms everyday free time into meaningful adventures. Personalize
            your interests, choose your available time, discover curated places and
            build memories worth keeping.
          </p>
        </div>
      </div>

      {/* ======================================================
          DESKTOP EXPERIENCE
          
          IMPORTANT:
          This is 500vh.
          One viewport = one feature.
      ======================================================= */}

      <div className="relative hidden lg:block">
        <div
          ref={stageRef}
          className="relative flex h-screen items-center justify-center overflow-hidden"
        >
          <div className="mx-auto grid w-full max-w-7xl items-center gap-10 px-6 lg:grid-cols-[1fr_380px] lg:gap-24 lg:px-12 xl:grid-cols-[1fr_420px]">
            {/* LEFT CONTENT */}
            <div className="relative order-2 h-[230px] sm:h-[260px] lg:order-1 lg:h-[420px]">
              {features.map((feature, index) => (
                <div
                  key={feature.number}
                  ref={(el) => (contentRefs.current[index] = el)}
                  className="absolute inset-0 flex flex-col justify-center"
                >
                  <div className="mb-5 flex items-center gap-3">
                    <span className="font-mono text-xs tracking-[0.2em] text-cyan-300">
                      {feature.number}
                    </span>

                    <span className="h-px w-8 bg-white/20" />

                    <span className="text-[11px] font-medium uppercase tracking-[0.25em] text-white/45">
                      {feature.eyebrow}
                    </span>
                  </div>

                  <h3 className="max-w-xl text-3xl font-medium leading-tight tracking-[-0.04em] sm:text-4xl lg:text-5xl">
                    {feature.title}
                  </h3>

                  <p className="mt-5 max-w-lg text-sm leading-6 text-white/55 sm:text-base sm:leading-7">
                    {feature.description}
                  </p>

                  <div className="mt-7 flex gap-2">
                    {features.map((_, i) => (
                      <span
                        key={i}
                        className={`h-1 rounded-full transition-all duration-500 ${i === index ? "w-10 bg-cyan-400" : "w-2 bg-white/20"
                          }`}
                      />
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* PHONE */}
            <div className="order-1 flex justify-center lg:order-2">
              <div className="relative h-[58vh] w-[290px] sm:h-[64vh] sm:w-[320px] lg:h-[680px] lg:w-[340px] xl:h-[700px] xl:w-[350px]">
                <div className="absolute left-1/2 top-1/2 h-[360px] w-[360px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/10 blur-[90px] lg:h-[520px] lg:w-[520px]" />

                <div className="absolute inset-0 rounded-[46px] border border-white/10 bg-[#111827] p-[7px] shadow-[0_35px_90px_rgba(0,0,0,.55)]">
                  <div className="relative h-full overflow-hidden rounded-[38px] bg-black">
                    {features.map((feature, index) => (
                      <div
                        key={feature.number}
                        ref={(el) => (imageRefs.current[index] = el)}
                        className="absolute inset-0"
                      >
                        <img
                          src={feature.image}
                          alt={feature.title}
                          className="h-full w-full object-cover"
                          draggable={false}
                        />

                        <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/15" />
                      </div>
                    ))}
                  </div>

                  <div className="absolute left-1/2 top-2 h-5 w-24 -translate-x-1/2 rounded-full bg-black" />
                </div>

                <div className="pointer-events-none absolute inset-0 rounded-[46px] bg-gradient-to-br from-white/10 via-transparent to-transparent" />
              </div>
            </div>
          </div>

          {/* STEP COUNTER */}
          <div className="absolute bottom-8 right-6 lg:right-12">
            <span className="font-mono text-xs tracking-[0.2em] text-white/35">
              {String(activeIndex + 1).padStart(2, "0")} / 05
            </span>
          </div>

          {/* SCROLL TEXT */}
          <div className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 lg:flex">
            <span className="text-[10px] uppercase tracking-[0.28em] text-white/30">
              Scroll
            </span>
            <div className="h-10 w-px bg-white/10">
              <div className="h-1/2 w-full animate-pulse bg-cyan-300" />
            </div>
          </div>
        </div>
      </div>
      {/* ================= MOBILE SLIDER ================= */}
      <div className="block lg:hidden px-6 pb-16">
        <div className="mx-auto max-w-sm">

          {/* Phone */}
          <div className="relative">
            <div className="rounded-[34px] border border-white/10 bg-[#111827] p-[6px] shadow-2xl">
              <div className="relative overflow-hidden rounded-[28px]">

                <img
                  src={features[mobileIndex].image}
                  alt={features[mobileIndex].title}
                  className="h-[500px] w-full object-cover transition-all duration-500"
                />

                <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/20" />
              </div>
            </div>

            {/* Notch */}
            <div className="absolute left-1/2 top-2 h-5 w-24 -translate-x-1/2 rounded-full bg-black" />
          </div>

          {/* Content */}
          <div className="mt-8 text-center">
            <div className="mb-3 flex items-center justify-center gap-2">
              <span className="font-mono text-xs tracking-[0.2em] text-cyan-300">
                {features[mobileIndex].number}
              </span>
              <span className="h-px w-6 bg-white/20" />
              <span className="text-[11px] uppercase tracking-[0.25em] text-white/50">
                {features[mobileIndex].eyebrow}
              </span>
            </div>

            <h3 className="text-3xl font-medium leading-tight tracking-[-0.04em]">
              {features[mobileIndex].title}
            </h3>

            <p className="mt-4 text-sm leading-7 text-white/60">
              {features[mobileIndex].description}
            </p>
          </div>

          {/* Arrows + Counter */}
          <div className="mt-8 flex items-center justify-between">

            <button
              onClick={prevSlide}
              disabled={mobileIndex === 0}
              className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/5 disabled:opacity-30"
            >
              ←
            </button>

            <div className="flex gap-2">
              {features.map((_, i) => (
                <span
                  key={i}
                  className={`h-1 rounded-full transition-all ${i === mobileIndex
                    ? "w-8 bg-cyan-400"
                    : "w-2 bg-white/20"
                    }`}
                />
              ))}
            </div>

            <button
              onClick={nextSlide}
              disabled={mobileIndex === features.length - 1}
              className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/5 disabled:opacity-30"
            >
              →
            </button>
          </div>

          <p className="mt-4 text-center font-mono text-xs tracking-[0.2em] text-white/35">
            {String(mobileIndex + 1).padStart(2, "0")} / 05
          </p>
        </div>
      </div>

    </section>
  );
}