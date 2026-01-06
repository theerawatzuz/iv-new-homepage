import strapi from "api/strapi";
import GapSection from "components/atoms/GapSection";
import CardSelectionSection from "components/organisms/CardSelectionSection";
import CriteriaAccordionSection from "components/organisms/CriteriaAccordionSection";
import FaqSection from "components/organisms/FaqSection";
import FundingHeaderSection from "components/organisms/FundingHeaderSection";
import FundingTestimonialSection from "components/organisms/FundingTestimonialSection";
import ProcessSection from "components/organisms/ProcessSection";
import SolutionCarouselSection from "components/organisms/SolutionCarouselSection";
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

const FundingPage = ({ faqCategories, faqs }: Props) => {
  const { selectedCategories, seletedfaqs, handleChangeCategory } = useFaq({
    initialSegment: 1,
    faqCategories,
    faqs,
  }) as UseFaqReturnType;

  return (
    <Layout>
      <FundingHeaderSection />
      <GapSection />
      <SolutionCarouselSection />
      <GapSection />
      <CardSelectionSection
        title='ระดมทุน Crowdfunding'
        subTitle='กับอินเวสทรี (ไทยแลนด์) ดีอย่างไร?'
        color='green'
      />
      <GapSection />
      <ProcessSection page='funding' />
      <GapSection />
      <CriteriaAccordionSection color='green' page='funding' />
      <GapSection />
      <FaqSection
        color={FAQColorEnum.Green}
        content={seletedfaqs}
        categories={selectedCategories}
        onChangeCategory={handleChangeCategory}
      />
      <GapSection />
      <FundingTestimonialSection
        title='ประสบการณ์จริงจากการระดมทุนของ SME'
        subTitle='เชิญรับชม SME เล่าประสบกาณ์ระดมทุน Crowdfunding กับอินเวสทรี (ไทยแลนด์)'
        page='funding'
      />
      <GapSection />
    </Layout>
  );
};

export default FundingPage;

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
