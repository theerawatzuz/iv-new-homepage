import strapi, { imageApiUrl } from "api/strapi";
import ArticlePageHeadTitle from "components/atoms/ArticlePageHeadTitle";
import Image from "components/atoms/Image";
import ArticleSharedSocialMedia from "components/molecules/ArticleSharedSocialMedia";
import RelatedArticleNewsSection from "components/organisms/RelatedArticleNewsSection";
import Layout from "components/templates/Layout";
import { ARTICLE_PARAMS, NEWS_PARAMS } from "helpers/constants";
import { cx, getDateWithMonthName, getImageUrl } from "helpers/utils";
import { Articles } from "interfaces/articles";
import { GetStaticPropsContext } from "next";
import { useTranslations } from "next-intl";
import dynamic from "next/dynamic";
import { useState } from "react";

const Button = dynamic(() => import("components/atoms/Button"), {
  ssr: false,
});

type Props = {
  article: Articles;
  relatedArticles: Articles;
};

const SlugPage = ({ article, relatedArticles }: Props) => {
  const t = useTranslations();
  const [snackbarOpen, setSnackbarOpen] = useState(false);

  const attribute = article?.data[0];
  const category = attribute?.category;
  const type = attribute?.article_type;
  const contents = attribute?.blocks;
  const articleType = type?.name;

  const articleTypeName =
    articleType === "news"
      ? t("articles.type.news")
      : t("articles.type.article");

  const handleOpenSnackbar = () => {
    setSnackbarOpen(true);
  };

  return (
    <Layout>
      <div>
        <ArticlePageHeadTitle
          pageTitle={t("articles.article.title")}
          mainTitle={attribute?.title}
        >
          <div
            className={cx(
              "mt-4 text-subtitle3 text-gray-200",
              "flex flex-col laptop:flex-row items-center justify-center laptop:gap-2"
            )}
          >
            {getDateWithMonthName(attribute?.publishedAt)}
            <div className='hidden laptop:block'>{" | "}</div>
            <div className='flex items-center gap-1'>
              {`${t("articles.author")}`}{" "}
              <div className='text-body5'>{attribute?.author?.name}</div>
            </div>
          </div>
        </ArticlePageHeadTitle>
        <div
          className={cx(
            "container w-full mt-14 text-center max-w-[350px]",
            "tablet:max-w-[calc(100%-100px)]",
            "laptop:max-w-[1040px]"
          )}
        >
          <div
            className={cx(
              "relative h-[350px] overflow-hidden rounded-[20px]",
              "laptop:h-[585px]"
            )}
          >
            <Image
              fill
              priority
              src={getImageUrl(attribute?.cover?.url)}
              alt={attribute?.title}
              className={cx(
                "h-[350px] w-[350px] object-cover rounded-[20px]",
                "tablet:w-[calc(100%-100px)] tablet:h-fit laptop:w-[1040px] laptop:h-[585px]"
              )}
              sizes='(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw'
            />
          </div>
          <div
            className={cx(
              "py-6 laptop:py-10",
              "flex items-center justify-between",
              "border-b-[1px] border-article-border"
            )}
          >
            <div className='flex items-center gap-[10px]'>
              <Button
                disabled
                size='blog'
                key={category?.id}
                className={cx("rounded-full bg-gray-600 text-white")}
                text={articleTypeName}
              />
              <Button
                disabled
                size='blog'
                key={category?.id}
                className={cx(
                  "rounded-full",
                  "bg-gray-light-900 text-gray-700 "
                )}
                text={category?.name}
              />
            </div>
            <ArticleSharedSocialMedia handleOpenSnackbar={handleOpenSnackbar} />
          </div>
        </div>
        <div className='mt-8 laptop:mt-14'>
          {contents?.map((content, index) => {
            if (content.__component === "shared.rich-text") {
              return (
                <div
                  key={index}
                  className={cx(
                    "container w-full mt-6 text-start max-w-[350px]",
                    "tablet:max-w-[calc(100%-100px)]",
                    "laptop:mt-10 laptop:max-w-[650px]"
                  )}
                >
                  <p className='text-body1 text-article-content'>
                    {content.body}
                  </p>
                </div>
              );
            } else if (content.__component === "shared.quote") {
              return (
                <div
                  key={index}
                  className={cx(
                    "container w-full mt-6 text-start max-w-[350px]",
                    "tablet:max-w-[calc(100%-100px)]",
                    "laptop:mt-10 laptop:max-w-[650px]"
                  )}
                >
                  <div className='flex gap-2'>
                    <div className='border-l-[4px] border-green-300'></div>
                    <div className='py-4 pl-6'>
                      <p className='text-body1'>{content.body}</p>
                    </div>
                  </div>
                </div>
              );
            } else if (content.__component === "shared.media") {
              return (
                <div
                  key={index}
                  className={cx(
                    "container w-full mt-6 text-center max-w-[350px]",
                    "tablet:max-w-[calc(100%-100px)]",
                    "laptop:mt-10 laptop:max-w-[1040px]"
                  )}
                >
                  <div
                    className={cx(
                      "relative h-[350px] overflow-hidden rounded-[20px]",
                      "laptop:h-[585px]"
                    )}
                  >
                    <Image
                      fill
                      priority
                      src={getImageUrl(imageApiUrl(content?.file?.url!))}
                      alt={`${content?.id}`}
                      className='h-[350px] w-[350px] object-cover laptop:w-[1040px] laptop:h-[585px] rounded-[20px]'
                      sizes='(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw'
                    />
                  </div>
                </div>
              );
            }
            return null;
          })}
        </div>
        <div
          className={cx(
            "container w-full mt-14 text-center max-w-[350px]",
            "tablet:max-w-[calc(100%-100px)]",
            "laptop:max-w-[1040px]",
            "border-b-[1px] border-article-border"
          )}
        >
          <div className='flex justify-start text-gray-700 text-headline7'>
            {t("articles.article.share")}
          </div>
          <div className='flex justify-start mt-[10px] mb-14'>
            <ArticleSharedSocialMedia handleOpenSnackbar={handleOpenSnackbar} />
          </div>
        </div>
      </div>
      <RelatedArticleNewsSection
        category={category}
        list={relatedArticles?.data}
      />
    </Layout>
  );
};
export default SlugPage;

export async function getStaticPaths() {
  return {
    paths: [],
    fallback: false,
  };
}

export const getStaticProps = async (context: GetStaticPropsContext) => {
  const { params, locale } = context;
  const { slug } = params as { slug: string };

  const articleParams = {
    locale,
    "filters[slug][$eq]": slug,
    ...ARTICLE_PARAMS,
  };
  const article = await strapi.getArticles(articleParams);
  if (!article) {
    return {
      notFound: true,
    };
  }
  const relatedArticleParams = {
    ...NEWS_PARAMS,
    locale,
  };
  const relatedArticles = await strapi.getArticles(relatedArticleParams);
  const messages = {
    ...(await import(`../../../messages/${locale}.json`)).default,
    ...(await import(`../../../messages/article/${locale}.json`)).default,
  };
  return {
    props: {
      messages,
      article,
      relatedArticles,
    },
  };
};
