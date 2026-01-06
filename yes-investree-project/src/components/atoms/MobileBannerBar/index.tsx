import Marquee from "react-fast-marquee";

const MobileBannerBar = () => {
  return (
    <Marquee autoFill>
      <div
        id='mobile-banner'
        className='h-10 bg-gray-light-300 text-blue-primary text-body4 flex justify-center items-center'
      >
        โปรดระวังการแอบอ้างชื่อบริษัท
        ตรวจสอบช่องทางการติดต่อทุกครั้งหากได้รับข้อความที่กล่าวถึง Investree
      </div>
    </Marquee>
  );
};

export default MobileBannerBar;
