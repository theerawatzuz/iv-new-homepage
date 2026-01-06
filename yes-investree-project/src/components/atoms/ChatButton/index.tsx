import ChatBubbleIcon from "@mui/icons-material/ChatBubble";
import { cx } from "helpers/utils";

const ChatButton = () => {
  // const scrollToTop = () => {
  //   animateScroll.scrollToTop({ duration: 800, smooth: true });
  // };
  // const trigger = useScrollTrigger({
  //   disableHysteresis: true,
  //   threshold: 100,
  // });
  return (
    <div id='chatBtn' className='text-[48px]'>
      <ChatBubbleIcon
        onClick={() => {}}
        fontSize='inherit'
        className={cx(
          "z-50 border border-spacing-1 border-green-300 bg-green-300 text-white opacity-100",
          "fixed right-6 bottom-[90px] cursor-pointer rounded-full p-2",
          "desktop:right-10 desktop:bottom-[100px]"
        )}
      />
    </div>
  );
};

export default ChatButton;
