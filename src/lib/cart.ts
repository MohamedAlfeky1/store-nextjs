export interface CartProduct {
  id: number;
  title: string;
  price: number;
  thumbnail?: string;
  quantity: number;
}

export function getCartItems(): CartProduct[] {
  if (typeof window === "undefined") {
    return [];
  }
  
  try {
    const stored = window.localStorage.getItem("cart");
    return stored ? JSON.parse(stored) : [];
  } catch {
    return [];
  }
}

export function updateCartItemQuantity(productId: number, quantity: number): CartProduct[] {
  const items = getCartItems();
  const index = items.findIndex((item) => item.id === productId);
  
  if (index >= 0) {
    if (quantity <= 0) {
      items.splice(index, 1);
    } else {
      items[index].quantity = quantity;
    }
  }
  
  if (typeof window !== "undefined") {
    window.localStorage.setItem("cart", JSON.stringify(items));
  }
  
  return items;
}

export function removeCartItem(productId: number): CartProduct[] {
  const items = getCartItems();
  const filtered = items.filter((item) => item.id !== productId);
  
  if (typeof window !== "undefined") {
    window.localStorage.setItem("cart", JSON.stringify(filtered));
  }
  
  return filtered;
}
