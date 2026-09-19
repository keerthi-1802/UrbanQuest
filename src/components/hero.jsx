const Hero = () => {
  return (
    <section className="relative min-h-screen overflow-hidden bg-black text-white">

      {/* Background */}
      <img
        src="https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=2400&q=90"
        alt="Person exploring outdoors"
        className="absolute inset-0 h-full w-full object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/10" />

      {/* Gradient */}
      <div
        className="absolute inset-0 bg-gradient-to-b
        from-black/40
        via-black/10
        to-black/80"
      />

    


      {/* HERO CONTENT */}
      <div
        className="relative z-10 flex min-h-screen
        items-center justify-center px-6 pt-20"
      >

        <div className="w-full max-w-5xl text-center">

          {/* Location */}
          <div
            className="mb-8 inline-flex items-center gap-2
            text-xs font-medium uppercase
            tracking-[0.18em] text-white/60"
          >
            <span />

            Starting in Coimbatore
          </div>


          {/* Headline */}
          <h1
            className="mx-auto max-w-5xl
            text-6xl font-semibold
            leading-[0.9]
            tracking-[-0.06em]
            sm:text-7xl
            md:text-8xl
            lg:text-[108px]"
          >
            Reward living.
            <br />

            <span className="text-white/45">
              Not scrolling.
            </span>
          </h1>


          {/* Description */}
          <p
            className="mx-auto mt-8 max-w-xl
            text-base leading-7
            text-white/70
            sm:text-lg"
          >
            Get off your screen into the real world. Discover new places, try new things, and turn everyday moments into experiences worth remembering.
          </p>


          {/* CTA */}
          <div className="mt-9">

            <button
              className="group inline-flex items-center gap-4
              rounded-full bg-white
              px-8 py-4
              text-sm font-semibold text-black
              transition duration-300
              hover:-translate-y-1
              hover:bg-neutral-100"
            >
              Start Your Journey

              <span
                className="transition-transform
                duration-300
                group-hover:translate-x-1"
              >
                →
              </span>
            </button>

           

          </div>



        </div>

      </div>



    </section>
  );
};

export default Hero;