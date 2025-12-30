"server-only";

import { auth } from "@/lib/auth";
import { headers } from "next/headers";

export const getUserSession = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });
  return session;
};

export const isAuthenticated = async () => {
  const session = await getUserSession();

  if (session) {
    return { success: true, message: "Authorized" };
  }
  return { success: false, message: "Unauthorized" };
};

export const isAdmin = async () => {
  const session = await getUserSession();

  if (session && session.user.role === "admin") {
    return { success: true, message: "Authorized as Admin" };
  }
  return { success: false, message: "Unauthorized as Admin" };
};
