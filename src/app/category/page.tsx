import Heading from "@/components/ui/Heading";
import Link from "next/link";

interface Category {
  slug: string;
  name: string;
  url: string;
}

export default async function CategoryPage() {
  const res = await fetch("https://dummyjson.com/products/categories");
  const data: Category[] = await res.json();

  return (
    <div className="p-6">
      <Heading title="Categories" link="/category" />
      
      <div className="w-full mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {data.map((category: Category) => (
          <Link
            key={category.slug}
            href={`/category/${category.slug}`}
            className="group flex items-center justify-between p-6 bg-white border border-slate-200 rounded-xl transition-all duration-300 hover:border-blue-500 hover:shadow-md"
          >
            <span className="text-slate-800 font-semibold text-lg capitalize transition-colors group-hover:text-blue-600">
              {category.name}
            </span>
            
            <div className="text-blue-500 transition-transform duration-300 transform group-hover:translate-x-2">
              {">"}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}