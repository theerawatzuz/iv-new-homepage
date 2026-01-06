const JoinusSection = () => {
  return (
    <div className="container w-full tablet:max-w-[1200px] tablet:w-[calc(100%-64px)] laptop:max-w-[1320px] laptop:px-[140px] px-[20px] tablet:my-[100px] my-[80px] flex flex-col items-center">
      <div
        className="w-[100%] laptop:h-[120px] h-[189px] flex laptop:flex-row flex-col justify-between items-center laptop:p-[32px] py-[20px] px-[40.5px] rounded-[20px] bg-white shadow-[0px_0px_40px_0px_rgba(157,209,226,0.25)]"
        style={{
          background: `
            radial-gradient(222.18% 86.74% at 104.13% 85.88%, rgba(197, 222, 255, 0.50) 0%, rgba(197, 222, 255, 0.00) 100%),
            radial-gradient(131.95% 42.58% at 74.17% 100%, rgba(140, 198, 64, 0.20) 0%, rgba(255, 255, 255, 0.00) 100%),
            #FFF
          `,
        }}
      >
        <p className="font-medium text-[24px] leading-[33.6px] text-center laptop:text-left">
          ร่วมเป็นส่วนหนึ่งในการพัฒนาเศรษฐกิจยั่งยืน
        </p>

        <button className="bg-[#8DC047] text-white font-medium text-[18px] leading-[21.6px] px-[24px] py-[21.5px] rounded-full">
          ร่วมเป็นพันธมิตรกับเรา
        </button>
      </div>
    </div>
  );
};

export default JoinusSection;
