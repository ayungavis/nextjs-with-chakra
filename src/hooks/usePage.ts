import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Page } from 'configs/page';
import { changePage, pageSelector } from 'store/page';

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
  const dispatch = useDispatch();
  const pageState = useSelector(pageSelector);

  return {
    selectedPage: pageState,
    changePage: useCallback(
      (selectedPage: Page) => {
        dispatch(changePage({ selectedPage }));
      },
      [dispatch]
    ),
  };
};
