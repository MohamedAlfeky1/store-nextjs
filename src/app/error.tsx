"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function SimpleUI() {
  const pathname = usePathname();

  return (
    <main className="min-h-[80vh] flex items-center justify-center px-6">
      <div className="text-center">
        <p className="text-sm font-semibold text-blue-600 uppercase tracking-widest">
          500 Error
        </p>

        <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-slate-900 sm:text-6xl">
          Internal Server Error
        </h1>

        <p className="mt-6 text-lg leading-7 text-slate-600 max-w-lg mx-auto">
          Internal Server Error. Please try again later or contact support if
          the issue persists.
        </p>

        <div className="mt-10 flex items-center justify-center gap-x-6">
          <Link
            href={pathname}
            className="rounded-xl bg-blue-600 px-8 py-4 text-sm font-bold text-white shadow-lg shadow-blue-100 hover:bg-blue-700 transition-all active:scale-95"
          >
            Reload
          </Link>

          <Link
            href="#"
            className="text-sm font-bold text-slate-900 flex items-center gap-1 hover:text-blue-600 transition-colors"
          >
            Contact support <span aria-hidden="true">&rarr;</span>
          </Link>
        </div>
      </div>
    </main>
  );
}
