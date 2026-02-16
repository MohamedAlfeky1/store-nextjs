"use client";

import { useQuery } from "@tanstack/react-query";
import { getCartItems, CartProduct } from "@/lib/cart";
import Link from "next/link";
import { useState } from "react";
import { calculateCartTotals, shippingOptions } from "@/app/cart/actions";

export default function CartSummary() {
  const { data: cartItems = [] } = useQuery<CartProduct[]>({
    queryKey: ["cart"],
    queryFn: getCartItems,
    staleTime: 0,
  });

  const [selectedShipping, setSelectedShipping] = useState(shippingOptions[0]);

  const { subtotal, tax, shipping, total } = calculateCartTotals(
    cartItems.map((item) => ({
      id: item.id,
      price: item.price,
      quantity: item.quantity || 1,
    })),
    selectedShipping.name
  );

  return (
    <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 sticky top-10">
      <h2 className="text-xl font-bold mb-6">Order Summary</h2>

      <div className="space-y-4 mb-6">
        <div className="flex justify-between text-slate-600">
          <span>Subtotal</span>
          <span>${subtotal.toFixed(2)}</span>
        </div>

        <div className="flex justify-between text-slate-600">
          <span>Tax (8%)</span>
          <span>${tax.toFixed(2)}</span>
        </div>

        <div className="border-t border-slate-200 pt-4">
          <div className="mb-3">
            <label className="block text-sm font-semibold text-slate-700 mb-2">
              Shipping Option
            </label>
            <select
              name="shipping"
              value={selectedShipping.name}
              onChange={(e) => {
                const option = shippingOptions.find((opt) => opt.name === e.target.value);
                if (option) setSelectedShipping(option);
              }}
              className="w-full border border-slate-300 rounded-lg px-3 py-2 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              {shippingOptions.map((option) => (
                <option key={option.name} value={option.name}>
                  {option.name} - ${option.cost.toFixed(2)} ({option.estimatedDays})
                </option>
              ))}
            </select>
          </div>
          <div className="flex justify-between text-slate-600">
            <span>Shipping</span>
            <span>${shipping.toFixed(2)}</span>
          </div>
        </div>

        <div className="border-t border-slate-200 pt-4 flex justify-between items-center text-xl font-extrabold text-slate-900">
          <span>Total</span>
          <span>${total.toFixed(2)}</span>
        </div>
      </div>

      <button
        type="button"
        className="w-full bg-blue-600 text-white py-4 rounded-xl font-bold mt-8 hover:bg-blue-700 transition-all active:scale-95 shadow-lg shadow-blue-100"
      >
        Checkout Now
      </button>

      <Link
        href="/products"
        className="block text-center mt-4 text-sm text-slate-500 hover:text-blue-600 transition-colors"
      >
        Continue Shopping
      </Link>
    </div>
  );
}
