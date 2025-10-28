"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { getAuthToken, validateToken, getCurrentUser } from "@/lib/auth";

type Props = {
  children: React.ReactNode;
  redirectTo?: string;
};

export default function ProtectedRoute({
  children,
  redirectTo = "/sign-in",
}: Props) {
  const router = useRouter();
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    // run only on client
    const tokenLocal = getAuthToken();
    // also check cookie token if present
    const cookieMatch = document.cookie.match(/(?:^|; )authToken=([^;]+)/);
    const tokenCookie = cookieMatch ? cookieMatch[1] : undefined;
    const tokenToCheck = tokenLocal ?? tokenCookie;
    const ok = validateToken(tokenToCheck);
    if (!ok) {
      // ensure we remove any stale auth
      try {
        localStorage.removeItem("authToken");
        localStorage.removeItem("currentUser");
      } catch (e) {
        // ignore
      }
      router.replace(redirectTo);
      return;
    }

    // token valid -> allow rendering
    setChecked(true);
  }, [router, redirectTo]);

  if (!checked) return null;

  return <>{children}</>;
}
