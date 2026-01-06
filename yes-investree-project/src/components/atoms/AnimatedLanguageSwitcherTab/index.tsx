import { COOKIES_KEYS } from "helpers/constants";
import { cx } from "helpers/utils";
import router from "next/router";
import { useCallback, useState } from "react";
import Cookies from "universal-cookie";

const AnimatedTab = () => {
  const cookies = new Cookies(null, { path: "/" });
  const [activeTab, setActiveTab] = useState(
    cookies.get(COOKIES_KEYS.NEXT_LOCALE) === "th" ? 2 : 1
  );

  const switchToLocale = useCallback(
    (locale: string) => {
      cookies.set(COOKIES_KEYS.NEXT_LOCALE, locale, {
        path: "/",
      });
      const path = router.asPath;
      return router.push(path, path, { locale });
    },
    [router]
  );

  return (
    <ul className='flex items-center bg-gray-light-300 rounded-full p-1 relative h-[32px] w-[107px] text-button-medium'>
      <div
        className={cx(
          "!bg-white absolute !text-[#fff] h-[85%] w-[50px] transition duration-700 rounded-full border-transparent cursor-pointer",
          activeTab === 1 ? "translate-x-[0px]" : "",
          activeTab === 2 ? "translate-x-[50px]" : ""
        )}
      ></div>
      <li
        className={cx(
          "px-4 py-2 w-[50px]  text-gray-300 z-20 rounded-full border-transparent cursor-pointer",
          activeTab === 1 ? "!text-gray-500" : ""
        )}
        onClick={() => {
          switchToLocale("en");
          setActiveTab(1);
        }}
      >
        En
      </li>
      <li
        className={cx(
          "pl-[18px] py-2 w-[50px] text-gray-300 z-20 rounded-full border-transparent cursor-pointer",
          activeTab === 2 ? "!text-gray-500" : ""
        )}
        onClick={() => {
          switchToLocale("th");
          setActiveTab(2);
        }}
      >
        Th
      </li>
    </ul>
  );
};

export default AnimatedTab;
