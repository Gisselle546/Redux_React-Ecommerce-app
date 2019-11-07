import * as actionTypes from '../actions/actionTypes';

const initialstate={
  products:{}
}


export default function(state=initialstate, action){
  switch(action.type){
    case actionTypes.GET_PRODUCTS_SUCCESS:
      return{
        ...state,
        products:action.payload,

      };
      default:
    return state
  }
}
