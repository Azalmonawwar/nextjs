import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { revalidatePath, revalidateTag } from "next/cache";
export function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname;

  const isPublicPath = path === "/login" || path === "/register";

  const token = request.cookies.get("token")?.value || "";

  if (isPublicPath && token) {
    return NextResponse.redirect(new URL("/profile", request.nextUrl));
  }

  if (!isPublicPath && !token) {
    return NextResponse.redirect(new URL("/login", request.nextUrl));
  }

  // if url is /cart and any change is made to cart, revalidate /cart
  if (path === "/cart" && request.method !== "GET") {
    return NextResponse.rewrite(new URL("/cart", request.url));
  }
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: ["/profile", "/login", "/register","/checkout","/cart"],
};
