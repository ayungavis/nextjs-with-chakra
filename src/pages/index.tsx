import { IconButton, useColorMode } from '@chakra-ui/react';
import { Layout } from 'components/templates';
import { Page } from 'configs/page';
import { wrapper } from 'store/configureStore';
import { changePage } from 'store/slices/page.slice';
import { IPagePayload } from 'types/pages.types';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';

interface Props {
  children?: React.ReactNode;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const getServerSideProps = wrapper.getServerSideProps(
  (store) => async (): Promise<{ props: Props }> => {
    const pagePayload: IPagePayload = { selectedPage: Page.MAIN };
    store.dispatch(changePage(pagePayload));
    return { props: {} };
  }
);

const Home = (): JSX.Element => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Layout>
      <p>This is the main of the page of this boilerplate.</p>
      <IconButton
        aria-label="Change color mode"
        onClick={toggleColorMode}
        icon={colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
      />
    </Layout>
  );
};

export default Home;
