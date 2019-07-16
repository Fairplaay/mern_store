import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import allReducers from './reducers';

/**
 * createStore for the app
 * {allReducers} container of the reducer
 * initialize app data from localStorage or array empty
 * {enhancer} middlewares wrapper
 */
const store = createStore(allReducers, composeWithDevTools());

export default store;
