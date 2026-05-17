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
    <header className="sticky top-0 z-50 px-2 sm:px-3 md:px-4 pt-2 sm:pt-3 md:pt-4">
      <div className="mx-auto flex max-w-screen-xl items-center justify-between gap-2 sm:gap-3 md:gap-4 lg:gap-4 rounded-lg sm:rounded-xl md:rounded-2xl lg:rounded-[2rem] border border-white/60 bg-white/80 px-3 sm:px-4 md:px-5 py-2 sm:py-2.5 md:py-3 shadow-lg shadow-slate-200/60 backdrop-blur-xl">
        <Link to="#" className="flex items-center gap-1.5 sm:gap-2.5 md:gap-3 flex-shrink-0">
          <div className="flex h-9 sm:h-10 md:h-11 w-9 sm:w-10 md:w-11 items-center justify-center rounded-full bg-gradient-to-br from-teal-500 to-cyan-600 text-xs sm:text-sm font-black text-white flex-shrink-0">
            S
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider sm:tracking-[0.24em] text-slate-500">
              Modern Store
            </p>
            <h1 className="text-base sm:text-lg font-extrabold text-slate-900">
              ShopSphere
            </h1>
          </div>
        </Link>

        <nav className="hidden items-center gap-4 sm:gap-5 md:gap-6 lg:gap-7 lg:flex">
          {routes.slice(0, 2).map((item) => (
            <Link
              key={item.routeName}
              to={item.path}
              className="text-xs sm:text-sm font-semibold text-slate-600 transition hover:text-slate-950"
            >
              {item.routeName}
            </Link>
          ))}

          <div className="relative group">
            {routes.slice(2).map((item) => (
              <Link
                key={item.routeName}
                to={item.path}
                className="text-xs sm:text-sm font-semibold text-slate-600 transition hover:text-slate-950"
              >
                {item.routeName}
              </Link>
            ))}

            <ul className="absolute left-0 z-50 hidden w-40 sm:w-44 md:w-48 overflow-hidden rounded-lg border border-gray-200 bg-white py-2 shadow-lg group-hover:block">
              {categories.map((category) => (
                <li key={category.routeName}>
                  <Link
                    to={category.path}
                    className="block px-3 sm:px-4 py-2 text-xs sm:text-sm text-slate-700 transition hover:bg-gray-100"
                  >
                    {category.routeName}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </nav>

        <div className="flex items-center gap-2 sm:gap-3 md:gap-4 lg:gap-4">
          <form
            onSubmit={handleSubmit}
            className="hidden min-w-[280px] sm:min-w-[320px] md:min-w-[360px] md:flex items-center gap-2"
          >
            <label className="relative flex-1">
              <i className="fa-solid fa-magnifying-glass pointer-events-none absolute left-3 md:left-4 top-1/2 -translate-y-1/2 text-xs md:text-sm text-slate-400"></i>
              <input
                type="search"
                value={searchInput}
                onChange={(event) => setSearchInput(event.target.value)}
                placeholder="Search products"
                className="w-full rounded-full border border-slate-200 bg-white px-9 md:px-11 py-2.5 md:py-3 pr-10 md:pr-12 text-xs md:text-sm font-medium text-slate-700 outline-none transition placeholder:text-slate-400 focus:border-cyan-400 focus:ring-2 md:focus:ring-4 focus:ring-cyan-100"
              />
              {searchInput && (
                <button
                  type="button"
                  onClick={clearSearch}
                  className="absolute right-1 md:right-2 top-1/2 inline-flex h-8 md:h-9 w-8 md:w-9 -translate-y-1/2 items-center justify-center rounded-full text-slate-400 transition hover:bg-slate-100 hover:text-slate-700"
                  aria-label="Clear search"
                >
                  <i className="fa-solid fa-xmark text-xs"></i>
                </button>
              )}
            </label>

            <button
              type="submit"
              className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white px-4 md:px-5 py-2.5 md:py-3 text-xs md:text-sm font-semibold text-slate-900 transition hover:border-slate-300 hover:bg-slate-100 whitespace-nowrap flex-shrink-0"
            >
              Search
            </button>
          </form>

          <form
            onSubmit={handleSubmit}
            className="md:hidden flex items-center gap-2 flex-1"
          >
            <label className="relative flex-1">
              <i className="fa-solid fa-magnifying-glass pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-xs text-slate-400"></i>
              <input
                type="search"
                value={searchInput}
                onChange={(event) => setSearchInput(event.target.value)}
                placeholder="Search products"
                className="w-full rounded-full border border-slate-200 bg-white px-9 py-2.5 pr-10 text-xs font-medium text-slate-700 outline-none transition placeholder:text-slate-400 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-100"
              />
              {searchInput && (
                <button
                  type="button"
                  onClick={clearSearch}
                  className="absolute right-1 top-1/2 inline-flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full text-slate-400 transition hover:bg-slate-100 hover:text-slate-700"
                  aria-label="Clear search"
                >
                  <i className="fa-solid fa-xmark text-xs"></i>
                </button>
              )}
            </label>
            <button
              type="submit"
              className="rounded-full border border-slate-200 bg-white px-4 py-2.5 text-xs font-semibold text-slate-900 transition hover:border-slate-300 hover:bg-slate-100 whitespace-nowrap flex-shrink-0"
            >
              Search
            </button>
          </form>

          <Link
            to="/cart"
            className="inline-flex items-center gap-1.5 sm:gap-2 rounded-full bg-slate-950 px-3 sm:px-3.5 md:px-4 py-2 md:py-2.5 text-xs md:text-sm font-semibold text-white transition hover:bg-slate-800 whitespace-nowrap flex-shrink-0"
          >
            {cartCount > 0 && (
              <span className="flex h-5 sm:h-6 min-w-5 sm:min-w-6 items-center justify-center rounded-full bg-white/15 px-1 text-xs">
                {cartCount}
              </span>
            )}
            {cartCount === 0 && <i className="fa-solid fa-cart-shopping text-xs sm:text-sm"></i>}
            <span className="hidden sm:inline">Cart</span>
          </Link>
        </div>
      </div>
    </header>
  );
}
