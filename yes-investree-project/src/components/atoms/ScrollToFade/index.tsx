import { cx } from "helpers/utils";
import { useIsVisible } from "hooks/useIsVisible";
import { ReactNode, useRef } from "react";

type Props = {
  children: ReactNode | undefined;
};

export default function ScrollToFade(props: Props) {
  const { children } = props;
  const ref = useRef<HTMLDivElement>(null);
  const isVisible1 = useIsVisible(ref);

  return (
    <div
      ref={ref}
      className={cx(
        "transition-transform ease-in duration-700",
        isVisible1 ? `opacity-100` : "opacity-0"
      )}
    >
      {children}
    </div>
  );
}
