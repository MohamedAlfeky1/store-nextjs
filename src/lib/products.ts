export interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  thumbnail?: string;
  category?: string;
  rating?: number;
}

interface ProductsResponse {
  products: Product[];
}

export async function getFeaturedProducts(): Promise<Product[]> {
  const res = await fetch("https://dummyjson.com/products?limit=8");

  if (!res.ok) {
    throw new Error("Failed to fetch featured products");
  }

  const data: ProductsResponse = await res.json();
  return data.products;
}

