import { useEffect, useState } from "react";

export default function QuestWorlds() {
  const [active, setActive] = useState(0);

  const worlds = [
    {
      number: "01",
      title: "MOVE",
      description: "Walking, beginner running, staying active.",
      image:
        "https://images.openai.com/static-rsc-4/RCAQyFNo3pHqvbqWQZDp7MwizFNOyJUD5uAU8ekAe-3iPNbOcF_Kfx2EX3UPPBTMZezCM5xYza9MbRIzap2z-yTT3OATMC1x1KqW2M9qQFDs1DTXJGujZ8EDBdKQSazFASNjQojkpfIlRPEUKXdJ2rXFD1tDE1GHmvutNI2WdWw2g2rZ1mLDgLSNuXeulsRx?purpose=inline",
      tag: "BODY",
    },
    {
      number: "02",
      title: "EXPLORE",
      description: "Discover parks, streets and hidden places.",
      image:
        "https://images.openai.com/static-rsc-4/Y3FLWzduyG-IXwoAaEUWsHVisI-Vi_1VOa2w3EHmIbssWWpQrOSnw38ImRiSazo4V0BVbjQhP3vY_ZvHAwcU8rSHdhufsVVSQ21RqB1tgHdltdOI07yU_QjBcOehIZLMI1jac5PlfAE3hNHz7tg3UQNWZ2CoRrh1H3FrNCqrwVgitycQyIyDe1t3SFojTK-B?purpose=inline",
      tag: "PLACE",
    },
    {
      number: "03",
      title: "NOTICE",
      description: "Photography and observing everyday beauty.",
      image:
        "https://i.pinimg.com/736x/27/34/b1/2734b1fd8029a753ff9ea2db4aa7a9b0.jpg",
      tag: "MIND",
    },
    {
      number: "04",
      title: "RESET",
      description: "Mindful breaks and low-energy wellbeing.",
      image:
        "https://images.openai.com/static-rsc-4/LY4u_Wl9g7xAMn7ts6WA9Ma3AMWOa96qS7_gFf877sp9Qy17qWXObHBYxmBnCG7zcC7ENJi8iu0eCuycxhCrh6sf86a6Ff0w374DdL85j9oTkCgErK4w4YOdPEdfTuH9GjIKBXCsyenPy1NIjd9Bn2wPrWIatzNW6w8L2pCAizQ?purpose=inline",
      tag: "REST",
    },
  ];

  // Auto slide: 1 → 2 → 3 → 4 → 1
  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % worlds.length);
    }, 2500);

    return () => clearInterval(interval);
  }, [worlds.length]);

  const Card = ({ world }) => (
    <article
      className="
        group relative h-[300px] overflow-hidden rounded-[22px] bg-black
        sm:h-[350px]
        md:h-[430px]
        md:rounded-[28px]
      "
    >
      <img
        src={world.image}
        alt={world.title}
        className="
          absolute inset-0 h-full w-full object-cover
          transition duration-700
          group-hover:scale-105
        "
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/15 to-black/5" />

      {/* Top content */}
      <div className="absolute left-4 right-4 top-4 flex items-center justify-between md:left-6 md:right-6 md:top-6">
        <span className="text-xs font-medium text-white/80 md:text-sm">
          {world.number}
        </span>

        <span className="rounded-full border border-white/30 bg-white/10 px-2.5 py-1 text-[9px] font-medium uppercase tracking-[0.18em] text-white backdrop-blur-md md:px-3 md:py-1.5 md:text-[10px]">
          {world.tag}
        </span>
      </div>

      {/* Bottom content */}
      <div className="absolute bottom-0 left-0 right-0 p-4 md:p-8">
        <div className="flex items-end justify-between gap-3 md:gap-5">
          <div>
            <h3 className="text-3xl font-medium tracking-[-0.04em] text-white md:text-5xl">
              {world.title}
            </h3>

            <p className="mt-2 max-w-sm text-xs leading-5 text-white/70 md:mt-3 md:text-sm md:leading-6">
              {world.description}
            </p>
          </div>

          <div
            className="
              flex h-9 w-9 shrink-0 items-center justify-center
              rounded-full bg-white text-black
              transition-transform duration-300
              group-hover:rotate-45
              md:h-11 md:w-11
            "
          >
            <svg
              width="15"
              height="15"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              className="md:h-[17px] md:w-[17px]"
            >
              <path d="M5 12h14" />
              <path d="m13 6 6 6-6 6" />
            </svg>
          </div>
        </div>
      </div>
    </article>
  );

  return (
    <section
      className="
        bg-[#f4f1eb]
        px-5 py-12
        sm:px-8 sm:py-16
        lg:px-12 lg:py-24
      "
    >
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div
          className="
            mb-8 flex flex-col justify-between gap-5
            sm:mb-10
            md:mb-14 md:flex-row md:items-end md:gap-8
          "
        >
          <div>
            <p className="mb-3 text-[10px] font-medium uppercase tracking-[0.22em] text-black/45 md:mb-4 md:text-xs">
              Four quest worlds
            </p>

            <h2
              className="
                max-w-2xl
                text-4xl font-medium leading-[0.95] tracking-[-0.04em]
                text-[#171717]
                sm:text-5xl
                lg:text-7xl
              "
            >
              Pick a world.
              <br />
              <span className="text-black/35">Start anywhere.</span>
            </h2>
          </div>

          <p className="max-w-xs text-xs leading-5 text-black/55 md:text-sm md:leading-6">
            Four simple ways to turn your next free moment into something worth
            remembering.
          </p>
        </div>

        {/* Desktop Grid */}
        <div className="hidden gap-4 md:grid md:grid-cols-2">
          {worlds.map((world) => (
            <Card key={world.number} world={world} />
          ))}
        </div>

        {/* Mobile Auto Slider */}
        <div className="relative overflow-hidden md:hidden">
          <div
            className="flex transition-transform duration-700 ease-in-out"
            style={{
              transform: `translateX(-${active * 100}%)`,
            }}
          >
            {worlds.map((world) => (
              <div key={world.number} className="w-full flex-shrink-0">
                <Card world={world} />
              </div>
            ))}
          </div>

          {/* Indicators */}
          <div className="mt-3 flex justify-center gap-1.5">
            {worlds.map((_, index) => (
              <div
                key={index}
                className={`h-1 rounded-full transition-all duration-300 ${
                  active === index
                    ? "w-6 bg-neutral-900"
                    : "w-1.5 bg-neutral-300"
                }`}
              />
            ))}
          </div>

          <p className="mt-2 text-center text-[10px] text-black/40">
            {active + 1} / {worlds.length}
          </p>
        </div>

        {/* Footer */}
        <div
          className="
            mt-5 flex items-center justify-between
            border-t border-black/10 pt-4
            md:mt-8 md:pt-5
          "
        >
          <span className="text-[10px] uppercase tracking-[0.18em] text-black/40 md:text-xs">
            Four ways to quest
          </span>

          <span className="hidden text-xs text-black/40 sm:block">
            Move · Explore · Notice · Reset
          </span>
        </div>
      </div>
    </section>
  );
}