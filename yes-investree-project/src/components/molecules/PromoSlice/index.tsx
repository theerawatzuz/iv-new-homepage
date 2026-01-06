import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { useMediaQuery, useTheme } from "@mui/material";
import { motion } from "framer-motion";
import { cx } from "helpers/utils";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { useState } from "react";
import "react-multi-carousel/lib/styles.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

const ImageList = [
  "/images/promo/promo-1.png",
  "/images/promo/promo-2.png",
  "/images/promo/promo-3.png",
];

export const crowdFunding = [
  {
    title: "SME",
    description:
      "ระดมทุนกับนักลงทุนโดยตรงผ่านการออกหุ้นกู้ Crowdfunding และชำระคืนเมื่อถึงกำหนด ง่ายๆผ่าน Platform ของเรา",
    icon: "/images/icons/promo/network.svg",
    // backgroundColor: "bg-green-300",
    fontColor: "text-white",
    backgroundColor: "bg-gradient-to-r from-green-primary to-green-secondary",
  },
  {
    title: "Crowdfunding Platform",
    description:
      "วิเคราะห์ SME เพื่อประเมินความเสี่ยง และจัดอันดับ Credit Score ให้เหมาะกับความสามารถในการชำระคืน",
    icon: "/images/icons/promo/shield-tick.svg",
    fontColor: "text-black",
    backgroundColor: "bg-gradient-to-r from-silver-primary to-silver-secondary",
  },
  {
    title: "นักลงทุน",
    description:
      "ลงทุนในหุ้นกู้ Crowdfunding ตามระดับความเสี่ยงที่รับได้ พร้อมสนับสนุนธุรกิจ SME ไทย ไปด้วยกัน",
    icon: "/images/icons/promo/hand-grow.svg",
    fontColor: "text-white",
    backgroundColor:
      "bg-gradient-to-r from-blue-primarynew to-blue-secondarynew",
  },
];

const TestimonialSection = () => {
  const t = useTranslations();
  const theme = useTheme();
  const tablet = useMediaQuery(theme.breakpoints.up("tablet"));
  const laptop = useMediaQuery(theme.breakpoints.up("laptop"));

  const [activeArrow, setActiveArrow] = useState("next");

  const PrevArrow = (props: any) => {
    const { onClick } = props;

    const handleClick = () => {
      setActiveArrow("prev");
      if (onClick) onClick();
    };

    const isActive = activeArrow === "prev";

    return (
      <button
        onClick={handleClick}
        className={`absolute left-[37%] top-1/2 -translate-y-[-190px] z-10 w-10 h-10 rounded-full 
        ${
          isActive
            ? "border border-green-400 text-green-400"
            : "border border-gray-200 text-gray-500"
        } flex items-center justify-center`}
        aria-label="Previous slide"
      >
        <ChevronLeftIcon fontSize="medium" />
      </button>
    );
  };

  const NextArrow = (props: any) => {
    const { onClick } = props;

    const handleClick = () => {
      setActiveArrow("next");
      if (onClick) onClick();
    };

    const isActive = activeArrow === "next";

    return (
      <button
        onClick={handleClick}
        className={`absolute right-[37%] top-1/2 -translate-y-[-190px] z-10 w-10 h-10 rounded-full 
        ${
          isActive
            ? "border border-green-400 text-green-400"
            : "border border-gray-200 text-gray-500"
        } flex items-center justify-center`}
        aria-label="Next slide"
      >
        <ChevronRightIcon fontSize="medium" />
      </button>
    );
  };

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: false,
    initialSlide: 1,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    responsive: [
      {
        breakpoint: 430,
        settings: {
          arrows: true,
          infinite: true,
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: true,
          initialSlide: 1,
          prevArrow: <PrevArrow />,
          nextArrow: <NextArrow />,
          centerPadding: "40px",
          itemClass: "px-3 tablet:pl-0 tablet:pr-[24px] flex justify-center",
        },
      },
    ],
  };

  return (
    <div
      className={cx(
        "container last:mb-10 tablet:last:mb-15 w-full px-0",
        "tablet:max-w-[1200px] tablet:w-[calc(100%-64px)]",
        "laptop:max-w-[1200px]",
        "desktop:last:mb-20"
      )}
    >
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 1 }}
        className="w-full"
      >
        <h2 className="text-start text-headline8 text-gray-800 laptop:text-headline9">
          {t("home.promoCarouselSection.title1")}{" "}
          <span className="text-green-300">
            {t("home.promoCarouselSection.title2")}
          </span>
        </h2>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 1 }}
        className="mt-4 w-full"
      >
        <p className="laptop:text-subtitle8 text-body9 text-gray-800 leading-[26px] tablet:leading-relaxed">
          {t("home.promoCarouselSection.subTitle")}
        </p>
      </motion.div>

      {/* #################################### Carousel #################################### */}

      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="carousel-custom h-[412px] tablet:h-full mt-10 tablet:mt-14 overflow-x-hidden"
      >
        <Slider {...settings}>
          {crowdFunding.map((item, index: number) => (
            <div
              key={index}
              onDragStart={(e) => e.preventDefault()}
              className={cx(
                "!flex flex-col gap-[24px] justify-center rounded-3xl p-[32px]",
                "w-[280px]",
                "tablet:w-full h-[340px] tablet:h-auto tablet:min-w-0 tablet:max-w-none",
                item.backgroundColor,
                item.fontColor
              )}
            >
              <Image
                src={item.icon}
                alt={item.title}
                width={laptop ? 56 : 56}
                height={laptop ? 600 : 440}
                unoptimized
              />
              <h3 className="text-headline13 tablet:text-headline5">
                {item.title}
              </h3>
              <p className="text-body16 tablet:text-subtitle9">
                {item.description}
              </p>
            </div>
          ))}
        </Slider>
      </motion.div>
    </div>
  );
};

export default TestimonialSection;
