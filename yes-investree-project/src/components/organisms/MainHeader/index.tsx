import Button from "components/atoms/Button";
import { cx } from "helpers/utils";

const MainHeader = () => {
  return (
    <div
      className={cx(
        "relative flex justify-center h-screen mb-12 overflow-hidden"
      )}
    >
      <div
        className={cx(
          "container relative z-30 p-5 text-2xl text-white bg-opacity-50 rounded-xl text-center",
          "laptop:px-48"
        )}
      >
        <div className='pt-24 laptop:pt-[196px]'>
          <h1 className='gap-2 laptop:text-headline1 text-center text-headline4'>
            <span className='text-green-300'>Crowdfunding</span>{" "}
            <span className='text-blue-primary'>
              ทางเลือกใหม่ ในการระดมทุนสำหรับ SME
            </span>
          </h1>
          <h3 className='text-gray-700 text-subtitle5 mt-4 laptop:mt-6'>
            ช่วย SME เข้าถึงแหล่งเงินทุนใหม่
          </h3>
          <div className='flex gap-4 justify-center mt-6 laptop:mt-8'>
            <Button
              className='bg-green-300 rounded-full text-button-xlarge'
              text='ระดมทุน'
              size='lg'
            />
            <Button
              className='bg-blue-primary rounded-full text-button-xlarge'
              text='ลงทุน'
              size='lg'
            />
          </div>
        </div>
      </div>
      <video
        autoPlay
        loop
        muted
        className='absolute z-10 w-auto tablet:min-w-full max-w-none opacity-80'
      >
        <source src='/videos/cover.mp4' type='video/mp4' />
      </video>
    </div>
  );
};

export default MainHeader;
