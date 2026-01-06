import { FAQColorEnum } from "enums/common";

export const ROUTES = {
  FIRST_PAGE: "/",
  FUNDING: "/crowdfunding",
  INVESTMENT: "/investing",
  CAREER: "/career",
  TERM_OF_USE: "/term-of-use",
  ABOUT: "/about",
  COOKIE_POLICY: "/cookie-policy",
  PRIVACY_POLICY: "/privacy-policy",
  FAQ: "/faq",
  NEWS: "/news",
  NEWS_DETAIL: "/news/[id]",
  TEAM: "/team",
  MANAGEMENT: "/management",
  PARTNER: "/partner",
};

export const ACCEPT_COOKIE_NAME = "allow_cookie";
export const ACCEPT_COOKIE_LIFE_TIME = 365 * 24 * 60 * 60; // 365 days

export const DEFAULT_IMAGE = `/images/default-image.png`;

export const SOCIALICONLIST = [
  {
    name: "facebook",
    label: "Investreeth",
    image: "/images/icons/contact/facebook.svg",
    link: "https://www.facebook.com",
  },
  {
    name: "youtube",
    label: "@Investreeth",
    image: "/images/icons/contact/youtube.svg",
    link: "",
  },
  {
    name: "linkedin",
    label: "Investreeth",
    image: "/images/icons/contact/linkedin.svg",
    link: "",
  },
  {
    name: "line",
    label: "Investreeth",
    image: "/images/icons/contact/line.svg",
    link: "",
  },
];

export const CONTACTINFOS = {
  phone: "02-619-8099",
  email: "cs@investree.co.th",
};

export const COOKIES_KEYS = {
  NEXT_LOCALE: "NEXT_LOCALE",
};

export const TAB_CATEGORY = [
  {
    title: "company",
    label: "เกี่ยวกับบริษัท",
    style: FAQColorEnum.Dark,
  },
  {
    title: "funding",
    label: "เกี่ยวกับการระดมทุน",
    style: FAQColorEnum.Green,
  },
  {
    title: "investing",
    label: "เกี่ยวกับการลงทุน",
    style: FAQColorEnum.Blue,
  },
];

export const TOKEN_KEY = "ssid";

export const NEWS_PARAMS = {
  "fields[0]": "id",
  "fields[1]": "title",
  "fields[2]": "description",
  "fields[3]": "slug",
  "fields[4]": "publishedAt",
  "populate[cover][fields][0]": "formats",
  "populate[cover][fields][1]": "url",
  "populate[author][fields][0]": "name",
  "populate[category][fields][0]": "name",
  "populate[article_type][fields][0]": "name",
};

export const ARTICLE_PARAMS = {
  "populate[cover][populate]": "*",
  "populate[category][populate]": "*",
  "populate[article_type][populate]": "*",
  "populate[author][populate]": "*",
  "populate[blocks][on][shared.media][populate][0]": "file",
  "populate[blocks][on][shared.rich-text][populate]": "*",
  "populate[blocks][on][shared.quote][populate]": "*",
};

/** Query of ARTICLE_PARAMS
{
  populate: {
    cover: {
      populate: '*'
    },
    category: {
      populate: '*'
    },
    article_type: {
      populate: '*'
    },
    author: {
      populate: '*'
    },
    blocks: {
      on: {
        'shared.media': {
          populate: ['file']
        },
        'shared.rich-text': {
          populate: '*'
        },
        'shared.quote': {
          populate: '*'
        },
      }
    }
  }
}
 */
