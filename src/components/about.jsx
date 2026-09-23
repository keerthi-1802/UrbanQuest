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
    eyebrow: "Discover",
    title: "Start with what is around you.",
    description:
      "Your surroundings become part of the experience. Discover something interesting without having to plan your next move.",
    image: step1,
  },
  {
    number: "02",
    eyebrow: "Explore",
    title: "Turn curiosity into a simple action.",
    description:
      "Get a clear prompt that gives you a reason to step outside, look closer and explore what is already around you.",
    image: step2,
  },
  {
    number: "03",
    eyebrow: "Quest",
    title: "Follow the quest. Forget the planning.",
    description:
      "No complicated itineraries or endless scrolling. Just one simple quest designed to get you moving.",
    image: quest,
  },
  {
    number: "04",
    eyebrow: "Experience",
    title: "Make ordinary moments count.",
    description:
      "A short walk, a new place or a small discovery can become something worth remembering.",
    image: Explore,
  },
  {
    number: "05",
    eyebrow: "Journey",
    title: "Build your story, one quest at a time.",
    description:
      "Small experiences gradually become your journey — a collection of places, moments and memories.",
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

  useLayoutEffect(() => {
    const section = sectionRef.current;
    const stage = stageRef.current;

    if (!section || !stage) return;

    const ctx = gsap.context(() => {
      const images = imageRefs.current.filter(Boolean);
      const contents = contentRefs.current.filter(Boolean);

      if (!images.length || !contents.length) return;

      /*
       * ---------------------------------------------------------
       * INITIAL STATE
       * ---------------------------------------------------------
       */

      gsap.set(images, {
        autoAlpha: 0,
        scale: 1.035,
        y: 20,
        force3D: true,
      });

      gsap.set(contents, {
        autoAlpha: 0,
        y: 35,
        force3D: true,
      });

      // First screen visible immediately
      gsap.set(images[0], {
        autoAlpha: 1,
        scale: 1,
        y: 0,
      });

      gsap.set(contents[0], {
        autoAlpha: 1,
        y: 0,
      });

      /*
       * ---------------------------------------------------------
       * MASTER TIMELINE
       *
       * 0 = Step 1
       * 1 = Step 2
       * 2 = Step 3
       * 3 = Step 4
       * 4 = Step 5
       * ---------------------------------------------------------
       */

      const timeline = gsap.timeline({
        defaults: {
          ease: "power3.inOut",
        },
      });

      const transitionDuration = 0.32;

      for (let index = 1; index < features.length; index++) {
        const previous = index - 1;
        const current = index;

        timeline
          // Previous image leaves
          .to(
            images[previous],
            {
              autoAlpha: 0,
              scale: 0.965,
              y: -18,
              duration: transitionDuration,
            },
            index
          )

          // Current image enters
          .fromTo(
            images[current],
            {
              autoAlpha: 0,
              scale: 1.035,
              y: 22,
            },
            {
              autoAlpha: 1,
              scale: 1,
              y: 0,
              duration: transitionDuration,
            },
            index
          )

          // Previous content leaves
          .to(
            contents[previous],
            {
              autoAlpha: 0,
              y: -28,
              duration: transitionDuration,
            },
            index
          )

          // Current content enters
          .fromTo(
            contents[current],
            {
              autoAlpha: 0,
              y: 30,
            },
            {
              autoAlpha: 1,
              y: 0,
              duration: transitionDuration,
            },
            index + 0.04
          );
      }
      ScrollTrigger.create({
        trigger: stage,
        start: "top top",
        end: "+=200%",

        pin: true,
        pinSpacing: true,
        scrub: 0.8,
        anticipatePin: 1,
        invalidateOnRefresh: true,

        animation: timeline,

        // ❌ Remove snap
        onUpdate: (self) => {
          const index = Math.round(self.progress * (features.length - 1));

          if (index !== activeRef.current) {
            activeRef.current = index;
            setActiveIndex(index);
          }
        },
      });
      /*
       * Refresh after all images/components have been rendered.
       */
      requestAnimationFrame(() => {
        ScrollTrigger.refresh();
      });
    }, sectionRef);

    return () => {
      ctx.revert();
    };
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

      <div className="relative mx-auto flex min-h-[75vh] max-w-7xl items-center px-6 py-24 lg:px-12">
        <div className="max-w-4xl">
          <div className="mb-7 flex items-center gap-3">
            <span className="h-px w-10 bg-white/40" />

            <span className="text-xs font-medium uppercase tracking-[0.28em] text-white/45">
              Why Po Get It
            </span>
          </div>

          <h2
            className="
              text-balance
              text-5xl
              font-medium
              leading-[0.98]
              tracking-[-0.05em]
              sm:text-6xl
              lg:text-8xl
            "
          >
            Your next experience
            <br />
            is closer than
            <br />
            <span className="text-white/30">
              you think.
            </span>
          </h2>

          <p
            className="
              mt-8
              max-w-xl
              text-base
              leading-7
              text-white/50
              sm:text-lg
            "
          >
            Po Get It turns ordinary surroundings into opportunities
            for exploration. Open the app, get a simple quest, and
            turn a few minutes into something worth remembering.
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
          className="
            relative
            flex
            h-screen
            w-full
            items-center
            overflow-hidden
          "
        >
          {/* Main container */}
          <div
            className="
              mx-auto
              grid
              w-full
              max-w-7xl
              grid-cols-[1fr_420px]
              items-center
              gap-24
              px-12
              xl:grid-cols-[1fr_460px]
              xl:gap-32
            "
          >
            {/* ==================================================
                LEFT CONTENT
            =================================================== */}

            <div className="relative h-[400px]">
              {features.map((feature, index) => (
                <div
                  key={feature.number}
                  ref={(element) => {
                    contentRefs.current[index] = element;
                  }}
                  className="
                    pointer-events-none
                    absolute
                    inset-0
                    flex
                    max-w-xl
                    flex-col
                    justify-center
                  "
                >
                  {/* Number + Category */}
                  <div className="mb-7 flex items-center gap-4">
                    <span
                      className="
                        font-mono
                        text-sm
                        tracking-[0.18em]
                        text-white/30
                      "
                    >
                      {feature.number}
                    </span>

                    <span className="h-px w-12 bg-white/15" />

                    <span
                      className="
                        text-xs
                        font-medium
                        uppercase
                        tracking-[0.25em]
                        text-white/40
                      "
                    >
                      {feature.eyebrow}
                    </span>
                  </div>

                  {/* Heading */}
                  <h3
                    className="
                      max-w-xl
                      text-5xl
                      font-medium
                      leading-[1.02]
                      tracking-[-0.045em]
                      xl:text-6xl
                    "
                  >
                    {feature.title}
                  </h3>

                  {/* Description */}
                  <p
                    className="
                      mt-7
                      max-w-lg
                      text-base
                      leading-7
                      text-white/45
                      xl:text-lg
                    "
                  >
                    {feature.description}
                  </p>

                  {/* Progress indicators */}
                  <div className="mt-10 flex items-center gap-2">
                    {features.map((_, dotIndex) => (
                      <span
                        key={dotIndex}
                        className={`
                          h-1
                          rounded-full
                          transition-all
                          duration-500
                          ${dotIndex === index
                            ? "w-10 bg-white"
                            : "w-2 bg-white/20"
                          }
                        `}
                      />
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* ==================================================
                PHONE
            =================================================== */}

            <div className="flex items-center justify-center">
              <div
                className="
                  relative
                  h-[680px]
                  w-[340px]
                  xl:h-[700px]
                  xl:w-[350px]
                "
              >
                {/* Phone glow */}
                <div
                  className="
                    absolute
                    left-1/2
                    top-1/2
                    h-[520px]
                    w-[520px]
                    -translate-x-1/2
                    -translate-y-1/2
                    rounded-full
                    bg-blue-500/[0.07]
                    blur-[110px]
                  "
                />

                {/* Phone body */}
                <div
                  className="
                    absolute
                    inset-0
                    rounded-[48px]
                    border
                    border-white/[0.14]
                    bg-[#111419]
                    p-[7px]
                    shadow-[0_35px_100px_rgba(0,0,0,0.6)]
                  "
                >
                  {/* Screen */}
                  <div
                    className="
                      relative
                      h-full
                      w-full
                      overflow-hidden
                      rounded-[41px]
                      bg-black
                    "
                  >
                    {features.map((feature, index) => (
                      <div
                        key={feature.number}
                        ref={(element) => {
                          imageRefs.current[index] = element;
                        }}
                        className="
                          absolute
                          inset-0
                          h-full
                          w-full
                          overflow-hidden
                        "
                      >
                        <img
                          src={feature.image}
                          alt={feature.title}
                          draggable="false"
                          className="
                            h-full
                            w-full
                            select-none
                            object-cover
                          "
                        />

                        {/* Subtle screen overlay */}
                        <div
                          className="
                            pointer-events-none
                            absolute
                            inset-0
                            bg-gradient-to-b
                            from-black/[0.08]
                            via-transparent
                            to-black/[0.12]
                          "
                        />
                      </div>
                    ))}
                  </div>

                  {/* Dynamic Island */}
                  <div
                    className="
                      absolute
                      left-1/2
                      top-[10px]
                      h-[5px]
                      w-20
                      -translate-x-1/2
                      rounded-full
                      bg-black/90
                    "
                  />
                </div>

                {/* Glass reflection */}
                <div
                  className="
                    pointer-events-none
                    absolute
                    inset-0
                    rounded-[48px]
                    bg-gradient-to-br
                    from-white/[0.07]
                    via-transparent
                    to-transparent
                  "
                />
              </div>
            </div>
          </div>

          {/* ==================================================
              BOTTOM SCROLL INDICATOR
          =================================================== */}

          <div
            className="
              absolute
              bottom-10
              left-1/2
              flex
              -translate-x-1/2
              flex-col
              items-center
              gap-3
            "
          >
            <span
              className="
                text-[10px]
                font-medium
                uppercase
                tracking-[0.3em]
                text-white/25
              "
            >
              Scroll to explore
            </span>

            <div className="relative h-10 w-px overflow-hidden bg-white/10">
              <div
                className="
                  absolute
                  left-0
                  top-0
                  h-1/2
                  w-full
                  animate-pulse
                  bg-white/50
                "
              />
            </div>
          </div>

          {/* ==================================================
              CURRENT STEP
          =================================================== */}

          <div
            className="
              absolute
              bottom-10
              right-12
            "
          >
            <span
              className="
                font-mono
                text-xs
                tracking-[0.2em]
                text-white/25
              "
            >
              {String(activeIndex + 1).padStart(2, "0")}
              {" / "}
              {String(features.length).padStart(2, "0")}
            </span>
          </div>
        </div>
      </div>

      {/* ======================================================
          MOBILE
          
          Normal document scrolling.
          No ScrollTrigger required.
      ======================================================= */}

      <div
        className="
          relative
          block
          px-6
          pb-28
          lg:hidden
        "
      >
        <div className="space-y-32">
          {features.map((feature) => (
            <article key={feature.number}>
              {/* Content */}
              <div className="mb-10">
                <div className="mb-5 flex items-center gap-3">
                  <span
                    className="
                      font-mono
                      text-xs
                      tracking-[0.2em]
                      text-white/30
                    "
                  >
                    {feature.number}
                  </span>

                  <span className="h-px w-8 bg-white/15" />

                  <span
                    className="
                      text-[10px]
                      font-medium
                      uppercase
                      tracking-[0.25em]
                      text-white/40
                    "
                  >
                    {feature.eyebrow}
                  </span>
                </div>

                <h3
                  className="
                    text-4xl
                    font-medium
                    leading-[1.02]
                    tracking-[-0.04em]
                  "
                >
                  {feature.title}
                </h3>

                <p
                  className="
                    mt-5
                    text-base
                    leading-7
                    text-white/45
                  "
                >
                  {feature.description}
                </p>
              </div>

              {/* Phone */}
              <div className="flex justify-center">
                <div
                  className="
                    relative
                    w-[78vw]
                    max-w-[340px]
                    rounded-[42px]
                    border
                    border-white/[0.14]
                    bg-[#111419]
                    p-[6px]
                    shadow-[0_25px_70px_rgba(0,0,0,0.45)]
                  "
                >
                  <div
                    className="
                      relative
                      aspect-[9/19.5]
                      overflow-hidden
                      rounded-[36px]
                      bg-black
                    "
                  >
                    <img
                      src={feature.image}
                      alt={feature.title}
                      draggable="false"
                      className="
                        h-full
                        w-full
                        select-none
                        object-cover
                      "
                    />

                    <div
                      className="
                        pointer-events-none
                        absolute
                        inset-0
                        bg-gradient-to-b
                        from-black/[0.08]
                        via-transparent
                        to-black/[0.12]
                      "
                    />
                  </div>

                  {/* Dynamic Island */}
                  <div
                    className="
                      absolute
                      left-1/2
                      top-[9px]
                      h-[4px]
                      w-16
                      -translate-x-1/2
                      rounded-full
                      bg-black/90
                    "
                  />
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}