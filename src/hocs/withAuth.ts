/* eslint-disable @typescript-eslint/no-explicit-any */
import { IUser } from 'models';
import { ServerSideContext } from 'types/app.types';
import routeNames from 'configs/routes';
import { getPathUrl } from 'utils/router';
import { getRouteCallback, setAuthHeader } from 'utils/auth';

type AsyncReturnType<T extends (...args: any) => any> = T extends (...args: any) => Promise<infer U>
  ? U
  : T extends (...args: any) => infer U
  ? U
  : any;

export type InferWithAuthServerSideProps<T extends (...args: any) => Promise<{ props: any }>> =
  AsyncReturnType<T>['props'];

type WithAuthServerSidePropsOptions = {
  authenticatedPage?: boolean;
  redirectUrl?: string;
};

export type AuthenticatedPageProps = {
  user: IUser | null;
};

type EmptyProps = {
  props: Record<string, unknown>;
};

type DefaultWithAuthServerSideProps = {
  user: IUser | null;
};

export function withAuth<T extends EmptyProps = EmptyProps>(
  getServerSidePropsFunc?: (ctx: ServerSideContext, user?: IUser | null) => Promise<T>,
  options: WithAuthServerSidePropsOptions = {}
) {
  return async function getMergedServerSideProps(
    ctx: ServerSideContext
  ): Promise<{ props: T['props'] & DefaultWithAuthServerSideProps }> {
    const { resolvedUrl, store, query } = ctx;
    const path = getPathUrl(resolvedUrl);

    if (options?.redirectUrl) {
      return {
        redirect: {
          destination: options.redirectUrl,
          permanent: false,
        },
      } as unknown as { props: T['props'] & DefaultWithAuthServerSideProps };
    }

    let user: IUser | null = null;
    let loggedIn = false;
    let routeName = null;
    try {
      await setAuthHeader(ctx);

      // TODO: Change this to dispatch and check the user is authenticated or not
      // await store.dispatch(authCheck());
      // await store.dispatch(authMe());

      user = store.getState().auth.data;
      loggedIn = store.getState().auth.loggedIn;

      if (!loggedIn && path !== '/auth') {
        // Redirect to login page
        routeName = getRouteCallback(resolvedUrl, query);
        return {
          redirect: {
            destination: `${routeNames.auth.login}?redirect=${routeName}`,
            permanent: false,
          },
        } as unknown as { props: T['props'] & DefaultWithAuthServerSideProps };
      }
    } catch (e) {
      // Redirect to login page
      routeName = getRouteCallback(resolvedUrl, query);
      return {
        redirect: {
          destination: `${routeNames.auth.login}?redirect=${routeName}`,
          permanent: false,
        },
      } as unknown as { props: T['props'] & DefaultWithAuthServerSideProps };
    }

    if (getServerSidePropsFunc) {
      return {
        props: {
          user: user || null,
          ...((await getServerSidePropsFunc(ctx, user))?.props || {}),
        },
      };
    }

    return {
      props: {
        user,
      },
    };
  };
}
