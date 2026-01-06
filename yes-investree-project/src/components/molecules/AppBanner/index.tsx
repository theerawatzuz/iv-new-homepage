import { useTranslation } from 'next-i18next';
import Image from 'components/atoms/Image';

const AppBanner = () => {
  const { t } = useTranslation(['components/appBanner', 'common']);

  return (
    <div className='bg-banner-app desktop:hidden px-4 py-[10px]' id='download_app'>
      <div className='flex items-center justify-between gap-x-4'>
        <div className='flex items-center gap-x-2'>
          <Image
            alt='Application'
            className='rounded-2xl'
            width={42}
            height={42}
            src={`${process.env.NEXT_PUBLIC_STORAGE_PATH}/assets/app-icon-2.png`}
          />
          <div>
            <p className='text-subtitle2'>{t('appBanner.title')}</p>
            <p className='text-overline'>{t('appBanner.desc')}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppBanner;
