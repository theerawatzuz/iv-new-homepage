import { useMediaQuery, useTheme } from "@mui/material";
import ArticleCard from "components/atoms/ArticleCard";
import Image from "components/atoms/Image";
import dayjs from "dayjs";
import { DisplaySizeEnum } from "enums/common";
import { DEFAULT_IMAGE } from "helpers/constants";
import { cx, getImageUrl } from "helpers/utils";
import { ArticleData } from "interfaces/article";
import { useTranslations } from "next-intl";
import Router from "next/router";

type Props = {
  title: string;
  image: string;
  date: string;
  article: ArticleData;
};

const HighlightArticleCard: React.FC<Props> = ({ article }) => {
  // const typeName =
  //   article?.article_type?.name === "news" ? "ข่าวสาร" : "บทความ";
  const t = useTranslations();
  const typeName =
    article?.article_type?.name === "news"
      ? t("articles.type.news")
      : t("articles.type.article");
  const theme = useTheme();
  const isDownLaptop = useMediaQuery(theme.breakpoints.down("laptop"));

  if (isDownLaptop) {
    return (
      <ArticleCard
        article={article}
        displaySize={DisplaySizeEnum.ArticleIndex}
      />
    );
  }

  return (
    <div
      className={cx(
        "rounded-[32px] laptop:h-[440px] flex",
        "w-full max-w-[350px] laptop:max-w-[1040px]"
      )}
    >
      <div
        className={cx(
          "w-[714px]",
          "relative h-[440px] overflow-hidden rounded-l-[32px]"
        )}
      >
        <Image
          fill
          alt={article?.title}
          src={getImageUrl(article?.cover?.url) || DEFAULT_IMAGE}
          className='m-auto h-full object-cover w-[714px]'
          sizes='(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw'
        />
      </div>
      <div
        className={cx(
          "w-[326px] p-10 bg-white rounded-r-[32px]",
          "flex flex-col gap-4 justify-between"
        )}
      >
        <div className='flex flex-col gap-4'>
          <div className='text-label-large text-white w-fit rounded-full py-2 px-[10px] bg-gray-600'>
            {typeName}
          </div>
          <div
            className='text-headline8 text-gray-600 line-clamp-3 cursor-pointer'
            onClick={() => Router.push(`/news/${article.slug}`)}
          >
            {article?.title}
          </div>
        </div>
        <div className='flex flex-col gap-4'>
          <div className='text-label-large text-gray-700 w-fit rounded-full py-2 px-[10px] bg-gray-light-900'>
            {article?.category?.name}
          </div>
          <div>
            {dayjs(new Date(article?.publishedAt!)).format("DD/MM/BBBB")}
          </div>
          <div>
            <div>{t("articles.author")}</div>
            <div>{article?.author?.name}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HighlightArticleCard;
