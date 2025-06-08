import { NextResponse, type NextRequest } from "next/server";

export const TOKEN_KEY = "token";

export function middleware(request: NextRequest) {
  const token = request.cookies.get(TOKEN_KEY);
  const { pathname } = request.nextUrl;

  const isLoginPage = pathname === "/login";
  const isEventsPage = pathname === "/eventos";
  const isRootPage = pathname === "/";

  if (isRootPage) {
    if (token) {
      return NextResponse.redirect(new URL("/eventos", request.url));
    } 
    return NextResponse.redirect(new URL("/login", request.url));
  }

  if (isLoginPage && token) {
    return NextResponse.redirect(new URL("/eventos", request.url));
  }

  const protectedRoutes = ["/eventos"];
  const isProtectedRoute = protectedRoutes.includes(pathname);

  if (isProtectedRoute && !token) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/", "/login", "/eventos"],
};
