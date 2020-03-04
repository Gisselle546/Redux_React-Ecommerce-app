import * as actionTypes from './actionTypes';
import axios from '../../axios_instance';

export const searchbegin=()=>{
  return{
    type:actionTypes.SEARCH_BEGIN
  }
}

export const searchinput= Search =>{
  return{
    type: actionTypes.SEARCH_SUCCESS,
    payload:{Search}
  }
}

export const searchfailure= error=>{
  return{
    type: actionTypes.SEARCH_FAILURE,
    payload:error
  }
}


export const fetchinput=(q)=>{
  return dispatch=>{
      dispatch(searchbegin())
    axios.get(`api/game/search?results=${q}`)
         .then(response=>{
           dispatch(searchinput(response.data))
         })
         .catch( error => {
             dispatch(searchfailure(error))
         } );
  }
}
