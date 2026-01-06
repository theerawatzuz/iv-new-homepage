import { useMediaQuery, useTheme } from "@mui/material";
import { useState } from "react";
import type { Settings } from "react-slick";
import Slider from "react-slick";

const data = [
  {
    title: "เสริมสร้างความมั่นคงให้ธุรกิจ",
    description:
      "ลดความเสี่ยงจากปัญหาสภาพคล่องของคู่ค้าสร้างความมั่นคงให้กับ Supply Chain",
  },
  {
    title: "สร้างความสัมพันธ์ที่ยั่งยืน",
    description:
      "แสดงให้เห็นถึงความมุ่งมั่นในการสนับสนุนและเติบโตไปพร้อมความร่วมมือที่แข็งแกร่ง",
  },
  {
    title: "ยกระดับมาตรฐาน Supply Chain",
    description:
      "ช่วยให้คู่ค้ามีศักยภาพในการพัฒนาธุรกิจ เพิ่มประสิทธิภาพ และยกระดับมาตรฐานสินค้า",
  },
  {
    title: "สร้างคุณค่าร่วมกัน",
    description:
      "ส่งเสริมการเติบโตอย่างยั่งยืนให้กับทั้งคู่ค้าและธุรกิจของคุณ นำไปสู่ความสำเร็จร่วมกัน",
  },
];

const FinancingSection = () => {
  const theme = useTheme();
  const laptop = useMediaQuery(theme.breakpoints.up("laptop"));
  const [activeSlide, setActiveSlide] = useState(0);

  const settings: Settings = {
    arrows: false,
    dots: false,
    infinite: true,
    speed: 2000,
    slidesToShow: 7,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
          dots: true,
          customPaging: (i) => (
            <div className="w-[4px] h-[4px] border-[1px] border-[#C9C9C9] rounded-full cursor-pointer"></div>
          ),
          appendDots: (dots) => (
            <ul className="flex justify-start space-x-[4px]">{dots}</ul>
          ),
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          arrows: false,
          dots: true,
          customPaging: (i) => (
            <div className="w-[4px] h-[4px] border-[1px] border-[#C9C9C9] rounded-full cursor-pointer"></div>
          ),
          appendDots: (dots) => (
            <ul className="flex justify-start space-x-[4px]">{dots}</ul>
          ),
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
          dots: true,
          customPaging: (i) => (
            <div className="w-[4px] h-[4px] border border-[1px] border-[#C9C9C9] rounded-full cursor-pointer"></div>
          ),
          appendDots: (dots) => (
            <ul className="flex justify-start space-x-[4px]">{dots}</ul>
          ),
        },
      },
    ],
    beforeChange: (current: number, next: number) => {
      setActiveSlide(next);
    },
  };
  return (
    <div className="container w-full phablet:max-w-[1200px] phablet:w-[calc(100%-64px)] laptop:max-w-[1320px] mt-[56px] laptop:mt-[100px] flex flex-col items-center gap-[16px] px-[20px] laptop:px-[60px]">
      <div className="flex flex-col gap-[28px] justify-between laptop:justify-start bg-[url('/images/partner-cover-3-mobile.png')] tablet:bg-[url('/images/partner-cover-3.png')] bg-cover bg-center bg-no-repeat px-[32px] pt-[32px] pb-[60px] phablet:px-[20px] laptop:px-[110px] phablet:py-[80px] laptop:rounded-[40px] rounded-[16px] w-[100%] h-[616px] phablet:h-[814px]">
        <div className="flex flex-col gap-[16px]">
          <h2 className="font-semibold text-[24px] leading-[31.2px] tablet:text-[40px] tablet:leading-[52px]">
            Supply Chain
            <br className="tablet:hidden" />
            Financing Solution
            <br />
            เพื่อ Supply Chain ที่แข็งแกร่ง
          </h2>
          <p className="font-medium text-[18px] leading-[27px] laptop:text-[32px] laptop:leading-[41.6px]">
            เป็นพันธมิตรทางธุรกิจกับ อินเวสทรี
            <br className="tablet:hidden" />
            (ไทยแลนด์) ดีอย่างไร?
          </p>
        </div>
        {/* ######################################################### */}
        {/* ######################### SLIDE ######################### */}
        {/* ######################################################### */}

        {/* #################### DESKTOP #################### */}
        <div className="flex gap-[24px] flex-wrap w-[100%] laptop:w-[645px] tablet:justify-center laptop:justify-start hidden tablet:flex">
          {data.map((item) => (
            <div
              key={item.title}
              className="flex flex-col justify-between gap-[10px] bg-[#ffffff] p-[32px] rounded-[20px] w-[calc(50%-12px)] laptop:w-[310.5px] hover:bg-[linear-gradient(157deg,#113F7B_9.72%,#2666B9_84.99%)] hover:text-white cursor-pointer group"
            >
              <h3 className="font-medium text-[24px] leading-[31.2px] text-[#222] group-hover:text-white">
                {item.title}
              </h3>
              <p className="font-medium text-[20px] leading-[28px] text-[#686868] group-hover:text-white">
                {item.description}
              </p>
            </div>
          ))}
        </div>
        {/* #################### MOBILE #################### */}
        <div className="tablet:hidden slide-custom">
          <Slider {...settings}>
            {data.map((item, index) => (
              <div
                key={item.title}
                className="cursor-pointer !flex justify-center px-2"
                onClick={() => {}}
              >
                <div
                  className={`flex flex-col justify-between gap-[10px] p-[20px] rounded-[20px] w-[310.5px] ${
                    activeSlide === index
                      ? "bg-[linear-gradient(157deg,#113F7B_9.72%,#2666B9_84.99%)] text-white"
                      : "bg-[#ffffff]"
                  }`}
                >
                  <h3
                    className={`font-medium text-[24px] leading-[31.2px] ${
                      activeSlide === index ? "text-white" : "text-[#222]"
                    }`}
                  >
                    {item.title}
                  </h3>
                  <p
                    className={`font-medium text-[20px] leading-[28px] ${
                      activeSlide === index ? "text-white" : "text-[#686868]"
                    }`}
                  >
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default FinancingSection;
