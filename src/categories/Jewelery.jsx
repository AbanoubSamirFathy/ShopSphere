import { useEffect, useState } from "react";
import { apiServices } from "../api";
import ProductCardItem from "../ProductCardItem";
import Loading from "../Loading";
import ErrorState from "../ErrorState";

export default function Jewelery() {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    let isMounted = true;

    async function fetchProducts() {
      try {
        setIsLoading(true);
        setError("");

        const products = await apiServices.getProducts();

        if (isMounted) {
          setProducts(products);
        }
      } catch (err) {
        if (isMounted) {
          setError(err.message || "Failed to load products.");
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
    <section id="products" className="px-4 py-10 md:py-14">
      <div className="mx-auto max-w-screen-xl">
        <div className="mb-8 flex items-end justify-between gap-4">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-cyan-700">
              Jewelery
            </p>
            <h2 className="mt-2 text-3xl font-black text-slate-900 sm:text-4xl">
              Designed to feel premium, priced to move
            </h2>
          </div>
          <p className="hidden max-w-md text-sm leading-6 text-slate-500 md:block">
            A curated product wall with real ratings, category labels, and a
            cleaner storefront presentation.
          </p>
        </div>

        {isLoading && (
          <Loading
            title="Jewelery"
            message="Loading polished picks and gift-ready favorites."
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
          <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
            {products
              .filter((product) => product.category === "jewelery")
              .map((product) => (
                <ProductCardItem key={product.id} product={product} />
              ))}
          </div>
        )}
      </div>
    </section>
  );
}
