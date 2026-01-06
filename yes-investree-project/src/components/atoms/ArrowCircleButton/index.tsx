type ArrowCircleButtonProps = {
  direction: "left" | "right";
  onClick?: () => void;
  classExtend?: string;
};

// const ArrowCircleButton = ({
//   direction,
//   onClick,
//   classExtend,
// }: ArrowCircleButtonProps) => {
//   const position = (dimension: string, classExtend: string | undefined) =>
//     classExtend || `${dimension}-10`;
//   const horizontalPosition = useMemo(() => {
//     if (direction) return position(direction, classExtend);

//     return "";
//   }, [direction, classExtend]);

//   return (
//     <div
//       // className={`absolute flex h-10 w-10 items-center justify-center rounded-full
//       //         bg-gray-300 text-white opacity-50 hover:opacity-100 ${horizontalPosition}`}
//       className={cx(
//         "rounded-full bg-gray-300 text-white opacity-50 hover:opacity-100"
//       )}
//       onClick={onClick}
//     >
//       {direction === "left" ? (
//         <KeyboardArrowLeftIcon fontSize='large' />
//       ) : (
//         <KeyboardArrowRightIcon fontSize='large' />
//       )}
//     </div>
//   );
// };

const ArrowCircleButton = ({ onClick = () => {}, ...rest }) => {
  const {
    onMove,
    carouselState: { currentSlide, deviceType },
  } = rest;
  // onMove means if dragging or swiping in progress.
  return <button onClick={() => onClick()} />;
};

export default ArrowCircleButton;
