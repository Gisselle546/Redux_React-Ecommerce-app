import * as actionTypes from '../actions/actionTypes';

const initialstate={
  authenticated: ''
}

export default function(state=initialstate,action){
  switch(action.type){
    case actionTypes.AUTH_SIGNUP_SUCCESS:
    return{
      ...state,
      authenticated:action.payload
    };
    case actionTypes.AUTH_SIGNIN_SUCCESS:
    return{
      ...state,
      authenticated:action.payload
    };
    default:
  return state
  }

}
