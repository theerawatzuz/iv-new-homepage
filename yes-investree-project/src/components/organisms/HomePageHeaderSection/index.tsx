import Button from "components/atoms/Button";
import HeaderSection from "components/templates/HeaderSection";
import { ROUTES } from "helpers/constants";
import { cx } from "helpers/utils";
import { useTranslations } from "next-intl";
import Router from "next/router";

type Props = {
  locale?: string;
};

const HomePageHeaderSection = ({ locale }: Props) => {
  const t = useTranslations();
  return (
    <HeaderSection
      backgroundImage='bg-home-cover'
      childClassName='laptop:px-48'
      backgroundClass='opacity-80'
      className='h-[calc(100vh-104px)] laptop:h-screen mb-0 flex items-start tablet:items-center'
    >
      <div className='mt-[64px] tablet:mt-0'>
        <h1 className='gap-2 tablet:text-headline1 text-center text-headline4'>
          <span className='text-green-300'>{t("home.header.title1")}</span>
          <br />
          <span className='text-blue-primary'>{t("home.header.title2")}</span>
          <br />
          {locale === "th" && (
            <span className='text-blue-primary'>{t("home.header.title3")}</span>
          )}
        </h1>
        <div className='flex gap-4 justify-center mt-6 tablet:mt-8'>
          <Button
            className={cx(
              "bg-green-300 rounded-lg text-subtitle2 w-[135px] h-10",
              "tablet:text-body12 tablet:w-[160px] tablet:h-14"
            )}
            text={t("home.header.button1")}
            size='lg'
            onClick={() => Router.push(ROUTES.FUNDING)}
          />
          <Button
            className={cx(
              "bg-blue-primary rounded-lg text-button-large w-[135px] h-10",
              "tablet:text-body12 tablet:w-[160px] tablet:h-14"
            )}
            text={t("home.header.button2")}
            size='lg'
            onClick={() => Router.push(ROUTES.INVESTMENT)}
          />
        </div>
      </div>
    </HeaderSection>
  );
};

export default HomePageHeaderSection;
