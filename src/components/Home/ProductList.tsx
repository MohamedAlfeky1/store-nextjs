import ProductCard from "@/components/ui/ProductCard";

interface ProductListProps {
  filteredValue: string;
  sort: string;
}

function sortProducts(products: any[], sort: string) {
  if (sort === "price-asc") {
    return [...products].sort((a, b) => a.price - b.price);
  }

  if (sort === "price-desc") {
    return [...products].sort((a, b) => b.price - a.price);
  }

  if (sort === "rating-desc") {
    return [...products].sort(
      (a, b) => (b.rating ?? 0) - (a.rating ?? 0)
    );
  }

  return products;
}

export default async function ProductList({
  filteredValue,
  sort,
}: ProductListProps) {
  const res = await fetch("https://dummyjson.com/products?limit=16");
  const data = await res.json();

  let filteredProducts = data.products;

  if (filteredValue === "50") {
    filteredProducts = data.products.filter((p: any) => p.price < 50);
  } else if (filteredValue === "50-100") {
    filteredProducts = data.products.filter(
      (p: any) => p.price >= 50 && p.price < 100
    );
  } else if (filteredValue === "100-150") {
    filteredProducts = data.products.filter(
      (p: any) => p.price >= 100 && p.price < 150
    );
  }

  const sortedProducts = sortProducts(filteredProducts, sort);

  if (sortedProducts.length === 0) {
    return (
      <div className="text-center py-20 bg-slate-50 rounded-2xl border-2 border-dashed border-slate-200">
        <p className="text-slate-500 font-medium">
          No products found in this price range.
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
      {sortedProducts.map((product: any) => (
        <ProductCard key={product.id} productData={product} />
      ))}
    </div>
  );
}