import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function AboutSection() {
  const sectionRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".about-left", {
        x: -40,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          once: true,
        },
      });

      gsap.from(".about-card", {
        x: 40,
        opacity: 0,
        duration: 0.8,
        delay: 0.1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          once: true,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="bg-[#000000] px-6 py-24 text-white sm:px-10 lg:px-16"
    >
      <div className="mx-auto max-w-6xl">

        {/* Section label */}
        <div className="mb-14 flex items-center gap-4">
          <span className="h-px w-10 bg-white/20" />

          <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-white/35">
            UrbanQuest / About
          </p>
        </div>


        {/* LEFT / RIGHT */}
        <div className="grid items-center gap-16 lg:grid-cols-2 lg:gap-24">


          {/* =========================
              LEFT
          ========================== */}
          <div className="about-left">

            <p
              className="
                text-[10px]
                font-bold
                uppercase
                tracking-[0.22em]
                text-white/30
              "
            >
              Why UrbanQuest
            </p>


            <h2
              className="
                mt-5
                max-w-xl
                text-5xl
                font-semibold
                leading-[0.92]
                tracking-[-0.055em]
                sm:text-6xl
              "
            >
              Find something new
              <span className="text-white/35">
                {" "}where you already are.
              </span>
            </h2>


            <p
              className="
                mt-7
                max-w-md
                text-sm
                leading-7
                text-white/45
              "
            >
              UrbanQuest creates simple real-world challenges
              that make you step outside, explore your
              surroundings, and experience everyday places
              differently.
            </p>


            {/* Small points */}
            <div className="mt-10 space-y-5">

              <div className="flex items-center gap-4">
                <span
                  className="
                    flex
                    h-8
                    w-8
                    shrink-0
                    items-center
                    justify-center
                    border
                    border-white/15
                    text-[10px]
                  "
                >
                  01
                </span>

                <p className="text-sm text-white/60">
                  Small quests. Real experiences.
                </p>
              </div>


              <div className="flex items-center gap-4">
                <span
                  className="
                    flex
                    h-8
                    w-8
                    shrink-0
                    items-center
                    justify-center
                    border
                    border-white/15
                    text-[10px]
                  "
                >
                  02
                </span>

                <p className="text-sm text-white/60">
                  Your city becomes the playground.
                </p>
              </div>


              <div className="flex items-center gap-4">
                <span
                  className="
                    flex
                    h-8
                    w-8
                    shrink-0
                    items-center
                    justify-center
                    border
                    border-white/15
                    text-[10px]
                  "
                >
                  03
                </span>

                <p className="text-sm text-white/60">
                  No planning. Just go.
                </p>
              </div>

            </div>

          </div>


          {/* =========================
              RIGHT CARD
          ========================== */}
          <div className="about-card">

            <div
              className="
                relative
                overflow-hidden
                rounded-[2px]
                bg-[#f4f0e8]
                px-7
                py-7
                text-black
                shadow-[0_30px_80px_rgba(0,0,0,0.4)]
                sm:px-9
                sm:py-9
              "
            >

              {/* Top black line */}
              <div
                className="
                  absolute
                  left-0
                  top-0
                  h-1
                  w-full
                  bg-black
                "
              />


              {/* Card header */}
              <div className="flex items-start justify-between">

                <div>

                  <p
                    className="
                      text-[10px]
                      font-bold
                      uppercase
                      tracking-[0.22em]
                      text-black/40
                    "
                  >
                    UrbanQuest / 001
                  </p>

                  <p className="mt-1 text-xs text-black/50">
                    Explore your surroundings
                  </p>

                </div>


                <span className="text-xs text-black/40">
                  07 min
                </span>

              </div>


              {/* Divider */}
              <div className="my-7 h-px bg-black/10" />


              {/* Quest */}
              <div className="flex gap-6">

                <div
                  className="
                    flex
                    h-12
                    w-12
                    shrink-0
                    items-center
                    justify-center
                    border
                    border-black/15
                    text-sm
                    font-semibold
                  "
                >
                  01
                </div>


                <div>

                  <p
                    className="
                      text-[10px]
                      font-bold
                      uppercase
                      tracking-[0.2em]
                      text-black/35
                    "
                  >
                    Your quest
                  </p>


                  <h3
                    className="
                      mt-2
                      text-2xl
                      font-semibold
                      leading-tight
                      tracking-[-0.035em]
                      sm:text-3xl
                    "
                  >
                    Take a 7-minute walk.
                  </h3>


                  <p
                    className="
                      mt-3
                      max-w-sm
                      text-sm
                      leading-6
                      text-black/55
                    "
                  >
                    Step outside and notice one thing
                    you've never really looked at before.
                  </p>

                </div>

              </div>


              {/* Bottom */}
              <div
                className="
                  mt-8
                  flex
                  items-center
                  justify-between
                  border-t
                  border-black/10
                  pt-5
                "
              >

                <div>

                  <p
                    className="
                      text-[10px]
                      uppercase
                      tracking-[0.18em]
                      text-black/35
                    "
                  >
                    When you're ready
                  </p>

                  <p className="mt-1 text-xs font-medium">
                    Go make it real.
                  </p>

                </div>


                <button
                  className="
                    group
                    flex
                    h-11
                    w-11
                    items-center
                    justify-center
                    rounded-full
                    bg-black
                    text-white
                    transition-transform
                    duration-300
                    hover:scale-105
                  "
                >
                  <span className="transition-transform group-hover:translate-x-0.5">
                    →
                  </span>
                </button>

              </div>

            </div>


            {/* Card caption */}
            <div className="mt-5 flex items-center justify-end gap-3">

              <span className="h-px w-8 bg-white/15" />

              <p className="text-[9px] uppercase tracking-[0.2em] text-white/25">
                A small reason to step outside
              </p>

            </div>

          </div>

        </div>


        {/* Bottom line */}
        <div
          className="
            mt-20
            flex
            items-center
            justify-between
            border-t
            border-white/10
            pt-5
          "
        >
          <p className="text-[9px] uppercase tracking-[0.2em] text-white/25">
            Explore differently
          </p>

          <p className="text-[9px] uppercase tracking-[0.2em] text-white/25">
            UrbanQuest
          </p>
        </div>

      </div>
    </section>
  );
}