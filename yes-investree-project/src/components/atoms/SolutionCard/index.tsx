import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import Button from "components/atoms/Button";
import { cx } from "helpers/utils";

const _content = [
  "ไม่ต้องใช้หลักทรัพย์ค้ำประกัน",
  "กระบวนการระดมทุนง่าย รวดเร็ว โปร่งใส",
  "ดอกเบี้ยเป็นธรรมสอดคล้องกับระดับความเสี่ยง",
  "แหล่งเงินทุนที่ยั่งยืน",
];

type SolutionCardProps = {
  title: string;
  description: string;
  content?: string[];
  onClick?: () => void;
  btnText?: string;
  isActive?: boolean;
};

const SolutionCard = ({
  title,
  description,
  content = _content || [],
  onClick,
  btnText = "สนใจระดมทุน",
  isActive = false,
}: SolutionCardProps) => {
  const bgGradient = "bg-gradient-to-b from-green-200 to-white to-60%";
  return (
    <div
      className={cx(
        "rounded-[20px] p-8 laptop:p-10",
        "w-[350px] laptop:w-[384px]",
        // "bg-white hover:bg-gradient-to-b hover:from-green-200 hover:to-white hover:to-60%",
        isActive ? bgGradient : "bg-white"
      )}
    >
      <div className='pb-8 laptop:pb-10'>
        <div className='text-headline5 laptop:text-headline8'>{title}</div>
        <div className='text-subtitle1 mt-6'>{description}</div>
      </div>
      <div className='pt-5 flex flex-col gap-4 text-white'>
        {content.map((item, index) => (
          <div className='flex gap-2 items-start text-gray-800' key={index}>
            <CheckCircleOutlineIcon className='w-5 h-5 text-green-300' />
            <div className='text-body9 leading-6'>{item}</div>
          </div>
        ))}
      </div>
      <div className='pt-10'>
        <Button
          text={btnText}
          className={cx(
            "text-headline7 rounded-full border-[1px] border-solid border-green-300",
            // "text-green-300 bg-white hover:text-white hover:bg-green-300",
            isActive ? "text-white bg-green-300" : "text-green-300 bg-white"
          )}
          onClick={onClick}
          size='lg'
          fullWidth
        />
      </div>
    </div>
  );
};

export default SolutionCard;
