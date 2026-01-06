import { CONTACTINFOS, SOCIALICONLIST } from "helpers/constants";
import { isValidUrl } from "helpers/utils";
import { useTranslations } from "next-intl";
import { NextSeo } from "next-seo";
import { usePathname } from "next/navigation";
import { useRouter } from "next/router";

type SeoProps = {
  title?: string;
  description?: string;
  image?: string;
  noindex?: boolean;
  canonicalPath?: string;
};

const Seo = ({
  title,
  description,
  image = "/images/icons/investree.svg",
  noindex = false,
  canonicalPath,
}: SeoProps) => {
  const t = useTranslations();
  const pathname = usePathname();
  const _canonicalPath = pathname?.replace(/\/$/, "");
  const { asPath } = useRouter();
  const canonicalUrl = !!canonicalPath?.trim()
    ? isValidUrl(canonicalPath)
      ? canonicalPath
      : `${process.env.NEXT_PUBLIC_MY_ENDPOINT}${canonicalPath}`
    : `${process.env.NEXT_PUBLIC_MY_ENDPOINT}${_canonicalPath}`;

  const _title = title || t("home.seo.title")!;
  const _description = description || t("home.seo.description")!;
  const _image = "";

  const isDev = process.env.NEXT_PUBLIC_ENV_NAME !== "prod";

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "InsuranceAgency",
    url: canonicalUrl,
    name: title,
    address: {
      "@type": "PostalAddress",
      streetAddress: "",
      addressLocality: "กรุงเทพมหานครฯ",
      addressRegion: "ประเทศไทย(Thailand)",
      postalCode: "10230",
    },
    telePhone: CONTACTINFOS.phone,
    openingHours: ["Mo-Sa 08:30-17:30"],
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
        ],
        opens: "08:30",
        closes: "17:30",
      },
    ],
    geo: {
      "@type": "GeoCoordinates",
      latitude: "13.8380555",
      longitude: "100.5938063",
    },
    priceRange: "$-$$$",
    sameAs: SOCIALICONLIST.map((item) => item.link),
    image: _image,
    description: _description,
    aggregateRating: {
      "@type": "AggregateRating",
      bestRating: "5",
      ratingCount: "129071",
      ratingValue: "4.8",
    },
    review: [],
  };

  return (
    <>
      <NextSeo
        title={_title}
        description={_description}
        openGraph={{
          url: `${process.env.NEXT_PUBLIC_MY_ENDPOINT}${asPath}`,
          title: _title,
          description: _description,
          images: [
            {
              url: image,
              width: 1200,
              height: 630,
              alt: "Crowdfunding logo",
            },
          ],
          site_name: "Crowdfunding",
          locale: "th_TH",
        }}
        twitter={{
          cardType: "summary_large_image",
        }}
        noindex={isDev || noindex}
        canonical={canonicalUrl}
      />
    </>
  );
};

export default Seo;
