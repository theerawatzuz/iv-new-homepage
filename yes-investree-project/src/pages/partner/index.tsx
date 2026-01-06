import BrandSection from "components/PartnerComponent/section/BrandSection";
import DevelopmentSection from "components/PartnerComponent/section/DevelopmentSection";
import FinancingSection from "components/PartnerComponent/section/FinancingSection";
import MainHeaderPartner from "components/PartnerComponent/section/HeaderSection";
import JoinusSection from "components/PartnerComponent/section/JoinusSection";
import SupplySection from "components/PartnerComponent/section/SupplySection";
import Layout from "components/templates/Layout";
import { getSkipStaticSiteGeneration } from "helpers/utils";
import { ILocaleProps } from "interfaces/general";

const PartnerPage = () => {
  return (
    <Layout>
      <MainHeaderPartner />
      <BrandSection />
      <SupplySection />
      <DevelopmentSection />
      <FinancingSection />
      <JoinusSection />
    </Layout>
  );
};

export default PartnerPage;

export const getStaticProps = async ({ locale }: ILocaleProps) => {
  const skipSSG = getSkipStaticSiteGeneration();
  if (skipSSG) return { notFound: true };

  return {
    props: {
      messages: (await import(`../../../messages/${locale}.json`)).default,
    },
    revalidate: process.env.NEXT_PUBLIC_REVALIDATE_SSG_SHORT_SECONDS
      ? parseInt(process.env.NEXT_PUBLIC_REVALIDATE_SSG_SHORT_SECONDS, 10)
      : 10,
  };
};