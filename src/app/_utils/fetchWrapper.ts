import { getSession } from "next-auth/react";

export async function fetchWrapper(url, options = {}) {
  const session = await getSession();

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
    throw new Error(`API request failed with status: ${response.status}`);
  }

  return await response.json();
}
