import { combineReducers } from 'redux';
import searchReducer from './search';
import productsReducer from './products'

const rootReducer = combineReducers({
  search: searchReducer,
  products:productsReducer
});

export default rootReducer;
