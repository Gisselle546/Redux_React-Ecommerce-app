import * as actionTypes from '../actions/actionTypes';

const initialstate={
  search:{},
  loading:false
}



export default function(state=initialstate, action){
  switch(action.type){

    case actionTypes.SEARCH_BEGIN:
      return{
        ...state,
        search:action.payload,
        loading:true
      }


    case actionTypes.SEARCH_SUCCESS:
      return{
        ...state,
        search:action.payload,
        loading:false

      };
      default:
    return state
  }
}
