import strapi from "api/strapi";
import GapSection from "components/atoms/GapSection";
import CardSelectionSection from "components/organisms/CardSelectionSection";
import CriteriaAccordionSection from "components/organisms/CriteriaAccordionSection";
import FaqSection from "components/organisms/FaqSection";
import FundingTestimonialSection from "components/organisms/FundingTestimonialSection";
import InvestmentHeaderSection from "components/organisms/InvestmentHeaderSection";
import ProcessSection from "components/organisms/ProcessSection";
import Layout from "components/templates/Layout";
import { FAQColorEnum } from "enums/common";
import { UseFaqReturnType, useFaq } from "hooks/useFaq";
import { IFaqs } from "interfaces/faq";
import { IFaqCategories } from "interfaces/faq-category";
import { ILocaleProps } from "interfaces/general";

type Props = {
  faqCategories: IFaqCategories;
  faqs: IFaqs;
};

const InvestmentPage = ({ faqCategories, faqs }: Props) => {
  const { selectedCategories, seletedfaqs, handleChangeCategory } = useFaq({
    initialSegment: 2,
    faqCategories,
    faqs,
  }) as UseFaqReturnType;

  return (
    <Layout>
      <InvestmentHeaderSection />
      <GapSection />
      <CardSelectionSection
        title='ลงทุนหุ้นกู้ Crowdfunding'
        subTitle='ผ่านอินเวสทรี (ไทยแลนด์) ดีอย่างไร?'
        color='blue'
      />
      <GapSection />
      <ProcessSection page='investing' />
      <GapSection />
      <CriteriaAccordionSection color='blue' page='investing' />
      <GapSection />
      <FaqSection
        color={FAQColorEnum.Blue}
        content={seletedfaqs}
        categories={selectedCategories}
        onChangeCategory={handleChangeCategory}
      />
      <GapSection />
      <FundingTestimonialSection
        title='Voice of Investor'
        subTitle='เชิญรับชม SME เล่าประสบกาณ์ระดมทุน Crowdfunding กับอินเวสทรี (ไทยแลนด์)'
        page='investing'
      />
      <GapSection />
    </Layout>
  );
};

export default InvestmentPage;

export const getStaticProps = async ({ locale }: ILocaleProps) => {
  const params = {
    locale,
    populate: "*",
  };
  const faqCategories = await strapi.getFaqCategories(params);
  const faqs = await strapi.getFaqs(params);
  return {
    props: {
      messages: (await import(`../../../messages/${locale}.json`)).default,
      faqCategories,
      faqs,
    },
  };
};
