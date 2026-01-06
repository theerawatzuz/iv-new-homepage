import Button from "components/atoms/Button";
import { cx } from "helpers/utils";
import React from "react";

type Props = {
  order: number;
  text: string | React.ReactNode;
  color: "green" | "blue";
  className?: string;
  isActived?: boolean;
};

const FaqTitleButton = (props: Props) => {
  const {
    order,
    text,
    color = "blue-secondary",
    className,
    isActived = false,
  } = props;
  const textColor =
    color === "green" ? "text-green-300" : "text-blue-secondary";
  const bgColor = color === "green" ? "bg-green-300" : "bg-blue-secondary";
  return (
    <Button
      text={<div className='text-body12'>{text}</div>}
      className={cx(
        "rounded-full h-[72px]",
        isActived ? bgColor : "bg-gray-light-400",
        isActived ? "text-white" : "text-gray-700",
        className
      )}
      leftIcon={
        <div
          className={cx(
            "rounded-full h-10 w-10 text-body12 flex items-center justify-center mr-2",
            isActived ? "bg-white" : "bg-gray-light-600",
            isActived ? textColor : "text-gray-700"
          )}
        >
          {order + 1}
        </div>
      }
    />
  );
};

export default FaqTitleButton;
