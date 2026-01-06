import { FaqData, IFaqs } from "interfaces/faq";
import { FaqDataCategory, IFaqCategories } from "interfaces/faq-category";
import { useEffect, useState } from "react";

export interface UseFaqReturnType {
  segment: number;
  selectedCategories: FaqDataCategory[];
  seletedfaqs: FaqData[];
  setSelectedfaqs: (faqs: FaqData[]) => void;
  handleSelectSegment: (index: number) => void;
  handleChangeCategory: (category: FaqDataCategory) => void;
  filterFaqs: (category: FaqDataCategory, segmentCode: string) => FaqData[];
}

export interface UseFaqProps {
  initialSegment?: number;
  faqCategories: IFaqCategories;
  faqs: IFaqs;
}

export const useFaq = ({
  initialSegment = 0,
  faqCategories,
  faqs,
}: UseFaqProps): UseFaqReturnType => {
  const [segment, setSegment] = useState<number>(initialSegment);
  const [selectedCategories, setSelectedCategories] = useState<
    FaqDataCategory[]
  >(faqCategories?.data || []);
  const [seletedfaqs, setSelectedfaqs] = useState(faqs?.data || []);

  const handleSelectSegment = (index: number) => {
    const segmentCode =
      index === 0 ? "company" : index === 1 ? "funding" : "investing";
    setSegment(index);
    const _categories =
      faqCategories?.data.filter(
        (category) =>
          category.faq_segments
            .map((segment) => segment.code)
            .includes(segmentCode) &&
          filterFaqs(category, segmentCode).length > 0
      ) || [];
    setSelectedCategories(_categories);
    handleChangeCategory(_categories[0]);
  };

  const handleChangeCategory = (category: FaqDataCategory) => {
    const segmentCode =
      segment === 0 ? "company" : segment === 1 ? "funding" : "investing";
    const _faqs = filterFaqs(category, segmentCode);

    setSelectedfaqs(_faqs || []);
  };

  const filterFaqs = (category: FaqDataCategory, segmentCode: string) => {
    return faqs?.data.filter(
      (faq: FaqData) =>
        faq?.faq_category?.documentId === category?.documentId &&
        faq?.faq_segment?.code === segmentCode
    );
  };

  useEffect(() => {
    handleSelectSegment(initialSegment);
  }, []);

  useEffect(() => {
    let segmentCode =
      segment === 0 ? "company" : segment === 1 ? "funding" : "investing";
    const _faqs = faqs?.data.filter(
      (faq) =>
        faq?.faq_category?.documentId === selectedCategories[0]?.documentId &&
        faq?.faq_segment?.code === segmentCode
    );
    setSelectedfaqs(_faqs || []);
  }, [segment, selectedCategories]);

  return {
    segment,
    selectedCategories,
    seletedfaqs,
    setSelectedfaqs,
    handleSelectSegment,
    handleChangeCategory,
    filterFaqs,
  };
};
