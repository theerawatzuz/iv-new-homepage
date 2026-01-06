import { useMediaQuery, useTheme } from "@mui/material";
import Image from "components/atoms/Image";
import { cx } from "helpers/utils";

const BG_GRADIENT = {
  green: "bg-gradient-to-b from-green-200 to-[#F6FCD5]",
  blue: "bg-gradient-to-b from-[#6198E0] to-[#E1F4FF]",
};

const BG_COLOR = {
  green: "bg-[#F6FCD5]",
  blue: "bg-[#E1F4FF]",
};

type CareerMissionCardProps = {
  title?: string;
  description?: string;
  image?: string;
  isBgGradient?: boolean;
  bgColor?: "green" | "blue";
};

const CareerMissionCard = ({
  title,
  description,
  image,
  isBgGradient,
  bgColor = "green",
}: CareerMissionCardProps) => {
  const theme = useTheme();
  const isLaptop = useMediaQuery(theme.breakpoints.up("laptop"));
  return (
    <div
      className={cx(
        "w-full min-w-[350px] min-h-[200px] px-8 pt-8 rounded-2xl",
        "laptop:px-10 laptop:pt-10 laptop:w-[500px] laptop:min-h-[400px] laptop:rounded-[20px]",
        isBgGradient ? BG_GRADIENT[bgColor] : BG_COLOR[bgColor]
      )}
    >
      <div className='flex flex-col justify-between h-full'>
        <div>
          <div className='text-headline5 laptop:text-headline8'>
            <h2>{title || "test"}</h2>
          </div>
          <div className='text-subtitle1 laptop:text-body9 mt-6 laptop:leading-normal'>
            {description || "test"}
          </div>
        </div>
        <div className='flex flex-col justify-end items-center'>
          <Image
            src={image || "/images/career/item-1.png"}
            alt={"team"}
            width={isLaptop ? 500 : 350}
            height={172}
          />
        </div>
      </div>
    </div>
  );
};

export default CareerMissionCard;
