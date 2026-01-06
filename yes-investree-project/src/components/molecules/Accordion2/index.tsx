import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { cx, getFaqTextColor } from "helpers/utils";
import { useState } from "react";

type Props = {
  className?: string;
  descClassName?: string;
  color?: "green" | "blue";
  content: {
    title: string;
    description: string;
  }[];
};

const Accordion = (prop: Props) => {
  const { className, descClassName, color, content } = prop;

  const [isAccordingOpen, setIsAccordingOpen] = useState(0);
  let _color = getFaqTextColor(color);

  const handleClick = (index: any) =>
    setIsAccordingOpen((prevIndex) => (prevIndex === index ? null : index));

  return (
    <div className='flex gap-3 flex-col w-full p-3'>
      {content?.map((according, index) => (
        <article
          key={index}
          className={cx(
            "py-3 px-3",
            // index === accordingData?.length - 1
            //   ? "border-none"
            //   : "border-b border-border",
            className
          )}
        >
          <div
            className='flex gap-2 cursor-pointer items-center justify-between w-full'
            onClick={() => handleClick(index)}
          >
            <div className='flex gap-4 items-start tablet:items-center'>
              <CheckCircleIcon className={cx(_color)} />
              <h2
                className={cx(
                  "font-[600] text-body2 tablet:text-subtitle5",
                  _color
                )}
              >
                {according.title}
              </h2>
            </div>
            <p>
              <KeyboardArrowDownIcon
                className={cx(
                  "text-[1.2rem] transition-all duration-300",
                  isAccordingOpen === index ? "rotate-[180deg]" : "",
                  isAccordingOpen === index ? _color : ""
                )}
              />
            </p>
          </div>
          <div
            className={cx(
              "grid transition-all duration-300 overflow-hidden ease-in-out",
              isAccordingOpen === index
                ? "grid-rows-[1fr] opacity-100 mt-4"
                : "grid-rows-[0fr] opacity-0",
              descClassName
            )}
          >
            <p className='text-gray-800 text-body4 tablet:text-button-xlarge overflow-hidden pl-10'>
              {according.description}
            </p>
          </div>
        </article>
      ))}
    </div>
  );
};

export default Accordion;
