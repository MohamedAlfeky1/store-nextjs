"use server";

interface CartItem {
  id: number;
  price: number;
  quantity: number;
}

interface ShippingOption {
  name: string;
  cost: number;
  estimatedDays: string;
}

export const shippingOptions: ShippingOption[] = [
  { name: "Standard Shipping", cost: 5.99, estimatedDays: "5-7 business days" },
  { name: "Express Shipping", cost: 12.99, estimatedDays: "2-3 business days" },
  { name: "Overnight Shipping", cost: 24.99, estimatedDays: "1 business day" },
];

export interface CartTotals {
  subtotal: number;
  tax: number;
  shipping: number;
  total: number;
}

export function calculateCartTotals(
  cartItems: CartItem[],
  shippingOptionName: string
): CartTotals {
  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * (item.quantity || 1),
    0
  );

  const taxRate = 0.08;
  const tax = subtotal * taxRate;

  const selectedShipping =
    shippingOptions.find((opt) => opt.name === shippingOptionName) ||
    shippingOptions[0];
  const shipping = selectedShipping.cost;

  const total = subtotal + tax + shipping;

  return { subtotal, tax, shipping, total };
}
