import { cx } from "helpers/utils";

type DotCarouselProps = {
  onClick?: () => void;
  active?: boolean;
  customSpacing?: string;
};
const DotCarousel = ({ onClick, active, customSpacing }: DotCarouselProps) => (
  <li className={active ? "active" : "inactive"} onClick={onClick}>
    <button
      aria-label='paginate-dots'
      className={cx(
        "opacity-1 delay-0 block h-2 w-2 cursor-pointer rounded-[50%] p-0 shadow-none outline-0",
        "transition duration-500 ease-in-out",
        "hover:bg-light-blue-500",
        active ? "bg-blue-primary" : "bg-gray-300",
        customSpacing ? customSpacing : "mx-1"
      )}
    />
  </li>
);
export default DotCarousel;
