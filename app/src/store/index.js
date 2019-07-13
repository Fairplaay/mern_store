import { createStore, applyMiddleware, compose } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import allReducers from './reducers';
import thunk from 'redux-thunk';

/**
 * Middleware
 * save to state in the localstorage
 * @param {*} store.getState
 * @return result
 */
const localStorageMiddleware = ({ getState }) => {
	return next => action => {
		const result = next(action);
		const obj = { user: getState().user, isLogin: getState().isLogin };
		localStorage.setItem('user', JSON.stringify(obj));
		return result;
	};
};

/**
 * Middleware
 * remove to state in the localstorage
 * @return result
 */
const removeLocalstorage = () => {
	return next => action => {
		const result = next(action);
		const user = JSON.parse(localStorage.getItem('user'));
		if (user.user.timestamp > user.user.timestamp + 1) {
			localStorage.removeItem('user');
		}
		return result;
	};
};

/**
 * wrapper for the midlewares
 */
const enhancer = compose(
	applyMiddleware(removeLocalstorage, localStorageMiddleware, thunk),
	composeWithDevTools()
);

/**
 * createStore for the app
 * {allReducers} container of the reducer
 * initialize app data from localStorage or array empty
 * {enhancer} middlewares wrapper
 */
const store = createStore(allReducers, JSON.parse(localStorage.getItem('user')) || [], enhancer);

export default store;
