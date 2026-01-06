import Accordion3 from "components/molecules/Accordion3";
import FaqDropdown from "components/molecules/FaqDropdown";
import { FAQColorEnum } from "enums/common";
import { cx, getFaqTextColor } from "helpers/utils";
import { FaqData } from "interfaces/faq";
import { FaqDataCategory } from "interfaces/faq-category";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import path from "path";
import { useEffect, useState } from "react";

const Button = dynamic(() => import("components/atoms/Button"), {
  ssr: false,
});

type Props = {
  color?: FAQColorEnum;
  content?: FaqData[];
  hasTitle?: boolean;
  faqTitle?: string;
  categories: FaqDataCategory[];
  onChangeCategory?: (data: FaqDataCategory) => void;
};

const FaqSection = (props: Props) => {
  const {
    color,
    content,
    hasTitle = true,
    faqTitle = "คำถามที่พบบ่อย",
    categories,
    onChangeCategory,
  } = props;
  const router = useRouter();
  const { pathname } = router;
  let _bgGradientColor =
    color === FAQColorEnum.Green
      ? "bg-gradient-to-b from-green-400 to-green-100"
      : "bg-gradient-to-b from-blue-secondary to-[#2666B9]";
  const [bgGradientColor, setBgGradientColor] = useState(_bgGradientColor);
  const [activeItem, setActiveItem] = useState<string | null>(
    categories[0]?.code
  );
  const _path = path.basename(pathname);
  const _color = getFaqTextColor(color);
  const bgHandler = (color: FAQColorEnum) => {
    let result = "";
    switch (color) {
      case "green":
        result = "bg-gradient-to-b from-green-400 to-green-100";
        break;
      case "blue":
        result = "bg-gradient-to-b from-blue-secondary to-[#2666B9]";
        break;
      case "dark":
        result = "bg-blue-primary";
        break;
      default:
        break;
    }
    return result;
  };

  let textHolder = "";
  if (_path === "funding") {
    textHolder = "Start Crowdfunding";
  } else if (_path === "invest") {
    textHolder = "Start Investing";
  } else {
    textHolder = "";
  }

  useEffect(() => {
    if (categories?.length) {
      setActiveItem(categories[0]?.code);
    }
  }, [categories]);

  useEffect(() => {
    setBgGradientColor(bgHandler(color as FAQColorEnum));
  }, [color]);

  return (
    <div>
      {hasTitle && (
        <div className='text-gray-800 text-headline8 tablet:text-headline9 text-center'>
          {faqTitle}
        </div>
      )}
      <div
        className={cx(
          "container rounded-3xl shadow-lg p-5 mt-8",
          "w-[calc(100%-32px)]",
          "tablet:p-[40px] tablet:max-w-[calc(100%-100px)]",
          "laptop:p-[56px] laptop:max-w-[calc(100%-300px)] laptop:mt-10",
          "desktop:max-w-[1040px]",
          bgGradientColor
        )}
      >
        <div className='text-body4'>
          <div className='flex-col gap-4 flex text-subtitle2'>
            {!hasTitle && (
              <div className='text-headline8 laptop:text-headline10 text-white'>
                {faqTitle}
              </div>
            )}
            <div className='tablet:hidden'>
              <FaqDropdown
                placeholder={textHolder}
                categories={categories}
                onChange={onChangeCategory}
              />
            </div>
            <div className='hidden tablet:flex justify-start gap-3 flex-wrap'>
              {categories?.map((item, index) => (
                <Button
                  key={index}
                  text={item.name}
                  className={cx(
                    "rounded-full border border-white text-subtitle2",
                    activeItem === item?.code ? "bg-white" : "bg-inherit",
                    activeItem === item?.code ? _color : "text-white"
                  )}
                  onClick={() => {
                    setActiveItem(item.code);
                    onChangeCategory && onChangeCategory(item);
                  }}
                />
              ))}
            </div>
          </div>

          <div className='mt-5 tablet:mt-10'>
            <Accordion3
              className='text-white'
              descClassName='text-white'
              content={content!}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FaqSection;
