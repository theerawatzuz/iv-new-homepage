import { cx } from "helpers/utils";
import { useTranslations } from "next-intl";
import useArticle from "stores/article";

const NewsTabs = () => {
  const t = useTranslations();
  const { type, setCategory } = useArticle();

  const width = "w-[120px]";
  const title =
    type === "news" ? t("articles.type.news") : t("articles.type.article");

  const handleTabClick = (tab: "news" | "article") => {
    setCategory(tab);
  };

  return (
    <ul className='flex items-center bg-white rounded-full p-1 relative w-fit text-headline6'>
      <div
        className={cx(
          "!bg-green-300 absolute !text-[#fff] h-12 ransition duration-300 rounded-full border-transparent cursor-pointer",
          type === "news" ? "translate-x-[0px]" : "",
          type === "article" ? "translate-x-[120px]" : "",
          width
        )}
      ></div>
      <li
        className={cx(
          "px-5 py-2 text-[#424242] z-20 transition duration-300 rounded-full border-transparent cursor-pointer text-center",
          type === "news" ? "!text-[#fff]" : "",
          width
        )}
        onClick={() => {
          handleTabClick("news");
        }}
      >
        {t("articles.type.news")}
      </li>
      <li
        className={cx(
          "px-5 py-2 text-[#424242] z-20 transition duration-300 rounded-full border-transparent cursor-pointer text-center",
          type === "article" ? "!text-[#fff]" : "",
          width
        )}
        onClick={() => {
          handleTabClick("article");
        }}
      >
        {t("articles.type.article")}
      </li>
    </ul>
  );
};

export default NewsTabs;
