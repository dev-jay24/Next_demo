"use server";

import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/authOptions";

export async function getSessionData() {
  return getServerSession(authOptions);
}
