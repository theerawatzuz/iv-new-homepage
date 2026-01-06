import Image from "components/atoms/Image";
import { cx } from "helpers/utils";
import React from "react";

const DEFAULT_IMAGE_1_1 = "/images/default-image.png";

interface InvestingTestimonialCardProps {
  image?: string;
  profileImage?: string;
  title: string;
  description: string;
  isActive: boolean;
  onClick?: () => void;
}

const InvestingTestimonialCard: React.FC<InvestingTestimonialCardProps> = ({
  image,
  profileImage,
  title,
  description,
  isActive,
  onClick,
}) => {
  // const bgGradient = "bg-gradient-to-b from-green-200 to-white to-60%";
  const bgGradient = "bg-blue-secondary";
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
          "relative h-[174px] rounded-t-xl",
          "tablet:h-[225px]",
          "bg-red-100"
        )}
      >
        <div
          className={cx(
            "absolute top-1/2 left-1/2 transform -translate-x-1/2 translate-y-[110px]",
            "-mt-[60px]"
          )}
        >
          <Image
            alt={title}
            src={DEFAULT_IMAGE_1_1}
            className='m-auto object-cover rounded-full text-left z-100'
            width={120}
            height={120}
          />
        </div>
      </div>
      <div
        className={cx(
          "rounded-b-2xl pb-8 h-[154px]",
          isActive ? bgGradient : "bg-white"
        )}
      >
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
        </div>
      </div>
    </div>
  );
};

export default InvestingTestimonialCard;
