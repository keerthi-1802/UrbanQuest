import walk from "../assets/walk.png";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative h-[450px] w-full overflow-hidden md:h-[800px]">
      {/* Background Image */}
      <img
        src={walk}
        alt="Sunny walking street"
        className="absolute inset-0 h-full w-full object-cover object-[78%_center] md:object-center"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/35 to-transparent" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex h-full max-w-7xl items-center px-5 md:px-6 lg:px-12">
        <div className="max-w-xl text-white mt-10">

          {/* Badge */}
          <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-1.5 backdrop-blur-md md:mb-6 md:px-4 md:py-2">
            <span className="h-1.5 w-1.5 rounded-full bg-black/60 md:h-2 md:w-2" />

            <span className="text-[10px] font-semibold uppercase tracking-[0.2em] md:text-xs">
              PO GET IT
            </span>
          </div>

          {/* Heading */}
          <h1 className="text-4xl font-bold leading-[0.9] tracking-tight md:text-5xl lg:text-7xl">
            Less Scrolling. 
            <br />
           More Living.
          </h1>

          {/* Description */}
          <p className="mt-3 max-w-md text-sm leading-5 text-white/80 md:mt-6 md:text-lg md:leading-8">
            Turn the time you normally lose to scrolling into small real-world experiences built around what you enjoy."
          </p>

          {/* Button */}
          <div className="mt-5 md:mt-10">
            <a
              href="#alpha"
              className="group inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-5 py-2.5 text-xs font-semibold text-white backdrop-blur transition hover:bg-white/20 md:px-7 md:py-4 md:text-sm"
            >
              Start Your Journey

              <ArrowRight
                size={16}
                className="transition-transform duration-300 group-hover:translate-x-1 md:h-[18px] md:w-[18px]"
              />
            </a>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
