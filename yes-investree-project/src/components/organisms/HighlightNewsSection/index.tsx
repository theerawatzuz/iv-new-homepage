import CustomDot from "components/atoms/CustomDot";
import HighlightArticleCard from "components/atoms/HighlightArticleCard";
import SectionHeadText from "components/atoms/SectionHeadText";
import dayjs from "dayjs";
import { ArticleData } from "interfaces/article";
import { useTranslations } from "next-intl";
import { useState } from "react";
import Carousel from "react-multi-carousel";
import useArticle from "stores/article";

const DEFAULT_IMAGE_1_1 = `/images/default-image.png`;

const responsive = {
  monitor: {
    breakpoint: { max: 3000, min: 1200 },
    items: 1,
    slidesToSlide: 1,
  },
  desktop: {
    breakpoint: { max: 1200, min: 1024 },
    items: 1,
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

type Props = {
  className?: string;
  descClassName?: string;
  list: ArticleData[];
};

const HighlightNewsSection: React.FC<Props> = ({ list }) => {
  const t = useTranslations();

  const [currentSlide, setCurrentSlide] = useState(0);
  const articleType = useArticle((state) => state.type);
  const title =
    articleType === "news"
      ? t("articles.highlight.title.news")
      : t("articles.highlight.title.article");

  const handleOpen = () => {};

  return (
    <div className='mt-14'>
      <SectionHeadText title={title} align='left' />
      <div className='container w-full max-w-[350px] laptop:max-w-[1040px] mt-8 laptop:mt-10'>
        <Carousel
          responsive={responsive}
          ssr
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
          {list?.map((item, index) => (
            <div
              key={index}
              className='pb-8'
              onDragStart={(e) => {
                e.preventDefault();
              }}
              onClick={() => handleOpen()}
            >
              <HighlightArticleCard
                key={index}
                title={item?.title}
                image={
                  item?.cover?.formats?.thumbnail?.url || DEFAULT_IMAGE_1_1
                }
                date={dayjs(item?.publishedAt).format("DD MMM YYYY")}
                article={item}
                // description={item.description}
                // isActive={index === currentSlide + 1}
              />
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default HighlightNewsSection;
