"use client";

import { useMutation, useQueryClient } from "@tanstack/react-query";
import { removeCartItem } from "@/lib/cart";

interface CartItemRemoveProps {
  productId: number;
}

export default function CartItemRemove({ productId }: CartItemRemoveProps) {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: () => {
      return removeCartItem(productId);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["cart"] });
    },
  });

  const handleRemove = () => {
    if (confirm("Are you sure you want to remove this item from your cart?")) {
      mutation.mutate();
    }
  };

  return (
    <button
      type="button"
      onClick={handleRemove}
      disabled={mutation.isPending}
      className="text-red-600 hover:text-red-700 font-medium text-sm disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
      aria-label="Remove item"
    >
      {mutation.isPending ? "Removing..." : "Remove"}
    </button>
  );
}
