
import { useState } from "react";
import Covai from "../assets/Covai.png";

export default function AlphaLaunch() {
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");
  const [locality, setLocality] = useState("");
  const [showLocalities, setShowLocalities] = useState(false);


  const SCRIPT_URL ="https://script.google.com/macros/s/AKfycbznZNrPh8kAgElMjPsuiMDSp19TnHOIQ3CeLCFZ1Av18ON8ewkvXgVyMzmrdyv0LpJJ/exec"
   


  const coimbatoreLocalities = [
    "Ganapathy",
    "Gandhipuram",
    "RS Puram",
    "Saibaba Colony",
    "Peelamedu",
    "Singanallur",
    "Saravanampatti",
    "Kalapatti",
    "Race Course",
    "Avinashi Road",
    "Ukkadam",
    "Kuniyamuthur",
    "Podanur",
    "Sundarapuram",
    "Vadavalli",
    "Thudiyalur",
    "Kavundampalayam",
    "Ramanathapuram",
    "Trichy Road",
    "Sivanandha Colony",
    "Tatabad",
    "Vilankurichi",
    "Kovaipudur",
    "Saibaba Colony",
    "RS Puram",
    "Hope College",
    "Neelambur",
    "Ondipudur",
    "Puliakulam",
  ];
const handleSubmit = async (e) => {
  e.preventDefault();

  console.log("1. FORM SUBMITTED");

  setLoading(true);
  setError("");

  const form = e.currentTarget;
  const formData = new FormData(form);

  const interests = formData.getAll("interests");

  const data = {
    firstName: formData.get("firstName"),
    contact: formData.get("contact"),
    locality: formData.get("locality"),
    ageRange: formData.get("ageRange"),
    interests: interests.join(", "),
    platform: formData.get("platform"),
  };

  console.log("2. DATA:", data);
  console.log("3. SCRIPT URL:", SCRIPT_URL);

  try {
    await fetch(SCRIPT_URL, {
      method: "POST",
      mode: "no-cors",
      headers: {
        "Content-Type": "text/plain;charset=utf-8",
      },
      body: JSON.stringify(data),
    });

    console.log("4. FETCH COMPLETED");

    setSubmitted(true);
    form.reset();

  } catch (err) {
    console.error("FETCH ERROR:", err);
    setError("Something went wrong. Please try again.");
  } finally {
    setLoading(false);
  }
};
  return (
    <section
      className="relative overflow-hidden bg-[#f5f5f0] px-6 py-20 sm:px-10 lg:px-16"
    >
      <div className="mx-auto max-w-7xl">

        {/* SECTION HEADING */}
        <div className="mb-10 flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
          <div>
            <div className="mb-4 flex items-center gap-3">
              <span className="h-2 w-2 rounded-full bg-black" />

              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-black/45">
                Alpha Launch
              </span>
            </div>

            <h2 className="max-w-3xl text-5xl font-semibold leading-[0.92] tracking-[-0.055em] text-[#111] sm:text-6xl lg:text-7xl">
              Coimbatore,
              <br />
              <span className="text-black/30">
                you’re first.
              </span>
            </h2>
          </div>

          <p className="max-w-sm text-sm leading-6 text-black/45 sm:pb-1">
            Po Get It starts here. Join the first wave of explorers and help
            shape what we build next.
          </p>
        </div>

        {/* MAIN CARD */}
        <div className="relative overflow-hidden rounded-[2.5rem] bg-[#111111] text-white">
          <div className="relative grid lg:grid-cols-[1.05fr_0.95fr]">

            {/* LEFT — IMAGE */}
            <div className="relative min-h-[480px] overflow-hidden sm:min-h-[560px] lg:min-h-[600px]">

              <img
                src={Covai}
                alt="Coimbatore city"
                className="absolute inset-0 h-full w-full object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/10" />

              {/* Location */}
              <div className="absolute left-8 top-8 sm:left-10 sm:top-10">
                <div className="flex items-center gap-2 rounded-full border border-white/20 bg-black/20 px-4 py-2 backdrop-blur-md">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#d9ff55]" />

                  <span className="text-[10px] font-medium uppercase tracking-[0.16em] text-white/80">
                    Coimbatore Alpha
                  </span>
                </div>
              </div>

              {/* Image Content */}
              <div className="absolute bottom-0 left-0 right-0 p-8 sm:p-10 lg:p-12">
                <p className="mb-3 text-xs uppercase tracking-[0.18em] text-white/45">
                  First wave
                </p>

                <h3 className="max-w-xl text-4xl font-semibold leading-[0.95] tracking-[-0.05em] sm:text-5xl lg:text-6xl">
                  Be one of the
                  <br />
                  <span className="text-[#d9ff55]">
                    first 500–1,000.
                  </span>
                </h3>

                <p className="mt-5 max-w-md text-sm leading-6 text-white/55">
                  Discover Po Get It before everyone else and help us shape
                  the experience.
                </p>
              </div>
            </div>

            {/* RIGHT — FORM */}
            <div
              className="relative flex flex-col justify-center border-t border-white/10 bg-white/[0.035] p-8 sm:p-12 lg:border-l lg:border-t-0 lg:p-14"
              id="alpha"
            >

              {!submitted ? (
                <>
                  <div className="mb-9">
                    <p className="text-sm font-medium text-white">
                      BECOME AN EARLY TESTER
                    </p>

                    <h3 className="mt-3 max-w-md text-3xl font-semibold leading-[1] tracking-[-0.04em] sm:text-4xl">
                      Want to be part of
                      <span className="text-white/35">
                        {" "}the beginning?
                      </span>
                    </h3>

                    <p className="mt-4 max-w-md text-sm leading-6 text-white/40">
                      Leave your details and we'll let you know when the
                      Po Get It alpha opens.
                    </p>
                  </div>

                  <form
                    onSubmit={handleSubmit}
                    className="space-y-5"
                  >

                    {/* FIRST NAME */}
                    <div>
                      <label className="mb-2 block text-[10px] font-medium uppercase tracking-[0.16em] text-white/30">
                        First Name
                      </label>

                      <input
                        required
                        name="firstName"
                        type="text"
                        placeholder="Your first name"
                        className="w-full rounded-xl border border-white/10 bg-white/[0.06] px-4 py-4 text-sm text-white outline-none transition placeholder:text-white/20 focus:border-[#d9ff55]/60"
                      />
                    </div>

                    {/* WHATSAPP OR EMAIL */}
                    <div>
                      <label className="mb-2 block text-[10px] font-medium uppercase tracking-[0.16em] text-white/30">
                        WhatsApp Number or Email
                      </label>

                      <input
                        required
                        name="contact"
                        type="text"
                        placeholder="WhatsApp number or email"
                        className="w-full rounded-xl border border-white/10 bg-white/[0.06] px-4 py-4 text-sm text-white outline-none transition placeholder:text-white/20 focus:border-[#d9ff55]/60"
                      />
                    </div>

                    {/* CITY / LOCALITY */}
                    <div className="relative">
                      <label className="mb-2 block text-[10px] font-medium uppercase tracking-[0.16em] text-white/30">
                        City / Locality
                      </label>

                      <input
                        required
                        name="locality"
                        type="text"
                        value={locality}
                        onChange={(e) => {
                          const value = e.target.value;
                          setLocality(value);

                          // Only show suggestions after user starts typing
                          setShowLocalities(value.trim().length >= 2);
                        }}
                        onFocus={() => {
                          // Don't show anything if input is empty
                          if (locality.trim().length >= 2) {
                            setShowLocalities(true);
                          }
                        }}
                        onBlur={() => {
                          setTimeout(() => setShowLocalities(false), 150);
                        }}
                        placeholder="e.g. Ganapathy, Gandhipuram"
                        autoComplete="off"
                        className="w-full rounded-xl border border-white/10 bg-white/[0.06] px-4 py-4 text-sm text-white outline-none transition placeholder:text-white/20 focus:border-[#d9ff55]/60"
                      />

                      {/* AUTOCOMPLETE SUGGESTIONS */}
                      {showLocalities && locality.trim().length >= 2 && (
                        <div className="absolute left-0 right-0 top-full z-50 mt-2 overflow-hidden rounded-xl border border-white/10 bg-[#1a1a1a] shadow-2xl">

                          {coimbatoreLocalities
                            .filter((item) =>
                              item.toLowerCase().includes(locality.trim().toLowerCase())
                            )
                            .slice(0, 6)
                            .map((item) => (
                              <button
                                key={item}
                                type="button"
                                onMouseDown={() => {
                                  setLocality(item);
                                  setShowLocalities(false);
                                }}
                                className="w-full px-4 py-3 text-left text-sm text-white/70 transition hover:bg-white/[0.08] hover:text-white"
                              >
                                {item}
                              </button>
                            ))}

                        </div>
                      )}
                    </div>

                    {/* AGE RANGE */}
                    <div>
                      <label className="mb-2 block text-[10px] font-medium uppercase tracking-[0.16em] text-white/30">
                        Age Range
                      </label>

                      <div className="relative">
                        <select
                          required
                          name="ageRange"
                          defaultValue=""
                          className="w-full appearance-none rounded-xl border border-white/10 bg-white/[0.06] px-4 py-4 pr-12 text-sm text-white outline-none transition duration-300 focus:border-[#d9ff55]/60 focus:bg-white/[0.08]"
                        >
                          <option
                            value=""
                            disabled
                            className="bg-[#111] text-white/60"
                          >
                            Select age range
                          </option>

                          <option
                            value="Below 18"
                            className="bg-[#111] text-white"
                          >
                            Below 18
                          </option>

                          <option
                            value="18–20"
                            className="bg-[#111] text-white"
                          >
                            18–20
                          </option>

                          <option
                            value="21–30"
                            className="bg-[#111] text-white"
                          >
                            21–30
                          </option>

                          <option
                            value="31–40"
                            className="bg-[#111] text-white"
                          >
                            31–40
                          </option>

                          <option
                            value="41–50"
                            className="bg-[#111] text-white"
                          >
                            41–50
                          </option>

                          <option
                            value="51+"
                            className="bg-[#111] text-white"
                          >
                            51+
                          </option>
                        </select>

                        {/* Chevron */}
                        <div className="pointer-events-none absolute inset-y-0 right-4 flex items-center text-white/40">
                          <svg
                            width="18"
                            height="18"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1.8"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path d="M6 9l6 6 6-6" />
                          </svg>
                        </div>
                      </div>
                    </div>

                    {/* INTERESTS */}
                    <div>
                      <label className="mb-3 block text-[10px] font-medium uppercase tracking-[0.16em] text-white/30">
                        Which interests appeal to you?
                      </label>

                      <div className="grid grid-cols-2 gap-3">

                        {/* MOVE */}
                        <label className="group flex cursor-pointer items-center gap-3 rounded-xl border border-white/10 bg-white/[0.06] px-4 py-3 transition hover:border-[#d9ff55]/40 hover:bg-white/[0.08]">
                          <input
                            type="checkbox"
                            name="interests"
                            value="Move"
                            className="h-4 w-4 accent-[#d9ff55]"
                          />

                          <span className="text-sm text-white/70 group-hover:text-white">
                            Move
                          </span>
                        </label>

                        {/* EXPLORE */}
                        <label className="group flex cursor-pointer items-center gap-3 rounded-xl border border-white/10 bg-white/[0.06] px-4 py-3 transition hover:border-[#d9ff55]/40 hover:bg-white/[0.08]">
                          <input
                            type="checkbox"
                            name="interests"
                            value="Explore"
                            className="h-4 w-4 accent-[#d9ff55]"
                          />

                          <span className="text-sm text-white/70 group-hover:text-white">
                            Explore
                          </span>
                        </label>

                        {/* NOTICE */}
                        <label className="group flex cursor-pointer items-center gap-3 rounded-xl border border-white/10 bg-white/[0.06] px-4 py-3 transition hover:border-[#d9ff55]/40 hover:bg-white/[0.08]">
                          <input
                            type="checkbox"
                            name="interests"
                            value="Notice"
                            className="h-4 w-4 accent-[#d9ff55]"
                          />

                          <span className="text-sm text-white/70 group-hover:text-white">
                            Notice
                          </span>
                        </label>

                        {/* RESET */}
                        <label className="group flex cursor-pointer items-center gap-3 rounded-xl border border-white/10 bg-white/[0.06] px-4 py-3 transition hover:border-[#d9ff55]/40 hover:bg-white/[0.08]">
                          <input
                            type="checkbox"
                            name="interests"
                            value="Reset"
                            className="h-4 w-4 accent-[#d9ff55]"
                          />

                          <span className="text-sm text-white/70 group-hover:text-white">
                            Reset
                          </span>
                        </label>

                      </div>
                    </div>

                    {/* PLATFORM */}
                    <div>
                      <label className="mb-3 block text-[10px] font-medium uppercase tracking-[0.16em] text-white/30">
                        Which device do you use?
                      </label>

                      <div className="grid grid-cols-2 gap-3">

                        {/* ANDROID */}
                        <label className="group flex cursor-pointer items-center gap-3 rounded-xl border border-white/10 bg-white/[0.06] px-4 py-3 transition hover:border-[#d9ff55]/40 hover:bg-white/[0.08]">
                          <input
                            required
                            type="radio"
                            name="platform"
                            value="Android"
                            className="h-4 w-4 accent-[#d9ff55]"
                          />

                          <span className="text-sm text-white/70 group-hover:text-white">
                            Android
                          </span>
                        </label>

                        {/* IOS */}
                        <label className="group flex cursor-pointer items-center gap-3 rounded-xl border border-white/10 bg-white/[0.06] px-4 py-3 transition hover:border-[#d9ff55]/40 hover:bg-white/[0.08]">
                          <input
                            required
                            type="radio"
                            name="platform"
                            value="iOS"
                            className="h-4 w-4 accent-[#d9ff55]"
                          />

                          <span className="text-sm text-white/70 group-hover:text-white">
                            iOS
                          </span>
                        </label>

                      </div>
                    </div>

                    {/* ERROR */}
                    {error && (
                      <p className="text-xs text-red-400">
                        {error}
                      </p>
                    )}

                    {/* BUTTON */}
                    <button
                      type="submit"
                      disabled={loading}
                      className="group mt-2 flex w-full items-center justify-between rounded-xl bg-[#d9ff55] px-5 py-4 text-sm font-semibold text-black transition hover:bg-[#e4ff82] disabled:cursor-not-allowed disabled:opacity-60"
                    >
                      <span>
                        {loading ? "Joining..." : "Join the alpha"}
                      </span>

                      <span className="flex h-8 w-8 items-center justify-center rounded-full bg-black text-white transition-transform duration-300 group-hover:translate-x-1">
                        →
                      </span>
                    </button>

                  </form>

                  <p className="mt-5 text-center text-[10px] leading-5 text-white/20">
                    No spam. Just an invite when Po Get It is ready.
                  </p>
                </>
              ) : (

                /* SUCCESS STATE */
                <div className="flex min-h-[400px] flex-col justify-center">

                  <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-full bg-[#d9ff55] text-xl text-black">
                    ✓
                  </div>

                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#d9ff55]">
                    You're on the list
                  </p>

                  <h3 className="mt-4 text-4xl font-semibold leading-[0.95] tracking-[-0.05em] text-white sm:text-5xl">
                    See you
                    <br />
                    <span className="text-white/35">
                      in Coimbatore.
                    </span>
                  </h3>

                  <p className="mt-5 max-w-sm text-sm leading-6 text-white/40">
                    Thanks for joining the Po Get It alpha. We'll contact you
                    when we're ready to let you in.
                  </p>
                </div>
              )}

            </div>
          </div>
        </div>

        {/* BOTTOM */}
        <div className="mt-7 flex flex-col gap-4 border-t border-black/10 pt-6 sm:flex-row sm:items-center sm:justify-between">

          <p className="text-sm text-black/40">
            Early explorers won't just use Po Get It — they'll help define it.
          </p>

          <div className="flex items-center gap-2 text-xs font-medium text-black/40">
            <span className="h-2 w-2 rounded-full bg-[#d9ff55]" />
            Alpha opening soon
          </div>

        </div>

      </div>
    </section>
  );
}
