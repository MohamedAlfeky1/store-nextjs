import { auth } from "@/services/Auth";
import Image from "next/image";
import Link from "next/link";

export default async function ProfilePage() {
  const session: any = await auth();

  if (!session?.user) {
    return (
      <main className="max-w-3xl mx-auto px-6 py-12">
        <div className="bg-white border border-slate-200 rounded-2xl p-8 text-center">
          <h1 className="text-2xl font-bold text-slate-900 mb-4">Your Profile</h1>
          <p className="text-slate-600 mb-6">
            You need to be signed in to view your profile.
          </p>
          <Link
            href="/signin"
            className="inline-flex px-5 py-3 rounded-full bg-blue-600 text-white font-semibold hover:bg-blue-700 transition"
          >
            Sign in
          </Link>
        </div>
      </main>
    );
  }

  const { user } = session;

  return (
    <main className="max-w-3xl mx-auto px-6 py-12">
      <div className="bg-white border border-slate-200 rounded-2xl p-8 flex flex-col sm:flex-row sm:items-center gap-6">
        {user.image && (
          <div className="relative w-20 h-20 rounded-full overflow-hidden bg-slate-100 shrink-0">
            <Image
              src={user.image}
              alt={user.name ?? user.email ?? "User avatar"}
              fill
              className="object-cover"
            />
          </div>
        )}
        <div>
          <h1 className="text-2xl font-bold text-slate-900">
            {user.name ?? "Account"}
          </h1>
          <p className="text-slate-600 mt-1">{user.email}</p>
          <div className="mt-4 flex flex-wrap gap-3">
            <Link
              href="/orders"
              className="inline-flex px-4 py-2 rounded-full bg-blue-600 text-white text-sm font-semibold hover:bg-blue-700 transition"
            >
              View orders
            </Link>
            <Link
              href="/"
              className="inline-flex px-4 py-2 rounded-full border border-slate-200 text-sm font-semibold text-slate-700 hover:border-blue-600 hover:text-blue-600 transition"
            >
              Continue shopping
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}

