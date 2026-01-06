import { cx } from "helpers/utils";

type PageHeadTitleProps = {
  title: string;
};

const PageHeadTitle: React.FC<PageHeadTitleProps> = ({ title }) => {
  return (
    <div
      className={cx(
        "text-headline4 text-green-300 mt-[64px] flex justify-center",
        "laptop:mt-[156px] laptop:text-headline1"
      )}
    >
      <div className='w-[350px] laptop:w-[1200px] text-center'>{title}</div>
    </div>
  );
};

export default PageHeadTitle;
