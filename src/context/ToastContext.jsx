import { createContext, useContext, useState } from "react";

const ToastContext = createContext(null);

export function ToastProvider({ children }) {
  const [toasts, setToasts] = useState([]);

  function dismissToast(id) {
    setToasts((currentToasts) =>
      currentToasts.filter((toast) => toast.id !== id)
    );
  }

  function showToast(message, options = {}) {
    const id =
      globalThis.crypto?.randomUUID?.() ??
      `${Date.now()}-${Math.random().toString(16).slice(2)}`;
    const toast = {
      id,
      message,
      tone: options.tone ?? "success",
    };

    setToasts((currentToasts) => [...currentToasts, toast]);

    window.setTimeout(() => {
      dismissToast(id);
    }, options.duration ?? 2600);
  }

  return (
    <ToastContext.Provider value={{ showToast }}>
      {children}

      <div className="pointer-events-none fixed right-4 bottom-5 z-[70] flex w-[min(24rem,calc(100vw-2rem))] flex-col gap-3">
        {toasts.map((toast) => (
          <div
            key={toast.id}
            className={`pointer-events-auto rounded-[1.5rem] border px-4 py-3 shadow-xl backdrop-blur-sm transition ${
              toast.tone === "info"
                ? "border-slate-200 bg-white/95 text-slate-900 shadow-slate-200/60"
                : "border-emerald-200 bg-emerald-50/95 text-emerald-900 shadow-emerald-200/60"
            }`}
            role="status"
            aria-live="polite"
          >
            <div className="flex items-start gap-3">
              <span
                className={`mt-0.5 inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full ${
                  toast.tone === "info"
                    ? "bg-slate-900 text-white"
                    : "bg-emerald-600 text-white"
                }`}
              >
                <i
                  className={`fa-solid ${
                    toast.tone === "info" ? "fa-cart-shopping" : "fa-check"
                  } text-xs`}
                ></i>
              </span>

              <p className="flex-1 text-sm font-semibold leading-6">
                {toast.message}
              </p>

              <button
                type="button"
                onClick={() => dismissToast(toast.id)}
                className="inline-flex h-8 w-8 items-center justify-center rounded-full text-slate-400 transition hover:bg-black/5 hover:text-slate-700"
                aria-label="Dismiss notification"
              >
                <i className="fa-solid fa-xmark"></i>
              </button>
            </div>
          </div>
        ))}
      </div>
    </ToastContext.Provider>
  );
}

export function useToast() {
  const context = useContext(ToastContext);

  if (!context) {
    throw new Error("useToast must be used within a ToastProvider.");
  }

  return context;
}
