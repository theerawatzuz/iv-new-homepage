import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { useMediaQuery, useTheme } from "@mui/material";
import Button from "components/atoms/Button";
import Image from "components/atoms/Image";
import { cx } from "helpers/utils";
import { useLocale, useTranslations } from "next-intl";
const DetailSection = () => {
  const t = useTranslations();
  const locals = useLocale();

  const theme = useTheme();
  const upTablet = useMediaQuery(theme.breakpoints.up("tablet"));
  const upLaptop = useMediaQuery(theme.breakpoints.up("laptop"));

  return (
    <div className='mx-auto flex justify-center px-5'>
      <div
        className={cx(
          "mobile:px-6 pb-6",
          "laptop:flex gap-[69px] laptop:gap-[40px] laptop:overflow-hidden laptop:p-6",
          "container w-full",
          "tablet:max-w-[1200px] tablet:w-[calc(100%-64px)]",
          "laptop:max-w-[1200px]",
          "bg-gray-light-500 rounded-2xl"
        )}
      >
        {/* ############### Content ############### */}
        <div
          className={cx(
            "px-0 tablet:px-5 pt-8 pb-4",
            "laptop:pl-0 desktop:pl-14 tablet:py-[55.5px] tablet:h-auto laptop:h-[470px]",
            "laptop:w-[480px]",
            "desktop:h-full"
          )}
        >
          <h2 className='text-start text-headline4 text-gray-800 tablet:text-headline9'>
            {t("home.detailSection.title")}
          </h2>

          <p className='tablet:text-body18 text-body9 text-gray-700 leading-relaxed mt-4 font-medium'>
            {t("home.detailSection.subTitle1")}{" "}
            <br className='hidden tablet:block' />
            <span className='text-green-300'>
              {t("home.detailSection.subTitle2")}
            </span>
            <br />
            {t("home.detailSection.subTitle3")}
          </p>
          <div className='mt-5'>
            <Button
              className='text-blue-secondary text-button-xxlarge underline pr-1 pl-0 py-4 tablet:py-[19.5px]'
              text={t("home.detailSection.button")}
              size='lg'
              rightIcon={<ChevronRightIcon />}
            />
          </div>
        </div>
        {/* ############### Image ############### */}
        <div
          className={cx(
            "relative overflow-hidden rounded-2xl h-[400px]",
            "laptop:w-[680px] laptop:h-[453px]"
          )}
        >
          <Image
            fill
            src={
              upTablet
                ? "/images/team_section.png"
                : "/images/team_section_mobile.png"
            }
            alt='Team section image'
            className='h-full w-[164px] object-cover tablet:w-[234px] desktop:w-[264px]'
            sizes='(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw'
          />
        </div>
      </div>
    </div>
  );
};

export default DetailSection;
