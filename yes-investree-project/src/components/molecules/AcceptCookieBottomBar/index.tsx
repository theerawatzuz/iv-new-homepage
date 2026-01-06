import { useMediaQuery, useTheme } from "@mui/material";
import Button from "components/atoms/Button";
import Link from "components/atoms/Link";
import {
  ACCEPT_COOKIE_LIFE_TIME,
  ACCEPT_COOKIE_NAME,
  ROUTES,
} from "helpers/constants";
import { cx } from "helpers/utils";
import { useTranslations } from "next-intl";
import { useContext, useState } from "react";
import { UserProfileContext } from "stores/userProfileContext";
import Cookies from "universal-cookie";

const AcceptCookieBottomBar = () => {
  const t = useTranslations();
  const theme = useTheme();
  const downTablet = useMediaQuery(theme.breakpoints.down("tablet"));
  const cookies = new Cookies();
  const userProfileContext = useContext(UserProfileContext);
  const profile = userProfileContext?.profile;

  const [open, setOpen] = useState(true);

  const onConfirm = () => {
    cookies.set(ACCEPT_COOKIE_NAME, "Y", {
      path: "/",
      maxAge: ACCEPT_COOKIE_LIFE_TIME,
    });
    userProfileContext.setProfile({ ...profile, consented: true });
    setOpen(false);
  };

  return (
    <div
      id="popup_cookie"
      className={cx(
        "bottom-0 fixed z-40 p-4 shadow-md tablet:px-6 w-full bg-gray-800 text-white",
        open === false ? "hidden" : undefined
      )}
    >
      <div className="tablet:flex justify-between items-center">
        <div className="">
          <div className="text-body5">
            {`${t("acceptCookieBottomBar.description")} `}
            <Link
              href={ROUTES.TERM_OF_USE}
              className="underline text-link-cookie laptop:text-body6 text-green-300"
              target="_blank"
            >
              {t("acceptCookieBottomBar.dataPrivacyPolicy")}
            </Link>{" "}
            {`${t("acceptCookieBottomBar.and")} `}
            <Link
              href={ROUTES.PRIVACY_POLICY}
              className="underline text-link-cookie laptop:text-body6 text-green-300"
              target="_blank"
            >
              {t("acceptCookieBottomBar.cookiePolicy")}
            </Link>
          </div>
        </div>
        <div className="flex items-center mobile-only:mt-4 tablet:ml-4 gap-2">
          <Button
            text={t("acceptCookieBottomBar.acknowledge")}
            onClick={onConfirm}
            size="md"
            fullWidth={!!downTablet}
            variant="contains"
            color="green"
            dataTestId="acceptCookieButton"
            className="rounded-lg text-headline12"
          />
          <Button
            text={t("acceptCookieBottomBar.decline")}
            onClick={onConfirm}
            size="md"
            fullWidth={!!downTablet}
            variant="outline"
            color="green"
            dataTestId="acceptCookieButton"
            className="rounded-lg text-headline12 text-green-300 border-[1px] border-solid border-green-300"
          />
        </div>
      </div>
    </div>
  );
};

export default AcceptCookieBottomBar;
