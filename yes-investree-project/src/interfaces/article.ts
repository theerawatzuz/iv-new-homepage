export interface Article {
  data: ArticleData;
  meta: Meta;
}

export interface ArticleData {
  id: number;
  documentId: string;
  title: string;
  description: string;
  slug: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  locale: string;
  highlight: boolean | null;
  cover: MediaFile;
  author: Author;
  category: ArticleCategory;
  blocks: Block[];
  article_type: ArticleType;
  localizations: any[];
}

export interface MediaFile {
  id: number;
  documentId: string;
  name: string;
  alternativeText: string;
  caption: string;
  width: number;
  height: number;
  formats: Formats;
  hash: string;
  ext: string;
  mime: string;
  size: number;
  url: string;
  previewUrl: any;
  provider: string;
  provider_metadata: any;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}

export interface Formats {
  thumbnail: ImageFormat;
  medium: ImageFormat;
  small: ImageFormat;
  large: ImageFormat;
}

export interface ImageFormat {
  name: string;
  hash: string;
  ext: string;
  mime: string;
  path: any;
  width: number;
  height: number;
  size: number;
  sizeInBytes: number;
  url: string;
}

export interface Author {
  id: number;
  documentId: string;
  name: string;
  email: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}

export interface ArticleCategory {
  id: number;
  documentId: string;
  name: string;
  slug: string;
  description: any;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}

export interface Block {
  __component: string;
  id: number;
  body?: string;
  title?: string;
  file?: MediaFile;
}

export interface ArticleType {
  id: number;
  documentId: string;
  name: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  slug: string;
}

export interface Meta {}
