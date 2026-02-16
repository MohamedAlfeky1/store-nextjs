"use client";

import { useState } from "react";
import { Rating } from "react-simple-star-rating";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { getFeaturedProducts, Product } from "@/lib/products";
import ProductCard from "./ProductCard";

export default function CustomRating({
  productData,
  size,
}: {
  productData: any;
  size?: number;
}) {
  return (
    <Rating
      initialValue={productData?.rating || 0}
      readonly={true}
      allowFraction={true}
      size={size || 18}
      fillColor="#f1c40f"
      emptyColor="#e1e1e1"
      SVGclassName="inline-block"
    />
  );
}

export function FeaturedProductsClient({
  initialProducts,
}: {
  initialProducts: Product[];
}) {
  const {
    data: products = [],
    isLoading,
    isError,
  } = useQuery<Product[]>({
    queryKey: ["featured-products"],
    queryFn: getFeaturedProducts,
    initialData: initialProducts,
    staleTime: 1000 * 60,
  });

  if (isLoading) {
    return (
      <div className="flex items-center justify-center py-10">
        <div className="w-10 h-10 border-4 border-blue-500 border-dashed rounded-full animate-spin" />
      </div>
    );
  }

  if (isError || !products.length) {
    return (
      <div className="text-center py-10 text-slate-500">
        Failed to load featured products.
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
      {products.map((product) => (
        <ProductCard key={product.id} productData={product} />
      ))}
    </div>
  );
}

interface CartProduct {
  id: number;
  title: string;
  price: number;
  thumbnail?: string;
  quantity?: number;
}

export function AddToCartButton({ product }: { product: CartProduct }) {
  const [isAdding, setIsAdding] = useState(false);
  const [isAdded, setIsAdded] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const queryClient = useQueryClient();

  const handleAddToCart = () => {
    setIsAdding(true);

    try {
      if (typeof window !== "undefined") {
        const stored = window.localStorage.getItem("cart");
        const existing: CartProduct[] = stored ? JSON.parse(stored) : [];

        const existingIndex = existing.findIndex((item) => item.id === product.id);
        
        if (existingIndex >= 0) {
          existing[existingIndex].quantity = (existing[existingIndex].quantity || 0) + quantity;
        } else {
          existing.push({ ...product, quantity });
        }

        window.localStorage.setItem("cart", JSON.stringify(existing));
        queryClient.invalidateQueries({ queryKey: ["cart"] });
      }

      setIsAdded(true);
      setTimeout(() => setIsAdded(false), 2000);
    } finally {
      setIsAdding(false);
    }
  };

  const incrementQuantity = () => {
    setQuantity((prev) => Math.min(prev + 1, 99));
  };

  const decrementQuantity = () => {
    setQuantity((prev) => Math.max(prev - 1, 1));
  };

  return (
    <div className="flex-1 flex flex-col gap-3">
      <div className="flex items-center justify-center gap-4 border border-gray-300 rounded-2xl py-2">
        <button
          type="button"
          onClick={decrementQuantity}
          disabled={quantity <= 1}
          className="w-10 h-10 flex items-center justify-center text-xl font-bold text-gray-700 hover:text-blue-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          aria-label="Decrease quantity"
        >
          −
        </button>
        <span className="w-12 text-center font-semibold text-lg text-gray-900">
          {quantity}
        </span>
        <button
          type="button"
          onClick={incrementQuantity}
          disabled={quantity >= 99}
          className="w-10 h-10 flex items-center justify-center text-xl font-bold text-gray-700 hover:text-blue-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          aria-label="Increase quantity"
        >
          +
        </button>
      </div>
      <button
        type="button"
        onClick={handleAddToCart}
        disabled={isAdding}
        className="w-full bg-gray-900 text-white py-5 rounded-2xl font-bold text-xl 
                   hover:bg-blue-600 hover:shadow-xl hover:shadow-blue-100 
                   transition-all active:scale-95 disabled:opacity-70"
      >
        {isAdded ? "Added to Cart" : isAdding ? "Adding..." : "Add to Cart"}
      </button>
    </div>
  );
}
