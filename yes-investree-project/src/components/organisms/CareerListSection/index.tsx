import Button from "components/atoms/Button";
import SectionHeadText from "components/atoms/SectionHeadText";
import CareerAccordion from "components/molecules/CareerAccordion";
import CareerDropdown from "components/molecules/CareerDropdown";
import { cx } from "helpers/utils";
import { useTranslations } from "next-intl";
import { useEffect, useState } from "react";

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
  {
    title: "What is the difference between UI and UX design?",
    description:
      "UI design focuses on the visual aspects of a product, while UX design emphasizes the overall user experience and functionality.",
  },
  {
    title: "How can design thinking benefit organizations?",
    description:
      "Design thinking encourages innovation, problem-solving, and collaboration, leading to more effective and user-friendly products.",
  },
  {
    title: "What are the key principles of responsive web design?",
    description:
      "Responsive web design prioritizes flexibility, accessibility, and optimal user experience across different devices and screen sizes.",
  },
  {
    title: "What is the role of typography in design?",
    description:
      "Typography plays a crucial role in visual communication, conveying tone, hierarchy, and readability in design projects.",
  },
  {
    title: "How can color theory enhance design?",
    description:
      "Color theory helps designers create visually appealing and effective designs by understanding the psychological and emotional impact of color.",
  },
  {
    title: "What are the benefits of prototyping in design?",
    description:
      "Prototyping allows designers to test and refine ideas, gather feedback, and identify potential issues early in the design process.",
  },
  {
    title: "How does accessibility impact design?",
    description:
      "Accessibility ensures that products and services are usable by people of all abilities, promoting inclusivity and equal access to information.",
  },
  {
    title: "What is the importance of visual hierarchy in design?",
    description:
      "Visual hierarchy organizes content, guides user attention, and establishes a clear structure in design layouts, enhancing usability and readability.",
  },
  {
    title: "How can design systems benefit design projects?",
    description:
      "Design systems provide consistency, efficiency, and scalability in design projects, enabling teams to create cohesive and user-friendly products.",
  },
  {
    title: "What are the key elements of a successful design portfolio?",
    description:
      "A successful design portfolio showcases a designer's skills, creativity, and process, highlighting their best work and unique design perspective.",
  },
  {
    title: "How can user research inform design decisions?",
    description:
      "User research helps designers understand user needs, behaviors, and preferences, guiding design decisions and creating more user-centered products.",
  },
];

const initialPostList = 5;
const incrementInitialPostList = 3;

type Props = {
  className?: string;
  descClassName?: string;
  list?: { title: string; description: string }[];
};

const CareerListSection: React.FC = ({ list = accordingData }: Props) => {
  const t = useTranslations();
  const [displayPosts, setDisplayPosts] = useState(initialPostList);
  const [articles, setArticles] = useState(list.slice(0, 5));

  const loadMore = () => {
    setDisplayPosts(displayPosts + incrementInitialPostList);
  };

  useEffect(() => {
    setArticles(accordingData.slice(0, displayPosts));
  }, [displayPosts]);

  return (
    <div
      className={cx(
        "container w-full max-w-[350px]",
        "tablet:max-w-[calc(100%-100px)]",
        "laptop:max-w-[1040px]"
      )}
    >
      <div>
        <SectionHeadText title='ค้นหาตำแหน่งงานที่เหมาะกับคุณ' align='left' />
      </div>
      <div className='flex flex-col tablet:flex-row justify-start gap-2 mt-6 tablet:mt-10'>
        <CareerDropdown dropdownType='job-section' placeholder='เลือกแผนก' />
        <CareerDropdown dropdownType='job-level' placeholder='ระดับ' />
        <CareerDropdown dropdownType='job-type' placeholder='ประเภทการทำงาน' />
      </div>
      <div className='mt-6 tablet:mt-4 text-subtitle2 text-end'>
        ตำแหน่งทั้งหมด (50)
      </div>
      <div className='mt-6 tablet:mt-4 bg-inherit'>
        <CareerAccordion content={articles} />
      </div>
      {list?.length && displayPosts < list.length ? (
        <div className='w-full flex justify-center mt-14 laptop:mt-20'>
          <Button
            className={cx(
              "border-[1px] border-green-200 rounded-full text-green-200",
              "w-full tablet:w-[344px]"
            )}
            text={t("career.careerListSection.button")}
            onClick={loadMore}
          />
        </div>
      ) : null}
    </div>
  );
};

export default CareerListSection;
