import SectionHeadText from "components/atoms/SectionHeadText";
import MultiCardCarousel from "components/organisms/MultiCardCarousel";
import { cx } from "helpers/utils";

type FundingTestimonialSectionProps = {
  title: string;
  subTitle: string | React.ReactNode;
  page: "funding" | "investing";
};

const FundingTestimonialSection = ({
  title,
  subTitle,
  page,
}: FundingTestimonialSectionProps) => {
  return (
    <div
      className={cx(
        "container w-full max-w-[350px]",
        "tablet:max-w-[calc(100%-64px)]",
        "laptop:max-w-[1200px]"
      )}
    >
      <SectionHeadText title={title} subTitle={subTitle} />
      <div className='mt-4 tablet:mt-10' />
      <MultiCardCarousel page={page} />
    </div>
  );
};

export default FundingTestimonialSection;
