import ChevronRightIcon from "@mui/icons-material/ChevronRight";
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

const DISPLAY_POSTS = 3;

type Props = {
  className?: string;
  descClassName?: string;
  category: ArticleCategoryData;
  list: ArticleData[];
};

const RelatedArticleNewsSection: React.FC<Props> = ({ category, list }) => {
  const t = useTranslations();
  const [articles, setArticles] = useState(list?.slice(0, 3));

  const filterArticlesByCategory = (category: ArticleCategoryData) => {
    setArticles(
      list
        ?.filter((article) => article.category.id === category.id)
        .slice(0, DISPLAY_POSTS)
    );
  };
  const resetArticles = () => {
    setArticles(list?.slice(0, DISPLAY_POSTS));
  };

  useEffect(() => {
    if (list?.length > 3) {
      filterArticlesByCategory(category);
    }
  }, [list]);

  return (
    <div className='my-14'>
      <div
        className={cx(
          "container flex items-center justify-between",
          "w-full max-w-[350px] laptop:max-w-[1040px]"
        )}
      >
        <SectionHeadText title={t("articles.related.title")} align='left' />
        <Button
          size='related-blog'
          className='border-[1px] rounded-full bg-inherit text-gray-700 border-gray-300'
          text={t("articles.related.button")}
          rightIcon={<ChevronRightIcon />}
        />
      </div>
      <div
        className={cx(
          "container mt-6 w-full max-w-[350px] laptop:max-w-[1040px]"
        )}
      >
        <div className='flex flex-col laptop:flex-row justify-start gap-2'>
          <Button
            className='border-[1px] rounded-full text-subtitle2 bg-gray-light-900 text-gray-700 border-gray-light-900'
            text={category?.name}
          />
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
              key={article?.slug}
              onClick={() => Router.push(`/news/${article?.slug}`)}
            >
              <ArticleCard
                article={article}
                displaySize={DisplaySizeEnum.ArticleIndex}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RelatedArticleNewsSection;
