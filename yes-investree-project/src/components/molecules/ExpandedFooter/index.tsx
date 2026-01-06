import { useTranslation } from 'next-i18next';
import { useMediaQuery, useTheme } from '@mui/material';
import Link from 'components/atoms/Link';
import { footerNavigationItem, subNavItem } from 'helpers/types';

interface footerProps {
  footerNavigationList?: footerNavigationItem[];
}

const ExpandedFooter = (props: footerProps) => {
  const { t } = useTranslation();
  const { footerNavigationList } = props;
  const theme = useTheme();
  const matched = useMediaQuery(theme.breakpoints.up('laptop'));

  return (
    <div className='container grid grid-cols-12 gap-x-5'>
      <div className='col-span-4 laptop:col-span-3'></div>
      <nav className='col-span-8 grid grid-cols-8 gap-x-5 gap-y-8 laptop:col-span-9 laptop:grid-cols-9'>
        {footerNavigationList &&
          footerNavigationList.map((footerNavGroup) => (
            <div className='col-span-4 text-body6 laptop:col-span-2' key={footerNavGroup.name}>
              <p className='text-light-blue-300 mb-4 text-body4'>{t(footerNavGroup.name)}</p>
              <ul className='list-none pl-0 text-white'>
                {footerNavGroup.subItem.map((subNav: subNavItem) => (
                  <li className='mb-2 last:mb-0' key={subNav.text}>
                    <Link
                      className='hover:underline'
                      href={subNav.link}
                      target={subNav.external ? '_blank' : '_self'}
                      isNext={subNav.isNext}
                    >
                      {t(subNav.text)}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        <div className='col-span-4 laptop:col-span-3'>
          <p className='text-light-blue-300 mb-4 text-body4'>{t('footer.navigationGroup.contact.title')}</p>
        </div>
      </nav>
      <div className='col-span-full'>
        <hr className='mb-6 text-white tablet:mt-10 laptop:mt-4' />
      </div>
    </div>
  );
};

export default ExpandedFooter;
