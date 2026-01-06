import HeaderSection from "components/templates/HeaderSection";

const FundingHeaderSection = () => {
  return (
    <HeaderSection
      className='items-center'
      backgroundImage='bg-funding-cover'
      childClassName='tablet:px-36'
    >
      <div>
        <h3 className='text-green-300 text-headline5 mt-4 tablet:mt-6 tablet:text-headline10'>
          ระดมทุน
        </h3>
        <h1 className='gap-2 tablet:text-headline1 text-center text-headline4 mt-4'>
          <span className='text-blue-primary'>
            ปลดล็อกศักยภาพธุรกิจของคุณ ด้วยการระดมทุน
          </span>{" "}
          <span className='text-green-300'>Crowdfunding</span>
        </h1>
        <h3 className='text-gray-700 text-subtitle5 mt-4 tablet:mt-6'>
          บน Platform ที่ได้รับความเห็นชอบจาก <br />
          สำนักงานคณะกรรมการกำกับหลักทรัพย์และตลาดหลักทรัพย์
        </h3>
      </div>
    </HeaderSection>
  );
};

export default FundingHeaderSection;
