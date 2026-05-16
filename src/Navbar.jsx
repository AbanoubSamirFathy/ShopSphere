import { Link } from "react-router-dom";
import { routes } from "./routes";
import { categories } from "./routes";
import { useCart } from "./CartContext";

export default function Navbar() {
  const { cartCount } = useCart();

  return (
    <header className="sticky top-0 z-50 px-4 pt-4">
      <div className="mx-auto flex max-w-screen-xl items-center justify-between rounded-full border border-white/60 bg-white/80 px-5 py-3 shadow-lg shadow-slate-200/60 backdrop-blur-xl">
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

        <div className="flex items-center gap-2">
          <button
            type="button"
            className="hidden rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700 transition hover:border-slate-300 hover:bg-slate-50 sm:inline-flex"
          >
            Search
          </button>
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
      </div>
    </header>
  );
}
