import { useMediaQuery, useTheme } from "@mui/material";
import ArticleCard from "components/atoms/ArticleCard";
import CustomDot from "components/atoms/CustomDot";
import Link from "components/atoms/Link";
import { DisplaySizeEnum } from "enums/common";
// import { Article, ArticleCategory } from "helpers/types";
import { cx } from "helpers/utils";
import { ArticleCategory, ArticleData } from "interfaces/article";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useWindowSize } from "react-use";

interface Props {
  articles: ArticleData[];
  articleCategory?: ArticleCategory;
}

const ArticleCarousel = ({ articles, articleCategory }: Props) => {
  const theme = useTheme();
  const laptop = useMediaQuery(theme.breakpoints.up("laptop"));
  const downTablet = useMediaQuery(theme.breakpoints.down("tablet"));

  const { width } = useWindowSize();

  const responsive = {
    desktop: {
      breakpoint: { max: 10000, min: 1023 },
      items: 3,
      slidesToSlide: 1,
    },
    tablet: {
      breakpoint: { max: 1023, min: 768 },
      items: 3,
      slidesToSlide: 1,
    },
    mobile: {
      breakpoint: { max: 767, min: 0 },
      items: 1,
      slidesToSlide: 1,
      partialVisibilityGutter: width < 485 ? width - 280 - 32 : 450 - 280,
    },
  };

  return (
    <Carousel
      responsive={responsive}
      ssr
      // draggable
      // swipeable
      // partialVisible
      // renderArrowsWhenDisabled
      // arrows={true}
      // showDots={downTablet}
      // customDot={<DotCarousel />}
      showDots
      customDot={<CustomDot />}
    >
      {articles.map((articleItem, index) => (
        <div
          key={index}
          className={cx(`flex h-full pb-8 `, {
            // "pl-4": index > 0,
          })}
          onDragStart={(e) => e.preventDefault()}
        >
          <Link isNext href={"#"}>
            <ArticleCard
              article={articleItem}
              displaySize={DisplaySizeEnum.Home}
            />
          </Link>
        </div>
      ))}
    </Carousel>
  );
};

export default ArticleCarousel;
