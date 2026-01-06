import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { cx } from "helpers/utils";
import { useEffect, useState } from "react";

const SelectInput = () => {
  const [isActive, setIsActive] = useState(false);
  const [content, setContent] = useState("Select Option");

  const options = ["Football", "Cricket", "Tennis", "Badminton"];

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (!(event.target as Element).closest(".dropdown")) {
        setIsActive(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className='p-8 mb-4 flex items-center flex-col gap-5 justify-center'>
      <button
        className={cx(
          "bg-[#fff] border border-[#d1d1d1] rounded-full w-[80%] justify-between px-3 py-2 flex items-center gap-8  relative cursor-pointer dropdown"
        )}
        onClick={() => setIsActive(!isActive)}
      >
        {content}
        <KeyboardArrowDownIcon
          // className={`${
          //   isActive ? " rotate-[180deg]" : " rotate-0"
          // } transition-all duration-300 text-[1.2rem]`}
          className={cx(
            "transition-all duration-300 text-[1.2rem]",
            isActive ? " rotate-[180deg]" : " rotate-0"
          )}
        />
        <div
          // className={`${
          //   isActive
          //     ? " z-[1] opacity-100 scale-[1]"
          //     : " z-[-1] opacity-0 scale-[0.8]"
          // } w-full absolute top-12 left-0 right-0 z-40 bg-[#fff] rounded-xl flex flex-col overflow-hidden transition-all duration-300 ease-in-out`}
          className={cx(
            "w-full absolute top-12 left-0 right-0 z-40 bg-[#fff] rounded-xl flex flex-col overflow-hidden transition-all duration-300 ease-in-out",
            isActive
              ? " z-[1] opacity-100 scale-[1]"
              : " z-[-1] opacity-0 scale-[0.8]"
          )}
          style={{
            boxShadow: "0 15px 60px -15px rgba(0, 0, 0, 0.3)",
          }}
        >
          {options?.map((option, index) => (
            <p
              className='py-2 px-4 hover:bg-[#ececec] transition-all duration-200'
              key={index}
              onClick={(e) =>
                setContent((e.target as HTMLElement).textContent || "")
              }
            >
              {option}
            </p>
          ))}
        </div>
      </button>
    </div>
  );
};

export default SelectInput;
