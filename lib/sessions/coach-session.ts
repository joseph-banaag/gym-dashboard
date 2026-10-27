import "server-only";
import { jwtVerify, SignJWT } from "jose";
import { cookies } from "next/headers";

const secret = process.env.COACH_SESSION_SECRET;
if (!secret) throw new Error("COACH_SESSION_SECRET is missing.");
const key = new TextEncoder().encode(secret);

const SESSION_DAYS = 7;

export type CoachSessionPayload = { coachId: string; role: "coach" };

//CREATE SESSION
export async function createCoachSession(coachId: string, role: "coach") {
  const expiresAt = new Date(Date.now() + SESSION_DAYS * 24 * 60 * 60 * 1000);

  const token = await new SignJWT({ coachId, role })
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime(expiresAt)
    .sign(key);

  const coachCookieStore = await cookies();
  coachCookieStore.set("coachSession", token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    expires: expiresAt,
    path: "/",
  });
}

//READ/GET SESSION
export async function getCoachSession(): Promise<CoachSessionPayload | null> {
  const token = (await cookies()).get("coachSession")?.value;
  if (!token) return null;

  try {
    const { payload } = await jwtVerify(token, key, { algorithms: ["HS256"] });
    if (typeof payload.coachId !== "string" || payload.role !== "coach")
      return null;
    return {
      coachId: payload.coachId,
      role: "coach",
    };
  } catch {
    return null;
  }
}

// DELETE SESSION
export async function deleteCoachSession() {
  (await cookies()).delete("coachSession");
}