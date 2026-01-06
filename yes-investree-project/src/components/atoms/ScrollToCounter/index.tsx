import { cx } from "helpers/utils";
import { useIsVisible } from "hooks/useIsVisible";
import { useRef } from "react";
import { CountUp } from "use-count-up";

type Props = {
  start: number;
  end: number;
  duration?: number;
  isPercent?: boolean;
};

export default function ScrollToCounter(props: Props) {
  const { start, end, isPercent = false } = props;
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
      {isVisible1 && (
        <p className='text-headline4 tablet:text-headline1 text-green-300'>
          <CountUp
            isCounting
            start={start}
            end={end}
            duration={1}
            thousandsSeparator=','
          />
          {isPercent && (
            <span className='text-headline5 tablet:text-headline4 ml-1'>%</span>
          )}
        </p>
      )}
    </div>
  );
}
