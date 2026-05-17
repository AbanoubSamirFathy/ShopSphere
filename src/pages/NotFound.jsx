import React from "react";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <section className="relative overflow-hidden px-4 py-16 sm:px-6 lg:px-8">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,_rgba(14,165,233,0.18),_transparent_30%),radial-gradient(circle_at_bottom_right,_rgba(248,113,113,0.18),_transparent_24%)]" />

      <div className="mx-auto grid min-h-[70vh] max-w-6xl items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="text-left">
          <span className="inline-flex rounded-full border border-slate-200 bg-white/80 px-4 py-2 text-xs font-extrabold uppercase tracking-[0.28em] text-slate-500 shadow-sm backdrop-blur-sm">
            Error 404
          </span>

          <h1 className="mt-6 max-w-xl text-5xl font-black leading-tight text-slate-950 sm:text-6xl">
            The page wandered off the shelf.
          </h1>

          <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-600">
            The link may be outdated, the item may have moved, or the address
            might have a typo. Let&apos;s get you back to something worth
            browsing.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              to="/"
              className="inline-flex items-center justify-center rounded-full bg-slate-950 px-6 py-3 text-sm font-bold text-white transition hover:bg-cyan-700"
            >
              Return Home
            </Link>

            <Link
              to="/products"
              className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white/80 px-6 py-3 text-sm font-bold text-slate-700 shadow-sm backdrop-blur-sm transition hover:-translate-y-0.5 hover:border-cyan-200 hover:text-cyan-700"
            >
              Browse Products
            </Link>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-md">
          <div className="rounded-[2rem] border border-white/60 bg-white/75 p-6 shadow-2xl shadow-slate-300/40 backdrop-blur-md">
            <div className="rounded-[1.75rem] bg-gradient-to-br from-slate-950 via-slate-900 to-cyan-800 p-8 text-white">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-200/90">
                    Missing Route
                  </p>
                  <p className="mt-3 text-7xl font-black leading-none">404</p>
                </div>

                <div className="rounded-2xl bg-white/10 px-4 py-3 text-right backdrop-blur-sm">
                  <p className="text-xs uppercase tracking-[0.24em] text-cyan-100/80">
                    Status
                  </p>
                  <p className="mt-2 text-sm font-bold text-white">
                    Not Found
                  </p>
                </div>
              </div>

              <div className="mt-8 rounded-[1.5rem] bg-white/10 p-5 backdrop-blur-sm">
                <p className="text-sm font-semibold text-cyan-100">
                  Suggested next stop
                </p>
                <p className="mt-2 text-2xl font-extrabold">
                  Explore the latest products
                </p>
                <p className="mt-3 text-sm leading-6 text-slate-200">
                  Head back to the catalog and keep shopping without losing
                  momentum.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
