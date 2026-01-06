const goalsList = [
  {
    id: 1,
    image_url: "/images/goals/SDG1.png",
  },
  {
    id: 2,
    image_url: "/images/goals/SDG8.png",
  },
  {
    id: 3,
    image_url: "/images/goals/SDG9.png",
  },
  {
    id: 3,
    image_url: "/images/goals/SDG10.png",
  },
  {
    id: 3,
    image_url: "/images/goals/SDG11.png",
  },
  {
    id: 3,
    image_url: "/images/goals/SDG12.png",
  },
  {
    id: 3,
    image_url: "/images/goals/SDG17.png",
  },
];

const SupplySection = () => {
  return (
    <div className="px-[20px] container w-full tablet:max-w-[1200px] tablet:w-[calc(100%-64px)] laptop:max-w-[1320px] laptop:px-[230px] laptop:mt-[100px] mt-[40px] flex flex-col items-center">
      <div className="flex flex-col gap-[16px]">
        <div className="w-full">
          <h2 className="text-[32px] leading-[38.4px] tablet:text-[40px] tablet:leading-[52px] font-medium text-center">
            ปัญหา Supply Chain
            <br className="laptop:hidden" />
            สะดุด...ธุรกิจของคุณก็สะดุด
          </h2>
        </div>
        <div>
          <p className="leading-[26px] font-[500] text-[20px] laptop:leading-[30px] tracking-[0px] font-noto-sans text-center">
            ในโลกธุรกิจที่มีการแข่งขันสูง การมี Supply Chain
            ที่แข็งแกร่งและคล่องตัวคือกุญแจสำคัญสู่ความสำเร็จ
            <br className="hidden laptop:block" />
            หากคู่ค้าของคุณประสบปัญหาสภาพคล่องทางการเงิน
            ไม่สามารถลงทุนพัฒนาธุรกิจ
            <br className="hidden laptop:block" />
            หรือแม้แต่ดำเนินงานประจำวันได้อย่างราบรื่น
            ผลกระทบจะส่งตรงถึงธุรกิจของคุณ ตั้งแต่การผลิตที่ล่าช้า
            <br className="hidden laptop:block" />
            การส่งมอบสินค้าไม่ตรงเวลา
            ไปจนถึงคุณภาพสินค้าที่อาจไม่เป็นไปตามมาตรฐาน
            สิ่งเหล่านี้ล้วนส่งผลต่อ
            <br className="hidden laptop:block" />
            ความพึงพอใจของลูกค้า
            และท้ายที่สุดคือชื่อเสียงและความน่าเชื่อถือของแบรนด์ของคุณ
          </p>
        </div>
      </div>
      <div className="flex flex-row laptop:gap-[20px] mt-[32px] laptop:mt-[84px] w-full justify-between laptop:justify-center">
        <div className="flex flex-row gap-[10px] items-center">
          <img
            src="/images/goals/Group 48099282.png"
            alt="The Global Goals"
            className="w-[24px] h-[24px] tablet:w-[41px] tablet:h-[41px]"
          />
          <p className="font-medium text-[11.67px] leading-[15.17px] tablet:text-[20px] tablet:leading-[26px]">
            The Global Goals
          </p>
        </div>
        <div className="flex flex-row gap-[4.67px] laptop:gap-[8px]">
          {goalsList.map((goal) => (
            <div key={goal.id}>
              <img
                src={goal.image_url}
                alt=""
                className="w-[28px] h-[28px] laptop:w-[48px] laptop:h-[48px]"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SupplySection;
