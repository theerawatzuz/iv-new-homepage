import GapSection from "components/atoms/GapSection";
import TeamPageHeadTitle from "components/atoms/TeamPageHeadTitle";
import TeamCard from "components/molecules/TeamCard";
import Layout from "components/templates/Layout";
import { cx } from "helpers/utils";
import { ILocaleProps } from "interfaces/general";
import { useTranslations } from "next-intl";

const ManagementPage = () => {
  const t = useTranslations();
  return (
    <Layout>
      <div>
        <TeamPageHeadTitle
          pageTitle='ทีมของเรา'
          mainTitle='ทีมผู้เชี่ยวชาญด้านการเงินของเรา'
          subTitle='มุ่งมั่นที่จะมอบประสบการณ์ Crowdfunding ที่ดีให้กับ SME และ นักลงทุน'
        />
      </div>
      <GapSection className='mt-[27px] laptop:mt-[125px]' />
      <div
        className={cx(
          "container w-full max-w-[350px] py-[10px] border-b-[1px] border-gray-light-700 text-headline5",
          "tablet:max-w-[calc(100%-100px)]",
          "laptop:max-w-[1040px] laptop:text-headline8"
        )}
      >
        ทีมผู้บริหาร
      </div>
      <GapSection className='mt-8 laptop:mt-[61px]' />
      <div
        className={cx(
          "flex flex-col gap-[56px] mb-[96px]",
          "laptop:gap-[80px] mb-[261px]"
        )}
      >
        <TeamCard
          team={{
            name: "นายวรกร สิริจินดา",
            position: "Co-Founder & Chief Operation Officer ",
            expert:
              "การพัฒนาระบบและขั้นตอนทางการเงิน, การบริหารจัดการระบบธุรกรรมและสินเชื่อ",
            expierence:
              "2003 - 2018:  First Vice President, Business Analyst, Thanachart Bank Public Company Limited",
            education: (
              <div>
                <div>- ปริญญาโท เศรษฐศาสตร์, Murray State University</div>
                <div>
                  - ปริญญาโท วิศวกรรมศาสตร์ (Manufacturing Engineer) Portland
                  State University
                </div>
                <div>- ปริญญาตรี วิทยาศาสตร์คอมพิวเตอร์, มหาวิทยาลัยมหิดล</div>
              </div>
            ),
            social: "Worakorn Sirijinda",
            image: "/images/team/team-1.png",
          }}
          background='gray'
        />
        <TeamCard
          team={{
            name: "นางสาวณัทสุดา พุกกะณะสุต",
            position: "Co-Founder & Chief Executive Officer",
            expert: "การเงิน, Wealth Management, International Economics",
            expierence: (
              <div>
                <div>2012 - 2020: Executive Director, Goldman Sachs Asia</div>
                <div>
                  2001 - 2012: Senior investment officer, Bank of Thailand
                </div>
              </div>
            ),
            education: (
              <div>
                <div>
                  - ปริญญาโท Wealth Management, Singapore Management University
                </div>
                <div>
                  - ปริญญาโท (เกียรตินิยม) International Economics, Johns
                  Hopkins University School of Advanced International Studies
                </div>
                <div>- ปริญญาตรี Government, Georgetown University</div>
              </div>
            ),
            social: "Natsuda Bhukkanasut",
            image: "/images/team/team-2.png",
          }}
          background='gray'
        />
        <TeamCard
          team={{
            name: "นางสาวสนันนาถ กุลไพศาลธรรม",
            position: "Head of Business Development",
            expert: "การวิเคราะห์สินเชื่อ SME ขนาดเล็กและขนาดกลาง",
            expierence: (
              <div>
                <div>2018: CEO, SG Capital</div>
                <div>
                  {" "}
                  2012 - 2017: รองกรรมการผู้จัดการ, ธนาคารไทยเครดิตเพื่อรายย่อย
                </div>
                <div>
                  2006 - 2012: ผู้ช่วยกรรมการผู้จัดการใหญ่
                  ด้านสินเชื่อธุรกิจเพื่อรายย่อย, ธนาคารไทยพาณิชย์
                </div>
              </div>
            ),
            education: (
              <div>
                <div>- ปริญญาโท บริหารธุรกิจ, NIDA </div>
                <div>- ปริญญาตรี รัฐศาสตร์, มหาวิทยาลัยเชียงใหม่</div>
              </div>
            ),
            social: "Sannanart Kulpaisantham",
            image: "/images/team/team-3.png",
          }}
          background='gray'
        />
        <TeamCard
          team={{
            name: "นางสาวแก้วกัลย์ ราชวัลลภานุสิษฐ์",
            position: "Chief Technology Officer",
            expert: "การพัฒนาระบบธนาคาร, ระบบการชำระเงิน, เทคโนโลยีบล็อกเชน",
            expierence: (
              <div>
                <div>
                  2544 – 2562 Vice President, IT Oversight, Thanachart Bank
                  Public Company Limited
                </div>
                <div>
                  2535 – 2544 Senior Programmer ธนาคาร ดีบีเอสไทยทนุ จำกัด
                  (มหาชน)
                </div>
              </div>
            ),
            education:
              "- ปริญญาตรี วิทยาศาสตร์บัญฑิต สาขาสถิติประยุกต์, สถาบันเทคโนโลยีพระจอมเกล้าเจ้าคุณทหาร ลาดกระบัง",
            social: "Kaewkal Rajavallabhanusith",
            image: "/images/team/team-4.png",
          }}
          background='gray'
        />
      </div>
    </Layout>
  );
};

export default ManagementPage;

export const getStaticProps = async ({ locale }: ILocaleProps) => {
  const messages = {
    ...(await import(`../../../messages/${locale}.json`)).default,
    ...(await import(`../../../messages/management/${locale}.json`)).default,
  };
  return {
    props: {
      messages,
    },
  };
};
