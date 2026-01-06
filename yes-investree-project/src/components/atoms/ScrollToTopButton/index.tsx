import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import { useScrollTrigger } from "@mui/material";
import Zoom from "@mui/material/Zoom";
import { animateScroll } from "react-scroll";

const ScrollToTopButton = () => {
  const scrollToTop = () => {
    animateScroll.scrollToTop({ duration: 800, smooth: true });
  };
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 100,
  });
  return (
    <Zoom in={trigger}>
      <div id='scrollToTopBtn' className='text-[48px]'>
        <ArrowUpwardIcon
          onClick={scrollToTop}
          fontSize='inherit'
          className='z-50 fixed right-6 bottom-7 cursor-pointer rounded-full p-2
          bg-blue-primary text-white opacity-50 hover:opacity-100 desktop:right-10 desktop:bottom-10
          border border-spacing-1 border-gray-500'
        />
      </div>
    </Zoom>
  );
};

export default ScrollToTopButton;
