export const handleResponseError = (
  error: any,
  messageDetail?: string,
): Promise<any> => {
  return Promise.reject(messageDetail ?? error);
};
