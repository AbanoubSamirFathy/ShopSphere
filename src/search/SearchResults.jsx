import { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { apiServices } from "../api";
import ProductCardItem from "../ProductCardItem";
import { matchesSearch } from "./productSearch";
import Loading from "../Loading";
import ErrorState from "../ErrorState";

export default function SearchResults() {
  const [searchParams] = useSearchParams();
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  const query = searchParams.get("q")?.trim() ?? "";

  useEffect(() => {
    let isMounted = true;

    async function fetchProducts() {
      try {
        setIsLoading(true);
        setError("");

        const nextProducts = await apiServices.getProducts();

        if (isMounted) {
          setProducts(nextProducts);
        }
      } catch (err) {
        if (isMounted) {
          setError(err.message || "Failed to load search results.");
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

  const filteredProducts = query
    ? products.filter((product) => matchesSearch(product, query))
    : [];

  return (
    <section className="px-4 py-10 md:py-14">
      <div className="mx-auto max-w-screen-xl">
        <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-cyan-700">
              Search results
            </p>
            <h1 className="mt-2 text-3xl font-black text-slate-900 sm:text-4xl">
              {query ? `Results for "${query}"` : "Search for a product"}
            </h1>
          </div>
          <p className="max-w-md text-sm leading-6 text-slate-500">
            Search by product name or category from the navbar and review the
            matching items here.
          </p>
        </div>

        {!query && (
          <div className="rounded-[2rem] border border-dashed border-slate-300 bg-white/70 px-6 py-12 text-center shadow-sm backdrop-blur-sm">
            <p className="text-lg font-bold text-slate-900">
              Enter a product name or category to start searching.
            </p>
            <p className="mt-2 text-sm text-slate-500">
              Use the navbar search bar, then click the search button.
            </p>
          </div>
        )}

        {query && isLoading && (
          <Loading
            title="Search results"
            message={`Searching the catalog for "${query}".`}
          />
        )}
        {query && error && (
          <ErrorState
            title="Something went wrong"
            message={error}
            actionLabel="Browse all products"
            actionTo="/products"
          />
        )}

        {query && !isLoading && !error && (
          <>
            <p className="mb-6 text-sm font-medium text-slate-500">
              Found {filteredProducts.length} result
              {filteredProducts.length === 1 ? "" : "s"} for "{query}".
            </p>

            {filteredProducts.length > 0 ? (
              <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
                {filteredProducts.map((product) => (
                  <ProductCardItem key={product.id} product={product} />
                ))}
              </div>
            ) : (
              <div className="rounded-[2rem] border border-dashed border-slate-300 bg-white/70 px-6 py-12 text-center shadow-sm backdrop-blur-sm">
                <p className="text-lg font-bold text-slate-900">
                  No products match "{query}".
                </p>
                <p className="mt-2 text-sm text-slate-500">
                  Try a different product name or category, or browse the full
                  catalog.
                </p>
                <Link
                  to="/products"
                  className="mt-6 inline-flex rounded-full bg-slate-950 px-5 py-3 text-sm font-semibold text-white transition hover:bg-cyan-700"
                >
                  Browse all products
                </Link>
              </div>
            )}
          </>
        )}
      </div>
    </section>
  );
}
