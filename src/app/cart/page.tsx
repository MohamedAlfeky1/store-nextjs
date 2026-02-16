import CartPageClient from "@/components/cart/CartPageClient";

export default function CartPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-8">Your Shopping Cart</h1>
      <CartPageClient />
    </div>
  );
}