import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

export type Article = {
  type: "news" | "article";
  slug: string;
  setCategory: (type: "news" | "article") => void;
};

const useArticle = create<Article>()(
  persist(
    (set) => ({
      type:
        typeof window !== "undefined"
          ? ["news", "article"].includes(
              window.localStorage.getItem("article-storage.type") || ""
            )
            ? (window.localStorage.getItem("article-storage.type") as
                | "news"
                | "article")
            : "news"
          : "news",
      slug:
        typeof window !== "undefined"
          ? window.localStorage.getItem("article-storage.slug") || ""
          : "",

      setCategory: (type: "news" | "article") => {
        set({ type });
      },
      setSlug: (slug: string) => {
        set({ slug });
      },
    }),
    {
      name: "article-storage", // unique name
      storage: createJSONStorage(() => localStorage), // use localStorage as the storage
    }
  )
);

export default useArticle;
