import ROOT_URL from '../../../../constants'
import axios from 'axios'
import { updateProductList } from './fetchall'
//CHANGE PRODUCT
export const CHANGE_PRODUCT = 'CHANGE_PRODUCT';
export const CHANGE_PRODUCT_SUCCESS = 'CHANGE_PRODUCT_SUCCESS';
export const CHANGE_PRODUCT_FAILURE = 'CHANGE_PRODUCT_FAILURE';
export const RESET_CHANGED_PRODUCT = 'RESET_CHANGED_PRODUCT';

export function changeProduct(props, id) {
    const request = axios({
      method: 'put',
      data: props,
      url: `${ROOT_URL}/products/${id}`,
    });
  
    return (dispatch) => dispatch({
      type: CHANGE_PRODUCT, 
      request
    })
    .request
    .then(
      res => {
        dispatch(changeProductSuccess(res.data))
        dispatch(updateProductList(res.data, "PUT"))
      },
      err => dispatch(changeProductFailure(err)) 
    )
  }


  
function changeProductSuccess(newProduct) {
  return {
    type: CHANGE_PRODUCT_SUCCESS,
    payload: newProduct
  };
}
  
function changeProductFailure(error) {
  return {
    type: CHANGE_PRODUCT_FAILURE,
    payload: error
  };
}
  
  export function resetNewProduct() {
    return {
      type: RESET_NEW_PRODUCT
    }
  };