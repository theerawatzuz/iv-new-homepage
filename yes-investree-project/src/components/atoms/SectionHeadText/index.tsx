import { cx } from "helpers/utils";
import React from "react";

type Props = {
  title: string;
  subTitle?: string | React.ReactNode;
  align?: "center" | "left" | "right";
  gap?: "narrow" | "wide";
};

const SectionHeadText: React.FC<Props> = ({ title, subTitle, align, gap }) => {
  let _alignCss = "text-center";
  switch (align) {
    case "center":
      _alignCss = "text-center";
      break;
    case "left":
      _alignCss = "text-left";
      break;
    case "right":
      _alignCss = "text-right";
      break;
    default:
      _alignCss = "text-center";
      break;
  }
  let _gapCss = "mt-5 laptop:mt-4";
  if (gap === "narrow") {
    _gapCss = "mt-4 laptop:mt-2";
  }

  return (
    <div
      className={cx(
        "container w-full max-w-[350px] text-headline8",
        "tablet:max-w-[calc(100%-100px)]",
        "laptop:max-w-[1040px] laptop:text-headline9",
        _alignCss
      )}
    >
      {title}
      {subTitle && (
        <div className={cx("text-subtitle7 laptop:text-subtitle4", _gapCss)}>
          {subTitle}
        </div>
      )}
    </div>
  );
};

export default SectionHeadText;
