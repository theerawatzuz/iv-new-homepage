import { cx } from "helpers/utils";
import { ReactNode } from "react";

type Props = {
  pageTitle: string | ReactNode;
  mainTitle: string | ReactNode;
  subTitle?: string | ReactNode;
  children?: ReactNode;
};

const ArticlePageHeadTitle: React.FC<Props> = ({
  pageTitle,
  mainTitle,
  subTitle,
  children,
}) => {
  return (
    <div
      className={cx(
        "container w-full mt-[64px] text-center max-w-[350px]",
        "tablet:max-w-[calc(100%-100px)]",
        "laptop:mt-[156px] laptop:max-w-[1040px]"
      )}
    >
      <div
        className={cx(
          "text-headline11 text-green-300",
          "laptop:text-headline10"
        )}
      >
        {pageTitle}
      </div>
      <div
        className={cx(
          "text-headline4 text-blue-primary mt-4",
          "laptop:text-headline1"
        )}
      >
        {mainTitle}
      </div>
      {subTitle && (
        <div
          className={cx(
            "text-subtitle8 text-gray-800 mt-4",
            "laptop:text-subtitle4"
          )}
        >
          {subTitle}
        </div>
      )}
      {children}
    </div>
  );
};

export default ArticlePageHeadTitle;
