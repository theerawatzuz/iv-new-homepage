import { cn } from "helpers/utils";

type Props = {
  className?: string;
};

const GapSection = ({ className }: Props) => {
  return (
    <div
      className={cn(className ? className : "mt-14 laptop:mt-[150px]")}
      data-testid="gapSection"
    />
  );
};

export default GapSection;
