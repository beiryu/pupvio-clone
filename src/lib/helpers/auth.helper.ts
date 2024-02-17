export const handleRedirectLogin = (location: string) => {
  if (!location.includes('login') && isAuthenticatedPage(location)) {
    const redirectUrl = '/sign-in';
    window.location.href = redirectUrl;
  }
};

export const isAuthenticatedPage = (location: string) => {
  return ['/home'].some((item) => {
    return location.toLowerCase().indexOf(item) > -1;
  });
};
