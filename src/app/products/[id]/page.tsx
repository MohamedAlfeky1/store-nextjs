import ProductUIClient from "@/components/ProductDetails/ProductUIClient";

export default async function ProductPage({ params }: any ) {
  const { id } = await params;
  const productId = parseInt(id, 10);

  return (
    <div className="bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 py-10">
        <ProductUIClient productId={productId} />
      </div>
    </div>
  );
}