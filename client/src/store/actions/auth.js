import * as actionTypes from './actionTypes';
import axios from '../../axios_instance';

export const authSignupsuccess = formProps=>{
  return {
    type:actionTypes.AUTH_SIGNUP_SUCCESS,
    payload:{formProps}

  }
}



export const authSignupfailure = (error)=>{
  return{
    type:actionTypes.AUTH_SIGNUP_FAILURE,
    payload:error
  }
}

export const postDATA = (formProps,ownProps)=>{
  return dispatch=>{
    axios.post(`api/auth/signup`,formProps)
         .then(response=>{
           console.log(response.data);
          dispatch(authSignupsuccess(response.data.token))
          localStorage.setItem('token',response.data.token)
          ownProps.history.push(`/games`);

         })
         .catch( error => {
             dispatch(authSignupfailure(error))
         } );
  }
}


export const signout = ()=>{
  localStorage.removeItem('token');

  return{
    type:actionTypes.AUTH_SIGNUP_SUCCESS,
    payload:''
  }
}
