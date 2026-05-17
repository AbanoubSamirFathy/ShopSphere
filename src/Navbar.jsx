import { useEffect, useState } from "react";
import {
  Link,
  useLocation,
  useNavigate,
  useSearchParams,
} from "react-router-dom";
import { routes } from "./routes";
import { categories } from "./routes";
import { useCart } from "./CartContext";

export default function Navbar() {
  const { cartCount } = useCart();
  const navigate = useNavigate();
  const location = useLocation();
  const [searchParams] = useSearchParams();
  const [searchInput, setSearchInput] = useState("");

  useEffect(() => {
    if (location.pathname === "/search") {
      setSearchInput(searchParams.get("q") ?? "");
    }
  }, [location.pathname, searchParams]);

  function handleSubmit(event) {
    event.preventDefault();
    const query = searchInput.trim();

    navigate(query ? `/search?q=${encodeURIComponent(query)}` : "/search");
  }

  function clearSearch() {
    setSearchInput("");

    if (location.pathname === "/search") {
      navigate("/search");
    }
  }

  return (
    <header className="sticky top-0 z-50 px-4 pt-4">
      <div className="mx-auto flex max-w-screen-xl flex-wrap items-center justify-between gap-4 rounded-[2rem] border border-white/60 bg-white/80 px-5 py-3 shadow-lg shadow-slate-200/60 backdrop-blur-xl">
        <Link to="#" className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-teal-500 to-cyan-600 text-base font-black text-white">
            S
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-slate-500">
              Modern Store
            </p>
            <h1 className="text-lg font-extrabold text-slate-900">
              ShopSphere
            </h1>
          </div>
        </Link>

        <nav className="hidden items-center gap-7 lg:flex">
          {routes.slice(0, 2).map((item) => (
            <Link
              key={item.routeName}
              to={item.path}
              className="text-sm font-semibold text-slate-600 transition hover:text-slate-950"
            >
              {item.routeName}
            </Link>
          ))}

          <div className="relative group">
            {routes.slice(2).map((item) => (
              <Link
                key={item.routeName}
                to={item.path}
                className="text-sm font-semibold text-slate-600 transition hover:text-slate-950"
              >
                {item.routeName}
              </Link>
            ))}

            <ul className="absolute left-0 z-50 hidden w-48 overflow-hidden rounded-lg border border-gray-200 bg-white py-2 shadow-lg group-hover:block">
              {categories.map((category) => (
                <li key={category.routeName}>
                  <Link
                    to={category.path}
                    className="block px-4 py-2 text-sm text-slate-700 transition hover:bg-gray-100"
                  >
                    {category.routeName}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </nav>

        <div className="flex w-full items-center gap-2 sm:w-auto">
          <form
            onSubmit={handleSubmit}
            className="hidden min-w-[360px] flex-1 items-center gap-2 sm:flex"
          >
            <label className="relative flex-1">
              <i className="fa-solid fa-magnifying-glass pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-sm text-slate-400"></i>
              <input
                type="search"
                value={searchInput}
                onChange={(event) => setSearchInput(event.target.value)}
                placeholder="Search products"
                className="w-full rounded-full border border-slate-200 bg-white px-11 py-3 pr-12 text-sm font-medium text-slate-700 outline-none transition placeholder:text-slate-400 focus:border-cyan-400 focus:ring-4 focus:ring-cyan-100"
              />
              {searchInput && (
                <button
                  type="button"
                  onClick={clearSearch}
                  className="absolute right-2 top-1/2 inline-flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full text-slate-400 transition hover:bg-slate-100 hover:text-slate-700"
                  aria-label="Clear search"
                >
                  <i className="fa-solid fa-xmark"></i>
                </button>
              )}
            </label>

            <button
              type="submit"
              className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-900 transition hover:border-slate-300 hover:bg-slate-100"
            >
              Search
            </button>
          </form>

          <Link
            to="/cart"
            className="inline-flex items-center gap-2 rounded-full bg-slate-950 px-4 py-2 text-sm font-semibold text-white transition hover:bg-slate-800"
          >
            <span className="flex h-6 min-w-6 items-center justify-center rounded-full bg-white/15 px-1 text-xs">
              {cartCount}
            </span>
            <i className="fa-solid fa-cart-shopping"></i>
            Cart
          </Link>
        </div>

        <form
          onSubmit={handleSubmit}
          className="flex w-full items-center gap-2 sm:hidden"
        >
          <label className="relative flex-1">
            <i className="fa-solid fa-magnifying-glass pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-sm text-slate-400"></i>
            <input
              type="search"
              value={searchInput}
              onChange={(event) => setSearchInput(event.target.value)}
              placeholder="Search products"
              className="w-full rounded-full border border-slate-200 bg-white px-11 py-3 pr-12 text-sm font-medium text-slate-700 outline-none transition placeholder:text-slate-400 focus:border-cyan-400 focus:ring-4 focus:ring-cyan-100"
            />
            {searchInput && (
              <button
                type="button"
                onClick={clearSearch}
                className="absolute right-2 top-1/2 inline-flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full text-slate-400 transition hover:bg-slate-100 hover:text-slate-700"
                aria-label="Clear search"
              >
                <i className="fa-solid fa-xmark"></i>
              </button>
            )}
          </label>
          <button
            type="submit"
            className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-900 transition hover:border-slate-300 hover:bg-slate-100 sm:inline-flex"
          >
            Search
          </button>
        </form>
      </div>
    </header>
  );
}
