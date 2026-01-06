import { FaqData } from "interfaces/faq";
import { FaqDataSegment } from "interfaces/faq-segment";
import { Meta } from "interfaces/general";

export interface IFaqCategories {
  data: FaqDataCategory[];
  meta: Meta;
}

export interface FaqDataCategory {
  id: number;
  documentId: string;
  name: string;
  createdAt: Date;
  updatedAt: Date;
  publishedAt: Date;
  locale: string;
  code: string;
  faqs: FaqData[];
  faq_segments: FaqDataSegment[];
}
