import { routing } from "@/i18n/routing";
import createMiddleware from "next-intl/middleware";

import { auth as authMiddleware } from "@/lib/auth";

export default authMiddleware(createMiddleware(routing));

export const config = {
  // Match only internationalized pathnames
  matcher: ["/", "/(pt-br|en)/:path*"],
};
