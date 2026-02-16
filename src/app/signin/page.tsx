import { signInAction } from "@/signin/actions";
import Link from "next/link";

export default function SignInPage() {
  return (
    <div className="flex min-h-[calc(100vh-80px)] items-center justify-center">
      <div className="w-full max-w-md rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
        <h1 className="text-2xl font-bold text-slate-900 mb-2">
          Sign in
        </h1>
        <p className="text-sm text-slate-600 mb-6">
          Use your Google or Facebook account to continue.
        </p>

        <div className="space-y-3">
          <form action={signInAction}>
            <input type="hidden" name="provider" value="google" />
            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2 rounded-lg border border-slate-300 px-4 py-2.5 text-sm font-medium text-slate-800 hover:bg-slate-50 transition"
            >
              <span>Continue with Google</span>
            </button>
          </form>

          <form action={signInAction}>
            <input type="hidden" name="provider" value="facebook" />
            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2 rounded-lg border border-slate-300 px-4 py-2.5 text-sm font-medium text-slate-800 hover:bg-slate-50 transition"
            >
              <span>Continue with Facebook</span>
            </button>
          </form>
        </div>

        <p className="mt-6 text-center text-sm text-slate-600">
          Don&apos;t have an account?{" "}
          <Link
            href="/signup"
            className="font-semibold text-blue-600 hover:underline"
          >
            Register
          </Link>
        </p>
      </div>
    </div>
  );
}
