const MainHeaderPartner = () => {
  return (
    <div
      className="relative h-[calc(100vh-112px)] bg-[url('/images/partner-cover-mobile.jpg')] 
    laptop:bg-[url('/images/partner-cover.jpg')] bg-cover bg-center bg-no-repeat flex justify-center px-[20px] pt-[64px] laptop:p-[124px]"
    >
      <div className="flex flex-col items-center gap-[16px] h-fit">
        <h2 className="font-medium tablet:font-semibold text-[22px] tablet:text-[40px] leading-[28.6px] tablet:leading-[52px] text-[#8DC047] text-center">
          พันธมิตร
        </h2>
        <h1 className="font-semibold text-[36px] leading-[43.2px] text-[#091C3A] text-center tablet:text-[60px] tablet:leading-[75px]">
          เสริมสร้าง
          <br className="block laptop:hidden" />
          ความสำเร็จที่ยั่งยืน
          <br />
          ด้วย Supply Chain
          <br className="block laptop:hidden" />
          Financing
        </h1>
        <p className="font-medium text-[22px] leading-[28.6px] tracking-[-0.44px] text-center tablet:text-[32px] tablet:leading-[48px] tablet:tracking-normal">
          ลดความเสี่ยงจากปัญหาสภาพคล่อง
          <br className="block laptop:hidden" />
          ของคู่ค้า
          <br className="hidden laptop:block" />
          สร้างความมั่นคงให้กับ
          <br className="block laptop:hidden" />
          Supply Chain
        </p>
      </div>
    </div>
  );
};

export default MainHeaderPartner;
