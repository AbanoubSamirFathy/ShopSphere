function ProductCardSkeleton() {
  return (
    <div className="overflow-hidden rounded-[1.75rem] border border-white/60 bg-white/85 p-5 shadow-lg shadow-slate-200/50 backdrop-blur-sm">
      <div className="h-64 animate-pulse rounded-[1.5rem] bg-slate-200/80" />
      <div className="mt-5 flex items-center justify-between gap-4">
        <div className="h-6 w-24 animate-pulse rounded-full bg-slate-200/80" />
        <div className="h-5 w-20 animate-pulse rounded-full bg-slate-200/70" />
      </div>
      <div className="mt-5 h-7 w-4/5 animate-pulse rounded-full bg-slate-300/80" />
      <div className="mt-3 h-4 w-full animate-pulse rounded-full bg-slate-200/70" />
      <div className="mt-2 h-4 w-5/6 animate-pulse rounded-full bg-slate-200/70" />
      <div className="mt-6 flex items-end justify-between gap-4">
        <div className="space-y-2">
          <div className="h-4 w-12 animate-pulse rounded-full bg-slate-200/70" />
          <div className="h-8 w-20 animate-pulse rounded-full bg-slate-300/80" />
        </div>
        <div className="h-11 w-32 animate-pulse rounded-full bg-slate-300/80" />
      </div>
    </div>
  );
}

function CategoryCardSkeleton() {
  return (
    <div className="rounded-[1.75rem] border border-white/60 bg-white/85 p-6 shadow-lg shadow-slate-200/50 backdrop-blur-sm">
      <div className="h-14 w-14 animate-pulse rounded-2xl bg-slate-300/80" />
      <div className="mt-5 h-4 w-20 animate-pulse rounded-full bg-slate-200/70" />
      <div className="mt-3 h-7 w-40 animate-pulse rounded-full bg-slate-300/80" />
      <div className="mt-4 h-4 w-full animate-pulse rounded-full bg-slate-200/70" />
      <div className="mt-2 h-4 w-5/6 animate-pulse rounded-full bg-slate-200/70" />
    </div>
  );
}

function DetailSkeleton() {
  return (
    <div className="grid gap-8 overflow-hidden rounded-[2rem] border border-white/60 bg-white/85 p-6 shadow-xl shadow-slate-200/50 backdrop-blur-sm lg:grid-cols-[1fr_1.05fr] lg:p-8">
      <div className="rounded-[1.75rem] bg-gradient-to-br from-slate-100 to-white p-6">
        <div className="mb-4 flex items-center justify-between">
          <div className="h-9 w-36 animate-pulse rounded-full bg-slate-300/80" />
          <div className="h-9 w-24 animate-pulse rounded-full bg-emerald-100" />
        </div>
        <div className="h-[24rem] animate-pulse rounded-[1.5rem] bg-slate-200/80" />
      </div>

      <div className="flex flex-col justify-center">
        <div className="h-4 w-28 animate-pulse rounded-full bg-cyan-100" />
        <div className="mt-4 h-11 w-4/5 animate-pulse rounded-[1rem] bg-slate-300/80" />
        <div className="mt-6 flex flex-wrap gap-4">
          <div className="h-9 w-28 animate-pulse rounded-full bg-slate-300/80" />
          <div className="h-8 w-24 animate-pulse rounded-full bg-amber-100" />
          <div className="h-6 w-24 animate-pulse rounded-full bg-slate-200/70" />
        </div>
        <div className="mt-6 h-4 w-full animate-pulse rounded-full bg-slate-200/70" />
        <div className="mt-2 h-4 w-full animate-pulse rounded-full bg-slate-200/70" />
        <div className="mt-2 h-4 w-5/6 animate-pulse rounded-full bg-slate-200/70" />
        <div className="mt-8 grid gap-4 sm:grid-cols-3">
          {[1, 2, 3].map((item) => (
            <div key={item} className="rounded-2xl bg-slate-50 p-4">
              <div className="h-4 w-16 animate-pulse rounded-full bg-slate-200/70" />
              <div className="mt-3 h-5 w-24 animate-pulse rounded-full bg-slate-300/80" />
            </div>
          ))}
        </div>
        <div className="mt-8 flex flex-wrap gap-4">
          <div className="h-12 w-36 animate-pulse rounded-full bg-slate-300/80" />
          <div className="h-12 w-36 animate-pulse rounded-full bg-slate-200/70" />
        </div>
      </div>
    </div>
  );
}

export default function Loading({
  title = "Loading",
  message = "Please wait while we prepare your content.",
  variant = "products",
}) {
  const isDetail = variant === "detail";
  const isCategories = variant === "categories";

  return (
    <div className="flex min-h-[70vh] items-center justify-center">
      <div className="w-full max-w-3xl space-y-8">
        <div className="mx-auto w-full max-w-2xl rounded-[2rem] border border-white/60 bg-white/80 px-6 py-5 shadow-lg shadow-slate-200/50 backdrop-blur-sm">
          <div className="flex items-center gap-4">
            <div className="relative flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-950 text-white">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-2xl bg-cyan-400/25" />
              <i className="fa-solid fa-spinner animate-spin text-lg"></i>
            </div>
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-cyan-700">
                Loading
              </p>
              <h2 className="mt-1 text-2xl font-black text-slate-900">
                {title}
              </h2>
              <p className="mt-1 text-sm leading-6 text-slate-500">
                {message}
              </p>
            </div>
          </div>
        </div>

        {isDetail ? (
          <DetailSkeleton />
        ) : isCategories ? (
          <div className="grid gap-5 sm:grid-cols-2">
            {[1, 2, 3, 4].map((item) => (
              <CategoryCardSkeleton key={item} />
            ))}
          </div>
        ) : (
          <div className="grid gap-6 sm:grid-cols-2">
            {[1, 2, 3, 4].map((item) => (
              <ProductCardSkeleton key={item} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
