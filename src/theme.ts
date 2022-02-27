import { extendTheme, ThemeConfig } from '@chakra-ui/react';

const colors = {
  brand: {
    500: '#382EED',
  },
};

const fonts = {
  heading: 'Roboto',
  body: 'Roboto',
};

const config: ThemeConfig = {
  initialColorMode: 'light',
  useSystemColorMode: true,
};

const theme = extendTheme({ colors, fonts, config });

export default theme;
