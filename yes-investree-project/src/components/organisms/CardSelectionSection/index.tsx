import BenefitCard from "components/atoms/BenefitCard";
import CustomDot from "components/atoms/CustomDot";
import { cx } from "helpers/utils";
import { useState } from "react";
import Carousel from "react-multi-carousel";

const content = [
  {
    title: "ง่ายและไว",
    description: "รู้ผลเร็วภายใน 72 ชั่วโมง หลังลงทะเบียนเสร็จสมบูรณ์",
  },
  {
    title: "ไม่ต้องใช้หลักทรัพย์ ค้ำประกัน",
    description: "ปลดล็อคข้อจำกัดทางการเงิน",
  },
  {
    title: "ดอกเบี้ยเป็นธรรม",
    description:
      "เริ่มต้นที่ 6% ต่อปี คำนวนจากการวิเคราะห์ข้อมูลบริษัท การบริหารจัดการ คู่ค้า แนวโน้ม ทางธุรกิจ และความสามารถใน การชำระคืน",
  },
  {
    title: "ชำระคืนง่าย",
    description: "ระยะเวลาชำระคืนเหมาะสมกับแผนธุรกิจและความสามารถของธุรกิจ",
  },
  {
    title: "สร้างประวัติ เพิ่มโอกาส",
    description:
      "การชำระคืนหุ้นกู้ตรงเวลาไม่เพียงช่วยปลดหนี้ แต่ยังสร้าง ประวัติที่ดีเพื่อเพิ่มโอกาสในการระดมทุนกับเราในอนาคต",
  },
];

type CardSelectionSectionProps = {
  title: string | React.ReactNode;
  subTitle: string | React.ReactNode;
  color: "green" | "blue";
};

const CardSelectionSection = ({
  title,
  subTitle,
  color,
}: CardSelectionSectionProps) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const responsive = {
    monitor: {
      breakpoint: { max: 3000, min: 1200 },
      items: 3,
      slidesToSlide: 1,
    },
    desktop: {
      breakpoint: { max: 1200, min: 1024 },
      items: 2.5,
      slidesToSlide: 1,
    },
    laptop: {
      breakpoint: { max: 1024, min: 600 },
      items: 1,
      slidesToSlide: 1,
    },
    tablet: {
      breakpoint: { max: 600, min: 464 },
      items: 1,
      slidesToSlide: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1,
    },
  };
  return (
    <div
      className={cx(
        "container rounded-[18px] w-full max-w-[350px] bg-benefit-section bg-cover bg-center bg-no-repeat shadow-lg py-8 px-5",
        "tablet:max-w-[calc(100%-64px)]",
        "laptop:px-20 laptop:py-20  laptop:max-w-[1200px]"
      )}
    >
      <div className='text-headline8 laptop:text-headline9'>{title}</div>
      <div className='text-body9 laptop:text-subtitle6 mt-4 laptop:mt-2'>
        {subTitle}
      </div>
      <div className='mt-14 laptop:mt-20'>
        <div
          className={cx(
            "grid grid-cols-1 gap-4 tablet:grid-cols-2 laptop:grid-cols-3",
            "hidden laptop:grid"
          )}
        >
          {content.map((item, index) => (
            <BenefitCard
              key={index}
              index={index}
              title={item.title}
              description={item.description}
              color={color}
              isActived={index === 0}
            />
          ))}
        </div>
        <div className='laptop:hidden'>
          <Carousel
            responsive={responsive}
            ssr
            autoPlay
            autoPlaySpeed={5000}
            arrows={false}
            keyBoardControl
            customTransition='transform 300ms ease-in-out'
            transitionDuration={300}
            removeArrowOnDeviceType={["tablet", "mobile"]}
            deviceType='desktop'
            itemClass='carousel-item-padding-40-px'
            showDots
            customDot={<CustomDot />}
            beforeChange={(nextSlide, current) => {
              setCurrentSlide(nextSlide as number);
            }}
            dotListClass='!justify-start'
          >
            {content.map((item, index) => (
              <div key={index} className='pb-8 flex justify-center'>
                <BenefitCard
                  key={index}
                  index={index}
                  title={item.title}
                  description={item.description}
                  color={color}
                  isActived={true}
                />
              </div>
            ))}
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default CardSelectionSection;
