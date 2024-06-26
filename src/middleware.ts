import { withAuth } from "next-auth/middleware";
import { NextResponse } from "next/server";
const adminRoutes = ["dashboard"];
const regex = new RegExp(`^\\/(${adminRoutes.join("|")})(\\/.*)?$`);

export default withAuth(
  async function middleware(req) {
    const url = req.nextUrl.pathname;
    const token: any = req?.nextauth?.token;

    if (url.match(regex)) {
      if (token?.user?.role !== "admin") {
        return NextResponse.redirect(new URL("/", req.url));
      }
    }

    return NextResponse.next();
  },
  {
    callbacks: {
      authorized: ({ req, token }: { req: any; token: any }) => {
        console.log("token: ", token);
        // const url = req.nextUrl.pathname;

        if (token?.user) {
          return true;
        }

        return false;
      },
    },
  }
);

export const config = {
  matcher: ["/((?!$|api|_next/static|_next/image|auth|.*\\.png$).*)"],
};
