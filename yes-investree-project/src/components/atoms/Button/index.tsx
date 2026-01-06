import { cx, prefixClass } from "helpers/utils";
import { MouseEventHandler, ReactNode, useMemo } from "react";
import Loading from "../Loading";

type Props = {
  text: string | ReactNode;
  onClick?: MouseEventHandler;
  type?: "submit" | "reset" | "button";
  variant?: "contains" | "outline" | "ghost";
  color?: "light-gray" | "green" | "blue" | "error" | "black";
  disabled?: boolean;
  loading?: boolean;
  fullWidth?: boolean;
  className?: string;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  size?:
    | "sm"
    | "md"
    | "2md"
    | "lg"
    | "more-article"
    | "career-filter"
    | "article-filter"
    | "blog"
    | "related-blog";
  dataTestId?: string;
};

const getMapClass = (): {
  variant: {
    contains: {
      color: Record<string, string>;
    };
    outline: {
      color: Record<string, string>;
    };
    ghost: {
      color: Record<string, string>;
    };
  };
  size: Record<string, string>;
} => ({
  variant: {
    contains: {
      color: {
        green: "text-white bg-green-300 hover:bg-green-400 active:bg-green-400",
        black:
          "text-white bg-light-blue-300 hover:bg-light-blue-300 active:bg-light-blue-300",
        blue: "text-white bg-blue-500 hover:bg-blue-300 active:bg-blue-500",
        error:
          "text-white bg-danger-primary hover:bg-danger-secondary active:bg-danger-primary",
      },
    },
    outline: {
      color: {
        "light-gray": `text-gray-300 bg-inherit border border-solid border-gray-300
          ${prefixClass(
            "hover",
            "text-white bg-light-blue-200 border-light-blue-200"
          )}
          ${prefixClass(
            "active",
            "text-white bg-light-blue-500 border-light-blue-500"
          )}
        `,
        black: `text-black-100 bg-white border border-solid border-gray-500
          ${prefixClass(
            "hover",
            "text-white bg-light-blue-100 border-light-blue-100"
          )}
          ${prefixClass("active", "text-white bg-white border-light-blue-500")}
        `,
        blue: `text-blue-500 bg-white border border-solid border-blue-500
          ${prefixClass("hover", "text-white bg-blue-300 border-blue-300")}
          ${prefixClass("active", "text-white bg-blue-500 border-blue-500")}
        `,
        error: `text-danger-primary bg-white border border-solid border-danger-primary
          ${prefixClass(
            "hover",
            "text-white bg-danger-secondary border-danger-secondary"
          )}
          ${prefixClass(
            "active",
            "text-white bg-danger-primary border-danger-primary"
          )}
        `,
        default: "",
      },
    },
    ghost: {
      color: {
        "light-blue": "text-light-blue-500",
        blue: "text-blue-500",
        error: "text-danger-primary",
        black: "text-black-100",
      },
    },
  },
  size: {
    "related-blog": "h-10 py-3 px-4 text-headline7",
    blog: "h-6 py-3 px-[10px] text-button-small",
    "article-filter": "h-14 py-1 px-4 text-subtitle2 hover:bg-light-gray-200",
    "career-filter": "h-14 py-3 pl-6 pr-2 text-body9",
    "more-article": "h-14 py-3 px-6 text-button-more-article",
    lg: "h-12 py-3 px-6 text-button-large",
    "2md": "h-10 p-2 text-button-large",
    md: "h-9 py-2 px-4 text-button-medium",
    sm: "h-7.5 py-1.5 px-3 text-button-small",
  },
});
const Button = ({
  text,
  onClick = () => {},
  variant = "contains",
  size = "md",
  color,
  type,
  disabled,
  loading,
  className,
  fullWidth,
  leftIcon,
  rightIcon,
  dataTestId,
}: Props) => {
  const MAP_CLASS = useMemo(() => getMapClass(), []);
  const _disabled = disabled || loading;

  const baseClass =
    "flex items-center justify-center font-noto-sans-thai whitespace-pre";
  // const variantClass = _disabled
  //   ? "text-white bg-disabled"
  //   : MAP_CLASS.variant[variant].color[color || "dafult"];
  const variantClass = MAP_CLASS.variant[variant].color[color || "dafult"];
  const sizeClass = MAP_CLASS.size[size];

  return (
    <button
      data-testid={dataTestId}
      className={cx(className, baseClass, variantClass, sizeClass, {
        "w-full": fullWidth,
      })}
      disabled={_disabled}
      type={type}
      onClick={onClick}
    >
      {loading ? (
        <Loading size={5} />
      ) : (
        <>
          {leftIcon && <span className='mr-1'>{leftIcon}</span>} {text}
          {rightIcon && <span className='ml-1 -mt-0.5'>{rightIcon}</span>}
        </>
      )}
    </button>
  );
};

export default Button;
