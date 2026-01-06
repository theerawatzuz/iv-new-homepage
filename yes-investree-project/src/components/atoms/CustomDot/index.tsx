import { cx } from "helpers/utils";

type CustomDotProps = {
  onClick?: () => void;
  active?: boolean;
  index?: number;
  carouselState?: any;
};

const CustomDot = ({
  onClick = () => {},
  active,
  index,
  carouselState,
}: CustomDotProps) => {
  const { currentSlide } = carouselState;
  return (
    <li onClick={() => onClick()} className='list-none'>
      <div
        className={cx(
          "h-1 border-[1px] border-solid border-green-300 mx-[2px] rounded-full",
          active ? "w-6" : "w-1",
          active ? "bg-green-300" : "bg-white"
        )}
      ></div>
    </li>
  );
};

export default CustomDot;
