export type footerNavigationItem = {
  name: string;
  subItem: subNavItem[];
};

export type subNavItem = {
  text: string;
  link: string | URL;
  external?: boolean;
  isNext?: boolean;
};

export type Brand = {
  id: number;
  name: string;
  image?: string;
  image_url?: string;
  supplier_code: string;
  company_name: string;
  address: string;
  mobile: string;
  website: string;
  position: number;
};
