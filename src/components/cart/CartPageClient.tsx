"use client";

import CartItems from "./CartItems";
import CartSummary from "./CartSummary";

export default function CartPageClient() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
      <div className="lg:col-span-2">
        <CartItems />
      </div>

      <div className="lg:col-span-1">
        <CartSummary />
      </div>
    </div>
  );
}
