import { Link } from "react-router-dom";
import { categories } from "./routes";

export default function Footer() {
  return (
    <footer className="px-4 pb-8">
      <div className="mx-auto max-w-screen-xl overflow-hidden rounded-[2rem] bg-slate-950 px-6 py-10 text-slate-200 shadow-2xl md:px-10">
        <div className="grid gap-10 md:grid-cols-[1.2fr_0.8fr_0.8fr_0.8fr]">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-cyan-300">
              ShopSphere
            </p>
            <h2 className="mt-3 text-3xl font-black text-white">
              A cleaner way to discover standout products.
            </h2>
            <p className="mt-4 max-w-md text-sm leading-7 text-slate-400">
              Built for browsing, gifting, and everyday shopping with a modern
              storefront feel across electronics, fashion, and accessories.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-white">
              Shop
            </h3>
            <div className="mt-4 space-y-3 text-sm text-slate-400">
              {categories.map((category) => (
                <Link
                  key={category.routeName}
                  to={category.path}
                  className="block transition hover:text-white"
                >
                  {category.routeName}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-white">
              Company
            </h3>
            <div className="mt-4 space-y-3 text-sm text-slate-400">
              <Link to="#" className="block transition hover:text-white">
                About us
              </Link>
              <Link to="#" className="block transition hover:text-white">
                Shipping
              </Link>
              <Link to="#" className="block transition hover:text-white">
                Support
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-white">
              Legal
            </h3>
            <div className="mt-4 space-y-3 text-sm text-slate-400">
              <Link to="#" className="block transition hover:text-white">
                Privacy policy
              </Link>
              <Link to="#" className="block transition hover:text-white">
                Terms and conditions
              </Link>
              <Link to="#" className="block transition hover:text-white">
                Returns
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-4 border-t border-white/10 pt-6 text-sm text-slate-400 md:flex-row md:items-center md:justify-between">
          <p>© 2026 ShopSphere. All rights reserved.</p>
          <div className="flex gap-5">
            <Link
              to="https://facebook.com/"
              className="transition hover:text-white"
              target="_blank"
            >
              Facebook
            </Link>
            <Link
              to="https://instagram.com/"
              className="transition hover:text-white"
              target="_blank"
            >
              Instagram
            </Link>
            <Link
              to="https://x.com/"
              className="transition hover:text-white"
              target="_blank"
            >
              X
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
