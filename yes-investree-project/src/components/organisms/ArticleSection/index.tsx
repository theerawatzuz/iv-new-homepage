import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { useMediaQuery, useTheme } from "@mui/material";
import Button from "components/atoms/Button";
import { ArticleData } from "interfaces/article";
import { useTranslations } from "next-intl";

interface Props {
  articles: ArticleData[];
}

const ArticleSection = ({ articles }: Props) => {
  const t = useTranslations();
  const theme = useTheme();
  const tablet = useMediaQuery(theme.breakpoints.up("tablet"));

  return (
    <article className='container'>
      <div className='tablet:flex justify-between items-end'>
        <div>
          <div className='tablet:text-headline9 text-headline4 text-blue-primary'>
            {t("home.articleSection.title")}
          </div>
          <div className='text-gray-800 text-headline6 tablet:text-body18 mt-4 tablet:mt-4'>
            {t("home.articleSection.subTitle1")}
            <div>{t("home.articleSection.subTitle2")}</div>
          </div>
        </div>
        <div className='mt-4 tablet:mt-0'>
          <Button
            text={t("home.articleSection.button")}
            rightIcon={<ChevronRightIcon />}
            className='text-blue-secondary text-button-large underline font-medium'
            // variant='outline'
            color='light-gray'
            size='lg'
          />
        </div>
      </div>
      {/* <div className='mt-6 tablet:mt-14'>
        <ArticleCarousel articles={articles} />
      </div> */}
    </article>
  );
};

export default ArticleSection;
