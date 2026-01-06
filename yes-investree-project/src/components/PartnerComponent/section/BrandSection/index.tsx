import { useMediaQuery, useTheme } from "@mui/material";
import Image from "components/atoms/Image";
import React from "react";
import type { Settings } from "react-slick";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

const brandList = [
  { id: 1, name: "CPN", image_url: "/images/brands/cpn.png" },
  {
    id: 2,
    name: "Central Retail",
    image_url: "/images/brands/central-retail.png",
  },
  { id: 3, name: "T-Broker", image_url: "/images/brands/t-broker.png" },
  { id: 4, name: "FlowAccount", image_url: "/images/brands/flow-account.png" },
  { id: 5, name: "2C2P", image_url: "/images/brands/2c2p.png" },
  { id: 6, name: "Qwik", image_url: "/images/brands/qwik.png" },
  { id: 7, name: "Zort", image_url: "/images/brands/zort.png" },
];

const NextArrow: React.FC<{ onClick?: () => void }> = ({ onClick }) => (
  <div
    className='slick-arrow slick-next'
    onClick={onClick}
    style={{
      backgroundImage: "url(/images/icons/arrow/arrow_right.svg)",
      width: "40px",
      height: "40px",
      backgroundSize: "contain",
      backgroundRepeat: "no-repeat",
      cursor: "pointer",
      position: "absolute",
      right: "0",
      top: "50%",
      transform: "translateY(-50%)",
      zIndex: 10,
    }}
  />
);

const PrevArrow: React.FC<{ onClick?: () => void }> = ({ onClick }) => (
  <div
    className='slick-arrow slick-prev'
    onClick={onClick}
    style={{
      backgroundImage: "url(/images/icons/arrow/arrow_left.svg)",
      width: "40px",
      height: "40px",
      backgroundSize: "contain",
      backgroundRepeat: "no-repeat",
      cursor: "pointer",
      position: "absolute",
      left: "0",
      top: "50%",
      transform: "translateY(-50%)",
      zIndex: 10,
    }}
  />
);

const BrandSection = () => {
  const theme = useTheme();
  const laptop = useMediaQuery(theme.breakpoints.up("laptop"));

  const settings: Settings = {
    arrows: false,
    dots: false,
    infinite: true,
    speed: 2000,
    slidesToShow: 7,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    nextArrow: React.cloneElement(<NextArrow />),
    prevArrow: React.cloneElement(<PrevArrow />),
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 4, slidesToScroll: 1 } },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          arrows: false,
          dots: true,
          customPaging: (i) => (
            <div className='w-[4px] h-[4px] border-[1px] border-[#C9C9C9] rounded-full'></div>
          ),
          appendDots: (dots) => (
            <ul className='flex justify-center space-x-[4px]'>
              {dots as React.ReactNode}
            </ul>
          ),
        },
      },
    ],
  };

  return (
    <div className='relative mt-[40px] mb-[54px] overflow-hidden laptop:mt-[16px] laptop:mb-[100px] brand-slide'>
      <Slider {...settings}>
        {brandList.map((brand) => (
          <div
            key={brand.id}
            className='cursor-pointer !flex justify-center'
            onClick={() => {}}
          >
            <Image
              alt={brand.name}
              src={brand.image_url}
              width={laptop ? 169 : 170}
              height={laptop ? 128 : 128}
              className='object-contain'
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default BrandSection;
