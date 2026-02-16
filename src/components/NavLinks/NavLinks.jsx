"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavLinks() {
  const navItems = [
    { name: "Home", href: "/" },
    { name: "Products", href: "/products" },
    { name: "Categories", href: "/category" },
    { name: "Cart", href: "/cart" },
  ];

  const pathname = usePathname();

  return (
    <div className="hidden md:flex items-center space-x-4">
      {navItems.map((item) => {
        const isActive = pathname === item.href;

        return (
          <Link
            key={item.name}
            href={item.href}
            className={`px-6 py-2 rounded-full text-sm font-bold transition-all duration-300 ${
              isActive
                ? "bg-gray-900 text-white shadow-lg shadow-gray-200"
                : "text-gray-600 hover:text-blue-600 hover:bg-gray-50"
            }`}
          >
            {item.name}
          </Link>

          // <NavItem />
        );
      })}
    </div>
  );
}
