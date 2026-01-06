import { useMediaQuery, useTheme } from "@mui/material";
import AnimatedLanguageSwitcherTab from "components/atoms/AnimatedLanguageSwitcherTab";
import BannerBar from "components/atoms/BannerBar";
import HomeButtonLogo from "components/atoms/HomeButtonLogo";
import Link from "components/atoms/Link";
import { ROUTES } from "helpers/constants";
import { cx } from "helpers/utils";
import { useTranslations } from "next-intl";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

const ScrollNavbar = () => {
  const t = useTranslations();
  const [prevScrollpos, setPrevScrollpos] = useState(0);
  const [top, setTop] = useState(0);
  const navHeight = 64;
  const bannerHeight = 40;
  const theme = useTheme();
  const upLaptop = useMediaQuery(theme.breakpoints.up("laptop"));
  const router = useRouter();
  const { pathname } = router;

  const [screenWidth, setScreenWidth] = useState(window.innerWidth);


  useEffect(() => {
    const handleResize = () => setScreenWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const navWidth = `w-[calc(${screenWidth})]`;

  useEffect(() => {
    // Function to handle scroll events
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      if (prevScrollpos > currentScrollPos) {
        setTop(0); // Show navbar
      } else {
        setTop(-(navHeight + bannerHeight)); // Hide navbar
      }
      setPrevScrollpos(currentScrollPos);
    };
    // Add scroll event listener when the component mounts
    window.addEventListener("scroll", handleScroll);
    // Clean up by removing the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollpos]);

  // Styles for the navbar and links
  const navbarStyle: React.CSSProperties = {
    backgroundColor: "#FFFFFF",
    position: "fixed",
    top: `${top}px`,
    height: `${navHeight}px`,
    width: "100%",
    display: "block",
    transition: "top 0.3s",
    zIndex: 99,
  };


  return (
    <div style={navbarStyle}>
      <BannerBar />
      <div className='w-full h-[64px] bg-white'>
        <div className='flex flex-col items-center justify-center h-full'>
          <div
            className={cx(
              "max-w-[1200px]",
              // navWidth,
              "tablet:w-[calc(100%-64px)]"
            )}
          >
            <div className='flex justify-between'>
              <div className='mt-[-5px]'>
                <HomeButtonLogo />
              </div>

              <div className='flex gap-12 text-body4 text-black items-center'>
                <Link

                  href={ROUTES.ABOUT}
                  className={cx(
                    pathname === ROUTES.ABOUT
                      ? "bg-green-300 rounded-full h-8 flex items-center px-4 text-white"
                      : ""
                  )}
                >

                  {t("menu.about")}
                </Link>

                <Link
                  href={ROUTES.FUNDING}
                  className={cx(
                    pathname === ROUTES.FUNDING
                      ? "bg-green-300 rounded-full h-8 flex items-center px-4 text-white"
                      : ""
                  )}
                >
                  {t("menu.funding")}
                </Link>
                <Link
                  href={ROUTES.INVESTMENT}
                  className={cx(
                    pathname === ROUTES.INVESTMENT
                      ? "bg-green-300 rounded-full h-8 flex items-center px-4 text-white"
                      : ""
                  )}
                >
                  {t("menu.investing")}
                </Link>
                <Link
                  href={ROUTES.FAQ}
                  className={cx(
                    pathname === ROUTES.FAQ
                      ? "bg-green-300 rounded-full h-8 flex items-center px-4 text-white"
                      : ""
                  )}
                >
                  {t("menu.faq")}
                </Link>
                <Link
                  href={ROUTES.NEWS}
                  className={cx(
                    pathname === ROUTES.NEWS
                      ? "bg-green-300 rounded-full h-8 flex items-center px-4 text-white"
                      : ""
                  )}
                >
                  {t("menu.news")}
                </Link>

                <AnimatedLanguageSwitcherTab />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ScrollNavbar;
