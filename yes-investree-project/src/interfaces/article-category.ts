import { Meta } from "./general";

export interface ArticleCategories {
  data: ArticleCategoryData[];
  meta: Meta;
}

export interface ArticleCategoryData {
  id: number;
  documentId: string;
  name: string;
  slug: string;
  description?: any;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}
