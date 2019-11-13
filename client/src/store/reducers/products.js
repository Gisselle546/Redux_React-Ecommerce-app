import * as actionTypes from '../actions/actionTypes';

const initialstate={
  products:{},
  product:{}
}


export default function(state=initialstate, action){
  switch(action.type){
    case actionTypes.GET_PRODUCTS_SUCCESS:
      return{
        ...state,
        products:action.payload

      };
      case actionTypes.GET_PRODUCT_SUCCESS:
      return{
        ...state,
        product:action.payload
      };

      default:
    return state
  }
}
