import * as actionTypes from './actionTypes';
import axios from '../../axios_instance';



export const getproductsbegin=()=>{
  return{
    type:actionTypes.GET_PRODUCTS_BEGIN
  }
}

export const getproducts = Product=>{
  return{
    type:actionTypes.GET_PRODUCTS_SUCCESS,
    payload:{Product}
  }
}

export const getproductsfailure = error=>{
  return{
    type:actionTypes.GET_PRODUCTS_FAILURE,
    payload:error
  }
}



export const fetchproducts=()=>{
  return dispatch=>{
    dispatch(getproductsbegin())
    axios.get(`api/game`)
    .then(response=>{
      dispatch(getproducts(response.data))
    })
    .catch(error=>{
      dispatch(getproductsfailure(error))
    });
  }
}

export const getProduct = id =>{
  return{
      type:actionTypes.GET_PRODUCT_SUCCESS,
      payload:{id}
  }
}
export const getProductfailure = error =>{
  return{
      type:actionTypes.GET_PRODUCT_FAILURE,
      payload:error
  }
}

export const fetchproduct=(id)=>{
  return dispatch =>{
    axios.get(`api/game/${id}`)
          .then(response=>{
            dispatch(getProduct(response.data))
          })
          .catch(error=>{
            dispatch(getProductfailure(error))
          })
  }
}
