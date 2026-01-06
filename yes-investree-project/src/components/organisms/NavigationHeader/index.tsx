import { NoSsr } from "@mui/material";
import HomeButtonLogo from "components/atoms/HomeButtonLogo";
import MobileBannerBar from "components/atoms/MobileBannerBar";
import NavigationMenu from "components/molecules/NavigationMenu";
import { cx } from "helpers/utils";
import style from "./style.module.css";

const NavigationHeader = () => {
  return (
    <div className="sticky top-0 z-50 bg-white w-full">
      <MobileBannerBar />
      <header className={cx(style["navigation-container"])} id='header'>
        <NoSsr>
          <div className='flex justify-between items-center pb-4'>
            <HomeButtonLogo />
            <div className='pt-4'>
              <NavigationMenu />
            </div>
          </div>
        </NoSsr>
      </header>
    </div>
  );
};

export default NavigationHeader;
