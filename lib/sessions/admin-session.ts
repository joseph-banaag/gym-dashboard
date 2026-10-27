import "server-only";
import { jwtVerify, SignJWT } from "jose";
import { cookies } from "next/headers";

const secretKey = process.env.ADMIN_SESSION_SECRET;
if (!secretKey) throw new Error("ADMIN_SESSION_SECRET is missing");
const key = new TextEncoder().encode(secretKey);

const SESSION_DAYS = 7;

export type AdminSessionPayload = { adminId: string; role: "admin" };

//CREATE SESSION
export async function createAdminSession(adminId: string, role: "admin") {
  const expiresAt = new Date(Date.now() + SESSION_DAYS * 24 * 60 * 60 * 1000);

  const token = await new SignJWT({ adminId, role })
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime(expiresAt)
    .sign(key);

  const adminCookiesStore = await cookies();
  adminCookiesStore.set("adminSession", token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    expires: expiresAt,
    path: "/",
  });
}

// READ/GET SESSION
export async function getAdminSession(): Promise<AdminSessionPayload | null> {
  const token = (await cookies()).get("adminSession")?.value;
  if (!token) return null;

  try {
    const { payload } = await jwtVerify(token, key, { algorithms: ["HS256"] });
    if (typeof payload.adminId !== "string" || payload.role !== "admin")
      return null;
    return {
      adminId: payload.adminId as string,
      role: payload.role as "admin",
    };
  } catch {
    return null;
  }
}

// DELETE SESSION
export async function deleteAdminSession() {
  (await cookies()).delete("adminSession");
}