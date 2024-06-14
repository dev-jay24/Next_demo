import Header from "../_components/Header";
import { withAuth } from "./withAuth";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Admin-Dashboard",
};

const layout = async ({
  children,
}: //
Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <>
      <Header />
      {children}
    </>
  );
};

export default withAuth(layout);
