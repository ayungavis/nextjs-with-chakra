import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { reducer } from './reducers';

/**
 * Store configuration for production mode
 *
 * @author Wahyu Adi Kurniawan<wahyuadikurniawan@live.com>
 */

export const configureStore = () => {
  const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));

  return store;
};
