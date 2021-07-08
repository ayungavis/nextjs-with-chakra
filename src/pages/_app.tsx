import '../styles/globals.css';
import React, { useEffect } from 'react';
import type { AppContext, AppProps } from 'next/app';
import Router from 'next/router';
import Head from 'next/head';
import { ChakraProvider } from '@chakra-ui/react';
import ProgressBar from '@badrap/bar-of-progress';
import { env } from 'configs/env';
import { wrapper } from 'store/configureStore';
import theme from 'theme';
import '@fontsource/roboto';

/**
 * Add progress bar when change route
 */
const progress = new ProgressBar({ color: theme.colors.brand[500] });
Router.events.on('routeChangeStart', () => progress.start());
Router.events.on('routeChangeComplete', () => progress.finish());
Router.events.on('routeChangeError', () => progress.finish());

const MyApp = ({ Component, pageProps }: AppProps): JSX.Element => {
  useEffect(() => {
    if (env.NODE_ENV === 'production') {
      const style = `color: ${theme.colors.brand[500]};  font-weight: 600;`;
      console.clear();
      console.group('%cHello! 👋', `${style} font-size: 16px;`);
      console.log(
        '%cThis boilerplate was built with TypeScript, NextJS, Chakra UI, Redux and lots of love.',
        `${style} font-size: 14px;`
      );
      console.log('%cContact the developer: https://ayungavis.com', `${style} font-size: 14px;`);
      console.groupEnd();
    }
  });

  return (
    <React.Fragment>
      <Head>
        <meta charSet="utf-8" />
        {/* Use minimum-scale=1 to enable GPU rasterization */}
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no"
        />
        {/* PWA primary color */}
        <meta name="theme-color" content={theme.colors.brand[500]} />
        {/* Favicon */}
        <link rel="icon" href="/img/icon.webp" />
      </Head>
      <ChakraProvider theme={theme}>
        <Component {...pageProps} />
      </ChakraProvider>
    </React.Fragment>
  );
};

MyApp.getInitialProps = async ({ Component, ctx }: AppContext) => {
  const pageProps = {
    ...(Component.getInitialProps ? await Component.getInitialProps(ctx) : {}),
  };

  return {
    pageProps,
  };
};

export default wrapper.withRedux(MyApp);
