import { extendTheme } from '@chakra-ui/react';

const colors = {
  brand: {
    500: '#382EED',
  },
};

const fonts = {
  heading: 'Roboto',
  body: 'Roboto',
};

const theme = extendTheme({ colors, fonts });

export default theme;
