import { ThemeProvider } from "@mui/material";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import dayjs from "dayjs";
import "dayjs/locale/en";
import "dayjs/locale/th";
import buddhistEra from "dayjs/plugin/buddhistEra";
import { appWithTranslation } from "next-i18next";
import { NextIntlClientProvider } from "next-intl";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import { useState } from "react";
import { UserProfileContext } from "stores/userProfileContext";
import "styles/globals.css";
import { mainTheme } from "styles/theme";

dayjs.extend(buddhistEra);

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const [profile, setProfile] = useState<any>(null);
  return (
    <UserProfileContext.Provider value={{ profile, setProfile }}>
      <NextIntlClientProvider
        locale={router.locale}
        timeZone='Asia/Bangkok'
        messages={pageProps.messages}
      >
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <ThemeProvider theme={mainTheme}>
            <Component {...pageProps} />
          </ThemeProvider>
        </LocalizationProvider>
      </NextIntlClientProvider>
    </UserProfileContext.Provider>
  );
}

export default appWithTranslation(MyApp);
