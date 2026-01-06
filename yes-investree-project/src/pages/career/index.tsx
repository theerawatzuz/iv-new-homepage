import GapSection from "components/atoms/GapSection";
import SectionHeadText from "components/atoms/SectionHeadText";
import CareerHeaderSection from "components/organisms/CareerHeaderSection";
import CareerListSection from "components/organisms/CareerListSection";
import CareerMissionSection from "components/organisms/CareerMissionSection";
import Layout from "components/templates/Layout";
import { ILocaleProps } from "interfaces/general";

const accordingData = [
  {
    title: "What is the purpose of wireframing in design?",
    description:
      "Wireframing outlines the basic structure and layout of a design, serving as a visual guide before detailed development.",
  },
  {
    title: "Why is user-centered design important?",
    description:
      "User-centered design ensures products meet the needs and preferences of the end-users, enhancing usability and satisfaction.",
  },
];

const CareerPage = () => {
  return (
    <Layout>
      <CareerHeaderSection />
      <GapSection className='mt-20 laptop:mt-[150px]' />
      <SectionHeadText
        title='ร่วมเป็นส่วนหนึ่งของทีมงาน อินเวสทรี (ไทยแลนด์)'
        subTitle='เราเชื่อมั่นในพลังของการเปลี่ยนแปลง เน้นผลลัพธ์ เพื่อสร้างสังคมที่ดีกว่า'
      />
      <GapSection className='mt-[82px] laptop:mt-14' />
      <CareerMissionSection />
      <GapSection className='mt-[82px] laptop:mt-14' />
      <CareerListSection />
      <GapSection className='mt-[82px] laptop:mt-14' />
    </Layout>
  );
};

export default CareerPage;

export const getStaticProps = async ({ locale }: ILocaleProps) => {
  const messages = {
    ...(await import(`../../../messages/${locale}.json`)).default,
    ...(await import(`../../../messages/career/${locale}.json`)).default,
  };
  return {
    props: {
      messages,
    },
  };
};
