import * as actionTypes from '../actions/actionTypes';

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


      default:
    return state
  }
}
