import cookie from 'js-cookie';
import { IncomingMessage } from 'node:http';

export const setCookie = (key: string, value: string, options?: cookie.CookieAttributes): void => {
  if (process.browser) {
    cookie.set(key, value, {
      ...options,
      path: '/',
    });
  }
};

export const removeCookie = (key: string): void => {
  if (process.browser) {
    cookie.remove(key, {
      expires: 1,
    });
  }
};

export const getCookie = (key: string, req: IncomingMessage): string | undefined => {
  return process.browser ? getCookieFromBrowser(key) : getCookieFromServer(key, req);
};

export const getCookieFromBrowser = (key: string): string | undefined => {
  return cookie.get(key as string);
};

export const getCookieFromServer = (key: string, req: IncomingMessage): string | undefined => {
  if (!req.headers.cookie) {
    return undefined;
  }
  const rawCookie = req.headers.cookie.split(';').find((c) => c.trim().startsWith(`${key}=`));
  if (!rawCookie) {
    return undefined;
  }
  return rawCookie.split('=')[1];
};
