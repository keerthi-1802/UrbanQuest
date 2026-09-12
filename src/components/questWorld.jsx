export default function QuestWorlds() {
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

  return (
    <section className="bg-[#f4f1eb] px-5 py-24 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-7xl">

        {/* Header */}
        <div className="mb-14 flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <div>
            <p className="mb-4 text-xs font-medium uppercase tracking-[0.22em] text-black/45">
              Four quest worlds
            </p>

            <h2 className="max-w-2xl text-4xl font-medium leading-[0.95] tracking-[-0.04em] text-[#171717] sm:text-5xl lg:text-7xl">
              Pick a world.
              <br />
              <span className="text-black/35">Start anywhere.</span>
            </h2>
          </div>

          <p className="max-w-xs text-sm leading-6 text-black/55">
            Four simple ways to turn your next free moment into something
            worth remembering.
          </p>
        </div>

        {/* Worlds */}
        <div className="grid gap-4 md:grid-cols-2">
          {worlds.map((world) => (
            <article
              key={world.number}
              className="group relative min-h-[430px] overflow-hidden rounded-[28px] bg-black"
            >
              {/* Image */}
              <img
                src={world.image}
                alt={world.title}
                className="absolute inset-0 h-full w-full object-cover transition duration-700 ease-out group-hover:scale-105"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/15 to-black/5" />

              {/* Top information */}
              <div className="absolute left-6 right-6 top-6 flex items-center justify-between">
                <span className="text-sm font-medium text-white/80">
                  {world.number}
                </span>

                <span className="rounded-full border border-white/30 bg-white/10 px-3 py-1.5 text-[10px] font-medium uppercase tracking-[0.18em] text-white backdrop-blur-md">
                  {world.tag}
                </span>
              </div>

              {/* Bottom content */}
              <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
                <div className="flex items-end justify-between gap-5">
                  <div>
                    <h3 className="text-4xl font-medium tracking-[-0.04em] text-white sm:text-5xl">
                      {world.title}
                    </h3>

                    <p className="mt-3 max-w-sm text-sm leading-6 text-white/70">
                      {world.description}
                    </p>
                  </div>

                  {/* Arrow */}
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white text-black transition-transform duration-300 group-hover:rotate-45">
                    <svg
                      width="17"
                      height="17"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                    >
                      <path d="M5 12h14" />
                      <path d="m13 6 6 6-6 6" />
                    </svg>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Footer */}
        <div className="mt-8 flex items-center justify-between border-t border-black/10 pt-5">
          <span className="text-xs uppercase tracking-[0.18em] text-black/40">
            Four ways to quest
          </span>

          <span className="text-xs text-black/40">
            Move · Explore · Notice · Reset
          </span>
        </div>
      </div>
    </section>
  );
}