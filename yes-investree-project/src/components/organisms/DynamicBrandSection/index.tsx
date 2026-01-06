import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import { useMediaQuery, useTheme } from "@mui/material";
import AutoCarousel from "components/atoms/AutoCarousel";
import Button from "components/atoms/Button";
import Image from "components/atoms/Image";
import { cx } from "helpers/utils";
import { useTranslations } from "next-intl";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
const _brandList = [
  {
    id: 1,
    name: "CPN",
    image_url: "/images/brands/cpn.png",
  },
  {
    id: 2,
    name: "Central Retail",
    image_url: "/images/brands/central-retail.png",
  },
  {
    id: 3,
    name: "T-Broker",
    image_url: "/images/brands/t-broker.png",
  },
  {
    id: 4,
    name: "FlowAccount",
    image_url: "/images/brands/flow-account.png",
  },
  {
    id: 5,
    name: "2C2P",
    image_url: "/images/brands/2c2p.png",
  },
  {
    id: 6,
    name: "Qwik",
    image_url: "/images/brands/qwik.png",
  },
  {
    id: 7,
    name: "Zort",
    image_url: "/images/brands/zort.png",
  },
];

const DynamicBrandSection = () => {
  const t = useTranslations();
  const theme = useTheme();
  const laptop = useMediaQuery(theme.breakpoints.up("laptop"));

  return (
    <article className='px-5'>
      <div
        className={cx(
          "container w-full",
          "tablet:max-w-[1200px] tablet:w-[calc(100%-64px)] tablet:px-3",
          "laptop:max-w-[1200px]"
        )}
      >
        <h2 className='text-headline8 text-black-100 laptop:text-headline9 text-blue-primary'>
          {t("home.dynamicBrandSection.title")}
        </h2>
        <p className='mt-4 laptop:text-body12 text-subtitle7 text-gray-700'>
          {t("home.dynamicBrandSection.subTitle1")}
          <br className='hidden tablet:block' />
          {t("home.dynamicBrandSection.subTitle2")}
        </p>

        {/* ######################## Carousel ######################## */}
        <div className="col-span-full mt-8 laptop:mt-12">
          <div className="home-slide">

            <AutoCarousel>
              {_brandList.map((brand) => (
                <div
                  key={brand.id}
                  className='cursor-pointer !flex justify-center '
                  onClick={() => {}}
                >
                  <Image
                    alt={brand.name}
                    src={brand.image_url}
                    width={laptop ? 169 : 106}
                    height={laptop ? 128 : 80}
                    className='object-contain '
                  />
                </div>
              ))}
            </AutoCarousel>
          </div>
        </div>
      </div>
      {/* ######################## Text ######################## */}
      <div
        className={cx(
          "mobile:max-w-[100%] mobile:px-8 mobile:py-5 ",
          "container rounded-3xl bg-gray-light-500  laptop:p-10 flex justify-start items-center mt-12 flex-col w-full",
          "tablet:flex-row tablet:max-w-[1200px] tablet:w-[calc(100%-64px)] tablet:justify-between tablet:gap-2  ",
          "laptop:max-w-[1200px]"
        )}
      >
        <div className='text-body9 tablet:text-body12 leading-relaxed text-gray-700 text-center tablet:text-left'>
          {t("home.dynamicBrandSection.partner.text")}
        </div>
        <div className='mt-2 tablet:mt-0 w-full flex justify-center tablet:justify-end laptop:w-fit'>
          <Button
            text={t("home.dynamicBrandSection.partner.button")}
            className='text-blue-secondary !text-body9 tablet:text-button-xxlarge underline pr-[4px]'
            size='lg'
            rightIcon={<KeyboardArrowRightIcon />}
          />
        </div>
      </div>
    </article>
  );
};

export default DynamicBrandSection;
