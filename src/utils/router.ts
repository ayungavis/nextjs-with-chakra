import routeNames from 'configs/routes';
import { NextRouter } from 'next/router';

export const getPathUrl = (pathname: string, index = 1, separator = '/'): string => {
  return `/${pathname.split(separator)[index]}`;
};

export const redirectQuery = (router: NextRouter): void => {
  const { query } = router;
  if (query.redirect) {
    router.push(query.redirect as string);
  }

  // TODO: Change this route to your own route
  router.push(routeNames.home);
};
