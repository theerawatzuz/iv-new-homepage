import Image from "components/atoms/Image";
import { cx } from "helpers/utils";

type PromotionCardProps = {
  index: number;
  image: string;
  title: string;
  description: string;
  color?: string;
  isActived?: boolean;
};

const PromotionCard: React.FC<PromotionCardProps> = ({
  index,
  image,
  title,
  description,
  color = "green",
}) => {
  const bgColor =
    color === "glue"
      ? "bg-gradient-to-r from-glue-primary to-glue-secondary"
      : color === "green"
        ? "bg-green-300"
        : "bg-blue-secondary";
  return (
    <div
      key={index}
      className={cx(
        "rounded-[24px] p-8 min-w-[280px] h-full text-white",
        bgColor
      )}
    >
      <div>
        <Image src={image} alt={"test"} width={56} height={56} />
      </div>
      <div className='text-headline6 laptop:text-headline5 mt-6'>{title}</div>
      <div className='text-subtitle7 tablet:text-body15 tablet:leading-tight mt-6'>
        {description}
      </div>
    </div>
  );
};

export default PromotionCard;
