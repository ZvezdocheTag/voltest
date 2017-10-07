import ROOT_URL from '../../../../constants'
import axios from 'axios'
import { updateCusomerList } from './fetchall'

//Delete PRODUCT
export const DELETE_PRODUCT = 'DELETE_PRODUCT';
export const DELETE_PRODUCT_SUCCESS = 'DELETE_PRODUCT_SUCCESS';
export const DELETE_PRODUCT_FAILURE = 'DELETE_PRODUCT_FAILURE';
export const RESET_DELETED_PRODUCT = 'RESET_DELETED_PRODUCT';

export function deleteProduct(id) {
    const request = axios({
      method: 'delete',
      url: `${ROOT_URL}/products/${id}`,
    });
    return (dispatch) =>  dispatch({
        type: DELETE_PRODUCT,
        request
      })
      .request
      .then(
        res => {
          dispatch(deleteProductSuccess(res.data))
          dispatch(dispatch(updateCusomerList(res.data, "DELETE")))
        },
        err => dispatch(deleteProductFailure(res.data))
      )
  }
  
function deleteProductSuccess(deletedProduct) {
  return {
    type: DELETE_PRODUCT_SUCCESS,
    payload: deletedProduct
  };
}
  
function deleteProductFailure(response) {
  return {
    type: DELETE_PRODUCT_FAILURE,
    payload: response
  };
}
  
  export function resetDeletedProduct() {
    return {
      type: RESET_DELETED_PRODUCT
    }
  }
  ;
  