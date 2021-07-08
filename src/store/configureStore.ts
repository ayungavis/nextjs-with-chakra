import { env } from 'configs/env';
import { RootState } from './reducers';
import { Context, createWrapper, MakeStore } from 'next-redux-wrapper';
import { serialize, deserialize } from 'json-immutable';

/**
 * Global store configuration for redux
 * @see https://github.com/kirill-konshin/next-redux-wrapper#usage
 *
 * @author Wahyu Adi Kurniawan<wahyuadikurniawan@live.com>
 */
const configureStoreComponent = (() => {
  if (env.NODE_ENV === 'production') {
    return require('./configureStore.production');
  }
  return require('./configureStore.development');
})();

export const configureStore: MakeStore<RootState> = (context: Context) =>
  configureStoreComponent.configureStore();

export const wrapper = createWrapper<RootState>(configureStore, {
  debug: env.NODE_ENV === 'development',
  serializeState: (state) => serialize(state),
  deserializeState: (state) => deserialize(state),
});
