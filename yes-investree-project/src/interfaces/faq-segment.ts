import { FaqData } from "interfaces/faq";
import { FaqDataCategory } from "interfaces/faq-category";
import { Meta } from "interfaces/general";

export interface IFaqSegment {
  data: FaqDataSegment[];
  meta: Meta;
}
export interface FaqDataSegment {
  id: number;
  documentId: string;
  name: string;
  createdAt: Date;
  updatedAt: Date;
  publishedAt: Date;
  code: string;
  faqs: FaqData[];
  faq_categories: FaqDataCategory[];
}
