import PromotionCard from "components/atoms/PromotionCard";
import { cx } from "helpers/utils";
import { useTranslations } from "next-intl";
import { Fragment } from "react";
import "react-multi-carousel/lib/styles.css";

export const promoContentList = [
  {
    image: "/images/icons/promo/network.svg",
    title: "SME",
    description:
      "ระดมทุนกับนักลงทุนโดยตรงผ่านการออกหุ้นกู้ Crowdfunding และชำระคืนเมื่อถึงกำหนด ง่ายๆผ่าน Platform ของเรา",
    backgroundColor: "green",
  },
  {
    image: "/images/icons/promo/shield-tick.svg",
    title: "Crowdfunding Platform",
    description:
      "วิเคราะห์ SME เพื่อประเมินความเสี่ยง และจัดอันดับ Credit Score ให้เหมาะกับความสามารถในการชำระคืน",
    backgroundColor: "glue",
  },
  {
    image: "/images/icons/promo/hand-grow.svg",
    title: "นักลงทุน",
    description:
      "ลงทุนในหุ้นกู้ Crowdfunding ตามระดับความเสี่ยงที่รับได้ พร้อมสนับสนุนธุรกิจ SME ไทย ไปด้วยกัน",
    backgroundColor: "blue",
  },
];

const TestimonialSection = () => {
  const t = useTranslations();

  // inherit promoContentList and override the content
  const _promoContentList = promoContentList.map((item, index) => {
    return {
      ...item,
      title: t(`home.promoCarouselSection.card${index + 1}.title`),
      description: t(`home.promoCarouselSection.card${index + 1}.description`),
    };
  });

  return (
    <div
      className={cx(
        "container last:mb-10 tablet:last:mb-15 w-full",
        "tablet:max-w-[1200px] tablet:w-[calc(100%-64px)]",
        "laptop:max-w-[1200px]",
        "desktop:last:mb-20"
      )}
    >
      <div className='w-full'>
        <h2 className='text-start text-headline8 text-gray-800 laptop:text-headline9'>
          {t("home.promoCarouselSection.title1")}{" "}
          <span className='text-green-300'>
            {t("home.promoCarouselSection.title2")}
          </span>
        </h2>
      </div>
      <div className='mt-4 w-full'>
        <p className='laptop:text-subtitle8 text-body9 text-gray-800 leading-[26px] tablet:leading-relaxed'>
          {t("home.promoCarouselSection.subTitle")}
        </p>
      </div>
      <div className='mt-6 tablet:mt-12'>
        <div
          className={cx(
            "grid-cols-1 laptop:grid-cols-3 gap-x-4 pl-0 laptop:gap-x-6",
            "hidden laptop:grid"
          )}
        >
          {_promoContentList.map((item, index: number) => (
            <Fragment key={index}>
              <PromotionCard
                image={item.image}
                index={index}
                title={item.title}
                description={item.description}
                color={item.backgroundColor as "green" | "blue" | "glue"}
              />
            </Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TestimonialSection;
