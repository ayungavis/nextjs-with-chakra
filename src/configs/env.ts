/**
 * Environment variables
 * @see https://nextjs.org/docs/basic-features/environment-variables
 *
 */
export const env = {
  NODE_ENV: process.env.NODE_ENV,
  APP_PORT: process.env.APP_PORT,
  APP_NAME: process.env.APP_NAME,
  APP_DESCRIPTION: process.env.APP_DESCRIPTION,
  APP_MAIN_URL: process.env.APP_MAIN_URL,
  APP_API_URL: process.env.APP_API_URL,
};

export const browserEnv = {
  APP_NAME: process.env.NEXT_PUBLIC_APP_NAME,
  APP_DESCRIPTION: process.env.NEXT_PUBLIC_APP_DESCRIPTION,
  APP_MAIN_URL: process.env.NEXT_PUBLIC_APP_MAIN_URL,
  APP_API_URL: process.env.NEXT_PUBLIC_APP_API_URL,
};
