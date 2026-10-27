import "server-only";
import { cache } from "react";

export const getSession = cache(async () => {
  // read cookie, verify token / look up session in db
});

// DATA ACCESS LAYER