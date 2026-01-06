import Image from "components/atoms/Image";
import FundingProcessCarousel from "components/molecules/FundingProcessCarousel";
import { cx } from "helpers/utils";
import dynamic from "next/dist/shared/lib/dynamic";
import { useState } from "react";

const Accordion = dynamic(() => import("components/molecules/Accordion1"), {
  ssr: false,
});

const FUNDING_PHONE_IMAGES = [
  "/images/process/funding/phone-1.png",
  "/images/process/funding/phone-2.png",
  "/images/process/funding/phone-3.png",
  "/images/process/funding/phone-4.png",
  "/images/process/funding/phone-5.png",
];

const FUNDING_CONTENTS = [
  {
    title: "ลงทะเบียนผู้ขอระดมทุน",
    description:
      "กรอกข้อมูลบริษัทและ Upload เอกสารประกอบ เพื่อเข้ากระบวนการประเมินความน่าเชื่อถือ (Creditworthiness)",
  },
  { title: "รับข้อเสนอ", description: "พิจารณาข้อเสนอและเงื่อนไขการระดมทุน" },
  { title: "ระดมทุน Crowdfunding", description: "เริ่มต้นระดมทุนบน Platform" },
  {
    title: "รับเงินทุน",
    description: "รับเงินทุนเมื่อการระดมทุนสำเร็จตามเป้าหมาย",
  },
  {
    title: "ชำระเงินคืน",
    description: "ชำระเงินคืนค่าหุ้นกู้ตามกำหนดและเงื่อนไขที่ตกลง",
  },
];

const INVESTMENT_PHONE_IMAGES = [
  "/images/process/investment/p-1.png",
  "/images/process/investment/p-2.png",
  "/images/process/investment/p-3.png",
  "/images/process/investment/p-4.png",
];

const INVESTMENT_CONTENTS = [
  {
    title: "ลงทะเบียนออนไลน์",
    description: "กรอกข้อมูลและ Upload เอกสารเพื่อยืนยันตัวตน",
  },
  {
    title: "ทำแบบประเมินระดับความเสี่ยงและความรู้ในการลงทุน",
    description: "ทำแบบทดสอบ",
  },
  {
    title: "ลงทุนหุ้นกู้ Crowdfunding",
    description: "รัเลือกหุ้นกู้ที่สนใจ และเหมาะกับระดับความเสี่ยงที่รับได้",
  },
  {
    title: "ติดตามผลการลงทุน",
    description: "ติดตามสถานะการจองซื้อหุ้นกู้และผลการลงทุน",
  },
];

type Props = {
  page: "funding" | "investing";
};

const ProcessSection = (props: Props) => {
  const { page } = props;
  const images =
    page === "funding" ? FUNDING_PHONE_IMAGES : INVESTMENT_PHONE_IMAGES;
  const contents = page === "funding" ? FUNDING_CONTENTS : INVESTMENT_CONTENTS;
  const [activeNumber, setActiveNumber] = useState<number>(0);
  const onChange = (number: number) => {
    setActiveNumber(number);
  };
  return (
    <div
      className={cx(
        "bg-benefit-section bg-cover bg-center bg-no-repeat py-10",
        "tablet:py-15 desktop:py-20 monitor:py-24 large-monitor:py-36"
      )}
    >
      <div
        className={cx(
          "container mx-auto rounded-3xl w-[calc(100%-32px)] bg-inherit py-8 px-5",
          "tablet:px-20 tablet:py-20 tablet:max-w-[calc(100%-64px)]",
          "desktop:max-w-[calc(100%-300px)]"
        )}
      >
        <div className='text-gray-800 text-headline8 tablet:text-headline9 text-center'>
          ขั้นตอนง่ายๆ ในการ{" "}
          <span
            className={cx(
              page === "funding" ? "text-green-300" : "text-blue-secondary"
            )}
          >
            {page === "funding" ? "ระดมทุน" : "ลงทุน"}
          </span>
        </div>
        <div className='mt-5 tablet:mt-10'>
          <div className='mb-4 block laptop:hidden'>
            <FundingProcessCarousel images={images} />
          </div>
          <div className={cx("gap-8 justify-center hidden", "laptop:flex")}>
            <div>
              <Accordion
                onChange={onChange}
                content={contents}
                color={page === "funding" ? "green" : "blue"}
              />
            </div>
            <div>
              <Image
                src={images[activeNumber]!}
                width={292.5}
                height={600}
                alt={`phone-${activeNumber + 1}`}
              />
            </div>
          </div>
        </div>

        <div className='mt-5 tablet:mt-10'></div>
      </div>
    </div>
  );
};

export default ProcessSection;
