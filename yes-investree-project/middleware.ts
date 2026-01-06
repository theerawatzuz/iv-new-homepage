import { NextRequest, NextResponse } from "next/server";

const PUBLIC_FILE = /\.(.*)$/;

export async function middleware(req: NextRequest) {
  if (
    req.nextUrl.pathname.startsWith("/_next") ||
    req.nextUrl.pathname.includes("/api/") ||
    PUBLIC_FILE.test(req.nextUrl.pathname)
  ) {
    return;
  }

  if (req.nextUrl.locale === "default") {
    const locale = req.cookies.get("NEXT_LOCALE")?.value || "th";

    return NextResponse.redirect(
      new URL(`/${locale}${req.nextUrl.pathname}${req.nextUrl.search}`, req.url)
    );
  }

  // const defaultLocale = req.headers.get("NEXT_LOCALE") || "th";
  // const handleI18nRouting = createMiddleware({
  //   locales: ["th", "en"],
  //   defaultLocale,
  // });
  // const response = handleI18nRouting(req);
  // response.headers.set("NEXT_LOCALE", defaultLocale);

  // return response;
}
