import "server-only";
import { jwtVerify, SignJWT } from "jose";
import { cookies } from "next/headers";

const ownerSecret = process.env.OWNER_SESSION_SECRET;
if (!ownerSecret) throw new Error("OWNER_SESSION_SECRET is missing.");

const key = new TextEncoder().encode(ownerSecret);

const SESSION_DAYS = 30;

export type SessionPayload = { ownerId: string; role: "owner" };

//CREATE owner SESSION
export async function createOwnerSession(ownerId: string, role: "owner") {
  const expiresAt = new Date(Date.now() + SESSION_DAYS * 24 * 60 * 60 * 1000);

  const token = await new SignJWT({ ownerId, role })
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime(expiresAt)
    .sign(key);

  const ownerCookieStore = await cookies();
  ownerCookieStore.set("ownerSession", token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    expires: expiresAt,
    path: "/",
  });
}

// READ OWNER'S SESSION
export async function getOwnerSession(): Promise<SessionPayload | null> {
  const token = (await cookies()).get("ownerSession")?.value;
  if (!token) return null;

  try {
    const { payload } = await jwtVerify(token, key, { algorithms: ["HS256"] });
    if (typeof payload.ownerId !== "string" || payload.role !== "owner")
      return null;
    return {
      ownerId: payload.ownerId,
      role: "owner",
    };
  } catch {
    return null;
  }
}

// DELETE OWNER'S SESSION
export async function deleteOwnerSession() {
  (await cookies()).delete("ownerSession");
}
