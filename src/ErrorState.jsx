import { Link } from "react-router-dom";

export default function ErrorState({
  title = "Something went wrong",
  message = "We couldn't load this content right now. Please try again in a moment.",
  actionLabel = "Browse products",
  actionTo = "/products",
}) {
  return (
    <div className="flex min-h-[50vh] items-center justify-center">
      <div className="w-full max-w-2xl rounded-[2rem] border border-red-200 bg-red-50/90 px-6 py-8 text-center shadow-lg shadow-red-100/60 backdrop-blur-sm">
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-red-600 text-white">
          <i className="fa-solid fa-circle-exclamation text-lg"></i>
        </div>

        <p className="mt-5 text-sm font-semibold uppercase tracking-[0.24em] text-red-600">
          Error
        </p>
        <h2 className="mt-2 text-3xl font-black text-slate-900">{title}</h2>
        <p className="mt-3 text-sm leading-7 text-slate-600">{message}</p>

        <Link
          to={actionTo}
          className="mt-6 inline-flex rounded-full bg-slate-950 px-5 py-3 text-sm font-semibold text-white transition hover:bg-cyan-700"
        >
          {actionLabel}
        </Link>
      </div>
    </div>
  );
}
