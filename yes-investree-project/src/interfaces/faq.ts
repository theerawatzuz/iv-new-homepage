import { FaqDataCategory } from "interfaces/faq-category";
import { Meta } from "interfaces/general";

export interface IFaqs {
  data: FaqData[];
  meta: Meta;
}

export interface FaqData {
  id: number;
  documentId: string;
  title: string;
  createdAt: Date;
  updatedAt: Date;
  publishedAt: Date;
  locale: string;
  description: string;
  faq_category: FaqDataCategory;
  faq_segment: FaqDataCategory;
  localizations: Localizations[];
}

export interface Localizations {
  id: number;
  documentId: string;
  title: string;
  createdAt: Date;
  updatedAt: Date;
  publishedAt: Date;
  locale: string;
  description: string;
}
