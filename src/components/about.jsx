
import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function AboutSection() {
  const sectionRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".about-copy", {
        x: -50,
        opacity: 0,
        duration: 0.9,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
          once: true,
        },
      });

      gsap.from(".phone-screen", {
        y: 80,
        opacity: 0,
        duration: 1,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
          once: true,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="overflow-hidden bg-[#000000] px-6 py-28 text-white sm:px-10 lg:px-16"
    >
      <div className="mx-auto max-w-7xl">

      


        <div className="grid items-center gap-20 lg:grid-cols-[0.85fr_1.15fr] lg:gap-12">


          {/* =====================================================
              LEFT — ABOUT
          ====================================================== */}

          <div className="about-copy">

            <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-white/30">
              Why Po Get It
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
              Your next
              <span className="text-white/30">
                {" "}experience is closer than you think.
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
              Po Get It turns ordinary surroundings into
              opportunities for exploration. Open the app,
              get a simple quest, and turn a few minutes
              into something worth remembering.
            </p>


            {/* Points */}

            <div className="mt-12 space-y-6">

              <div className="flex gap-4">

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

                <div>
                  <p className="text-sm font-medium">
                    Discover something nearby
                  </p>

                  <p className="mt-1 text-xs leading-5 text-white/30">
                    Your surroundings become part of the experience.
                  </p>
                </div>

              </div>


              <div className="flex gap-4">

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

                <div>
                  <p className="text-sm font-medium">
                    Follow a simple prompt
                  </p>

                  <p className="mt-1 text-xs leading-5 text-white/30">
                    No planning. No endless scrolling. Just go.
                  </p>
                </div>

              </div>


              <div className="flex gap-4">

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

                <div>
                  <p className="text-sm font-medium">
                    Make it a memory
                  </p>

                  <p className="mt-1 text-xs leading-5 text-white/30">
                    Small moments slowly become your story.
                  </p>
                </div>

              </div>

            </div>

          </div>



          {/* =====================================================
              RIGHT — MOBILE APP JOURNEY
          ====================================================== */}

          <div className="relative mx-auto h-[620px] w-full max-w-[620px]">


            {/* Decorative text */}

            <div className="absolute right-0 top-0 hidden lg:block">
              <p className="text-[9px] uppercase tracking-[0.25em] text-white/20">
                The journey
              </p>
            </div>


            {/* ================= CENTER PHONE ================= */}

            <div
              className="
                phone-screen
                absolute
                left-1/2
                top-1/2
                z-20
                w-[220px]
                -translate-x-1/2
                -translate-y-1/2
                sm:w-[240px]
              "
            >

              <div
                className="
                  rounded-[34px]
                  border
                  border-white/15
                  bg-[#111]
                  p-2
                  shadow-[0_35px_100px_rgba(0,0,0,0.7)]
                "
              >

                <div
                  className="
                    overflow-hidden
                    rounded-[27px]
                    bg-[#f3f0e9]
                    text-black
                  "
                >

                  {/* Status */}

                  <div className="flex items-center justify-between px-5 pt-4 text-[8px] font-medium text-black/50">
                    <span>9:41</span>

                    <div className="flex gap-1">
                      <span>●</span>
                      <span>●</span>
                      <span>▮</span>
                    </div>
                  </div>


                  {/* Header */}

                  <div className="px-5 pb-5 pt-6">

                    <p className="text-[8px] font-bold uppercase tracking-[0.2em] text-black/35">
                      Po Get It
                    </p>

                    <h3 className="mt-2 text-[25px] font-semibold leading-[0.95] tracking-[-0.05em]">
                      Find something
                      <br />
                      worth noticing.
                    </h3>

                  </div>


                  {/* Quest Card */}

                  <div className="px-4">

                    <div className="rounded-[20px] bg-black p-5 text-white">

                      <div className="flex items-center justify-between">

                        <span className="text-[8px] uppercase tracking-[0.18em] text-white/40">
                          Today's quest
                        </span>

                        <span className="text-[8px] text-white/35">
                          07 min
                        </span>

                      </div>


                      <p className="mt-8 text-[19px] font-medium leading-tight tracking-[-0.035em]">
                        Walk somewhere
                        you've never
                        noticed before.
                      </p>


                      <div className="mt-7 flex items-center justify-between">

                        <span className="text-[8px] text-white/35">
                          Explore nearby
                        </span>

                        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-black">
                          →
                        </div>

                      </div>

                    </div>

                  </div>


                  {/* Bottom navigation */}

                  <div className="mt-5 flex justify-around border-t border-black/10 px-3 py-4">

                    <div className="text-center">
                      <div className="text-xs">⌂</div>
                      <p className="mt-1 text-[7px] text-black/40">
                        Home
                      </p>
                    </div>

                    <div className="text-center">
                      <div className="text-xs">✦</div>
                      <p className="mt-1 text-[7px] text-black/40">
                        Quests
                      </p>
                    </div>

                    <div className="text-center">
                      <div className="text-xs">○</div>
                      <p className="mt-1 text-[7px] text-black/40">
                        Journey
                      </p>
                    </div>

                  </div>

                </div>

              </div>

            </div>



            {/* ================= LEFT PHONE ================= */}

            <div
              className="
                phone-screen
                absolute
                left-[2%]
                top-[17%]
                z-10
                hidden
                w-[175px]
                -rotate-[8deg]
                opacity-70
                sm:block
                lg:w-[190px]
              "
            >

              <div className="rounded-[30px] border border-white/10 bg-[#111] p-2 shadow-[0_30px_70px_rgba(0,0,0,0.5)]">

                <div className="overflow-hidden rounded-[23px] bg-[#e9e5dc] text-black">

                  <div className="px-4 pb-4 pt-5">

                    <p className="text-[7px] uppercase tracking-[0.2em] text-black/35">
                      Discover
                    </p>

                    <h3 className="mt-2 text-xl font-semibold leading-none tracking-[-0.05em]">
                      What's
                      <br />
                      around you?
                    </h3>

                  </div>


                  {/* Fake map */}

                  <div className="relative mx-3 h-[230px] overflow-hidden rounded-[18px] bg-[#d4d0c7]">

                    <div className="absolute left-[20%] top-[15%] h-20 w-32 rotate-12 border-b-2 border-black/10" />

                    <div className="absolute left-[40%] top-[45%] h-32 w-2 rotate-[35deg] bg-black/10" />

                    <div className="absolute left-[65%] top-[20%] h-3 w-3 rounded-full bg-black" />

                    <div className="absolute left-[32%] top-[62%] h-3 w-3 rounded-full bg-black/40" />

                    <div className="absolute left-[58%] top-[70%] h-3 w-3 rounded-full bg-black/30" />

                  </div>


                  <div className="px-4 py-5">

                    <p className="text-[9px] font-medium">
                      3 quests nearby
                    </p>

                    <p className="mt-1 text-[7px] text-black/40">
                      Start exploring your surroundings.
                    </p>

                  </div>

                </div>

              </div>

            </div>



            {/* ================= RIGHT PHONE ================= */}

            <div
              className="
                phone-screen
                absolute
                right-[2%]
                top-[32%]
                z-10
                hidden
                w-[175px]
                rotate-[8deg]
                opacity-70
                sm:block
                lg:w-[190px]
              "
            >

              <div className="rounded-[30px] border border-white/10 bg-[#111] p-2 shadow-[0_30px_70px_rgba(0,0,0,0.5)]">

                <div className="overflow-hidden rounded-[23px] bg-white text-black">

                  <div className="px-4 pb-4 pt-5">

                    <p className="text-[7px] uppercase tracking-[0.2em] text-black/35">
                      Completed
                    </p>

                    <h3 className="mt-2 text-xl font-semibold leading-none tracking-[-0.05em]">
                      You made
                      <br />
                      it real.
                    </h3>

                  </div>


                  {/* Memory */}

                  <div className="mx-3 rounded-[18px] bg-black p-4 text-white">

                    <div className="flex h-32 items-end rounded-xl bg-[#292929] p-3">

                      <div>

                        <p className="text-[7px] uppercase tracking-[0.15em] text-white/35">
                          Quest 014
                        </p>

                        <p className="mt-1 text-sm font-medium">
                          First light.
                        </p>

                      </div>

                    </div>


                    <div className="mt-4 flex items-center justify-between">

                      <span className="text-[7px] text-white/40">
                        Completed today
                      </span>

                      <span className="text-[10px]">
                        ✓
                      </span>

                    </div>

                  </div>


                  <div className="px-4 py-5">

                    <p className="text-[8px] text-black/40">
                      Your journey is growing.
                    </p>

                  </div>

                </div>

              </div>

            </div>



            {/* Decorative line */}

            <div className="absolute bottom-5 left-1/2 hidden h-px w-[70%] -translate-x-1/2 bg-white/10 lg:block" />

            <p
              className="
                absolute
                bottom-0
                left-1/2
                -translate-x-1/2
                whitespace-nowrap
                text-[10px]
                uppercase
                tracking-[0.22em]
                text-white/50
              "
            >
              Discover → Experience → Remember
            </p>

          </div>

        </div>


        {/* Bottom statement */}

        <div className="mt-24 border-t border-white/10 pt-6">

          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">

            <p className="text-[9px] uppercase tracking-[0.2em] text-white/25">
              Less screen time. More life outside.
            </p>

           
          </div>

        </div>

      </div>
    </section>
  );
}
