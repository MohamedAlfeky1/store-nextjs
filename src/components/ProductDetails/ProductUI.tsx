import CustomRating from "../ui/CustomRating";
import ImagesGallery from "../ui/ImagesGallery";
import { AddToCartButton } from "../ui/CustomRating";
import ExpandableDescription from "../ui/ExpandableDescription";
import { addToWishlistAction } from "@/wishlist/actions";

interface ProductUIData {
  id: number;
  title: string;
  price: number;
  description: string;
  images: string[];
  thumbnail: string;
  rating: number; 
}

export default function ProductUI({ data }: { data: ProductUIData }) {
  return (
    <div className="lg:grid lg:grid-cols-2 lg:gap-x-12 lg:items-start max-w-7xl mx-auto px-4 py-8">
    
      <ImagesGallery products={data} layout="horizontal" />

      <div className="mt-10 lg:mt-0 flex flex-col gap-6">
        <div>
          <h1 className="text-4xl font-extrabold tracking-tight text-gray-900">{data.title}</h1>
          <p className="text-3xl font-bold text-blue-600 mt-4">${data.price}</p>
          <div className="flex gap-2 items-center">
            <CustomRating productData={data} size={20} />
            <span className="text-gray-500 text-md mt-1">({data.rating || 0})</span>
          </div>
        </div>
        
        <div className="border-t border-gray-100 pt-6">
          <h3 className="text-sm font-bold uppercase tracking-widest text-gray-500">Description</h3>
          <ExpandableDescription text={data.description} />
        </div>

        <div className="mt-4 flex gap-4">
          <AddToCartButton
            product={{
              id: data.id,
              title: data.title,
              price: data.price,
              thumbnail: data.thumbnail,
            }}
          />
          <form action={addToWishlistAction} className="flex-1">
            <input type="hidden" name="id" value={data.id} />
            <input type="hidden" name="title" value={data.title} />
            <input type="hidden" name="price" value={data.price} />
            <input type="hidden" name="thumbnail" value={data.thumbnail} />
            <button
              type="submit"
              className="w-full border border-gray-300 text-gray-900 py-5 rounded-2xl font-semibold text-lg hover:border-blue-600 hover:text-blue-600 transition-all active:scale-95"
            >
              Add to Wishlist
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}