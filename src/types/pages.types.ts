import { Page } from 'configs/page';

export enum PageType {
  CHANGE_PAGE = 'CHANGE_PAGE',
}

export interface IPagePayload {
  selectedPage: Page;
}

interface IChangePage {
  type: PageType.CHANGE_PAGE;
  payload?: IPagePayload;
}

export type TPage = IChangePage;

export interface IPageState {
  selectedPage: Page;
}
