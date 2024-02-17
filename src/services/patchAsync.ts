// @ts-nocheck
import http from '@/services';
import { AxiosRequestConfig } from 'axios';

export async function patchAsync<T>(
  url: string,
  data: Object<T>,
  config?: AxiosRequestConfig<Object<T>>,
): Promise<any> {
  try {
    const response = await http.patch<T>(url, data, config);
    return response.data;
  } catch (error) {
    return new Promise((reject) => {
      reject(error);
    });
  }
}
