import Button from "components/atoms/Button";
import { cx } from "helpers/utils";

const _content = [
  "ไม่ต้องใช้หลักทรัพย์ค้ำประกัน",
  "กระบวนการระดมทุนง่าย รวดเร็ว โปร่งใส",
  "ดอกเบี้ยเป็นธรรมสอดคล้องกับระดับความเสี่ยง",
  "แหล่งเงินทุนที่ยั่งยืน",
];

type InfoCardProps = {
  title?: string;
  subTitle?: string;
  content?: string[];
  bgColor?: "green" | "blue";
  btnText?: string;
  onClick?: () => void;
};

const gredientShades = {
  green: "bg-gradient-to-r from-green-primary to-green-secondary",
  blue: "bg-gradient-to-r from-blue-primarynew to-blue-secondarynew",
};

const bgBtn = {
  green: "bg-green-100",
  blue: "bg-blue-primary",
};

const BenefitCard: React.FC<InfoCardProps> = ({
  title,
  subTitle,
  content = [],
  bgColor = "green",
  btnText = "เริ่มระดมทุน",
  onClick,
}) => {
  return (
    <div
      className={cx(
        "rounded-2xl tablet:p-10 p-5 flex flex-col justify-between",
        "w-full",
        gredientShades[bgColor as keyof typeof gredientShades]
      )}
    >
      <div>
        <div className="mb-6 text-white">
          <div className="tablet:text-headline14 text-headline6">{title}</div>
          <div className="tablet:text-headline14 text-body9 mt-4">
            {subTitle}
          </div>
        </div>
        {/* <div className="border border-gray-500 border-b-1" /> */}
        <div className="mt-8 flex flex-col gap-4">
          {content.map((item, index) => (
            <div className="flex gap-2 items-start text-white" key={index}>
              <img
                src="/images/icons/check-icon.png"
                alt="check-circle"
                className="w-[20px] h-[20px] mt-[5px]"
              />
              <div className="tablet:text-body15 text-body17">{item}</div>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-5 laptop:mt-10">
        <Button
          text={btnText}
          className={cx(
            "text-black bg-white rounded-lg px-[23px] py-[23.5px] text-button-mlarge tablet:text-button-xxlarge w-full",
            bgBtn[bgColor as keyof typeof bgBtn]
          )}
          onClick={onClick}
        />
      </div>
    </div>
  );
};

export default BenefitCard;
