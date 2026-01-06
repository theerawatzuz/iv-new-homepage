import CustomDot from "components/atoms/CustomDot";
import SectionHeadText from "components/atoms/SectionHeadText";
import SolutionCard from "components/atoms/SolutionCard";
import { cx } from "helpers/utils";
import { useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

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

const SolutionCarouselSection = () => {
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
      items: 2,
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
    <div className='down-tablet:container flex flex-col items-center'>
      <div
        className={cx(
          "tablet:container w-full max-w-[350px]",
          "tablet:max-w-[calc(100%-64px)]",
          "laptop:max-w-[1200px]"
        )}
      >
        <div>
          <SectionHeadText
            title='Crowdfunding Solution สำหรับ SME'
            subTitle={
              <div>
                ไม่ว่าธุรกิจของคุณจะเป็นธุรกิจขนาดเล็ก กลาง หรือใหญ่
                ที่ต้องการเพิ่มสภาพคล่อง หรือขยายกิจการ
                คุณก็สามารถระดมทุนได้ง่ายๆ ผ่าน Crowdfunding Platform ของเรา
              </div>
            }
            gap='narrow'
          />
        </div>
        <div className='mt-14 tablet:mt-20'>
          <Carousel
            responsive={responsive}
            ssr
            // infinite
            autoPlay
            autoPlaySpeed={5000}
            arrows={false}
            keyBoardControl
            customTransition='transform 300ms ease-in-out'
            transitionDuration={300}
            containerClass='carousel-container'
            removeArrowOnDeviceType={["tablet", "mobile"]}
            deviceType='desktop'
            itemClass='carousel-item-padding-40-px'
            showDots
            customDot={<CustomDot />}
            beforeChange={(nextSlide, current) => {
              setCurrentSlide(nextSlide as number);
            }}
          >
            {content.map((item, index) => (
              <div key={index} className='pb-8'>
                <SolutionCard
                  key={index}
                  title={item.title}
                  description={item.description}
                  isActive={index === currentSlide + 1}
                />
              </div>
            ))}
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default SolutionCarouselSection;
