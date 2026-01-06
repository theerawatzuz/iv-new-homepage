import Link from "next/link";
import React, { forwardRef, Ref, useMemo } from "react";
import Cookies from "universal-cookie";

type LinkRef = HTMLAnchorElement;
type props = {
  href: string | URL;
  children: React.ReactNode;
  isNext?: boolean;
  target?: string;
  className?: string;
  nofollow?: boolean;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
  tabIndex?: number;
};

const CustomLink = (
  {
    href,
    children,
    className,
    isNext = true,
    target = "_self",
    nofollow = false,
    onMouseEnter,
    onMouseLeave,
    tabIndex,
  }: props,
  ref: Ref<LinkRef>
) => {
  const url = `${href}`;
  const cookies = new Cookies(null, { path: "/" });

  /* for supporting other rel attribute soon */
  const relAttribute = useMemo(() => {
    const relAttr = [];
    if (nofollow) relAttr.push("nofollow");
    if (target === "_blank") relAttr.push("noopener");
    return relAttr.join(" ");
  }, [isNext, nofollow, target]);

  return isNext ? (
    <Link
      ref={ref}
      href={url}
      hrefLang='th'
      target={target}
      rel={relAttribute}
      className={className}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      tabIndex={tabIndex}
      locale={cookies.get("NEXT_LOCALE") || "th"}
    >
      {children}
    </Link>
  ) : (
    <a
      ref={ref}
      href={url}
      hrefLang='th'
      target={target}
      rel={relAttribute}
      className={className}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      tabIndex={tabIndex}
    >
      {children}
    </a>
  );
};

export default forwardRef(CustomLink);
