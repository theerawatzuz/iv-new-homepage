import { useMediaQuery, useTheme } from "@mui/material";
import Link from "components/atoms/Link";
import { motion } from "framer-motion";
import { cx } from "helpers/utils";
import { useTranslations } from "next-intl";
import "react-multi-carousel/lib/styles.css";

const ImageList = [
  "/images/promo/promo-1.png",
  "/images/promo/promo-2.png",
  "/images/promo/promo-3.png",
];

const CertificationSection = () => {
  const t = useTranslations();
  const theme = useTheme();
  const tablet = useMediaQuery(theme.breakpoints.up("tablet"));
  const laptop = useMediaQuery(theme.breakpoints.up("laptop"));

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1.5,
      slidesToSlide: 1,
    },
  };

  return (
    <div
      className={cx(
        "container last:mb-10 tablet:last:mb-15 w-full",
        "tablet:max-w-[1200px] tablet:w-[calc(100%-64px)]",
        "laptop:max-w-[1200px]",
        "desktop:last:mb-20"
      )}
    >
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 1 }}
        className={cx(
          "text-button-small text-gray-500 mt-4 w-[274px]",
          "laptop:text-subtitle2 laptop:mt-7 laptop:w-full"
        )}
      >
        {t("home.promoCarouselSection.warning")}
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 1 }}
        className="mt-8 tablet:mt-14 flex flex-col items-center gap-2 bg-gradient-to-r from-silver-primary to-silver-secondary py-8 rounded-[30px]"
      >
        <div className="text-body17 tablet:text-subtitle5 text-gray-800">
          {t("home.promoCarouselSection.cert.text")}
        </div>
        <Link
          href="https://market.sec.or.th/LicenseCheck/CompanyDetail/0000032201#licenseSection"
          className="text-body17 tablet:text-headline5 "
        >
          {t("home.promoCarouselSection.cert.link1")}
          <br className="tablet:hidden" />
          {t("home.promoCarouselSection.cert.link2")}
        </Link>
      </motion.div>
    </div>
  );
};

export default CertificationSection;
