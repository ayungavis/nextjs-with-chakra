import { env } from 'configs/env';
import { createWrapper } from 'next-redux-wrapper';
import { Action, combineReducers, configureStore, ThunkAction } from '@reduxjs/toolkit';
import appSlice from './slices/app.slice';
import pageSlice from './slices/page.slice';
import { deserialize, serialize } from 'utils/immutable';

/**
 * Global store configuration for redux
 * @see https://github.com/kirill-konshin/next-redux-wrapper#usage
 *
 * @author Wahyu Adi Kurniawan<wahyuadikurniawan@live.com>
 */
export const rootReducers = combineReducers({
  app: appSlice,
  page: pageSlice,
});

const makeStore = () =>
  configureStore({
    reducer: rootReducers,
    devTools: env.NODE_ENV !== 'production',
  });

export type AppStore = ReturnType<typeof makeStore>;
export type AppDispatch = ReturnType<typeof makeStore>['dispatch'];
export type AppState = ReturnType<AppStore['getState']>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, AppState, unknown, Action>;

export const wrapper = createWrapper<AppStore>(makeStore, {
  serializeState: (state) => serialize(state),
  deserializeState: (state) => deserialize(state),
});
