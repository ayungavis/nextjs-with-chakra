import { IPagePayload, PageType, TPage } from './type';

export const changePage = (payload: IPagePayload): TPage => ({
  type: PageType.CHANGE_PAGE,
  payload,
});
