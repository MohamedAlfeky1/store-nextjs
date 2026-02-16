import { NextResponse } from "next/server";
import { auth } from "./services/Auth";

export default auth((req) => {
  if (!req.auth) {
    return NextResponse.redirect(new URL("/signin", req.url));
  }
});

export const config = {
  matcher: ["/category", "/cart", "/checkout"],
};
