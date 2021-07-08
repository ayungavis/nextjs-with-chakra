import { RootState } from '../reducers';

/**
 * Page selector the state
 * @param state
 *
 * @author Wahyu Adi Kurniawan<wahyuadikurniawan@live.com>
 */
export const pageSelector = (state: RootState) => state.page.selectedPage;
