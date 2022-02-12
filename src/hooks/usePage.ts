import { useCallback } from 'react';
import { Page } from 'configs/page';
import { useAppDispatch, useAppSelector } from './useRedux';
import { changePage } from 'store/slices/page.slice';

/**
 * Page custom-hooks
 * @see https://reactjs.org/docs/hooks-custom.html
 *
 * @author Wahyu Adi Kurniawan<wahyuadikurniawan@live.com>
 */
type PageOperators = {
  selectedPage: Page;
  changePage: (selectedPage: Page) => void;
};

export const usePage = (): Readonly<PageOperators> => {
  const dispatch = useAppDispatch();
  const pageState = useAppSelector((state) => state.page);

  return {
    selectedPage: pageState.selectedPage,
    changePage: useCallback(
      (selectedPage: Page) => {
        dispatch(changePage({ selectedPage }));
      },
      [dispatch]
    ),
  };
};
