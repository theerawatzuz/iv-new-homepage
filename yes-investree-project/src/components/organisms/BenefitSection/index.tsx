import BenefitCard from "components/molecules/BenefitCard";
import { ROUTES } from "helpers/constants";
import { cx } from "helpers/utils";
import { useTranslations } from "next-intl";
import { useRouter } from "next/router";

const BenefitSection = () => {
  const t = useTranslations();
  const title1 = t("home.benefitSection.card1.title");
  const subTitle1 = t("home.benefitSection.card1.subTitle");
  const content1 = [
    t("home.benefitSection.card1.content.0"),
    t("home.benefitSection.card1.content.1"),
    t("home.benefitSection.card1.content.2"),
    t("home.benefitSection.card1.content.3"),
  ];
  const title2 = t("home.benefitSection.card2.title");
  const subTitle2 = t("home.benefitSection.card2.subTitle");
  const content2 = [
    t("home.benefitSection.card2.content.0"),
    t("home.benefitSection.card2.content.1"),
    t("home.benefitSection.card2.content.2"),
    t("home.benefitSection.card2.content.3"),
  ];
  const router = useRouter();

  return (
    <div
      className={cx(
        "container rounded-3xl w-auto mx-5 tablet:mx-auto bg-benefit-section bg-cover bg-center bg-no-repeat",
        "shadow-[0px_10px_18px_2px_rgba(154,176,205,0.30)]",
        "tablet:max-w-[1200px] tablet:w-[calc(100%-64px)]",
        "laptop:max-w-[1200px]"
      )}
    >
      <div className='flex flex-col items-start laptop:px-0 desktop:px-[80px] py-8 desktop:py-20'>
        <div
          className={cx(
            "flex flex-col justify-between",
            "desktop:flex-row desktop:justify-center desktop:gap-10"
          )}
        >
          <div className='text-headline8 tablet:text-headline9 w-[310px] tablet:w-[500px] pl-3 tablet:pl-0'>
            {t("home.benefitSection.title")}
          </div>
          <div className='w-[310px] tablet:w-[500px]' />
        </div>
        <div
          className={cx(
            "w-full mt-6 flex flex-col gap-5 justify-between desktop:justify-center",
            "laptop:flex-row laptop:mt-10 laptop:gap-10"
          )}
        >
          <BenefitCard
            title={title1}
            subTitle={subTitle1}
            content={content1}
            bgColor='green'
            btnText={t("home.benefitSection.card1.button")}
            onClick={() => router.push(ROUTES.FUNDING)}
          />
          <BenefitCard
            title={title2}
            subTitle={subTitle2}
            content={content2}
            bgColor='blue'
            btnText={t("home.benefitSection.card2.button")}
            onClick={() => router.push(ROUTES.INVESTMENT)}
          />
        </div>
      </div>
    </div>
  );
};

export default BenefitSection;
