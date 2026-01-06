import { COOKIES_KEYS } from "helpers/constants";
import { Head, Html, Main, NextScript } from "next/document";
import Cookies from "universal-cookie";

export default function Document() {
  const cookies = new Cookies();
  const currentLocale =
    cookies.get(COOKIES_KEYS.NEXT_LOCALE) === "th" ? "th" : "en";
  return (
    <Html lang={currentLocale}>
      <Head />
      <body className='antialiased'>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
