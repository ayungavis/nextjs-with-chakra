import { Page } from 'configs/page';

/**
 * Page states
 *
 * @author Wahyu Adi Kurniawan<wahyuadikurniawan@live.com>
 */
export interface IPageState {
  selectedPage: Page;
}

export const pageInitialState: IPageState = {
  selectedPage: Page.MAIN,
};
