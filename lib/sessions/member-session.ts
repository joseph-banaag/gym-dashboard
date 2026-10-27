import "server-only";
import { jwtVerify, SignJWT } from "jose";
import { cookies } from "next/headers";
import { cache } from "react";

const secret = process.env.MEMBER_SESSION_SECRET;
if (!secret) throw new Error("MEMBER_SESSION_SECRET is missing.");
const key = new TextEncoder().encode(secret);

const SESSION_DAYS = 7;

export type SessionPayload = { memberId: string; role: "member" };

// CREATE SESSION
export async function createSession(memberId: string, role: "member") {
  const expiresAt = new Date(Date.now() + SESSION_DAYS * 24 * 60 * 60 * 1000);

  const token = await new SignJWT({ memberId, role })
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime(expiresAt)
    .sign(key);

  const cookieStore = await cookies();
  cookieStore.set("memberSession", token, {
    httpOnly: true, // JavaScript in the browser can't read it
    secure: process.env.NODE_ENV === "production", // HTTPS only on Vercel
    sameSite: "lax",
    expires: expiresAt,
    path: "/",
  });
}

// READ/GET SESSION
export const getSession = cache(async (): Promise<SessionPayload | null> => {
  const token = (await cookies()).get("memberSession")?.value;
  if (!token) return null;

  try {
    const { payload } = await jwtVerify(token, key, { algorithms: ["HS256"] });
    if (typeof payload.memberId !== "string" || payload.role !== "member")
      return null;
    return {
      memberId: payload.memberId,
      role: "member",
    };
  } catch {
    return null; // expired, tampered with, or invalid
  }
});

// DELETE SESSION
export async function deleteSession() {
  (await cookies()).delete("memberSession");
}
