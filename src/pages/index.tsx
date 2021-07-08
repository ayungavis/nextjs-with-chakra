import { Layout } from 'components/templates';
import { Page } from 'configs/page';
import { wrapper } from 'store/configureStore';
import { changePage, IPagePayload } from 'store/page';

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
  return <Layout>This is the main of the page of this boilerplate.</Layout>;
};

export default Home;
