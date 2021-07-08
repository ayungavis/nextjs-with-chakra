import React from 'react';
import Head from 'next/head';
import { usePage } from 'hooks';
import { browserEnv } from 'configs/env';

/**
 * Layout for better SEO of all pages combined with Material UI
 * @see https://material-ui.com/components/container/
 *
 * @author Wahyu Adi Kurniawan<wahyuadikurniawan@live.com>
 */
interface Props {
  children: React.ReactNode;
}

export const Layout = (props: Props): JSX.Element => {
  const { children } = props;
  const { selectedPage } = usePage();
  const { title, description, relativeUrl } = selectedPage;
  const url = `${browserEnv.APP_MAIN_URL}${relativeUrl}`;

  return (
    <React.Fragment>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />

        {/* <!-- Google / Search Engine Tags --> */}
        <meta itemProp="name" content={title} />
        <meta itemProp="description" content={description} />
        {/* <meta itemProp="image" content="null" /> */}

        {/* <!-- Facebook Meta Tags --> */}
        <meta property="og:url" content={url} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content="null" />

        {/* <!-- Twitter Meta Tags --> */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content="null" />
      </Head>
      {children}
    </React.Fragment>
  );
};
