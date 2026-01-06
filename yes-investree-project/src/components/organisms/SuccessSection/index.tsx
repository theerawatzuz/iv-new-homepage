import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import Button from "components/atoms/Button";
import ScrollToCounter from "components/atoms/ScrollToCounter";
import { cx } from "helpers/utils";
import { useTranslations } from "next-intl";

const BenefitSection = () => {
  const t = useTranslations();
  return (
    <div
      className={cx(
        "bg-success-section bg-cover bg-center bg-no-repeat p-14 px-5",
        "tablet:py-[150px] tablet:px-10"
      )}
    >
      <div
        className={cx(
          "container rounded-3xl w-full bg-white pt-8 pb-10 px-5",
          "tablet:px-20 tablet:py-14 tablet:max-w-[1200px] tablet:w-[calc(100%-64px)]",
          "laptop:max-w-[1200px]"
        )}
      >
        <div className='text-gray-800 text-headline8 tablet:text-headline9'>
          {t("home.successSection.title")}
        </div>
        <div
          className={cx(
            "text-body9 leading-relaxed text-gray-800 pt-4",
            "tablet:text-subtitle5 ",
            "desktop:pr-[100px] monitor:pr-[465px] large-monitor:pr-[400px]"
          )}
        >
          {t("home.successSection.subTitle")}
          <br className='tablet:hidden' />
          {t("home.successSection.subTitle2")}
        </div>

        <div className='grid grid-cols-1 gap-4 mt-[52px] laptop:mt-10 laptop:grid-cols-2 desktop:grid-cols-4'>
          <div className='col-span-1 flex flex-col justify-between items-center tablet:items-start py-4 px-6 tablet:py-6 bg-[#FAFAFA] rounded-2xl'>
            <p className=''>
              {t("home.successSection.card1.title")}
              <br className='hidden tablet:block' />
              {t("home.successSection.card1.unit")}
            </p>
            <div className='mt-[14px] tablet:mt-4'>
              <ScrollToCounter start={0} end={3.4} />
            </div>
          </div>
          <div className='col-span-1 flex flex-col justify-between items-center tablet:items-start py-4 px-6 tablet:py-6 bg-[#FAFAFA] rounded-2xl'>
            <p className=''>
              {t("home.successSection.card2.title")}
              <br className='hidden laptop :block' />
              {t("home.successSection.card2.unit")}
            </p>
            <div className='mt-4'>
              <ScrollToCounter start={0} end={3.4} />
            </div>
          </div>
          <div className='col-span-1 flex flex-col justify-between items-center tablet:items-start py-4 px-6 tablet:py-6 bg-[#FAFAFA] rounded-2xl'>
            <p className=''>
              {t("home.successSection.card3.title")}
              <br className='hidden tablet:block' />
              {t("home.successSection.card3.unit")}
            </p>
            <div className='mt-4'>
              <ScrollToCounter start={0} end={1} />
            </div>
          </div>
          <div className='col-span-1 flex flex-col justify-between items-center tablet:items-start py-4 px-6 tablet:py-6 bg-[#FAFAFA] rounded-2xl'>
            <p className=''>
              {t("home.successSection.card4.title")}
              <br className='hidden tablet:block' />
              {t("home.successSection.card4.unit")}
            </p>
            <div className='mt-4'>
              <ScrollToCounter start={0} end={11.6} isPercent />
            </div>
          </div>
        </div>
        <div className='mt-5 tablet:mt-10 justify-center flex'>
          <Button
            className='rounded-full text-blue-secondary !text-body4 underline'
            text={"รายละเอียดเพิ่มเติม"}
            size='lg'
            variant='outline'
            rightIcon={<KeyboardArrowRightIcon />}
          />
        </div>
        <div className='mt-5 tablet:mt-10 text-body7 laptop:text-body3 text-gray-500'>
          {t("home.successSection.ps")}
        </div>
        <div className='mt-5 tablet:mt-10 text-body7 laptop:text-body3 text-gray-500'>
          {t("home.successSection.warning.title")}{" "}
          {t("home.successSection.warning.message")}
        </div>
      </div>
    </div>
  );
};

export default BenefitSection;
