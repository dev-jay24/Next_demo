import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Login",
};

export default async function LoginLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
