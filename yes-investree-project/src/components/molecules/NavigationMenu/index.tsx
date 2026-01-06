import CloseIcon from "@mui/icons-material/Close";
import MenuIcon from "@mui/icons-material/Menu";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import Button from "components/atoms/Button";
import Image from "components/atoms/Image";
import Link from "components/atoms/Link";
import { ROUTES } from "helpers/constants";
import { useTranslation } from "next-i18next";
import { useState } from "react";
import style from "./style.module.css";

type mobileMenuItem = {
  route: string;
  text: string;
  expandable?: boolean;
  icon?: string;
  iconMobileOnly?: boolean;
  isMobileMenuAddonMenu?: boolean;
  subRoutes?: string[];
};

type Props = {};

const NavigationMenu = () => {
  const [openMenu, setOpenMenu] = useState<boolean>(false);
  const [openSubMenu, setOpenSubMenu] = useState<boolean>(false);
  const { t } = useTranslation();

  const handleMenuClick = (item: mobileMenuItem) => {
    if (!item.expandable && !item.route) return;
    if (item.expandable) {
      setOpenSubMenu(true);
      setOpenMenu(false);
    } else {
      window.location.href = item.route;
      // Router.push(item.route);
    }
  };

  const backFromSubMenu = () => {
    setOpenSubMenu(false);
    setOpenMenu(true);
  };

  const closeMenu = () => {
    setOpenSubMenu(false);
    setOpenMenu(false);
  };

  return (
    <nav className={style.menu_drawer}>
      <IconButton
        edge="end"
        color="inherit"
        onClick={() => setOpenMenu(true)}
        className="!text-gray-800"
        aria-label="open drawer"
      >
        <MenuIcon />
      </IconButton>
      <Drawer
        anchor="left"
        open={openMenu}
        className={style.drawer_container}
        onClose={() => setOpenMenu(false)}
        PaperProps={{
          sx: { width: "100%" },
        }}
      >
        <div className="bg-blue-primary h-full z-200">
          <div className="flex justify-between px-5 py-4">
            <Link href={ROUTES.FIRST_PAGE}>
              <Image
                fetchPriority="high"
                priority
                alt="Logo"
                loading="eager"
                src="/images/icons/investree-logo-white.svg"
                width={140.4}
                height={40}
              />
            </Link>
            <Button
              onClick={() => setOpenMenu(false)}
              className="!text-gray-800"
              text={<CloseIcon className="text-white" />}
            />
          </div>
          <div className="flex flex-col justify-center items-start mt-7">
            <div className="mt-20 flex flex-col items-start gap-12 pl-9">
              <Link
                href={ROUTES.ABOUT}
                className="text-white text-body15 hover:text-green-200"
              >
                เกี่ยวกับเรา
              </Link>

              <Link
                href={ROUTES.FUNDING}
                className="text-white text-body15 hover:text-green-200"
              >
                ระดมทุน
              </Link>
              <Link
                href={ROUTES.INVESTMENT}
                className="text-white text-body15 hover:text-green-200"
              >
                ลงทุน
              </Link>
              <Link
                href={ROUTES.FAQ}
                className="text-white text-body15 hover:text-green-200"
              >
                คำถามที่พบบ่อย
              </Link>
              <Link
                href={ROUTES.NEWS}
                className="text-white text-body15 hover:text-green-200"
              >
                ข่าวสาร
              </Link>
            </div>
          </div>
          <div className="flex flex-row justify-between">
            <div className="flex gap-2 text-white text-body17 px-9 mt-20">
              <div>
                <span>ไทย</span>
              </div>
              <span>|</span>
              <div>
                <span>EN</span>
              </div>
            </div>
            <div className="flex gap-2 text-white text-body17 px-9 mt-20">
              <div>
                <span>Login</span>
              </div>
              <span>|</span>
              <div>
                <span>Register</span>
              </div>
            </div>
          </div>
        </div>
      </Drawer>
      <Drawer
        anchor="left"
        open={openSubMenu}
        className={style.drawer_container}
        onClose={closeMenu}
      ></Drawer>
    </nav>
  );
};

export default NavigationMenu;
