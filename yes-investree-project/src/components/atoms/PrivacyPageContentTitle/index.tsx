import { cx } from "helpers/utils";

type Props = {
  children: React.ReactNode;
};

const PrivacyPageContentTitle: React.FC<Props> = ({ children }) => {
  return (
    <div
      className={cx(
        "mt-8 text-body9 text-green-300 leading-normal",
        "laptop:mt-10 laptop:leading-none"
      )}
    >
      {children}
    </div>
  );
};

export default PrivacyPageContentTitle;
