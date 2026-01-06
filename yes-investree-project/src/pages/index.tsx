import strapi from "api/strapi";
import GapSection from "components/atoms/GapSection";
import Seo from "components/atoms/Seo";
import PromoSlide from "components/molecules/PromoSlide";
import ArticleSection from "components/organisms/ArticleSection";
import BenefitSection from "components/organisms/BenefitSection";
import CertificationSection from "components/organisms/CertificationSection";
import DetailSection from "components/organisms/DetailSection";
import DynamicBrandSection from "components/organisms/DynamicBrandSection";
import HomePageHeaderSection from "components/organisms/HomePageHeaderSection";
import PromoCarouselSection from "components/organisms/PromoCarouselSection";
import SuccessSection from "components/organisms/SuccessSection";
import Layout from "components/templates/Layout";
import { NEWS_PARAMS } from "helpers/constants";
import { getSkipStaticSiteGeneration } from "helpers/utils";
import { Articles } from "interfaces/articles";
import { ILocaleProps } from "interfaces/general";
import { useTranslations } from "next-intl";

type Props = {
  locale: string;
  articles: Articles;
};

export default function Home({ locale, articles }: Props) {
  const t = useTranslations();
  return (
    <Layout>
      <Seo
        title={t("home.seo.title")}
        description={t("home.seo.description")}
        noindex={false}
      />
      <HomePageHeaderSection locale={locale} />
      <GapSection />
      <PromoCarouselSection />
      <PromoSlide />
      <CertificationSection />
      <SuccessSection />
      <BenefitSection />
      <GapSection />
      <DynamicBrandSection />
      <GapSection />
      <DetailSection />
      <GapSection />
      <ArticleSection articles={articles.data} />
      <GapSection />
    </Layout>
  );
}

export const getStaticProps = async ({ locale }: ILocaleProps) => {
  const skipSSG = getSkipStaticSiteGeneration();
  if (skipSSG) return { notFound: true };

  const params = {
    ...NEWS_PARAMS,
    locale,
  };
  const articles = await strapi.getArticles(params);
  if (!articles) {
    return {
      notFound: true,
    };
  }
  const messages = {
    ...(await import(`../../messages/${locale}.json`)).default,
    ...(await import(`../../messages/article/${locale}.json`)).default,
  };

  return {
    props: {
      locale,
      messages,
      articles,
    },
    revalidate: process.env.NEXT_PUBLIC_REVALIDATE_SSG_SHORT_SECONDS
      ? parseInt(process.env.NEXT_PUBLIC_REVALIDATE_SSG_SHORT_SECONDS, 10)
      : 10,
  };
};
