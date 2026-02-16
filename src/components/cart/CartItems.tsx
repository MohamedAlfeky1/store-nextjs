"use client";

import { useQuery } from "@tanstack/react-query";
import Image from "next/image";
import { getCartItems, CartProduct } from "@/lib/cart";
import CartItemQuantity from "./CartItemQuantity";
import CartItemRemove from "./CartItemRemove";

export default function CartItems() {
  const {
    data: cartItems = [],
    isLoading,
    isError,
  } = useQuery<CartProduct[]>({
    queryKey: ["cart"],
    queryFn: getCartItems,
    staleTime: 0,
  });

  if (isLoading) {
    return (
      <div className="flex items-center justify-center py-20">
        <div className="w-12 h-12 border-4 border-blue-500 border-dashed rounded-full animate-spin" />
      </div>
    );
  }

  if (isError) {
    return (
      <div className="text-center py-20">
        <p className="text-red-600 font-semibold text-lg mb-2">
          Failed to load cart items
        </p>
        <p className="text-gray-500 text-sm">
          Please try refreshing the page
        </p>
      </div>
    );
  }

  if (!cartItems.length) {
    return (
      <div className="text-center py-20">
        <p className="text-gray-600 text-lg mb-4">Your cart is empty</p>
        <a
          href="/products"
          className="inline-block px-6 py-3 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700 transition-colors"
        >
          Continue Shopping
        </a>
      </div>
    );
  }

  return (
    <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden">
      <table className="w-full text-left border-collapse">
        <thead className="bg-slate-50 border-b border-slate-200">
          <tr>
            <th className="p-4 font-semibold text-slate-700">Product</th>
            <th className="p-4 font-semibold text-slate-700 text-center">
              Quantity
            </th>
            <th className="p-4 font-semibold text-slate-700 text-right">
              Total
            </th>
            <th className="p-4 font-semibold text-slate-700 text-right">
              Action
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-slate-100">
          {cartItems.map((item) => {
            const itemTotal = item.price * (item.quantity || 1);
            return (
              <tr
                key={item.id}
                className="hover:bg-slate-50 transition-colors"
              >
                <td className="p-4">
                  <div className="flex items-center gap-4">
                    {item.thumbnail && (
                      <div className="relative w-16 h-16 bg-slate-100 rounded-lg overflow-hidden flex-shrink-0">
                        <Image
                          src={item.thumbnail}
                          alt={item.title}
                          fill
                          className="object-cover"
                        />
                      </div>
                    )}
                    <div>
                      <p className="font-bold text-slate-900">{item.title}</p>
                      <p className="text-sm text-slate-500">${item.price}</p>
                    </div>
                  </div>
                </td>
                <td className="p-4 text-center">
                  <div className="flex justify-center">
                    <CartItemQuantity
                      productId={item.id}
                      currentQuantity={item.quantity || 1}
                    />
                  </div>
                </td>
                <td className="p-4 text-right font-bold text-slate-900">
                  ${itemTotal.toFixed(2)}
                </td>
                <td className="p-4 text-right">
                  <CartItemRemove productId={item.id} />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
