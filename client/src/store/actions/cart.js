import * as actionTypes from './actionTypes';
import axios from '../../axios_instance';

export const addCart=(id)=>{
  return{
    type:actionTypes.ADD_CART,
    payload:{id}
  }
}

export const addcartfail=(error)=>{
  return{
    type:actionTypes.ADD_CART_FAIL,
    payload:error
  }
}

export const sendtocart=(id)=>{
  return dispatch=>{
  axios.post(`api/cart`,id)
        .then(response=>{
            dispatch(addCart(response.data))
        })
        .catch(error=>{
          dispatch(addcartfail(error))
        })
    }
}

export const getCartbegin=()=>{
  return{
    type:actionTypes.GET_CART_BEGIN
  }
}

export const getCart = cart=>{
  return{
    type:actionTypes.GET_CART_SUCCESS,
    payload:{cart}
  }
}

export const cartFailure= error=>{
  return{
    type:actionTypes.GET_CART_FAILURE,
    payload:error
  }
}

export const getCartItems=()=>{
  return dispatch=>{
    axios.get(`api/cart`)
    .then(response=>{
      dispatch(getCart(response.data))
    })
    .catch(error=>{
      dispatch(cartFailure(error))
    });
  }
}

export const deleteItem = id =>{
  return{
    type:actionTypes.DELETE_CART_ITEM_SUCCESS,
    payload:{id}
  }
}
export const deleteItemFailure = error =>{
  return{
    type:actionTypes.DELETE_CART_ITEM_FAILURE,
    payload:error
  }
}

export const fetchitemfordeletion=(id)=>{
  return dispatch =>{
    axios.delete(`api/cart/${id}`)
          .then(response=>{
            dispatch(deleteItem(response.data))
          })
          .catch(error=>{
            dispatch(deleteItemFailure(error))
          })
  }
}
