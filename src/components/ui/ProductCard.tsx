import Image from "next/image";
import Link from "next/link";
import CustomRating from "./CustomRating";



export default function ProductCard({productData}: any) {
  
  return (
    <Link
    href={`/products/${productData?.id}`}
     className="group bg-white rounded-xl shadow-sm hover:shadow-lg transition overflow-hidden">
      {/* Image */}
      <div className="relative h-56 overflow-hidden bg-gray-200">
        <Image
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
        fill
          src={productData?.thumbnail || "https://via.placeholder.com/300x200?text=No+Image"}
          alt="product"
          className="w-full h-full object-contain group-hover:scale-105 transition duration-300"
        />

        {/* Badge */}
        <span className="absolute top-3 left-3 bg-black text-white text-xs px-2 py-1 rounded">
          {productData?.category || "Category"}
        </span>
      </div>

      {/* Content */}
      <div className="p-4 space-y-2">
        <h3 className="font-semibold text-gray-800 line-clamp-1">
          {productData?.title || "Product Title"}
        </h3>

        <p className="text-sm text-gray-500 line-clamp-2">
          {productData?.description || "No description available."}
        </p>

        {/* Price + Rating */}
        <div className="flex items-center justify-between">
          <span className="text-lg font-bold text-gray-900">${productData?.price || "0"}</span>

          <div className="flex items-center gap-1 text-yellow-400 text-sm">
     <CustomRating productData={productData} />
            <span className="text-gray-500 text-xs">({productData?.rating || 0})</span>
          </div>
        </div>
      </div>
    </Link>
  );
}
