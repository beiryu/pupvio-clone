import {
  removeFromStorage,
  retrieveFromStorage,
} from '@/lib/utils/storage.util';
import { handleResponseError } from '@/lib/utils/api.util';
import axios, { AxiosError, AxiosResponse } from 'axios';
import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';
import { handleRedirectLogin } from '@/lib/helpers/auth.helper';

const axiosInstance = axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_API_NESTJS_HOST}/api`,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
    'Access-Control-Allow-Origin': '*',
  },
});

axiosInstance.interceptors.request.use((config: any) => {
  let baseUrl = `${process.env.NEXT_PUBLIC_API_NESTJS_HOST}/api`;

  config.baseURL = baseUrl;
  const accessToken = retrieveFromStorage('access_token');

  if (accessToken) {
    config.headers['Authorization'] = `Bearer ${accessToken}`;
  }

  config.headers['Access-Control-Allow-Origin'] = '*';
  return config;
});

axiosInstance.interceptors.response.use(
  (res: AxiosResponse) => {
    return res;
  },
  async (error: AxiosError) => {

    toast.dismiss();

    if (!error.response) {
      toast.error('Internal server error!');
      return handleResponseError(error);
    }

    const { data }: { data: any } = error.response;
    const { detailError } = data;
    let messageDetail = '';

    const location = window.location.pathname;

    if (error.response.status === 403) {
      removeFromStorage('access_token');
      if (!location.includes('login')) {
        return;
      }
    }

    if (
      error?.config?.url === '/tokens' &&
      (error?.config?.method === 'post' || error?.config?.method === 'put')
    ) {
      removeFromStorage('access_token');
      return Promise.reject(error);
    }

    if (error.response.status === 403 || error.response.status === 401) {
      removeFromStorage('access_token');
      removeFromStorage('user_info');

      handleRedirectLogin(location + window.location.search);
    }

    if (detailError) {
      if (Array.isArray(detailError.message)) {
        messageDetail = detailError.message[0];
      } else {
        messageDetail = detailError.message;
      }
    } else {
      messageDetail = data.message;
    }

    toast.error(messageDetail);

    const originalConfig = error.config;
    if (
      error.response &&
      error.response.status === 401 &&
      originalConfig &&
      originalConfig.url &&
      originalConfig.url.includes('/login')
    ) {
      return handleResponseError(error);
    }

    return handleResponseError(error);
  },
);

export default axiosInstance;
