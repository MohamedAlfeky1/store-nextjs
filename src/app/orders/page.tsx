import { auth } from "@/services/Auth";
import Link from "next/link";

export const revalidate = 0;

export default async function OrdersPage() {
  const session: any = await auth();

  if (!session?.user) {
    return (
      <main className="max-w-4xl mx-auto px-6 py-12">
        <div className="bg-white border border-slate-200 rounded-2xl p-8 text-center">
          <h1 className="text-2xl font-bold text-slate-900 mb-4">Order History</h1>
          <p className="text-slate-600 mb-6">You need to be signed in to view your orders.</p>
          <Link
            href="/signin"
            className="inline-flex px-5 py-3 rounded-full bg-blue-600 text-white font-semibold hover:bg-blue-700 transition"
          >
            Sign in
          </Link>
        </div>
      </main>
    );
  }

  const res = await fetch("https://dummyjson.com/carts/user/1");

  if (!res.ok) {
    return (
      <main className="max-w-4xl mx-auto px-6 py-12">
        <div className="bg-white border border-slate-200 rounded-2xl p-8 text-center">
          <h1 className="text-2xl font-bold text-slate-900 mb-4">Order History</h1>
          <p className="text-slate-600">
            Unable to load your orders right now.
          </p>
        </div>
      </main>
    );
  }

  const data = await res.json();
  const carts: any[] = Array.isArray(data.carts) ? data.carts : [];

  if (!carts.length) {
    return (
      <main className="max-w-4xl mx-auto px-6 py-12">
        <div className="bg-white border border-slate-200 rounded-2xl p-8 text-center">
          <h1 className="text-2xl font-bold text-slate-900 mb-4">Order History</h1>
          <p className="text-slate-600">You have no orders yet.</p>
          <Link
            href="/"
            className="inline-flex px-5 py-3 rounded-full bg-gray-900 text-white font-semibold hover:bg-blue-600 transition mt-4"
          >
            Start shopping
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="max-w-5xl mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold text-slate-900 mb-8">Order History</h1>
      <div className="space-y-6">
        {carts.map((cart) => (
          <div
            key={cart.id}
            className="bg-white border border-slate-200 rounded-2xl p-6"
          >
            <div className="flex items-center justify-between mb-4">
              <div>
                <p className="text-sm text-slate-500">Order #{cart.id}</p>
                <p className="text-lg font-semibold text-slate-900">
                  {cart.totalProducts} items
                </p>
              </div>
              <div className="text-right">
                <p className="text-sm text-slate-500">Total</p>
                <p className="text-xl font-bold text-slate-900">
                  ${Number(cart.discountedTotal ?? cart.total).toFixed(1)}
                </p>
              </div>
            </div>
            <div className="flex flex-wrap gap-3">
              {Array.isArray(cart.products) &&
                cart.products.slice(0, 4).map((product: any) => (
                  <span
                    key={product.id}
                    className="inline-flex items-center px-3 py-1 rounded-full bg-slate-100 text-xs font-medium text-slate-700"
                  >
                    {product.title}
                  </span>
                ))}
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}

