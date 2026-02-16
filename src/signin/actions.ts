"use server";

import { signIn, signOut } from "@/services/Auth";

export async function signInAction(formData: FormData) {
  const provider =
    (formData.get("provider") as string | null) ?? "google";

  await signIn(provider, { redirectTo: "/category" });
}

export async function signOutAction() {
  await signOut({ redirectTo: "/" });
}
