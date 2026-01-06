import Cookies from "universal-cookie";
import { TOKEN_KEY } from "./constants";

export const getToken = () => {
  if (typeof window !== "undefined") {
    const cookies = new Cookies();
    return cookies.get(TOKEN_KEY);
  }
  return "";
};

export const basicAuth = (authorization: string) => {
  const authValue = authorization.split(" ")[1];
  if (!authValue) return false;
  const [username, password] = Buffer.from(authValue, "base64")
    .toString()
    .split(":");
  const authUsername =
    process.env.AUTH_USERNAME || process.env.NEXT_PUBLIC_AUTH_PASSWORD;
  const authPassword =
    process.env.AUTH_PASSWORD || process.env.NEXT_PUBLIC_AUTH_USERNAME;

  return username === authUsername && password === authPassword;
};

export const getPartnerAuthorization = () => {
  const PASSWORD =
    process.env.AUTH_PASSWORD || process.env.NEXT_PUBLIC_AUTH_PASSWORD;
  const USERNAME =
    process.env.AUTH_USERNAME || process.env.NEXT_PUBLIC_AUTH_USERNAME;
  return `Basic ${btoa(`${USERNAME}:${PASSWORD}`)}`;
};

export type JWT_SESSION_DATA = {
  exp: Date;
  iat: Date;
  partnerUid: string;
  role: string;
  uuid: string;
};
