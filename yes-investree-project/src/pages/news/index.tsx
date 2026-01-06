import strapi from "api/strapi";
import ArticleNewsSection from "components/organisms/ArticleNewsSection";
import HighlightNewsSection from "components/organisms/HighlightNewsSection";
import NewsHeaderSection from "components/organisms/NewsHeaderSection";
import Layout from "components/templates/Layout";
import { NEWS_PARAMS } from "helpers/constants";
import { ArticleData } from "interfaces/article";
import { ArticleCategories } from "interfaces/article-category";
import { Articles } from "interfaces/articles";
import { ILocaleProps } from "interfaces/general";
import { useEffect, useState } from "react";
import useArticle from "stores/article";

type Props = {
  articles: Articles;
  articleCategories: ArticleCategories;
};

const NewsPage = ({ articles, articleCategories }: Props) => {
  const [articleList, setArticleList] = useState<ArticleData[]>([]);
  const [type, setType] = useState<"news" | "article">("news");
  const articleType = useArticle((state) => state.type);

  useEffect(() => {
    setType(articleType);
  }, [articleType]);

  useEffect(() => {
    if (articles?.data?.length > 0) {
      const filteredArticles = articles?.data.filter(
        (article) => article?.article_type?.name === articleType
      );
      setArticleList(filteredArticles);
    }
  }, [articles, type]);

  return (
    <Layout>
      <NewsHeaderSection />
      <HighlightNewsSection list={articleList} />
      <ArticleNewsSection
        list={articleList}
        categories={articleCategories.data}
      />
    </Layout>
  );
};

export default NewsPage;

export const getStaticProps = async ({ locale }: ILocaleProps) => {
  const params = {
    ...NEWS_PARAMS,
    locale,
  };
  const articles = await strapi.getArticles(params);
  if (!articles) {
    return {
      notFound: true,
    };
  }
  const articleCategories = await strapi.getArticleCategories();
  const messages = {
    ...(await import(`../../../messages/${locale}.json`)).default,
    ...(await import(`../../../messages/article/${locale}.json`)).default,
  };
  return {
    props: {
      messages,
      articles,
      articleCategories,
    },
  };
};
