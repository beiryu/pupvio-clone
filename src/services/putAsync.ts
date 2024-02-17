// @ts-nocheck
import http from '@/services';

export async function putAsync<T>(url: string, data: Object<T>): Promise<any> {
  try {
    const response = await http.put<T>(url, data);
    return response?.data;
  } catch (error) {
    return new Promise((reject) => {
      reject(error);
    });
  }
}
