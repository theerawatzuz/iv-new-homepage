import axios, { AxiosRequestConfig, AxiosResponseHeaders } from "axios";

export interface RequestConfig extends AxiosRequestConfig {
  isPublic?: boolean;
}

export type AxiosResponse<T, D = any> = {
  data: T;
  status: number;
  statusText?: string;
  httpStatus?: number;
  domain?: any;
  message?: any;
  error?: any;
  headers?: AxiosResponseHeaders;
  config?: AxiosRequestConfig<D>;
  request?: any;
  key?: string;
};

// axios.interceptors.request.use(async (config: RequestConfig) => {
//   const { isPublic = false, ...newConfig }: any = config;
//   if (!isPublic && !newConfig.headers.Authorization) {
//     let token = getToken();
//     if (!token) {
//       console.log("Token not found");
//     }
//     newConfig.headers.Authorization = `Bearer ${token}`;
//   }
//   return newConfig;
// });

const catchCallBack = (error: any): any => {
  if (error.response.status === 500) {
    return {
      httpStatus: 500,
      status: "500",
      message: "Server Error",
      error,
      data: error.response?.data,
    };
  }
  const { message, domain, data, key } = error.response.data;
  return {
    httpStatus: error.response.status,
    status: error.response.status,
    message,
    domain,
    data,
    key,
  };
};

export default {
  get: async <T>(
    url: string,
    config?: RequestConfig
  ): Promise<AxiosResponse<T>> => {
    try {
      return axios.get(url, config);
    } catch (err) {
      return catchCallBack(err);
    }
  },
  postForm: <T>(
    url: string,
    data: any,
    config?: RequestConfig
  ): Promise<AxiosResponse<T>> =>
    axios
      .postForm(url, data, config)
      .then((res) => res)
      .catch((err) => catchCallBack(err)),
  post: <T>(
    url: string,
    data: any,
    config?: RequestConfig
  ): Promise<AxiosResponse<T>> =>
    axios
      .post(url, data, config)
      .then((res) => res)
      .catch((err) => catchCallBack(err)),
  put: <T>(
    url: string,
    data: any,
    config?: RequestConfig
  ): Promise<AxiosResponse<T>> =>
    axios
      .put(url, data, config)
      .then((res) => res)
      .catch((err) => catchCallBack(err)),
  patch: <T>(
    url: string,
    data: any,
    config?: RequestConfig
  ): Promise<AxiosResponse<T>> =>
    axios
      .patch(url, data, config)
      .then((res) => res)
      .catch((err) => catchCallBack(err)),
  delete: <T>(url: string, config?: RequestConfig): Promise<AxiosResponse<T>> =>
    axios
      .delete(url, config)
      .then((res) => res)
      .catch((err) => catchCallBack(err)),
};
