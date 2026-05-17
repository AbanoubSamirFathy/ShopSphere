import { useEffect, useState } from "react";
import { apiServices } from "../../services/api";
import Loading from "../Loading";
import ErrorState from "../ErrorState";

const categoryStyles = {
  electronics: {
    accent: "Tech Edit",
    gradient: "from-cyan-500 to-blue-600",
    to: "/categories/electronics",
  },
  jewelery: {
    accent: "Gift Picks",
    gradient: "from-amber-400 to-orange-500",
    to: "/categories/jewelery",
  },
  "men's clothing": {
    accent: "Daily Wear",
    gradient: "from-emerald-500 to-teal-600",
    to: "/categories/menclothing",
  },
  "women's clothing": {
    accent: "New Season",
    gradient: "from-rose-500 to-fuchsia-600",
    to: "/categories/womenclothing",
  },
};

export default function CategoryCard() {
  const [categories, setCategories] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    let isMounted = true;

    async function fetchProducts() {
      try {
        setIsLoading(true);
        setError("");

        const products = await apiServices.getProducts();
        const uniqueCategories = [
          ...new Set(products.map((product) => product.category)),
        ];

        if (isMounted) {
          setCategories(uniqueCategories);
        }
      } catch (err) {
        if (isMounted) {
          setError(err.message || "Failed to load categories.");
        }
      } finally {
        if (isMounted) {
          setIsLoading(false);
        }
      }
    }

    fetchProducts();

    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <section className="px-4 py-10 md:py-14">
      <div className="mx-auto max-w-screen-xl">
        <div className="mb-8 flex items-end justify-between gap-4">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-teal-600">
              Browse faster
            </p>
            <h2 className="mt-2 text-3xl font-black text-slate-900 sm:text-4xl">
              Shop by category
            </h2>
          </div>
          <p className="hidden max-w-md text-sm leading-6 text-slate-500 md:block">
            Explore the core departments in the store and jump straight into the
            products that match your style.
          </p>
        </div>

        {isLoading && (
          <Loading
            title="Shop by category"
            message="Preparing the main departments in the store."
            variant="categories"
          />
        )}
        {error && (
          <ErrorState
            title="Something went wrong"
            message={error}
            actionLabel="Browse all products"
            actionTo="/products"
          />
        )}

        {!isLoading && !error && (
          <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
            {categories.map((category) => {
              const style = categoryStyles[category] ?? {
                accent: "Featured",
                gradient: "from-slate-700 to-slate-900",
              };

              return (
                <div
                  key={category}
                  className="group overflow-hidden rounded-[1.75rem] border border-white/60 bg-white/80 p-6 shadow-lg shadow-slate-200/50 backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl cursor-pointer"
                  onClick={() => (window.location.href = style.to)}
                >
                  <div
                    className={`mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${style.gradient} text-sm font-bold uppercase tracking-[0.2em] text-white`}
                  >
                    {category[0]}
                  </div>
                  <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-500">
                    {style.accent}
                  </p>
                  <h3 className="mt-2 text-xl font-extrabold capitalize text-slate-900">
                    {category}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-slate-500">
                    Refined picks, standout value, and fast-moving favorites in
                    this collection.
                  </p>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}
