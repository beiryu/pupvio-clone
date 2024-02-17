export const isMinimize = (pathname?: string | null): boolean => {
  const pathsToMinimize = [
    '/forgot-password',
    '/sign-up',
    '/sign-in',
    '/verification',
    '/home',
    '/onboarding',
  ];

  return pathsToMinimize.includes(pathname ?? '');
};
