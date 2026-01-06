const DevelopmentSection = () => {
  return (
    <div className="container w-full tablet:max-w-[1200px] tablet:w-[calc(100%-64px)] laptop:max-w-[1320px] mt-[80px] laptop:mt-[78px] flex flex-col items-center gap-[0px] laptop:gap-[12px]">
      <div className="w-[100%] h-[390px] laptop:h-[680px] bg-[linear-gradient(180deg,rgba(255,255,255,0)_0%,#FFF_90.49%),url('/images/partner-cover-2-mobile.png')] tablet:bg-[linear-gradient(180deg,rgba(255,255,255,0)_0%,#FFF_90.49%),url('/images/partner-cover-2.png')] bg-cover bg-center bg-no-repeat flex justify-center items-end p-[16px] laptop:p-[4px] rounded-[16px] tablet:rounded-[40px]">
        <h2 className="text-center laptop:text-left font-medium text-[32px] leading-[41.6px] laptop:text-[48px] laptop:leading-[62.4px]">
          คู่ค้าเติบโต...
          <span className="text-[#6FB60E]">
            <br className="tablet:hidden" />
            ธุรกิจคุณก็เติบโต
          </span>
          <br className="laptop:hidden" />
        </h2>
      </div>
      <div className="w-[340px] tablet:w-[560px] text-center">
        <p className="font-medium text-[18px] leading-[27px] tablet:text-[20px] tablet:leading-[30px]">
          เมื่อคู่ค้าของคุณมีสภาพคล่องทางการเงินที่ดี พวกเขาจะสามารถลงทุน
          ในเทคโนโลยี พัฒนา บุคลากรและเพิ่มประสิทธิภาพในการดำเนินงาน
          ส่งผลให้สามารถส่งมอบสินค้าหรือบริการ
          ที่มีคุณภาพได้ตรงเวลาช่วยให้ธุรกิจของคุณ เติบโตอย่างมั่นคงและยั่งยืน
        </p>
      </div>
    </div>
  );
};

export default DevelopmentSection;
