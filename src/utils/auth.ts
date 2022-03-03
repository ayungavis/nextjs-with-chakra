import { mainApi } from 'configs/axios';
import { ParsedUrlQuery } from 'node:querystring';
import { AppContext } from 'types/app.types';
import { getCookie } from './cookie';
import { IncomingMessage } from 'node:http';

const isServer = typeof window === 'undefined';

export async function setAuthHeader(context: AppContext): Promise<void> {
  let token;
  if (isServer) {
    token = getCookie('token', context.req as IncomingMessage);
  } else {
    token = context.store.getState().auth.token;
  }

  // TODO: Change this to your authenticated API
  mainApi.defaults.headers.common['Authorization'] = `Bearer ${token}`;
}

export function getRouteCallback(url: string, query?: ParsedUrlQuery): string {
  let routeName = url;
  if (query) {
    Object.keys(query).forEach((k) => (routeName = url.replace(`[${k}]`, query[k] as string)));
  }

  return routeName;
}
