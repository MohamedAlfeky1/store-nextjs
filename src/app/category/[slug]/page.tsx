import ProductUI from "@/components/ProductDetails/ProductUI";
import ProductCard from "@/components/ui/ProductCard";

export default async function CategoryProductsPage({ params }: any ) {
  const { slug } = await params;

  const res = await fetch(`https://dummyjson.com/products/category/${slug}`);
  const data = await res.json();


  return (
    <div className="w-full mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {data.products.map((product : any) => (
            <ProductCard key={product.id} productData={product} />
          ))}
        </div>
  );
}