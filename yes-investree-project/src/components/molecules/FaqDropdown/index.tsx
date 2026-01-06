import CheckIcon from "@mui/icons-material/Check";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import Button from "components/atoms/Button";
import { cx } from "helpers/utils";
import { FaqDataCategory } from "interfaces/faq-category";
import { useEffect, useState } from "react";

type Props = {
  categories: FaqDataCategory[];
  placeholder?: string;
  onChange?: (item: any) => void;
};

const FaqDropdown = (props: Props) => {
  const { categories, placeholder, onChange } = props;
  const [searchValue, setSearchValue] = useState("");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState<any>(null);

  const filteredItems = categories?.filter((item) =>
    item.name.toLowerCase().includes(searchValue.toLowerCase())
  );

  const isSelected = (item: any) => {
    return selectedItem?.id! === item.id;
  };

  const toggleItem = (item: any) => {
    setSearchValue(item.name);
    setSelectedItem(item);
    onChange && onChange(item);
    setIsDropdownOpen(false);
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
      <div className='relative custom-select w-full'>
        {/* Input field with search functionality */}
        <Button
          text={searchValue || placeholder}
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          className={cx(
            "w-full border border-gray-300 px-3 py-2 rounded-full bg-white text-start",
            "flex items-center justify-between"
          )}
          rightIcon={
            <KeyboardArrowDownIcon
              className={cx(
                "transition-all duration-300 text-[1.3rem] absolute top-[10px] right-3 text-gray-500",
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
              "bg-white border border-gray-200"
            )}
          >
            <div className='w-full overflow-auto'>
              {categories.map((item) => (
                <p
                  key={item.id}
                  onClick={() => toggleItem(item)}
                  className='cursor-pointer px-3 py-2 flex items-center hover:bg-gray-200'
                >
                  <CheckIcon
                    className={`${
                      isSelected(item)
                        ? "scale-[1] opacity-100"
                        : "scale-[0.5] opacity-0"
                    } mr-2 transition-all text-[1.3rem] duration-300`}
                  />
                  {item.name}
                </p>
              ))}

              {categories?.length === 0 && (
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

export default FaqDropdown;
