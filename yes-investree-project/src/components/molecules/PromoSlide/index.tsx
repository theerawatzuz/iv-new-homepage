import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import PromotionCard from "components/atoms/PromotionCard";
import { promoContentList } from "components/organisms/PromoCarouselSection";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  // desktop: {
  //   breakpoint: { max: 3000, min: 1024 },
  //   items: 3,
  //   slidesToSlide: 3,
  // },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1,
    partialVisibilityGutter: 60,
  },
};

// const CustomButtonGroup = ({
//   next,
//   previous,
// }: {
//   next: () => void;
//   previous: () => void;
// }) => {
//   return (
//     <div className="flex justify-center mt-4">
//       <ChevronLeftIcon onClick={previous} className="mx-2" />
//       <ChevronRightIcon onClick={next} className="mx-2" />
//     </div>
//   );
// };

const PromoSlide = () => {
  return (
    <div className="w-full laptop:hidden crowd-carousel">
      <Carousel
        // swipeable={true}
        draggable={true}
        responsive={responsive}
        infinite={false}
        // centerMode={true}
        arrows={true}
        partialVisible={true}
        // customButtonGroup={
        //   <CustomButtonGroup next={() => {}} previous={() => {}} />
        // }
        // renderButtonGroupOutside={true}
        itemClass="block w-[280px] px-4"
      >
        {promoContentList.map((item, index) => (
          <div key={index}>
            <PromotionCard
              image={item.image}
              index={index}
              title={item.title}
              description={item.description}
              color={item.backgroundColor}
            />
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default PromoSlide;
