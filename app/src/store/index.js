import { createStore, applyMiddleware, compose } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import allReducers from './reducers';
import thunk from 'redux-thunk';

const enhancer = compose(
	applyMiddleware(thunk),
	composeWithDevTools()
);

const store = createStore(allReducers, enhancer);

export default store;
