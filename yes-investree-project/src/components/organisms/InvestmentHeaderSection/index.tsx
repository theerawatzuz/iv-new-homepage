import HeaderSection from "components/templates/HeaderSection";

const InvestmentHeaderSection = () => {
  return (
    <HeaderSection
      backgroundImage='bg-investment-cover'
      className='items-center'
    >
      <div>
        <h3 className='text-green-300 text-headline5 mt-4 tablet:mt-6 tablet:text-headline10'>
          ลงทุน
        </h3>
        <h1 className='gap-2 tablet:text-headline1 text-center text-headline4 mt-4'>
          <span className='text-blue-primary'>หุ้นกู้</span>{" "}
          <span className='text-green-300'>Crowdfunding</span>
        </h1>
        <h3 className='text-gray-700 text-subtitle5 mt-4 tablet:mt-6 px-4 tablet:px-32'>
          สร้างผลตอบแทนจากการลงทุนในธุรกิจ SME ไทยที่มีศักยภาพบน Platform
          ที่ได้รับความเห็นชอบจาก
          สำนักงานคณะกรรมการกำกับหลักทรัพย์และตลาดหลักทรัพย์
        </h3>
      </div>
    </HeaderSection>
  );
};

export default InvestmentHeaderSection;
