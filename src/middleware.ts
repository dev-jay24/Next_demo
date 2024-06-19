import { withAuth } from "next-auth/middleware";
import { NextResponse } from "next/server";
const publicRoutes = ["/auth"];
const adminRoutes = ["/dashboard"];
export default withAuth(
  function middleware(req) {
    const url = req.nextUrl.pathname;
    const token: any = req?.nextauth?.token;
    for (let path of adminRoutes) {
      if (url.startsWith(path)) {
        if (token?.user?.role !== "admin") {
          return NextResponse.redirect(new URL("/auth/Login", req.url));
        }
      }
    }

    return NextResponse.next();
  },
  {
    callbacks: {
      authorized: ({ req, token }: { req: any; token: any }) => {
        const url = req.nextUrl.pathname;
        if (url === "/") {
          return true;
        }
        for (let path of publicRoutes) {
          if (url.startsWith(path)) {
            return true;
          }
        }

        if (token?.user?.isActive) {
          return true;
        }

        return false;
      },
    },
  }
);
