import Image from "components/atoms/Image";
import Link from "components/atoms/Link";
import { CONTACTINFOS, ROUTES, SOCIALICONLIST } from "helpers/constants";
import { cx } from "helpers/utils";
import { useTranslations } from "next-intl";

const Footer = () => {
  const t = useTranslations();
  return (
    <footer
      className='laptop:pt-6 bg-blue-primary pb-6 pt-0 tablet:pt-11 laptop:px-0 text-gray-light-300'
      id='footer'
    >
      <div className='flex flex-col justify-center items-center'>
        <div
          className={cx(
            "laptop:grid grid-cols-12 gap-4 pt-8 laptop:pt-0 w-[350px] pl-4 mobile-xs:pl-0",
            "tablet:max-w-[1200px] tablet:w-[calc(100%-64px)]",
            "laptop:max-w-[1200px]"
          )}
        >
          <div className='laptop:col-span-4'>
            <Image
              fetchPriority='high'
              priority
              alt='Logo'
              loading='eager'
              height={40}
              width={140}
              src='/images/icons/investree.svg'
            />
            <div className='mt-4 w-[90%] laptop:w-[60%]'>
              {t("footer.description")}
            </div>
          </div>
          <div
            className={cx(
              "mt-10 laptop:mt-0",
              "laptop:flex justify-between mr-[100px] tablet:mr-0 laptop:mt-0 laptop:pt-6 laptop:px-0 laptop:col-span-3"
            )}
          >
            <div>
              <div className='mb-4 tablet:mb-[13px]'>
                {t("footer.menu.services")}
              </div>
              <div>
                <Link href={ROUTES.FUNDING}>
                  <div className='text-gray-100'>
                    {t("footer.menu.funding")}
                  </div>
                </Link>
                <Link href={ROUTES.INVESTMENT}>
                  <div className='text-gray-100'>
                    {t("footer.menu.investing")}
                  </div>
                </Link>
              </div>
            </div>
            <div>
              <div className='mt-10 laptop:mt-0 mb-4 tablet:mb-[13px]'>
                {t("footer.menu.about")}
              </div>
              <div>
                <Link href={ROUTES.MANAGEMENT}>
                  <div className='text-gray-100'>
                    {t("footer.menu.management")}
                  </div>
                </Link>
                <Link href={ROUTES.PARTNER}>
                  <div className='text-gray-100'>
                    {t("footer.menu.partnership")}
                  </div>
                </Link>
                <Link href={ROUTES.CAREER}>
                  <div className='text-gray-100'>{t("footer.menu.career")}</div>
                </Link>
                <div className='text-gray-100'>{t("footer.menu.news")}</div>
                <Link href={ROUTES.FAQ}>
                  <div className='text-gray-100'>{t("footer.menu.faq")}</div>
                </Link>
              </div>
            </div>
          </div>
          <div className='mt-10 laptop:mt-0 laptop:pt-6 laptop:flex justify-between laptop:px-4 laptop:col-span-5'>
            <div>
              <div className='mb-5 tablet:mb-[13px]'>
                {t("footer.menu.contact")}
              </div>
              <div>
                <div className='text-gray-100'>{CONTACTINFOS.phone}</div>
                <div className='text-gray-100'>{CONTACTINFOS.email}</div>
              </div>
            </div>
            <div className='mt-10 laptop:mt-0'>
              <div className='mb-4 tablet:mb-[13px]'>
                {t("footer.menu.privacy")}
              </div>
              <div>
                <Link href={ROUTES.TERM_OF_USE}>
                  <div className='text-gray-100'>{t("footer.menu.terms")}</div>
                </Link>
                <Link href={ROUTES.PRIVACY_POLICY}>
                  <div className='text-gray-100'>
                    {t("footer.menu.privacyPolicy")}
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div
          className={cx(
            "mt-10 w-[350px]",
            "tablet:max-w-[1200px] tablet:w-[calc(100%-64px)]",
            "laptop:max-w-[1200px]"
          )}
        >
          <div className='flex flex-col tablet:flex-row justify-between pl-4 laptop:pl-0 mobile-xs:pl-0'>
            <div>
              <div>{t("footer.menu.social")}</div>
              <div className='mt-4 flex flex-col laptop:flex-row gap-4'>
                {SOCIALICONLIST.map((social) => (
                  <div key={social.name} className='flex gap-2'>
                    <div>
                      <Image
                        src={social.image}
                        alt={social.name}
                        width={24}
                        height={24}
                      />
                    </div>
                    <div>{social.label}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className='flex items-center tablet:items-end mt-10 tablet:mt-0'>
              <Image
                alt='logo'
                className='w-[232px]'
                src='/images/everyone-can-grow.svg'
                height={22}
                width={232}
              />
            </div>
          </div>
        </div>
      </div>
      <div className='flex flex-col justify-center items-center'>
        <div
          className={cx(
            "mt-10 text-body14 w-[350px] text-gray-100 text-center",
            "tablet:max-w-[1200px] tablet:w-[calc(100%-64px)] tablet:text-left",
            "laptop:max-w-[1200px] laptop:text-body8"
          )}
        >
          {t("footer.copyright")}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
