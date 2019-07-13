import { combineReducers } from 'redux';
import { data } from './data';
import { user } from './user';
import { isLogin } from './login';
import { reducer as form } from 'redux-form';

const allReducers = combineReducers({ data, user, isLogin, form });

export default allReducers;
