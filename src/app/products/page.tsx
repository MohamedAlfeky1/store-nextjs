import ProductList from '@/components/Home/ProductList';
import PriceFilter from '@/components/Products/PriceFilter';
import { Suspense } from 'react';


export const revalidate = 15;

export default async function ProductsPage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string  }>;
}) {


  const params = await searchParams;
  const priceFilter = params.price || "all";
  const sort = params.sort || "relevance";

  return (
    <main className="max-w-7xl mx-auto px-6 py-12">
      <div className="flex flex-col lg:flex-row gap-10">
        
        <aside>
          <PriceFilter />
        </aside>

        <section className="flex-1">
          <div className="flex items-center justify-between mb-6">
            <h1 className="text-2xl font-bold text-slate-900">Products</h1>
            <form className="flex items-center gap-2">
              <input type="hidden" name="price" value={priceFilter} />
              <label
                htmlFor="sort"
                className="text-sm text-slate-600"
              >
                Sort by
              </label>
              <select
                id="sort"
                name="sort"
                defaultValue={sort}
                className="border border-slate-200 rounded-lg px-3 py-2 text-sm bg-white"
              >
                <option value="relevance">Featured</option>
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
                <option value="rating-desc">Rating</option>
              </select>
              <button
                type="submit"
                className="px-3 py-2 rounded-lg border border-slate-200 text-sm font-medium text-slate-700 hover:border-blue-600 hover:text-blue-600 transition"
              >
                Apply
              </button>
            </form>
          </div>
          <Suspense fallback={<div>Loading items...</div>}>
            <ProductList filteredValue={priceFilter} sort={sort} />
          </Suspense>
        </section>

      </div>
    </main>
  );
}