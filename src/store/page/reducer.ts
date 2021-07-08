import { IPageState, pageInitialState } from './state';
import { PageType, TPage } from './type';

export const pageReducer = (
  state: IPageState = pageInitialState,
  { type, payload }: TPage
): IPageState => {
  switch (type) {
    case PageType.CHANGE_PAGE:
      return { ...state, selectedPage: payload!.selectedPage };

    default:
      return state;
  }
};
