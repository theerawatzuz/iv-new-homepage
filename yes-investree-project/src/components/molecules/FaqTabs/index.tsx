import { useMediaQuery, useTheme } from "@mui/material";
import { TAB_CATEGORY } from "helpers/constants";
import { cx } from "helpers/utils";
import { useState } from "react";

type Props = {
  order?: number;
  onChange?: (index: number) => void;
};

const FaqTabs = ({ order, onChange }: Props) => {
  const [activeTab, setActiveTab] = useState(order || 0);
  const theme = useTheme();
  const notDesktop = useMediaQuery(theme.breakpoints.down("desktop"));
  const handleChangeTab = (index: number) => {
    setActiveTab(index);
    onChange && onChange(index);
  };

  if (notDesktop) {
    return (
      <ul
        className={cx(
          "flex flex-col items-center p-1 relative w-[calc(100%-32px)] text-tab-mobile mt-6",
          "tablet:max-w-[calc(100%-100px)]",
          "laptop:max-w-[calc(100%-300px)]"
        )}
      >
        <div
          className={cx(
            "!bg-green-300 absolute !text-[#fff] h-[48px] w-full transition duration-300 rounded-full border-transparent cursor-pointer",
            "pb-[10px]",
            activeTab === 0 ? "translate-y-[0px]" : "",
            activeTab === 1 ? "translate-y-[58px]" : "",
            activeTab === 2 ? "translate-y-[116px]" : ""
          )}
        ></div>
        <li
          className={cx(
            "px-6 py-3 text-[#424242] z-20 transition duration-300 rounded-full border-transparent cursor-pointer w-full text-center",
            "h-[48px]",
            "mb-[10px]",
            activeTab === 0 ? "!text-[#fff]" : "bg-white"
          )}
          onClick={() => handleChangeTab(0)}
        >
          {TAB_CATEGORY[0].label}
        </li>
        <li
          className={cx(
            "px-6 py-3 text-[#424242] z-20 transition duration-300 rounded-full border-transparent cursor-pointer w-full text-center",
            "h-[48px]",
            "mb-[10px]",
            activeTab === 1 ? "!text-[#fff]" : "bg-white"
          )}
          onClick={() => handleChangeTab(1)}
        >
          {TAB_CATEGORY[1].label}
        </li>
        <li
          className={cx(
            "px-6 py-3 text-[#424242] z-20 transition duration-300 rounded-full border-transparent cursor-pointer w-full text-center",
            "h-[48px]",
            activeTab === 2 ? "!text-[#fff]" : "bg-white"
          )}
          onClick={() => handleChangeTab(2)}
        >
          {TAB_CATEGORY[2].label}
        </li>
      </ul>
    );
  }

  return (
    <ul className='flex items-center bg-white rounded-full p-1 relative w-fit text-headline6 mt-10'>
      <div
        className={cx(
          "!bg-green-300 absolute !text-[#fff] h-[85%] w-[300px] transition duration-300 rounded-full border-transparent cursor-pointer",
          activeTab === 0 ? "translate-x-[0px]" : "",
          activeTab === 1 ? "translate-x-[300px]" : "",
          activeTab === 2 ? "translate-x-[600px]" : ""
        )}
      ></div>
      <li
        className={cx(
          "px-6 py-2 text-[#424242] z-20 transition duration-300 rounded-full border-transparent cursor-pointer w-[300px] text-center",
          activeTab === 0 ? "!text-[#fff]" : ""
        )}
        onClick={() => handleChangeTab(0)}
      >
        {TAB_CATEGORY[0].label}
      </li>
      <li
        className={cx(
          "px-6 py-2 text-[#424242] z-20 transition duration-300 rounded-full border-transparent cursor-pointer w-[300px] text-center",
          activeTab === 1 ? "!text-[#fff]" : ""
        )}
        onClick={() => handleChangeTab(1)}
      >
        {TAB_CATEGORY[1].label}
      </li>
      <li
        className={cx(
          "px-6 py-2 text-[#424242] z-20 transition duration-300 rounded-full border-transparent cursor-pointer w-[300px] text-center",
          activeTab === 2 ? "!text-[#fff]" : ""
        )}
        onClick={() => handleChangeTab(2)}
      >
        {TAB_CATEGORY[2].label}
      </li>
    </ul>
  );
};

export default FaqTabs;
