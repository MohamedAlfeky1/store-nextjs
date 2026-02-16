"use server";

import { cookies } from "next/headers";

interface WishlistItem {
  id: number;
  title: string;
  price: number;
  thumbnail?: string | null;
}

export async function addToWishlistAction(formData: FormData) {
  const id = Number(formData.get("id"));
  const title = formData.get("title");
  const price = Number(formData.get("price"));
  const thumbnail = formData.get("thumbnail");

  if (!id || !title || Number.isNaN(price)) {
    return;
  }

  const cookieStore = cookies();
  const existing = cookieStore.get("wishlist");

  let wishlist: WishlistItem[] = [];

  if (existing?.value) {
    try {
      wishlist = JSON.parse(existing.value) as WishlistItem[];
    } catch {
      wishlist = [];
    }
  }

  const exists = wishlist.some((item) => item.id === id);

  if (!exists) {
    wishlist.push({
      id,
      title: String(title),
      price,
      thumbnail: thumbnail ? String(thumbnail) : null,
    });

    cookieStore.set("wishlist", JSON.stringify(wishlist), {
      path: "/",
      sameSite: "lax",
    });
  }
}

