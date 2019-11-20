import { combineReducers } from 'redux';
import cartReducer from './cart';
import searchReducer from './search';
import authReducer from './auth';
import productsReducer from './products';



const rootReducer = combineReducers({
  search: searchReducer,
  products:productsReducer,
  auth: authReducer,
  cart: cartReducer

});

export default rootReducer;
