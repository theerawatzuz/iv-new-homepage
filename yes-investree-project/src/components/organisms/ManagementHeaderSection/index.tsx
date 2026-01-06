import HeaderSection from "components/templates/HeaderSection";

const ManagementHeaderSection = () => {
  return (
    <HeaderSection
      className='items-center'
      backgroundImage=' '
      childClassName='tablet:px-36'>
      <div>
        <h3 className='text-green-300 text-headline5 mt-4 tablet:mt-6 tablet:text-headline10'>
          ทีมของเรา
        </h3>
        <h1 className='gap-2 tablet:text-headline1 text-center text-headline4 mt-4 text-blue-primary'>
          ทีมผู้เชี่ยวชาญด้านการเงินของเรา
        </h1>
        <h3 className='text-gray-700 text-subtitle5 mt-4 tablet:mt-6'>
          มุ่งมั่นที่จะมอบประสบการณ์ Crowdfunding ที่ดีให้กับ SME และ นักลงทุน
        </h3>
      </div>
    </HeaderSection >
  );
};

export default ManagementHeaderSection;


