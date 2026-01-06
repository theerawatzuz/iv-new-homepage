import Image from "components/atoms/Image";
import Link from "components/atoms/Link";
import { ROUTES } from "helpers/constants";
import style from "./style.module.css";

const HomeButtonLogo = () => {
  return (
    <Link
      href={ROUTES.FIRST_PAGE}
      className={`cursor-pointer ${style["logo-container"]}`}
      isNext
    >
      {/* <Image
        fetchPriority='high'
        fill
        priority
        alt='Logo'
        loading='eager'
        sizes='(max-width: 1200px) 112px, 240px'
        src='/images/icons/investree-logo.svg'
      /> */}
      <Image
        fetchPriority='high'
        priority
        alt='Logo'
        loading='eager'
        src='/images/icons/investree-logo.svg'
        width={112}
        height={32}
      />
    </Link>
  );
};

export default HomeButtonLogo;
