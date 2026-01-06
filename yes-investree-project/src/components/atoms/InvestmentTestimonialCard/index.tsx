import PlayCircleIcon from "@mui/icons-material/PlayCircle";
import Button from "components/atoms/Button";
import Image from "components/atoms/Image";
import { cx } from "helpers/utils";
import React from "react";

const DEFAULT_IMAGE_1_1 = `/images/default-image.png`;

interface InvestmentTestimonialCardProps {
  image?: string;
  profileImage?: string;
  title: string;
  description: string;
  isActive: boolean;
  onClick?: () => void;
}

const InvestmentTestimonialCard: React.FC<InvestmentTestimonialCardProps> = ({
  image,
  profileImage,
  title,
  description,
  isActive,
  onClick,
}) => {
  const bgGradient = "bg-gradient-to-t from-[#6198E0] to-white to-60%";
  return (
    <div
      className={cx(
        "w-full max-w-[350px]",
        "laptop:w-full laptop:max-w-[379px]",
        "rounded-2xl"
        // currentIndex === index ? "bg-red-500" : "bg-white"
      )}
    >
      <div
        className={cx(
          "relative h-[174px] overflow-hidden rounded-t-xl",
          "tablet:h-[156px]]"
        )}
      >
        <Image
          fill
          alt={title}
          // src={card?.image || DEFAULT_IMAGE_1_1}
          src={DEFAULT_IMAGE_1_1}
          className='m-auto h-full w-full object-cover'
          sizes='(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw'
        />
      </div>
      {/* add profile image */}
      <div
        className={cx("rounded-b-2xl pb-8", isActive ? bgGradient : "bg-white")}
      >
        <div
          className={cx("flex items-center", isActive ? "-mt-11" : "-mt-10")}
        >
          <div className='pl-8'>
            <Image
              alt={title}
              src={DEFAULT_IMAGE_1_1}
              className='m-auto object-cover rounded-full text-left'
              width={isActive ? 88 : 80}
              height={isActive ? 88 : 80}
            />
          </div>
        </div>
        <div
          className={cx(
            "!w-[calc(100%-32px)] grid grid-cols-1 gap-2 pl-[32px]",
            "laptop:grid-cols-2 laptop:gap-[18px]"
            // isActive ? "bg-red-200" : "bg-white"
          )}
        >
          <div className=''>
            <h3 className='text-body4'>{title}</h3>
            <div className='text-body8 mt-1'>{description}</div>
          </div>
          <div className='flex items-end justify-end'>
            <Button
              text='คลิกเพื่อดู'
              className={cx(
                "text-headline7 rounded-full border-[1px] border-solid border-green-300 !px-2",
                isActive
                  ? "text-white bg-green-300"
                  : "text-green-300 bg-inherit"
              )}
              onClick={onClick}
              size='md'
              leftIcon={<PlayCircleIcon className='w-6 h-6' />}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default InvestmentTestimonialCard;
