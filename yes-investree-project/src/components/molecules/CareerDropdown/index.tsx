import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import Button from "components/atoms/Button";
import { cx } from "helpers/utils";
import { FaqDataCategory } from "interfaces/faq-category";
import { useEffect, useState } from "react";

type Props = {
  dropdownType: "job-level" | "job-section" | "job-type";
  list?: FaqDataCategory[];
  placeholder?: string;
  onChange?: (item: any) => void;
};

const CareerDropdown = (props: Props) => {
  const { dropdownType, list, placeholder = "ระดับ", onChange } = props;
  let _width = "tablet:w-[300px]";
  switch (dropdownType) {
    case "job-section":
      _width = "tablet:w-[280px]";
      break;
    case "job-level":
      _width = "tablet:w-[148px]";
      break;
    case "job-type":
      _width = "tablet:w-[239px]";
      break;
    default:
      _width = "tablet:w-[300px]";
      break;
  }

  const [searchValue, setSearchValue] = useState("");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState<any>(null);

  const options = [
    { id: 1, name: "Option 1" },
    { id: 2, name: "Option 2" },
    { id: 3, name: "Option 3" },
    { id: 4, name: "Option 4" },
    { id: 5, name: "Option 5" },
  ];

  const isSelected = (item: any) => {
    return selectedItem?.id! === item.id;
  };

  const toggleItem = (item: any) => {
    setSearchValue(item.name);
    setSelectedItem(item);
    setIsDropdownOpen(false);
    onChange && onChange(item);
  };

  // outside click to off the dropdown
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if ((event.target as Element).closest(".custom-select")) return;
      setTimeout(() => {
        setIsDropdownOpen(false);
      }, 200);
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className='flex items-center flex-col gap-5 justify-center'>
      <div className={cx("relative custom-select w-full", _width)}>
        {/* Input field with search functionality */}
        <Button
          text={searchValue || placeholder}
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          size='career-filter'
          className={cx(
            "w-full border border-gray-300 px-1 py-2 rounded-full bg-white text-start",
            "flex items-center justify-between"
          )}
          rightIcon={
            <KeyboardArrowDownIcon
              className={cx(
                "transition-all duration-300 text-[1.3rem]",
                "text-gray-500 bg-light-gray-100 rounded-full w-10 h-10",
                isDropdownOpen ? "rotate-[180deg]" : "rotate-0"
              )}
            />
          }
        />

        {/* Dropdown menu */}
        {isDropdownOpen && (
          <div
            className={cx(
              "absolute left-0 w-full mt-1 rounded-md shadow-lg z-20",
              "bg-white"
            )}
          >
            <div className='w-full overflow-auto'>
              {options.map((item, index) => (
                <p
                  key={item.id}
                  onClick={() => toggleItem(item)}
                  className={cx(
                    "cursor-pointer px-3 py-2 flex items-center hover:bg-gray-200",
                    isSelected(item) ? "bg-light-gray-100" : "bg-white",
                    index === 0 ? "rounded-t-lg" : "",
                    index === options.length - 1 ? "rounded-b-lg" : ""
                  )}
                >
                  {item.name}
                </p>
              ))}

              {options?.length === 0 && (
                <p className='text-center text-[0.9rem] text-[#424242] py-8'>
                  No search found!
                </p>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CareerDropdown;
