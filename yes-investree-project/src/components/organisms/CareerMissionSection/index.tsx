import CareerMissionCard from "components/atoms/CareerMissionCard";
import { cx } from "helpers/utils";

const CareerMissionSection: React.FC = () => {
  return (
    <div className={cx("container w-full max-w-[350px] laptop:max-w-[1040px]")}>
      <div className='flex flex-col gap-8 laptop:gap-10 laptop:flex-row'>
        <div
          id='left'
          className={cx("flex flex-col items-center gap-8", "laptop:gap-10")}
        >
          <CareerMissionCard
            title='ขับเคลื่อนเศรษฐกิจและสังคมไทยให้ยั่งยืน'
            description='ร่วมพัฒนานวัตกรรมทางการเงินที่ช่วยให้เศรษฐกิจ และสังคมยั่งยืน เพิ่มโอกาสให้ SME ไทยเข้าถึงแหล่ง เงินทุนที่โปร่งใสและเป็นทางเลือกการลงทุนให้นักลงทุน'
            image='/images/career/item-1.png'
            isBgGradient
            bgColor='green'
          />
          <CareerMissionCard
            title='เปิดกว้างและสร้างสรรค์'
            description='เราเปิดกว้างให้ทุกคนได้คิด และมีส่วนร่วมตัดสินใจ เพราะเราเชื่อว่าทุกคนมีบทบาทสำคัญในการทำให้องค์กรบรรลุเป้าหมาย'
            image='/images/career/item-3.png'
            bgColor='green'
          />
        </div>
        <div
          id='right'
          className={cx(
            "flex flex-col items-center gap-8",
            "laptop:gap-10 laptop:mt-[100px]"
          )}
        >
          <CareerMissionCard
            title='สนับสนุนการพัฒนาอย่างต่อเนื่องสู่ความสำเร็จในแบบคุณ'
            description='วัฒนธรรมองค์กรที่เน้นการทำงานแบบมืออาชีพ สนับสนุนการเติบโต เปิดโอกาสให้เรียนรู้งานหลากหลาย และก้าวหน้าไปด้วยกัน'
            image='/images/career/item-2.png'
            isBgGradient
            bgColor='blue'
          />
          <CareerMissionCard
            title='บรรลุเป้าหมายอย่างไร้กังวล'
            description='เพื่อให้ทุกคนสามารถบรรลุเป้าหมายทางการงาน ได้อย่างไร้กังวล เราพิจารณาค่าตอบแทนที่เหมาะสม และจัดสรรสวัสดิการที่ครอบคลุม เช่น ประกันสุขภาพ ที่ครอบคลุมทันตกรรมและโรคร้ายแรง วันหยุด'
            image='/images/career/item-4.png'
            bgColor='blue'
          />
        </div>
      </div>
    </div>
  );
};

export default CareerMissionSection;
