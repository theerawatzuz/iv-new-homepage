import CriteriaAccordion from "components/molecules/Accordion2";
import { cx } from "helpers/utils";

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
    title: "What role does contrast play in graphic design?",
    description:
      "Contrast in graphic design emphasizes differences, making elements stand out and improving visual hierarchy.",
  },

  {
    title: `Define the term "responsive design" in web development.`,
    description:
      "Responsive design ensures web pages adapt to various screen sizes, providing an optimal user experience on different devices.",
  },

  {
    title: "What is the significance of color theory in design?",
    description:
      "Color theory guides the selection and combination of colors to evoke specific emotions, enhance readability, and create visually appealing designs.",
  },
];

type Props = {
  color?: "green" | "blue";
  content?: {
    title: string;
    description: string;
  }[];
  page: "funding" | "investing";
};

const CriteriaAccordionSection = (prop: Props) => {
  const { color, page } = prop;
  const _bgGradientColor =
    color === "green"
      ? "bg-gradient-to-b from-green-400 via-green-100 via-[#ABD078] via-[#E9F1DF] to-main-bg"
      : "bg-gradient-to-b from-blue-secondary via-[#2666B9] via-[#D8E2EF] to-main-bg";

  return (
    <div
      className={cx(
        _bgGradientColor,
        "container rounded-3xl w-[calc(100%-32px)] py-8 px-5",
        "tablet:px-[84px] tablet:py-[80px] tablet:max-w-[calc(100%-64px)]",
        "desktop:max-w-[1200px]"
      )}
    >
      <div
        className={cx(
          "text-white text-headline8 tablet:text-headline9",
          "laptop:pr-[400px]"
        )}
      >
        ใครบ้างที่สามารถระดมทุน บน Platform ของเรา?
      </div>

      <div
        className={cx(
          "mx-auto rounded-xl w-[calc(100%-10px)] bg-white py-1 px-1 mt-20",
          "tablet:px-10 tablet:py-8 tablet:max-w-[calc(100%-64px)] tablet:mt-8",
          "desktop:max-w-[1040px]"
        )}
      >
        <CriteriaAccordion color={color} content={accordingData} />
      </div>
    </div>
  );
};

export default CriteriaAccordionSection;
