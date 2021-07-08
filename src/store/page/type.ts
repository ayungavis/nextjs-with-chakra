import { Page } from 'configs/page';

/**
 * Type
 */
export enum PageType {
  CHANGE_PAGE = 'CHANGE_PAGE',
}

/**
 * Payload
 */
export interface IPagePayload {
  selectedPage: Page;
}

/**
 * Action type
 */
interface IChangePage {
  type: PageType.CHANGE_PAGE;
  payload?: IPagePayload;
}

export type TPage = IChangePage;
