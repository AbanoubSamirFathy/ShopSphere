import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const slides = [
  {
    id: 0,
    eyebrow: "Electronics",
    title: "Smart tech for work, play, and everyday upgrades",
    description:
      "Browse high-rated electronics with fast delivery, strong reviews, and dependable prices.",
    accent: "From $49",
    badge: "Top Rated",
    background: "from-slate-950 via-slate-800 to-cyan-700",
    cardTitle: "Popular picks",
    points: ["Audio and accessories", "Laptops and gear", "Fast-moving deals"],
    to: "/categories/electronics",
  },
  {
    id: 1,
    eyebrow: "Jewelery",
    title: "Elegant pieces that turn simple outfits into standout looks",
    description:
      "Discover polished essentials and gift-ready favorites with a premium feel.",
    accent: "Gift Ready",
    badge: "New Arrivals",
    background: "from-amber-100 via-orange-100 to-rose-200",
    darkText: true,
    cardTitle: "Best for gifting",
    points: ["Statement necklaces", "Classic rings", "Refined finishes"],
    to: "/categories/jewelery",
  },
  {
    id: 2,
    eyebrow: "Men's Clothing",
    title: "Versatile menswear built for comfort and daily style",
    description:
      "Shop practical layers, wardrobe basics, and sharp casual pieces for every season.",
    accent: "Daily Essentials",
    badge: "Best Seller",
    background: "from-zinc-900 via-stone-800 to-emerald-700",
    cardTitle: "Easy wardrobe wins",
    points: ["Everyday shirts", "Layer-ready jackets", "Comfort-first fits"],
    to: "/categories/menclothing",
  },
  {
    id: 3,
    eyebrow: "Women's Clothing",
    title: "Fresh styles with confident silhouettes and standout color",
    description:
      "Explore trending looks, versatile staples, and pieces that move from day to night.",
    accent: "Fresh Styles",
    badge: "Trending Now",
    background: "from-fuchsia-700 via-rose-600 to-orange-400",
    cardTitle: "Seasonal highlights",
    points: ["New dress edits", "Soft layering pieces", "Day-to-night staples"],
    to: "/categories/womenclothing",
  },
];

export default function Carousal() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((currentIndex) => (currentIndex + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const goToSlide = (index) => setActiveIndex(index);
  const goToPrevious = () =>
    setActiveIndex((currentIndex) =>
      currentIndex === 0 ? slides.length - 1 : currentIndex - 1,
    );
  const goToNext = () =>
    setActiveIndex((currentIndex) => (currentIndex + 1) % slides.length);

  return (
    <section className="bg-gray-50 py-4 sm:py-6 md:py-8 lg:py-10 dark:bg-gray-900">
      <div className="mx-auto max-w-screen-xl px-3 sm:px-4 lg:px-6 2xl:px-0">
        <div className="relative overflow-hidden rounded-lg sm:rounded-xl md:rounded-2xl lg:rounded-[2rem] bg-slate-950 shadow-lg sm:shadow-xl md:shadow-2xl">
          <div className="relative h-64 sm:h-72 md:h-80 lg:h-[34rem]">
            {slides.map((slide, index) => {
              const isActive = index === activeIndex;
              return (
                <div
                  key={slide.id}
                  className={`absolute inset-0 transition-all duration-700 ${
                    isActive
                      ? "translate-x-0 opacity-100"
                      : "pointer-events-none translate-x-8 opacity-0"
                  }`}
                >
                  <div
                    className={`flex h-full w-full items-center bg-gradient-to-br ${slide.background}`}
                  >
                    <div className="grid w-full gap-4 sm:gap-6 md:gap-8 lg:gap-10 px-3 py-6 sm:px-6 sm:py-8 md:px-8 md:py-10 lg:grid-cols-[1.15fr_0.85fr] lg:px-16">
                      <div
                        className={
                          slide.darkText ? "text-slate-900" : "text-white"
                        }
                      >
                        <div className="mb-3 sm:mb-4 md:mb-5 flex flex-wrap items-center gap-2 sm:gap-3">
                          <span
                            className={`rounded-full px-2.5 sm:px-3 md:px-4 py-0.5 sm:py-1 text-xs font-semibold uppercase tracking-wider sm:tracking-[0.24em] ${
                              slide.darkText
                                ? "bg-white/70 text-slate-900"
                                : "bg-white/15 text-white"
                            }`}
                          >
                            {slide.eyebrow}
                          </span>
                          <span
                            className={`rounded-full px-2.5 sm:px-3 md:px-4 py-0.5 sm:py-1 text-xs font-medium ${
                              slide.darkText
                                ? "border border-slate-900/15 bg-slate-900/10 text-slate-800"
                                : "border border-white/20 bg-white/10 text-white/90"
                            }`}
                          >
                            {slide.badge}
                          </span>
                        </div>

                        <h2 className="max-w-2xl text-2xl font-black leading-tight sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl">
                          {slide.title}
                        </h2>

                        <p
                          className={`mt-3 sm:mt-4 md:mt-5 max-w-xl text-xs sm:text-sm leading-6 sm:leading-7 ${
                            slide.darkText ? "text-slate-700" : "text-white/80"
                          }`}
                        >
                          {slide.description}
                        </p>

                        <div className="mt-5 sm:mt-6 md:mt-8 flex flex-wrap items-center gap-3 sm:gap-4">
                          <Link
                            to={slide.to}
                            className={`rounded-full px-4 sm:px-5 md:px-6 py-2 sm:py-2.5 md:py-3 text-xs sm:text-sm font-semibold transition ${
                              slide.darkText
                                ? "bg-slate-900 text-white hover:bg-slate-800"
                                : "bg-white text-slate-900 hover:bg-slate-100"
                            }`}
                          >
                            Shop now
                          </Link>
                          <span
                            className={`text-xs sm:text-sm font-semibold ${
                              slide.darkText ? "text-slate-800" : "text-white"
                            }`}
                          >
                            {slide.accent}
                          </span>
                        </div>
                      </div>

                      <div className="hidden lg:flex items-end justify-start md:justify-end">
                        <div
                          className={`w-full max-w-sm rounded-lg sm:rounded-xl md:rounded-2xl border p-4 sm:p-5 md:p-6 backdrop-blur ${
                            slide.darkText
                              ? "border-slate-900/10 bg-white/55 text-slate-900"
                              : "border-white/15 bg-white/10 text-white"
                          }`}
                        >
                          <p
                            className={`text-xs uppercase tracking-wider sm:tracking-[0.22em] ${
                              slide.darkText
                                ? "text-slate-600"
                                : "text-white/70"
                            }`}
                          >
                            {slide.cardTitle}
                          </p>
                          <div className="mt-4 sm:mt-5 md:mt-6 space-y-2 sm:space-y-3">
                            {slide.points.map((point) => (
                              <div
                                key={point}
                                className="flex items-center justify-between gap-2 sm:gap-3 text-xs sm:text-sm"
                              >
                                <span>{point}</span>
                                <span
                                  className={`h-2 sm:h-2.5 w-2 sm:w-2.5 rounded-full flex-shrink-0 ${
                                    slide.darkText ? "bg-slate-900" : "bg-white"
                                  }`}
                                />
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="absolute bottom-3 sm:bottom-4 md:bottom-6 left-3 sm:left-6 md:left-12 z-20 flex items-center gap-2 sm:gap-3">
            {slides.map((slide, index) => (
              <button
                key={slide.id}
                type="button"
                onClick={() => goToSlide(index)}
                aria-label={`Go to slide ${index + 1}`}
                aria-current={index === activeIndex}
                className={`h-2 sm:h-2.5 md:h-3 rounded-full transition-all ${
                  index === activeIndex ? "w-8 sm:w-9 md:w-10 bg-white" : "w-2 sm:w-2.5 md:w-3 bg-white/45"
                }`}
              />
            ))}
          </div>

          <div className="absolute bottom-3 sm:bottom-4 md:bottom-6 right-3 sm:right-6 md:right-12 z-20 flex items-center gap-2 sm:gap-3">
            <button
              type="button"
              onClick={goToPrevious}
              className="inline-flex h-9 sm:h-10 md:h-11 w-9 sm:w-10 md:w-11 items-center justify-center rounded-full bg-white/20 text-white backdrop-blur transition hover:bg-white/35 active:scale-95"
              aria-label="Previous slide"
            >
              <svg
                className="h-4 sm:h-4.5 md:h-5 w-4 sm:w-4.5 md:w-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="m15 19-7-7 7-7"
                />
              </svg>
            </button>

            <button
              type="button"
              onClick={goToNext}
              className="inline-flex h-9 sm:h-10 md:h-11 w-9 sm:w-10 md:w-11 items-center justify-center rounded-full bg-white/20 text-white backdrop-blur transition hover:bg-white/35 active:scale-95"
              aria-label="Next slide"
            >
              <svg
                className="h-4 sm:h-4.5 md:h-5 w-4 sm:w-4.5 md:w-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="m9 5 7 7-7 7"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
