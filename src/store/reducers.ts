import { HYDRATE } from 'next-redux-wrapper';
import { AnyAction, combineReducers } from 'redux';
import { pageReducer } from './page';

/**
 * Global reducers for redux
 * @see https://github.com/kirill-konshin/next-redux-wrapper#state-reconciliation-during-hydration
 *
 * @author Wahyu Adi Kurniawan<wahyuadikurniawan@live.com>
 */
export const combinedReducer = combineReducers({
  page: pageReducer,
});

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const reducer = (state: ReturnType<typeof combinedReducer>, action: AnyAction): any => {
  if (action.type === HYDRATE) {
    const nextState = {
      ...state,
      ...action.payload,
    };

    return nextState;
  } else {
    return combinedReducer(state, action);
  }
};

export type RootState = ReturnType<typeof reducer>;
