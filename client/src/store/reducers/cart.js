import * as actionTypes from '../actions/actionTypes';
import _ from 'lodash';

const initialstate={
  cart:{}
}


export default function(state=initialstate, action){
  switch(action.type){
    case actionTypes.GET_CART_SUCCESS:
      return{
        ...state,
        cart:action.payload

      };
      case actionTypes.DELETE_CART_ITEM_SUCCESS:
      console.log(action.payload.id.cart._id,state.cart.cart.cart)

    return {...state, cart: state.cart.cart.cart.filter(car=>car._id !==action.payload.id.cart._id)}




      default:
    return state;
  }
}
