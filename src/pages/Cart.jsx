import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

export default function Cart() {
  const {
    cartItems,
    cartSubtotal,
    updateQuantity,
    removeFromCart,
    clearCart,
  } = useCart();

  const shipping = cartItems.length > 0 ? 15 : 0;
  const tax = cartSubtotal * 0.14;
  const total = cartSubtotal + shipping + tax;

  if (cartItems.length === 0) {
    return (
      <section className="px-4 py-12 md:py-16">
        <div className="mx-auto max-w-screen-md rounded-[2rem] border border-white/60 bg-white/85 p-10 text-center shadow-xl shadow-slate-200/50 backdrop-blur-sm">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-cyan-700">
            Your cart
          </p>
          <h1 className="mt-3 text-4xl font-black text-slate-900">Cart is empty</h1>
          <p className="mt-4 text-base leading-7 text-slate-500">
            Add products to your cart from any listing or details page, then come
            back here to review your order.
          </p>
          <Link
            to="/products"
            className="mt-8 inline-flex rounded-full bg-slate-950 px-6 py-3 text-sm font-semibold text-white transition hover:bg-cyan-700"
          >
            Continue shopping
          </Link>
        </div>
      </section>
    );
  }

  return (
    <section className="px-4 py-10 md:py-14">
      <div className="mx-auto max-w-screen-xl">
        <div className="mb-8 flex items-end justify-between gap-4">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-cyan-700">
              Your cart
            </p>
            <h1 className="mt-2 text-3xl font-black text-slate-900 sm:text-4xl">
              Review your order before checkout
            </h1>
          </div>
          <button
            type="button"
            onClick={clearCart}
            className="rounded-full border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-700 transition hover:border-slate-300 hover:bg-slate-50"
          >
            Clear cart
          </button>
        </div>

        <div className="grid gap-8 lg:grid-cols-[1.4fr_0.8fr]">
          <div className="space-y-5">
            {cartItems.map((item) => (
              <article
                key={item.id}
                className="grid gap-5 rounded-[1.75rem] border border-white/60 bg-white/85 p-5 shadow-lg shadow-slate-200/50 backdrop-blur-sm md:grid-cols-[140px_1fr_auto]"
              >
                <Link
                  to={`/products/${item.id}`}
                  className="flex h-36 items-center justify-center rounded-[1.5rem] bg-gradient-to-br from-slate-100 to-white p-4"
                >
                  <img
                    className="max-h-28 w-full object-contain"
                    src={item.image}
                    alt={item.title}
                  />
                </Link>

                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
                    {item.category}
                  </p>
                  <Link to={`/products/${item.id}`}>
                    <h2 className="mt-2 text-xl font-extrabold text-slate-900 transition hover:text-cyan-700">
                      {item.title}
                    </h2>
                  </Link>
                  <p className="mt-3 line-clamp-2 text-sm leading-6 text-slate-500">
                    {item.description}
                  </p>

                  <div className="mt-5 flex flex-wrap items-center gap-3">
                    <div className="inline-flex items-center rounded-full border border-slate-200 bg-white">
                      <button
                        type="button"
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className="px-4 py-2 text-slate-700 transition hover:bg-slate-50"
                      >
                        -
                      </button>
                      <span className="min-w-12 px-2 text-center text-sm font-semibold text-slate-900">
                        {item.quantity}
                      </span>
                      <button
                        type="button"
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="px-4 py-2 text-slate-700 transition hover:bg-slate-50"
                      >
                        +
                      </button>
                    </div>

                    <button
                      type="button"
                      onClick={() => removeFromCart(item.id)}
                      className="text-sm font-semibold text-red-600 transition hover:text-red-700"
                    >
                      Remove
                    </button>
                  </div>
                </div>

                <div className="flex flex-col items-start justify-between md:items-end">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
                    Item total
                  </p>
                  <p className="text-2xl font-black text-slate-950">
                    ${(item.price * item.quantity).toFixed(2)}
                  </p>
                  <p className="text-sm text-slate-500">${item.price} each</p>
                </div>
              </article>
            ))}
          </div>

          <aside className="h-fit rounded-[1.75rem] border border-white/60 bg-white/85 p-6 shadow-lg shadow-slate-200/50 backdrop-blur-sm">
            <h2 className="text-2xl font-black text-slate-900">Order summary</h2>

            <div className="mt-6 space-y-4 text-sm">
              <div className="flex items-center justify-between text-slate-500">
                <span>Subtotal</span>
                <span className="font-semibold text-slate-900">
                  ${cartSubtotal.toFixed(2)}
                </span>
              </div>
              <div className="flex items-center justify-between text-slate-500">
                <span>Shipping</span>
                <span className="font-semibold text-slate-900">
                  ${shipping.toFixed(2)}
                </span>
              </div>
              <div className="flex items-center justify-between text-slate-500">
                <span>Tax</span>
                <span className="font-semibold text-slate-900">
                  ${tax.toFixed(2)}
                </span>
              </div>
            </div>

            <div className="mt-6 border-t border-slate-200 pt-6">
              <div className="flex items-center justify-between">
                <span className="text-base font-semibold text-slate-600">Total</span>
                <span className="text-3xl font-black text-slate-950">
                  ${total.toFixed(2)}
                </span>
              </div>
            </div>

            <button
              type="button"
              className="mt-6 w-full rounded-full bg-slate-950 px-6 py-3 text-sm font-semibold text-white transition hover:bg-cyan-700"
            >
              Proceed to checkout
            </button>

            <Link
              to="/products"
              className="mt-4 inline-flex w-full justify-center rounded-full border border-slate-200 bg-white px-6 py-3 text-sm font-semibold text-slate-700 transition hover:border-slate-300 hover:bg-slate-50"
            >
              Continue shopping
            </Link>
          </aside>
        </div>
      </div>
    </section>
  );
}
