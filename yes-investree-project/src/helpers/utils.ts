import { ClassValue, clsx } from "clsx";
import dayjs from "dayjs";
import { DEFAULT_IMAGE } from "helpers/constants";
import { extendTailwindMerge } from "tailwind-merge";

const textSizes = [
  "headline1",
  "headline2",
  "headline3",
  "headline4",
  "headline5",
  "headline6",
  "headline7",
  "subtitle1",
  "subtitle2",
  "subtitle3",
  "body1",
  "body2",
  "body3",
  "body4",
  "body5",
  "body6",
  "body7",
  "body8",
  "button-large",
  "button-medium",
  "button-small",
  "label-large",
  "label-small",
  "caption",
  "input1",
  "input2",
  "input3",
  "overline",
];
export const twMerge = extendTailwindMerge({
  // use the `extend` key in case you want to extend instead of override
  override: {
    classGroups: {
      "font-size": textSizes.map((size) => `text-${size}`),
    },
  },
});

export const prefixClass = (prefix: string, className: string) => {
  const classList = className.split(" ");
  return classList.map((item) => `${prefix}:${item}`).join(" ");
};

export const cx = (
  ...classes: (string | Record<string, any> | string[] | null | undefined)[]
) =>
  classes
    .flatMap((item) => {
      if (item === null || item === undefined) {
        return [];
      }

      if (typeof item === "string") {
        return item ? [item] : [];
      }

      if (item instanceof Array) {
        return item.filter(Boolean);
      }

      return Object.keys(item).filter((key) => Boolean(item[key]));
    })
    .join(" ");

export const isSVG = (filename: string): boolean => {
  return /.svg/.test(filename);
};

export const getStoragePath = (path: string) =>
  `${process.env.NEXT_PUBLIC_STORAGE_PATH}/${path}`;

export const getSkipStaticSiteGeneration = () => {
  return process.env.GENERATE_STATIC_PAGES === "false";
};

export const getStaticPropErrorObject = (
  routePath: string,
  fetchVariableName: string,
  errObj: any
) => {
  const errorMessages = `failed getting dynamic ${fetchVariableName} on ${routePath} from API`;

  return {
    messages: errorMessages,
    additionalErrorObj: errObj,
  };
};

export const chunkArrayInGroups = (arr: Array<any>, size: number) => {
  const myArray = [];
  for (let i = 0; i < arr.length; i += size) {
    myArray.push(arr.slice(i, i + size));
  }
  return myArray;
};

export const cn = (...inputs: ClassValue[]) => twMerge(clsx(inputs));

export const getFaqTextColor = (
  color: "green" | "blue" | "dark" | undefined
) => {
  let _color: string;
  switch (color) {
    case "green":
      _color = "text-green-300";
      break;
    case "blue":
      _color = "text-blue-secondary";
      break;
    default:
      _color = "";
      break;
  }
  return _color;
};

export const isValidUrl = (urlString: string) => {
  try {
    return Boolean(new URL(urlString));
  } catch (e) {
    return false;
  }
};

export const convertObjectToQueryString = (query?: {}) => {
  if (query === undefined) return "";

  return `?${new URLSearchParams(query).toString()}`;
};

export const getImageUrl = (imageUrl: string) => {
  if (!imageUrl) return DEFAULT_IMAGE;
  if (imageUrl.startsWith("http")) {
    return imageUrl;
  }
  return `${process.env.NEXT_PUBLIC_STRAPI_API_END_POINT}${imageUrl}`;
};

export const getMonthName = (month: number) => {
  const monthNames = [
    "มกราคม",
    "กุมภาพันธ์",
    "มีนาคม",
    "เมษายน",
    "พฤษภาคม",
    "มิถุนายน",
    "กรกฎาคม",
    "สิงหาคม",
    "กันยายน",
    "ตุลาคม",
    "พฤศจิกายน",
    "ธันวาคม",
  ];
  return monthNames[month - 1];
};

export const getDateWithMonthName = (date: string) => {
  const d = new Date(date);
  const year = dayjs(d).format("BBBB");
  const monthName = getMonthName(d.getMonth() + 1);
  return `${d.getDate()} ${monthName} ${year}`;
};
