import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";

export const withAuth = (WrappedComponent: any) => {
  return async function WithAuth(props: any) {
    const session = await getServerSession(authOptions);
    if (!session) {
      redirect("/auth/Login");
    }
    return <WrappedComponent {...props} />;
  };
};
