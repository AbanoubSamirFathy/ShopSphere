import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { apiServices } from "./api";
import { useCart } from "./CartContext";
import CartButton from "./CartButton";

export default function ProductDetails() {
  const { productId } = useParams();
  const { addToCart } = useCart();
  const [product, setProduct] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    let isMounted = true;

    async function fetchProduct() {
      try {
        setIsLoading(true);
        setError("");

        const data = await apiServices.getProductById(productId);

        if (isMounted) {
          setProduct(data);
        }
      } catch (err) {
        if (isMounted) {
          setError(err.message || "Failed to load product details.");
        }
      } finally {
        if (isMounted) {
          setIsLoading(false);
        }
      }
    }

    fetchProduct();

    return () => {
      isMounted = false;
    };
  }, [productId]);

  if (isLoading) {
    return (
      <section className="px-4 py-12">
        <div className="mx-auto max-w-screen-xl">
          <p className="text-sm text-slate-600">Loading product details...</p>
        </div>
      </section>
    );
  }

  if (error || !product) {
    return (
      <section className="px-4 py-12">
        <div className="mx-auto max-w-screen-xl rounded-[1.75rem] border border-red-200 bg-red-50 p-8">
          <p className="text-sm font-medium text-red-700">
            {error || "Product not found."}
          </p>
          <Link
            to="/products"
            className="mt-4 inline-flex rounded-full bg-slate-950 px-5 py-3 text-sm font-semibold text-white transition hover:bg-cyan-700"
          >
            Back to products
          </Link>
        </div>
      </section>
    );
  }

  return (
    <section className="px-4 py-10 md:py-14">
      <div className="mx-auto max-w-screen-xl">
        <Link
          to="/products"
          className="mb-6 inline-flex items-center gap-2 text-sm font-semibold text-slate-600 transition hover:text-cyan-700"
        >
          <span aria-hidden="true">←</span>
          Back to products
        </Link>

        <div className="grid gap-8 overflow-hidden rounded-[2rem] border border-white/60 bg-white/85 p-6 shadow-xl shadow-slate-200/50 backdrop-blur-sm lg:grid-cols-[1fr_1.05fr] lg:p-8">
          <div className="rounded-[1.75rem] bg-gradient-to-br from-slate-100 to-white p-6">
            <div className="mb-4 flex items-center justify-between">
              <span className="rounded-full bg-slate-950 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-white">
                {product.category}
              </span>
              <span className="rounded-full bg-emerald-100 px-4 py-2 text-xs font-semibold text-emerald-700">
                In stock
              </span>
            </div>

            <div className="flex min-h-[24rem] items-center justify-center">
              <img
                className="max-h-[24rem] w-full object-contain"
                src={product.image}
                alt={product.title}
              />
            </div>
          </div>

          <div className="flex flex-col justify-center">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-cyan-700">
              Product details
            </p>
            <h1 className="mt-3 text-3xl font-black leading-tight text-slate-900 md:text-4xl">
              {product.title}
            </h1>

            <div className="mt-5 flex flex-wrap items-center gap-4">
              <p className="text-3xl font-black text-slate-950">${product.price}</p>
              <span className="rounded-full bg-amber-100 px-3 py-1 text-sm font-semibold text-amber-700">
                {product.rating.rate} stars
              </span>
              <span className="text-sm font-medium text-slate-500">
                {product.rating.count} reviews
              </span>
            </div>

            <p className="mt-6 text-base leading-8 text-slate-600">
              {product.description}
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              <div className="rounded-2xl bg-slate-50 p-4">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
                  Shipping
                </p>
                <p className="mt-2 text-sm font-semibold text-slate-900">
                  1-3 business days
                </p>
              </div>
              <div className="rounded-2xl bg-slate-50 p-4">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
                  Returns
                </p>
                <p className="mt-2 text-sm font-semibold text-slate-900">
                  30 day easy return
                </p>
              </div>
              <div className="rounded-2xl bg-slate-50 p-4">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
                  Support
                </p>
                <p className="mt-2 text-sm font-semibold text-slate-900">
                  Dedicated live help
                </p>
              </div>
            </div>

            <div className="mt-8 flex flex-wrap gap-4">
              <CartButton product={product} />
              <button
                type="button"
                className="rounded-full border border-slate-200 bg-white px-6 py-3 text-sm font-semibold text-slate-700 transition hover:border-slate-300 hover:bg-slate-50"
              >
                Add to wishlist
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
