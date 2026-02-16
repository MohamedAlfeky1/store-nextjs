"use client";

import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateCartItemQuantity, getCartItems } from "@/lib/cart";

interface CartItemQuantityProps {
  productId: number;
  currentQuantity: number;
}

export default function CartItemQuantity({
  productId,
  currentQuantity,
}: CartItemQuantityProps) {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: (newQuantity: number) => {
      return updateCartItemQuantity(productId, newQuantity);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["cart"] });
    },
  });

  const handleIncrement = () => {
    mutation.mutate(currentQuantity + 1);
  };

  const handleDecrement = () => {
    if (currentQuantity > 1) {
      mutation.mutate(currentQuantity - 1);
    }
  };

  return (
    <div className="flex items-center gap-3">
      <button
        type="button"
        onClick={handleDecrement}
        disabled={currentQuantity <= 1 || mutation.isPending}
        className="w-8 h-8 flex items-center justify-center border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 hover:border-blue-600 hover:text-blue-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
        aria-label="Decrease quantity"
      >
        −
      </button>
      <span className="w-10 text-center font-semibold text-gray-900">
        {currentQuantity}
      </span>
      <button
        type="button"
        onClick={handleIncrement}
        disabled={currentQuantity >= 99 || mutation.isPending}
        className="w-8 h-8 flex items-center justify-center border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 hover:border-blue-600 hover:text-blue-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
        aria-label="Increase quantity"
      >
        +
      </button>
    </div>
  );
}
