import ArticleCard from "components/atoms/ArticleCard";
import Button from "components/atoms/Button";
import SectionHeadText from "components/atoms/SectionHeadText";
import { DisplaySizeEnum } from "enums/common";
import { cx } from "helpers/utils";
import { ArticleData } from "interfaces/article";
import { ArticleCategoryData } from "interfaces/article-category";
import { useTranslations } from "next-intl";
import Router from "next/router";
import { useEffect, useState } from "react";
import useArticle from "stores/article";

const initialPostList = 3;
const incrementInitialPostList = 3;

type Props = {
  className?: string;
  descClassName?: string;
  list: ArticleData[];
  categories: ArticleCategoryData[];
};

const ArticleNewsSection: React.FC<Props> = ({ list, categories }) => {
  const t = useTranslations();
  const [displayPosts, setDisplayPosts] = useState(initialPostList);
  const [articles, setArticles] = useState(list?.slice(0, 3));
  const [selectedCategory, setSelectedCategory] =
    useState<ArticleCategoryData | null>(null);

  const articleType = useArticle((state) => state.type);
  const title =
    articleType === "news"
      ? t("articles.all.title.news")
      : t("articles.all.title.article");

  const loadMore = () => {
    setDisplayPosts(displayPosts + incrementInitialPostList);
  };

  const filterArticlesByCategory = (category: ArticleCategoryData) => {
    setSelectedCategory(category);
    setDisplayPosts(initialPostList);
    setArticles(
      list
        ?.filter((article) => article.category.id === category.id)
        .slice(0, initialPostList)
    );
  };
  const resetArticles = () => {
    setSelectedCategory(null);
    setDisplayPosts(initialPostList);
    setArticles(list?.slice(0, initialPostList));
  };
  const handleCategoryClick = (category: ArticleCategoryData | null) => {
    if (category === null) {
      resetArticles();
    } else {
      filterArticlesByCategory(category);
    }
  };

  useEffect(() => {
    setArticles(list?.slice(0, displayPosts));
  }, [list, displayPosts]);

  return (
    <div
      className={cx("mt-14 laptop:mt-[100px]", "mb-[116px] laptop:mb-[323px]")}
    >
      <SectionHeadText title={title} align='left' />
      <div
        className={cx("container w-full max-w-[350px] laptop:max-w-[1040px]")}
      >
        <div className='mt-14' />
        <div className='flex flex-col laptop:flex-row justify-start gap-2'>
          <Button
            className={cx(
              "border-[1px] rounded-full text-subtitle2",
              selectedCategory === null
                ? "bg-green-200 text-white border-green-200"
                : "bg-gray-light-900 text-gray-700 border-gray-light-900"
            )}
            text={t("articles.all.all")}
            onClick={handleCategoryClick.bind(null, null)}
          />
          {categories?.map((category) => (
            <Button
              key={category.id}
              className={cx(
                "border-[1px] rounded-full text-subtitle2",
                selectedCategory === category
                  ? "bg-green-200 text-white border-green-200"
                  : "bg-gray-light-900 text-gray-700 border-gray-light-900"
              )}
              text={category.name}
              onClick={handleCategoryClick.bind(null, category)}
            />
          ))}
        </div>
        <div
          className={cx(
            "grid grid-cols-1 laptop:grid-cols-3 gap-5",
            "mt-6 laptop:mt-10"
          )}
        >
          {articles?.map((article) => (
            <div
              className=''
              key={article.id}
              onClick={() => Router.push(`/news/${article.slug}`)}
            >
              <ArticleCard
                article={article}
                displaySize={DisplaySizeEnum.ArticleIndex}
              />
            </div>
          ))}
        </div>
        {list?.length && displayPosts < list.length ? (
          <div className='w-full flex justify-center mt-8 laptop:mt-14'>
            <Button
              size='more-article'
              className='border-[1px] border-green-200 rounded-full text-body2 text-green-200 min-w-[334px] px-6'
              text={t("articles.all.seeAll")}
              onClick={loadMore}
            />
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default ArticleNewsSection;
