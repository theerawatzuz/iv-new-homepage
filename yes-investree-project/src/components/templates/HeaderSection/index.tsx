import { cx } from "helpers/utils";
import { ReactNode } from "react";

type HeaderSectionProps = {
  className?: string;
  backgroundImage: string;
  backgroundClass?: string;
  children: ReactNode;
  childClassName?: string;
  needOverlapToNavbar?: boolean;
  customHeight?: string;
};

const HeaderSection = ({
  className,
  backgroundImage,
  backgroundClass,
  children,
  childClassName,
  needOverlapToNavbar,
  customHeight,
}: HeaderSectionProps) => {
  return (
    <div
      className={cx(
        "relative flex justify-center h-screen overflow-hidden",
        className,
        customHeight ? customHeight : "h-screen"
      )}
    >
      <div
        className={cx(
          "container relative z-30 p-5 text-2xl text-white text-center",
          childClassName,
          needOverlapToNavbar ? "mt-[-100px]" : "mt-0"
        )}
      >
        {children}
      </div>
      <div
        className={cx(
          "absolute inset-0 opacity-50 z-0 bg-cover bg-center bg-no-repeat h-screen",
          backgroundImage,
          backgroundClass
        )}
      />
    </div>
  );
};

export default HeaderSection;
