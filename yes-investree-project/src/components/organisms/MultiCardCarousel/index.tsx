import { useMediaQuery, useTheme } from "@mui/material";
import CustomDot from "components/atoms/CustomDot";
import FundingTestimonialCard from "components/atoms/FundingTestimonialCard";
import InvestingTestimonialCard from "components/atoms/InvestingTestimonialCard";
import { motion } from "framer-motion";
import { cx } from "helpers/utils";
import React, { useEffect, useState } from "react";

type MultiCardCarouselProps = {
  page: "funding" | "investing";
};

const MultiCardCarousel: React.FC<MultiCardCarouselProps> = (props) => {
  const { page } = props;
  const them = useTheme();
  const laptop = useMediaQuery(them.breakpoints.up("laptop"));
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCards, setVisibleCards] = useState(1);
  const [dragging, setDragging] = useState(false);

  const Card =
    page === "funding" ? FundingTestimonialCard : InvestingTestimonialCard;

  useEffect(() => {
    const updateVisibleCards = () => {
      if (window.innerWidth < 640) {
        setVisibleCards(1);
      } else if (window.innerWidth < 1024) {
        setVisibleCards(1);
      } else {
        setVisibleCards(3);
      }
    };

    updateVisibleCards();
    window.addEventListener("resize", updateVisibleCards);
    return () => window.removeEventListener("resize", updateVisibleCards);
  }, []);

  const cards = [
    {
      image: "https://source.unsplash.com/random/1",
      title: "Card 1",
      description: "Info which directs to the other page.",
    },
    {
      image: "https://source.unsplash.com/random/2",
      title: "Card 2",
      description: "Info which directs to the other page.",
    },
    {
      image: "https://source.unsplash.com/random/3",
      title: "Card 3",
      description:
        "Info which directs to the other pagesddd. Info which directs to the other page.",
    },
    {
      image: "https://source.unsplash.com/random/4",
      title: "Card 4",
      description: "Info which directs to the other page.",
    },
    {
      image: "https://source.unsplash.com/random/5",
      title: "Card 5",
      description: "Info which directs to the other page.",
    },
  ];

  const infiniteCards = [...cards, ...cards, ...cards];

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % cards.length);
  };

  const handlePrev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + cards.length) % cards.length
    );
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const handleDragEnd = (event: any, info: any) => {
    if (info.offset.x < -50) {
      handleNext();
    } else if (info.offset.x > 50) {
      handlePrev();
    }
    setDragging(false);
  };

  return (
    <div className='mt-2 flex flex-col items-center w-full overflow-hidden'>
      <div
        className={cx(
          "container w-full overflow-hidden relative flex justify-center",
          "max-w-[350px] tablet:max-w-[calc(100%-64px)] laptop:max-w-[1200px]"
        )}
      >
        <motion.div
          className='relative flex cursor-grab'
          drag='x'
          dragConstraints={{ left: -100, right: 100 }}
          onDragStart={() => setDragging(true)}
          onDragEnd={handleDragEnd}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          animate={{ x: `-${(currentIndex * 100) / visibleCards}%` }}
          style={{ width: `${(infiniteCards.length / visibleCards) * 100}%` }}
        >
          {infiniteCards.map((card, index) => {
            // const isActive = index === currentIndex % cards.length;
            // const isActive = currentIndex === index;
            // isActive is true when the index is between currentIndex and currentIndex + visibleCards
            const isActive = laptop
              ? index === currentIndex + 1
              : index === currentIndex;
            return (
              <div
                className={cx(
                  "bg-inherit flex-none flex justify-center",
                  isActive ? "scale-100 z-10" : "scale-90 opacity-75"
                )}
                key={index}
                style={{ width: `${100 / visibleCards}%` }}
              >
                <Card
                  title={card.title}
                  description={card.description}
                  isActive={isActive}
                />
              </div>
            );
          })}
        </motion.div>
        {/* TODO: Arrow Buttons */}
        {/* <div className='flex items-center justify-between mt-4 absolute top-1/2 left-0 right-0 px-4'>
          <button
            className='w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center'
            onClick={handlePrev}
          >
            &lt;
          </button>
          <button
            className='w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center'
            onClick={handleNext}
          >
            &gt;
          </button>
        </div> */}
      </div>
      {/* Clickable Dots */}
      <div className='flex space-x-2 mt-4'>
        {cards.map((_, index) => (
          // <button
          //   key={index}
          //   onClick={() => goToSlide(index)}
          //   className={`w-3 h-3 rounded-full transition-all duration-300 ${currentIndex % cards.length === index ? "bg-blue-500 scale-125" : "bg-gray-300"}`}
          // ></button>
          <div key={index}>
            <CustomDot
              active={currentIndex % cards.length === index}
              onClick={() => goToSlide(index)}
              carouselState={currentIndex % cards.length === index}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default MultiCardCarousel;
