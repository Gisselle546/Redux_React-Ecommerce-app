import { combineReducers } from 'redux';

import searchReducer from './search';
import authReducer from './auth';
import productsReducer from './products'

const rootReducer = combineReducers({
  search: searchReducer,
  products:productsReducer,
  auth: authReducer
});

export default rootReducer;
