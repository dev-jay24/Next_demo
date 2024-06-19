import { signOut } from "next-auth/react";
import { getSessionData } from "./action";

export async function fetchWrapper(url: any, options: any = {}) {
  const session: any = await getSessionData();

  const token = session?.user?.accessToken;

  const newOptions = {
    ...options,
    headers: {
      ...options.headers,
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: token ? `Bearer ${token}` : "",
    },
  };

  const response = await fetch(
    process.env.NEXT_PUBLIC_BACKEND_URL + url,
    newOptions
  );

  // Handle errors
  if (!response.ok) {
    if (response?.status === 403) {
      signOut();
    }
    throw new Error(`API request failed with status: ${response.status}`);
  }

  return await response.json();
}
