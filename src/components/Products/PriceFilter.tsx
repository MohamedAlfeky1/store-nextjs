"use client";

import { useRouter, useSearchParams } from "next/navigation";

const PRICE_RANGES = [
  { label: "All Prices", value: "all" },
  { label: "Under $50", value: "50" },
  { label: "$50 - $100", value: "50-100" },
  { label: "$100 - $150", value: "100-150" },
];

export default function PriceFilter() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const activeValue = searchParams.get("price");

  const handleFilter = (value: string) => {
    const params = new URLSearchParams(searchParams);
    if (value === "all") {
      params.set("price", "all");
    } else {
      params.set("price", value);
    }
    router.push(`?${params.toString()}`);
  };

  return (
    <div className="w-full lg:w-64 ">
      <h3 className="text-lg font-bold text-slate-900 mb-6">Price Range</h3>
      <div className="flex flex-col gap-3">
        {PRICE_RANGES.map((range) => (
          <button
            key={range.value}
            onClick={() => handleFilter(range.value)}
            className={`flex items-center justify-between p-3 rounded-lg border transition-all text-sm font-medium
              ${activeValue === range.value 
                ? "border-blue-600 bg-blue-50 text-blue-600 shadow-sm" 
                : "border-slate-200 bg-white text-slate-600 hover:border-slate-300"
              }`}
          >
            {range.label}
            {activeValue === range.value && (
              <div className="w-2 h-2 rounded-full bg-blue-600" />
            )}
          </button>
        ))}
      </div>
    </div>
  );
}