import ArticlePageHeadTitle from "components/atoms/ArticlePageHeadTitle";
import NewsTabs from "components/molecules/NewsTabs";
import HeaderSection from "components/templates/HeaderSection";
import { useTranslations } from "next-intl";
import useArticle from "stores/article";

const NewsHeaderSection = () => {
  const t = useTranslations();
  const articleType = useArticle((state) => state.type);
  const title =
    articleType === "news"
      ? t("articles.type.news")
      : t("articles.type.article");

  return (
    <HeaderSection backgroundImage='bg-news-cover' customHeight='h-[600px]'>
      <div className='laptop:pt-[68px]'>
        <ArticlePageHeadTitle
          pageTitle={title}
          mainTitle='ข่าวสารและบทความ'
          subTitle='ที่เป็นประโยชน์สำหรับ SME และนักลงทุน'
          children={
            <div className='container flex justify-center items-start mt-6 laptop:mt-8'>
              <NewsTabs />
            </div>
          }
        />
      </div>
    </HeaderSection>
  );
};

export default NewsHeaderSection;
