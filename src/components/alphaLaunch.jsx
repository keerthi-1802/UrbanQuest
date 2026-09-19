"use client";

import { useState } from "react";
import Covai from "../assets/Covai.png"

export default function AlphaLaunch() {
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const SCRIPT_URL =
    "https://script.google.com/macros/s/AKfycbzpH9lfkmT75blwhyRHfYU48O2xA2eo780hhYiDShZXJBjEjNHIf8KSHvTSmr7MCNPg/exec";

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    setError("");

    const form = e.currentTarget;

    const formData = new FormData(form);

    const data = {
      name: formData.get("name"),
      age: formData.get("age"),
      email: formData.get("email"),
    };

    try {
      await fetch(SCRIPT_URL, {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "text/plain;charset=utf-8",
        },
        body: JSON.stringify(data),
      });

      /*
       * With no-cors, the browser doesn't let us read
       * the response. If the request was sent successfully,
       * show the success state.
       */
      setSubmitted(true);
      form.reset();
    } catch (err) {
      console.error(err);
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="relative overflow-hidden bg-[#f5f5f0] px-6 py-20 sm:px-10 lg:px-16" id="alpha">
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
            UrbanQuest starts here. Join the first wave of explorers and help
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
                  Discover UrbanQuest before everyone else and help us shape
                  the experience.
                </p>
              </div>
            </div>

            {/* RIGHT — FORM */}
            <div className="relative flex flex-col justify-center border-t border-white/10 bg-white/[0.035] p-8 sm:p-12 lg:border-l lg:border-t-0 lg:p-14">

              {!submitted ? (
                <>
                  <div className="mb-9">

                    <p className="text-sm font-medium text-white">
                      Get early access
                    </p>

                    <h3 className="mt-3 max-w-md text-3xl font-semibold leading-[1] tracking-[-0.04em] sm:text-4xl">
                      Want to be part of
                      <span className="text-white/35">
                        {" "}the beginning?
                      </span>
                    </h3>

                    <p className="mt-4 max-w-md text-sm leading-6 text-white/40">
                      Leave your details and we'll let you know when the
                      UrbanQuest alpha opens.
                    </p>
                  </div>

                  <form
                    onSubmit={handleSubmit}
                    className="space-y-4"
                  >

                    {/* NAME */}
                    <div>
                      <label className="mb-2 block text-[10px] font-medium uppercase tracking-[0.16em] text-white/30">
                        Name
                      </label>

                      <input
                        required
                        name="name"
                        type="text"
                        placeholder="Your name"
                        className="w-full rounded-xl border border-white/10 bg-white/[0.06] px-4 py-4 text-sm text-white outline-none transition placeholder:text-white/20 focus:border-[#d9ff55]/60"
                      />
                    </div>

                    {/* AGE RANGE */}
                    <div>
                      <label className="mb-2 block text-[10px] font-medium uppercase tracking-[0.16em] text-white/30">
                        Age Category
                      </label>

                      <div className="relative">
                        <select
                          required
                          name="age"
                          defaultValue=""
                          className="w-full appearance-none rounded-xl border border-white/10 bg-white/[0.06] px-4 py-4 pr-12 text-sm text-white outline-none transition duration-300 focus:border-[#d9ff55]/60 focus:bg-white/[0.08]"
                        >
                          <option value="" disabled className="bg-[#111] text-white/60">
                            Select age range
                          </option>
                          <option value="Below 18" className="bg-[#111] text-white">
                            Below 18
                          </option>
                          <option value="18–20" className="bg-[#111] text-white">
                            18–20
                          </option>
                          <option value="20–35" className="bg-[#111] text-white">
                            20–35
                          </option>
                          <option value="35–40" className="bg-[#111] text-white">
                            35–40
                          </option>
                          <option value="40+" className="bg-[#111] text-white">
                            40+
                          </option>
                        </select>

                        {/* Custom Chevron */}
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

                    {/* EMAIL */}
                    <div>
                      <label className="mb-2 block text-[10px] font-medium uppercase tracking-[0.16em] text-white/30">
                        Email
                      </label>

                      <input
                        required
                        name="email"
                        type="email"
                        placeholder="you@example.com"
                        className="w-full rounded-xl border border-white/10 bg-white/[0.06] px-4 py-4 text-sm text-white outline-none transition placeholder:text-white/20 focus:border-[#d9ff55]/60"
                      />
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
                        {loading
                          ? "Joining..."
                          : "Join the alpha"}
                      </span>

                      <span className="flex h-8 w-8 items-center justify-center rounded-full bg-black text-white transition-transform duration-300 group-hover:translate-x-1">
                        →
                      </span>
                    </button>
                  </form>

                  <p className="mt-5 text-center text-[10px] leading-5 text-white/20">
                    No spam. Just an invite when UrbanQuest is ready.
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
                    Thanks for joining the UrbanQuest alpha. We'll contact you
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
            Early explorers won't just use UrbanQuest — they'll help define it.
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