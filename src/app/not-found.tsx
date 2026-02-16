import Link from 'next/link';

export default function NotFound() {
  return (
    <main className="min-h-[80vh] flex items-center justify-center px-6">
      <div className="text-center">
        <p className="text-sm font-semibold text-blue-600 uppercase tracking-widest">
          404 Error
        </p>
        
        <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-slate-900 sm:text-6xl">
          Page not found
        </h1>
        
        <p className="mt-6 text-lg leading-7 text-slate-600 max-w-lg mx-auto">
          Sorry, we couldn’t find the page you’re looking for. It might have been moved, 
          deleted, or perhaps it never existed in the first place.
        </p>

        <div className="mt-10 flex items-center justify-center gap-x-6">
          <Link
            href="/"
            className="rounded-xl bg-blue-600 px-8 py-4 text-sm font-bold text-white shadow-lg shadow-blue-100 hover:bg-blue-700 transition-all active:scale-95"
          >
            Go back home
          </Link>
          
          <Link 
            href="#" 
            className="text-sm font-bold text-slate-900 flex items-center gap-1 hover:text-blue-600 transition-colors"
          >
            Contact support <span aria-hidden="true">&rarr;</span>
          </Link>
        </div>

        <div className="mt-16 border-t border-slate-100 pt-10">
          <p className="text-sm text-slate-500">Try checking our popular categories:</p>
          <div className="mt-4 flex justify-center gap-6 text-sm font-medium text-blue-600">
            <Link href="/category/beauty" className="hover:underline">Beauty</Link>
            <Link href="/category/fragrances" className="hover:underline">Fragrances</Link>
            <Link href="/category/furniture" className="hover:underline">Furniture</Link>
          </div>
        </div>
      </div>
    </main>
  );
}