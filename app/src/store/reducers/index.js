import { combineReducers } from 'redux';
import { data } from './data';
import { user } from './user';
import { reducer as form } from 'redux-form';

const allReducers = combineReducers({ data, user, form });

export default allReducers;
