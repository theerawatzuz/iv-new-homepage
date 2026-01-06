import { cx } from "helpers/utils";
import { FaqData } from "interfaces/faq";
import { useState } from "react";

type Props = {
  className?: string;
  descClassName?: string;
  color?: "green" | "blue";
  content: FaqData[];
};

const Accordion = (prop: Props) => {
  const { className, descClassName, color, content } = prop;

  const [bgAccording, setBgAccording] = useState(null);

  const handleBgAccording = (index: any) =>
    setBgAccording((prevIndex) => (prevIndex === index ? null : index));

  return (
    <div className='flex gap-3 flex-col w-full'>
      {content?.map((according, index) => (
        <article key={index} className={cx("bg-inherit rounded", className)}>
          <div
            className={cx(
              "flex gap-2 cursor-pointer items-center justify-between w-full bg-inherit p-3",
              bgAccording === index ? "rounded-t-sm" : "",
              "border-b-[1px] border-white"
            )}
            onClick={() => handleBgAccording(index)}
          >
            <h2 className='text-white text-body9 leading-6 laptop:text-subtitle5'>
              {according.title}
            </h2>
            <svg
              className='fill-[#ffffff] shrink-0 ml-8'
              width='16'
              height='16'
              xmlns='http://www.w3.org/2000/svg'
            >
              <rect
                y='7'
                width='16'
                height='2'
                rx='1'
                className={cx(
                  "transform origin-center transition duration-200 ease-out",
                  bgAccording === index ? "!rotate-180" : ""
                )}
              />
              <rect
                y='7'
                width='16'
                height='2'
                rx='1'
                className={cx(
                  "transform origin-center rotate-90 transition duration-200 ease-out",
                  bgAccording === index ? "!rotate-180" : ""
                )}
              />
            </svg>
          </div>
          <div
            className={cx(
              "grid transition-all duration-300 overflow-hidden ease-in-out bg-inherit",
              bgAccording === index
                ? "grid-rows-[1fr] opacity-100 px-3 py-3"
                : "grid-rows-[0fr] opacity-0 px-3",
              descClassName
            )}
          >
            <div className='text-body9 leading-6 overflow-hidden'>
              {according.description}
            </div>
          </div>
        </article>
      ))}
    </div>
  );
};

export default Accordion;
