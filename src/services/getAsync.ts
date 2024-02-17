// @ts-nocheck
import http from '@/services';
import { AxiosRequestConfig } from 'axios';

export async function getAsync<T>(
  url: string,
  config?: AxiosRequestConfig<Object<T>>,
): Promise<any> {
  try {
    const response = await http.get<T>(url, config);
    return response.data;
  } catch (error) {
    return new Promise((reject) => {
      reject(error);
    });
  }
}
