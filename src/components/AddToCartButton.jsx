import { useCart } from "../context/CartContext";

export default function CartButton({ product }) {
  const { cartItems, addToCart, updateQuantity } = useCart();
  const cartItem = cartItems.find((item) => item.id === product.id);
  const quantity = cartItem?.quantity ?? 0;

  if (quantity === 0) {
    return (
      <button
        type="button"
        onClick={() => addToCart(product)}
        className="rounded-full bg-slate-950 px-5 py-3 text-sm font-semibold text-white transition hover:bg-cyan-700"
      >
        <i className="fa-solid fa-plus me-2"></i>
        Add to Cart
      </button>
    );
  }

  return (
    <div className="inline-flex items-center rounded-full border border-slate-200 bg-white shadow-sm">
      <button
        type="button"
        onClick={() => updateQuantity(product.id, quantity - 1)}
        className="inline-flex h-11 w-11 items-center justify-center rounded-l-full text-lg font-semibold text-slate-700 transition hover:bg-slate-100"
        aria-label={`Decrease quantity of ${product.title}`}
      >
        -
      </button>

      <span className="min-w-10 px-2 text-center text-sm font-bold text-slate-950">
        {quantity}
      </span>

      <button
        type="button"
        onClick={() => updateQuantity(product.id, quantity + 1)}
        className="inline-flex h-11 w-11 items-center justify-center rounded-r-full text-lg font-semibold text-slate-700 transition hover:bg-slate-100"
        aria-label={`Increase quantity of ${product.title}`}
      >
        +
      </button>
    </div>
  );
}
