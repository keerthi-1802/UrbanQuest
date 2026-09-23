import walk from "../assets/walk.png";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative h-[800px] w-full overflow-hidden">
      {/* Background Image */}
      <img
        src={walk}
        alt="Sunny walking street"
        className="absolute inset-0 h-full w-full object-cover object-center"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/35 to-transparent" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex h-full max-w-7xl items-center px-6 lg:px-12">
        <div className="max-w-xl text-white">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-2 backdrop-blur-md">
            <span className="h-2 w-2 rounded-full bg-black/60" />
            <span className="text-xs font-semibold uppercase tracking-[0.2em]">
              UrbanQuest • Walking Adventure
            </span>
          </div>

          <h1 className="text-5xl font-bold leading-[0.9] tracking-tight lg:text-7xl">
            Reward living.
            <br />
            Not scrolling.
          </h1>

          <p className="mt-6 text-lg leading-8 text-white/80">
            Explore hidden streets, complete photography quests, and uncover the
            best walking routes around Coimbatore.
          </p>

          <div className="mt-10">
            <a
              href="#alpha"
              className="group inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-7 py-4 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/20"
            >
              Start Your Journey
              <ArrowRight
                size={18}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </a>
          </div>
          {/* Inline Quest Card */}
          <div className="mt-12 rounded-3xl border border-white/20 bg-white/10 p-5 backdrop-blur-xl">
            <div className="flex items-center justify-between">
              <span className="rounded-full bg-black/60 px-3 py-1 text-xs font-semibold text-white">
                Active Quest
              </span>
              {/* <span className="text-sm font-bold">+250 XP</span> */}
            </div>

            <h3 className="mt-3 text-2xl font-bold">
              Race Course Heritage Walk
            </h3>

            <p className="mt-2 text-sm leading-6 text-black/75 ">
              Capture 5 iconic street moments across a 2.1 km walking trail
              during golden hour.
            </p>

            <div className="mt-4 flex gap-6 text-sm">
              <div>
                <p className="text-white/50">Distance</p>
                <p className="font-semibold">2.1 km</p>
              </div>
              <div>
                <p className="text-white/50">Time</p>
                <p className="font-semibold">35 mins</p>
              </div>
              <div>
                <p className="text-white/50">Level</p>
                <p className="font-semibold">Easy</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;