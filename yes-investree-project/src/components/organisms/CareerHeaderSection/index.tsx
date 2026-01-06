import TeamPageHeadTitle from "components/atoms/TeamPageHeadTitle";
import HeaderSection from "components/templates/HeaderSection";
import { useTranslations } from "next-intl";

const CareerHeaderSection = () => {
  const t = useTranslations();
  return (
    <HeaderSection backgroundImage='bg-career-cover'>
      <TeamPageHeadTitle
        pageTitle={t("career.careerHeaderSection.pageTitle")}
        mainTitle={t("career.careerHeaderSection.mainTitle")}
        subTitle={t("career.careerHeaderSection.subTitle")}
      />
    </HeaderSection>
  );
};

export default CareerHeaderSection;
