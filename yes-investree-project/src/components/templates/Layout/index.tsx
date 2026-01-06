import { useMediaQuery, useTheme } from "@mui/material";
import Button from "components/atoms/Button";
import ChatButton from "components/atoms/ChatButton";
import Input from "components/atoms/Input";
import ScrollToTopButton from "components/atoms/ScrollToTopButton";
import AppBanner from "components/molecules/AppBanner";
import NavigationHeader from "components/organisms/NavigationHeader";
import { useGlobalError } from "helpers/use";
import { useModal } from "hooks/useModal";
import { useTranslation } from "next-i18next";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import { ReactNode, useContext, useEffect, useState } from "react";
import { UserProfileContext } from "stores/userProfileContext";

const Footer = dynamic(() => import("components/organisms/Footer"));
const CommonModal = dynamic(() => import("components/atoms/CommonModal"), {
  ssr: false,
});
const AcceptCookieBottomBar = dynamic(
  () => import("components/molecules/AcceptCookieBottomBar"),
  { ssr: false }
);
const ScrollNavbar = dynamic(() => import("components/organisms/ScrollNavbar"));

type Props = {
  children: ReactNode;
  showAppBanner?: boolean;
};

const Layout = ({ children, showAppBanner }: Props) => {
  const { t } = useTranslation("common");
  const { error, setError } = useGlobalError();
  const router = useRouter();
  const userProfileContext = useContext(UserProfileContext);
  const {
    open: referralModalOpen,
    onOpen: onReferralModalOpen,
    onClose: onReferralModalClose,
  } = useModal();
  const theme = useTheme();
  const upTablet = useMediaQuery(theme.breakpoints.up("tablet"));
  const upLaptop = useMediaQuery(theme.breakpoints.up("laptop"));

  const [referralCode, setReferralCode] = useState<string>("");

  const onSubmitReferralCode = async () => {
    if (referralCode) {
    }

    onReferralModalClose();
  };

  useEffect(() => {
    setError({ status: undefined });
  }, []);

  useEffect(() => {
    if (router.query.referral === "true") onReferralModalOpen();
  }, [router]);

  return (
    <div>
      <CommonModal
        open={referralModalOpen}
        onClose={onReferralModalClose}
        width={504}
        paperPadding={upTablet ? 2 : 0}
      >
        <div className="mb-4 text-center text-body2">
          {t("common:referral.title")}
        </div>
        <Input
          placeholder={t("common:referral.placeholder")}
          dataTestId="referralCode"
          inputClassName="text-center"
          className="mb-4 tablet:mx-2"
          maxLength={20}
          isOnlyNumberAndAlphabet
          onChange={setReferralCode}
          value={referralCode}
        />
        <Button
          text={t("common:nextStep")}
          size="lg"
          onClick={onSubmitReferralCode}
          fullWidth={!upTablet}
          className={`m-auto mb-1 mt-6 tablet:-mb-1 ${upTablet && "w-[196px]"}`}
          dataTestId="submitReferralButton"
        ></Button>
      </CommonModal>
      {showAppBanner && <AppBanner />}
      {upLaptop ? <ScrollNavbar /> : <NavigationHeader />}
      <main>{children}</main>
      <Footer />
      <ScrollToTopButton />
      <ChatButton />
      {<AcceptCookieBottomBar />}
    </div>
  );
};

export default Layout;
