import Link from "next/link";
import NavLinks from "@/components/NavLinks/NavLinks";
import { auth } from "@/services/Auth";
import Image from "next/image";
import { signOutAction } from "@/signin/actions";

export default async function NavBar() {
  const session: any = await auth();

  return (
    <nav className="sticky top-0 z-50 w-full bg-white/70 backdrop-blur-lg border-b border-gray-100">
      <div className="px-6 lg:px-24">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-2 group cursor-pointer"
          >
            <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center">
              <span className="text-white font-black text-xl">M</span>
            </div>
            <span className="text-xl font-bold tracking-tight text-gray-900">
              My<span className="text-blue-600">Store</span>
            </span>
          </Link>

          <NavLinks />

          {/* Auth / User */}
          <div className="hidden md:flex items-center gap-4">
            {session?.user ? (
              <>
                {session.user.image && (
                  <Image
                    src={session.user.image}
                    width={40}
                    height={40}
                    alt={session.user.name ?? "User avatar"}
                    className="rounded-full"
                  />
                )}
                <span className="text-sm text-gray-700 max-w-[140px] truncate">
                  {session.user.name ?? session.user.email}
                </span>
                <form action={signOutAction}>
                  <button
                    type="submit"
                    className="text-sm font-semibold text-gray-700 hover:text-gray-900"
                  >
                    Sign Out
                  </button>
                </form>
              </>
            ) : (
              <>
                <Link
                  href="/signin"
                  className="text-sm font-semibold text-gray-700 hover:text-gray-900"
                >
                  Log In
                </Link>
                <Link
                  href="/signup"
                  className="bg-gray-900 text-white px-7 py-3 rounded-full text-sm font-bold 
                             hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-200 
                             transition-all duration-300 active:scale-95"
                >
                  Sign Up
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
