import Image from "components/atoms/Image";
import { useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};

type Props = {
  images: string[];
};

const MultiCarouselTest = (props: Props) => {
  const { images } = props;
  const [activeNumber, setActiveNumber] = useState<number>(0);
  return (
    <Carousel
      swipeable={true}
      draggable={false}
      showDots={true}
      responsive={responsive}
      ssr={true} // means to render carousel on server-side.
      infinite={true}
      keyBoardControl={true}
      customTransition='all .5'
      transitionDuration={500}
      containerClass='carousel-container h-[500px] w-full'
      // removeArrowOnDeviceType={["tablet", "mobile"]}
      dotListClass='custom-dot-list-style'
      itemClass='carousel-item-padding-40-px'
    >
      {images.map((image, index) => (
        <div key={index} className='flex justify-center'>
          <Image
            src={image}
            width={195}
            height={400}
            alt={`phone-${activeNumber + 1}`}
          />
        </div>
      ))}
    </Carousel>
  );
};

export default MultiCarouselTest;
