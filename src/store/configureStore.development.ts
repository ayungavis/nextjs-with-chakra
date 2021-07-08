import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import { reducer } from './reducers';

/**
 * Store configuration for development mode
 *
 * @author Wahyu Adi Kurniawan<wahyuadikurniawan@live.com>
 */

export const configureStore = () => {
  const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk, logger)));

  return store;
};
