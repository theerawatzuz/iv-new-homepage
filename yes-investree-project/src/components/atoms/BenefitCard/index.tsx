import { cx } from "helpers/utils";

type BenefitCardProps = {
  index: number;
  title: string;
  description: string;
  color?: "green" | "blue";
  isActived?: boolean;
};

const BenefitCard: React.FC<BenefitCardProps> = ({
  index,
  title,
  description,
  color = "green",
  isActived = false,
}) => {
  const bgColor =
    color === "green"
      ? "bg-gradient-to-b from-green-400 to-green-100"
      : "bg-gradient-to-b from-blue-secondary to-[#2666B9]";
  return (
    <div
      key={index}
      className={cx(
        "rounded-[20px] p-5 laptop:p-8 min-w-[286px]",
        "tablet:w-full tablet:max-w-[333px] min-h-[245px]",
        isActived ? bgColor : "bg-white",
        isActived ? "text-white" : ""
      )}
    >
      <div className='text-body12'>{title}</div>
      <div className='text-body3 tablet:text-body9 tablet:leading-tight mt-[10px]'>
        {description}
      </div>
    </div>
  );
};

export default BenefitCard;
