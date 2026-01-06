import { IconButton, useMediaQuery, useTheme } from "@mui/material";
import Image from "components/atoms/Image";
import { useTranslations } from "next-intl";
import { useEffect, useState } from "react";
import {
  EmailShareButton,
  FacebookShareButton,
  LineShareButton,
  TwitterShareButton,
} from "react-share";

const SocialList = [
  {
    label: "Facebook",
    component: FacebookShareButton,
    url: "/images/icons/article/facebook.svg",
  },
  {
    label: "X",
    component: TwitterShareButton,
    url: "/images/icons/article/x.svg",
  },
  {
    label: "Mail",
    component: EmailShareButton,
    url: "/images/icons/article/mail.svg",
  },
  {
    label: "Link",
    component: LineShareButton,
    url: "/images/icons/article/link.svg",
  },
];

const ArticleSharedSocialMedia = ({
  // handleCopyLink,
  handleOpenSnackbar,
}: {
  // handleCopyLink: () => void;
  handleOpenSnackbar?: () => void;
}) => {
  const t = useTranslations();
  const theme = useTheme();
  const isLaptop = useMediaQuery(theme.breakpoints.up("laptop"));
  const [currentUrl, setCurrentUrl] = useState("");

  const handleCopyLink = () => {
    navigator.clipboard
      .writeText(currentUrl)
      .then(() => {
        handleOpenSnackbar && handleOpenSnackbar();
      })
      .catch(() => {
        console.log("Failed to copy");
      });
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      setCurrentUrl(window.location.href || "");
    }
  }, []);

  const IconButtonComponent = ({
    src,
    onClick,
  }: {
    src: string;
    onClick?: () => void;
  }) => {
    return (
      <IconButton
        onClick={onClick}
        className='w-5 h-5'
        edge='end'
        sx={{
          width: isLaptop ? "20px" : "16px",
          height: isLaptop ? "20px" : "16px",
          padding: "0px",
        }}
      >
        <Image
          src={src}
          alt=''
          width={isLaptop ? 20 : 16}
          height={isLaptop ? 20 : 16}
        />
      </IconButton>
    );
  };

  return (
    <div className='flex items-center justify-center gap-6 laptop:gap-8'>
      {SocialList.map((social, index) => {
        const ShareButtonComponent = social.component;
        return social.label === "Link" ? (
          <IconButtonComponent
            key={social.label}
            src={social.url}
            onClick={handleCopyLink}
          />
        ) : (
          <ShareButtonComponent url={currentUrl} key={index}>
            <IconButtonComponent src={social.url} />
          </ShareButtonComponent>
        );
      })}
    </div>
  );
};
export default ArticleSharedSocialMedia;
