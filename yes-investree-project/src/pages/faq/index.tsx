import strapi from "api/strapi";
import GapSection from "components/atoms/GapSection";
import PageHeadTitle from "components/atoms/PageHeadTitle";
import FaqTabs from "components/molecules/FaqTabs";
import FaqSection from "components/organisms/FaqSection";
import Layout from "components/templates/Layout";
import { TAB_CATEGORY } from "helpers/constants";
import { UseFaqReturnType, useFaq } from "hooks/useFaq";
import { IFaqs } from "interfaces/faq";
import { IFaqCategories } from "interfaces/faq-category";
import { IFaqSegment } from "interfaces/faq-segment";
import { ILocaleProps } from "interfaces/general";

type Props = {
  faqSegments: IFaqSegment;
  faqCategories: IFaqCategories;
  faqs: IFaqs;
};

const FAQPage = ({ faqSegments, faqCategories, faqs }: Props) => {
  const {
    segment,
    selectedCategories,
    seletedfaqs,
    handleSelectSegment,
    handleChangeCategory,
  } = useFaq({ initialSegment: 0, faqCategories, faqs }) as UseFaqReturnType;

  return (
    <Layout>
      <div className='container'>
        <PageHeadTitle title='คำถามที่พบบ่อย' />
        <div className='flex justify-center'>
          <FaqTabs onChange={handleSelectSegment} />
        </div>
        <FaqSection
          color={TAB_CATEGORY[segment].style}
          content={seletedfaqs}
          hasTitle={false}
          faqTitle={TAB_CATEGORY[segment].label}
          categories={selectedCategories}
          onChangeCategory={handleChangeCategory}
        />
        <GapSection />
      </div>
    </Layout>
  );
};

export default FAQPage;

export const getStaticProps = async ({ locale }: ILocaleProps) => {
  const params = {
    locale,
    populate: "*",
  };
  const faqSegments = await strapi.getFaqSegments(params);
  if (!faqSegments) {
    return {
      notFound: true,
    };
  }
  const faqCategories = await strapi.getFaqCategories(params);
  const faqs = await strapi.getFaqs(params);

  return {
    props: {
      messages: (await import(`../../../messages/${locale}.json`)).default,
      faqSegments,
      faqs,
      faqCategories,
    },
  };
};
