import { Link } from "react-router-dom";
import AddToCartButton from "../AddToCartButton";

export default function ProductCardItem({ product }) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-[1.75rem] border border-white/60 bg-white/85 p-5 shadow-lg shadow-slate-200/50 backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl">
      <Link to={`/products/${product.id}`} className="block">
        <div className="relative flex h-64 items-center justify-center overflow-hidden rounded-[1.5rem] bg-gradient-to-br from-slate-100 to-white">
          <span className="absolute left-4 top-4 rounded-full bg-slate-950 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-white">
            {product.category}
          </span>
          <img
            className="h-44 w-44 object-contain transition duration-300 group-hover:scale-105"
            src={product.image}
            alt={product.title}
          />
        </div>
      </Link>

      <div className="flex flex-1 flex-col pt-5">
        <div className="mb-3 flex items-center justify-between">
          <span className="rounded-full bg-amber-100 px-3 py-1 text-xs font-semibold text-amber-700">
            {product.rating.rate} rating
          </span>
          <span className="text-sm font-medium text-slate-500">
            {product.rating.count} reviews
          </span>
        </div>

        <Link to={`/products/${product.id}`} className="block">
          <h3 className="line-clamp-2 text-lg font-extrabold leading-7 text-slate-900 transition group-hover:text-cyan-700">
            {product.title}
          </h3>
        </Link>

        <p className="mt-3 line-clamp-3 text-sm leading-6 text-slate-500">
          {product.description}
        </p>

        <div className="mt-6 flex items-center justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
              Price
            </p>
            <p className="text-2xl font-black text-slate-950">
              ${product.price}
            </p>
          </div>

          <AddToCartButton product={product} />
        </div>
      </div>
    </article>
  );
}
