import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import dynamic from "next/dynamic";
import React, { useState } from "react";
import type { Settings } from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
const Slider = dynamic(() => import("react-slick"), { ssr: false });
const AutoCarousel = ({ children }: { children: React.ReactNode }) => {
  const [activeArrow, setActiveArrow] = useState<"prev" | "next">("next");

  const NextArrow: React.FC<{ onClick?: () => void }> = ({ onClick }) => (
    <div
      className="slick-arrow slick-next"
      onClick={onClick}
      style={{
        backgroundImage: "url(/images/icons/arrow/arrow_right.svg)",
        width: "40px",
        height: "40px",
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
        cursor: "pointer",
        position: "absolute",
        right: "-50px",
        top: "50%",
        transform: "translateY(-50%)",
        zIndex: 10,
      }}
    />
  );

  const PrevArrow: React.FC<{ onClick?: () => void }> = ({ onClick }) => (
    <div
      className="slick-arrow slick-prev"
      onClick={onClick}
      style={{
        backgroundImage: "url(/images/icons/arrow/arrow_left.svg)",
        width: "40px",
        height: "40px",
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
        cursor: "pointer",
        position: "absolute",
        left: "-50px",
        top: "50%",
        transform: "translateY(-50%)",
        zIndex: 10,
      }}
    />
  );
  const PrevArrowMobile = (props: any) => {
    const { onClick } = props;

    const handleClick = () => {
      setActiveArrow("prev");
      if (onClick) onClick();
    };

    const isActive = activeArrow === "prev";

    return (
      <button
        onClick={handleClick}
        className={`absolute left-[35%] top-1/2 -translate-y-[-40px] z-10 w-10 h-10 rounded-full 
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

  const NextArrowMobile = (props: any) => {
    const { onClick } = props;

    const handleClick = () => {
      setActiveArrow("next");
      if (onClick) onClick();
    };

    const isActive = activeArrow === "next";

    return (
      <button
        onClick={handleClick}
        className={`absolute right-[35%] top-1/2 -translate-y-[-40px] z-10 w-10 h-10 rounded-full 
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

  const settings: Settings = {
    arrows: true,
    dots: false,
    infinite: true,
    speed: 2000,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    nextArrow: React.cloneElement(<NextArrow />),
    prevArrow: React.cloneElement(<PrevArrow />),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          nextArrow: React.cloneElement(<NextArrow />),
          prevArrow: React.cloneElement(<PrevArrow />),
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          nextArrow: React.cloneElement(<NextArrowMobile />),
          prevArrow: React.cloneElement(<PrevArrowMobile />),
        },
      },
    ],
  };
  return (
    <div className="relative">
      <Slider {...settings}>{children}</Slider>
    </div>
  );
};

export default AutoCarousel;
