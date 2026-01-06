import Image from "components/atoms/Image";
import dayjs from "dayjs";
import { DisplaySizeEnum } from "enums/common";
import { cx, getImageUrl } from "helpers/utils";
import { ArticleData } from "interfaces/article";
import { useTranslations } from "next-intl";
import { useEffect, useState } from "react";

export const formatPrice = (
  value?: number | string | null,
  decimal = 0,
  maxDecimal = 2,
  debug = false
) => {
  if (!value && value !== 0) return "";

  return (+value).toLocaleString(undefined, {
    minimumFractionDigits: decimal,
    maximumFractionDigits: maxDecimal,
  });
};

const DEFAULT_IMAGE_1_1 = `/images/default-image.png`;

interface ArticleCardProps {
  article: ArticleData;
  displaySize: DisplaySizeEnum;
}

const ArticleCard = (props: ArticleCardProps) => {
  const t = useTranslations();
  const { article, displaySize } = props;
  // const typeName =
  //   article?.article_type?.name === "news" ? "ข่าวสาร" : "บทความ";
  const typeName =
    article?.article_type?.name === "news"
      ? t("articles.type.news")
      : t("articles.type.article");
  const [articlePublishedAt, setArticlePublishedAt] = useState("");
  const [image, setImage] = useState<string | undefined>(undefined);

  useEffect(() => {
    setArticlePublishedAt(
      dayjs(new Date(article?.publishedAt!)).format("DD/MM/BBBB")
    );
  }, [article]);

  useEffect(() => {
    setImage(getImageUrl(article?.cover?.formats?.thumbnail?.url));
  }, [article]);

  return displaySize === DisplaySizeEnum.ArticleIndex ? (
    <div className='rounded-xl shadow-xs w-full cursor-pointer'>
      <div
        className={cx(
          "relative h-[220px] overflow-hidden rounded-t-xl",
          "tablet:h-[154px] desktop:h-[200px]"
        )}
      >
        <Image
          fill
          alt={article.title}
          src={image || DEFAULT_IMAGE_1_1}
          className='m-auto h-full object-cover w-[333px]'
          sizes='(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw'
        />
      </div>
      <div
        className={cx("flex h-fit flex-col p-5 gap-4 bg-white rounded-b-xl")}
      >
        <div className='text-body8 text-white w-fit rounded-full py-1 px-[10px] bg-gray-600'>
          {typeName}
        </div>
        <p
          className={cx(
            "min-h-[46px] text-ellipsis text-headline6 text-gray-600",
            "leading-[initial] text-black-100 line-clamp-2"
          )}
        >
          {article.title}
        </p>
        <div className='text-body5 text-gray-700 w-fit rounded-full py-[7px] px-[10px] bg-[#EAEAEA]'>
          {article?.category?.name}
        </div>
        <div className='text-body4 text-gray-200'>{articlePublishedAt}</div>
        <div className='flex gap-[10px] text-gray-200 items-center'>
          <div className='text-subtitle3'>{t("articles.author")}</div>
          <div className='text-body5'>{article?.author?.name}</div>
        </div>
      </div>
    </div>
  ) : (
    <div
      className={cx(
        "rounded-xl shadow-xs w-full min-w-[350px] min-h-[388px] cursor-pointer",
        "laptop:min-h-[416px] tablet:min-w-[234px] desktop:min-w-[333px]",
        "tablet:max-w-[234px] desktop:max-w-[333px]"
      )}
    >
      <div
        className={cx(
          "relative h-[220px] overflow-hidden rounded-t-xl",
          "tablet:h-[154px] desktop:h-[200px]"
        )}
      >
        <Image
          fill
          alt={article.title}
          src={image || DEFAULT_IMAGE_1_1}
          className='h-[200px] w-[164px] object-cover tablet:w-[234px] desktop:w-[333px] rounded-t-xl'
          sizes='(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw'
        />
      </div>
      <div
        className={cx("flex h-fit flex-col p-5 gap-4 bg-white rounded-b-xl")}
      >
        <div className='text-body8 text-white w-fit rounded-full py-1 px-[10px] bg-gray-600'>
          {typeName}
        </div>
        <p
          className={cx(
            "text-ellipsis text-headline6 text-gray-600",
            "leading-[initial] text-black-100 line-clamp-1"
          )}
        >
          {article.title}
        </p>
        <div className='text-body5 text-gray-700 w-fit rounded-full py-[7px] px-[10px] bg-[#EAEAEA]'>
          {article?.category?.name}
        </div>
        <div className='text-body4 text-gray-200'>{articlePublishedAt}</div>
        <div className='flex gap-[10px] text-gray-200 items-center'>
          <div className='text-subtitle3'>{t("articles.author")}</div>
          <div className='text-body5'>{article.author.name}</div>
        </div>
      </div>
    </div>
  );
};

export default ArticleCard;
