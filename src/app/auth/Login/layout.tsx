import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import type { Metadata } from "next";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "Login",
};

export default async function LoginLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // const session = await getServerSession(authOptions);
  // console.log({ session });

  // if (session) {
  //   redirect("/fetch");
  // }

  return <>{children}</>;
}
