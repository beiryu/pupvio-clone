// @ts-nocheck
import http from '@/services';

export async function deleteAsync<T>(url: string): Promise<any> {
  try {
    const response = await http.delete<T>(url);
    return response.data;
  } catch (error) {
    return new Promise((reject) => {
      reject(error);
    });
  }
}
