import Http from "helpers/httpClient";
import { convertObjectToQueryString } from "helpers/utils";
import { ArticleCategories } from "interfaces/article-category";
import { Articles } from "interfaces/articles";
import { IFaqs } from "interfaces/faq";
import { IFaqCategories } from "interfaces/faq-category";
import { IFaqSegment } from "interfaces/faq-segment";

const END_POINT = `${process.env.NEXT_PUBLIC_STRAPI_API_END_POINT}/api`;
const token = process.env.STRAPI_API_TOKEN;

export const imageApiUrl = (slug: string) =>
  `${process.env.NEXT_PUBLIC_STRAPI_API_END_POINT}${slug}`;

export const STRAPI_END_POINT = {
  GET_FAQ_CATEGORIES: (params: any) =>
    `${END_POINT}/faq-categories/${convertObjectToQueryString(params)}`,
  GET_FAQ_SEGMENTS: (params: any) =>
    `${END_POINT}/faq-segments/${convertObjectToQueryString(params)}`,
  GET_FAQS: (params: any) =>
    `${END_POINT}/faqs/${convertObjectToQueryString(params)}`,
  GET_ARTICLES: (params: any) =>
    `${END_POINT}/articles${convertObjectToQueryString(params)}`,
  GET_ARTICLES_CATEGORIES: `${END_POINT}/categories/`,
};

const getHeader = () => {
  return {
    headers: { Authorization: `Bearer ${token}` },
  };
};

export default {
  async getFaqCategories(params?: any): Promise<IFaqCategories> {
    const response = await Http.get<IFaqCategories>(
      STRAPI_END_POINT.GET_FAQ_CATEGORIES(params),
      getHeader()
    );
    return response.data;
  },
  async getFaqSegments(params?: any): Promise<IFaqSegment> {
    const response = await Http.get<IFaqSegment>(
      STRAPI_END_POINT.GET_FAQ_SEGMENTS(params),
      getHeader()
    );
    return response.data;
  },
  async getFaqs(params?: any): Promise<IFaqs> {
    const response = await Http.get<IFaqs>(
      STRAPI_END_POINT.GET_FAQS(params),
      getHeader()
    );
    return response.data;
  },
  async getArticles(params?: any): Promise<Articles> {
    const response = await Http.get<Articles>(
      STRAPI_END_POINT.GET_ARTICLES(params),
      getHeader()
    );
    return response.data;
  },
  async getArticleCategories(): Promise<ArticleCategories> {
    const response = await Http.get<ArticleCategories>(
      STRAPI_END_POINT.GET_ARTICLES_CATEGORIES,
      getHeader()
    );
    return response.data;
  },
};
