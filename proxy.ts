import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

/**
 * Recipe URLs are printed on Casa Juan plates. Any letter case must resolve,
 * because the nav uses /Discover/Recipes and the QR codes use /discover/recipes.
 * The App Router folder is Discover/Recipes, so rewrite onto that casing.
 */
export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const match = pathname.match(/^\/discover\/recipes(?=\/|$)(.*)$/i);

  if (!match) {
    return NextResponse.next();
  }

  const suffix = match[1].toLowerCase().replace(/\/+$/, "");
  const canonicalPath = `/Discover/Recipes${suffix}`;

  if (pathname === canonicalPath) {
    return NextResponse.next();
  }

  const url = request.nextUrl.clone();
  url.pathname = canonicalPath;
  return NextResponse.rewrite(url);
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|.*\\.(?:png|jpg|jpeg|webp|svg|gif|ico|ttf|woff2?)$).*)",
  ],
};
