import { cx } from "helpers/utils";
import { useState } from "react";

type Props = {
  className?: string;
  descClassName?: string;
  content: { title: string; description: string }[];
};

const Accordion = (prop: Props) => {
  const { className, descClassName, content } = prop;
  const [bgAccording, setBgAccording] = useState<number | null>(null);
  const iconSize = 12;

  const handleBgAccording = (index: number) =>
    setBgAccording((prevIndex) => (prevIndex === index ? null : index));

  return (
    <div className='flex gap-3 flex-col w-full text-gray-700'>
      {content?.map((according, index) => {
        const isExpanded = bgAccording === index;
        return (
          <article
            key={index}
            className={cx("bg-white rounded-[20px]", className)}
          >
            <div
              className={cx(
                "cursor-pointer w-full bg-inherit rounded-[20px]",
                "px-5 laptop:px-8 pt-5 laptop:pt-8"
              )}
              onClick={() => handleBgAccording(index)}
            >
              <div
                className={cx(
                  "flex flex-col gap-4",
                  isExpanded
                    ? "border-b-[1px] border-gray-light-800 pb-8"
                    : "border-none pb-5 laptop:pb-8"
                )}
              >
                <div className='flex gap-2 items-start justify-between'>
                  <h2
                    className={cx(
                      "text-headline5 leading-6",
                      isExpanded ? "text-green-100" : "text-gray-700"
                    )}
                  >
                    {according.title}
                  </h2>
                  <div
                    className={cx(
                      "min-w-7 min-h-7 rounded-full flex items-center justify-center",
                      isExpanded ? "bg-green-100" : "bg-gray-light-900"
                    )}
                  >
                    <svg
                      className='fill-[#ffffff] shrink-0 transition-transform duration-200'
                      width={iconSize}
                      height={iconSize}
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <rect
                        x='0'
                        y='5'
                        width={iconSize}
                        height='2'
                        rx='1'
                        className={cx(
                          "transform origin-center transition duration-200 ease-out",
                          isExpanded ? "!rotate-45" : ""
                        )}
                      />
                      <rect
                        x='5'
                        y='0'
                        width='2'
                        height={iconSize}
                        rx='1'
                        className={cx(
                          "transform origin-center transition duration-200 ease-out",
                          isExpanded ? "!rotate-45" : ""
                        )}
                      />
                    </svg>
                  </div>
                </div>
                <div className='flex gap-[10px]'>
                  <div
                    className={cx(
                      "rounded-full text-body3 bg-gray-light-900 text-gray-700",
                      "px-4 py-[10px]"
                    )}
                  >
                    testing
                  </div>
                </div>
                <div>
                  <div className='flex gap-2 items-center'>
                    <p className='text-body2'>สถานที่ทำงาน: </p>
                    <span className='text-body1'>testing</span>
                  </div>
                  <div className='flex gap-2 items-center'>
                    <p className='text-body2'>แผนก: </p>
                    <span className='text-body1'>testing</span>
                  </div>
                  <div className='flex gap-2 items-center'>
                    <p className='text-body2'>ประสบการณ์: </p>
                    <span className='text-body1'>testing</span>
                  </div>
                </div>
              </div>
            </div>
            <div
              className={cx(
                "grid transition-all duration-300 overflow-hidden ease-in-out bg-inherit",
                "px-5 laptop:px-8",
                isExpanded
                  ? "grid-rows-[1fr] opacity-100 py-5 laptop:py-8 rounded-b-[20px]"
                  : "grid-rows-[0fr] opacity-0",
                descClassName
              )}
            >
              <div className='text-body1 overflow-hidden'>
                {according.description}
              </div>
            </div>
          </article>
        );
      })}
    </div>
  );
};

export default Accordion;
