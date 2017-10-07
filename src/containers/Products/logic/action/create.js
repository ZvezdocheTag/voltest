import ROOT_URL from '../../../../constants'
import axios from 'axios'
import { updateProductList } from './fetchall'

import { fetchProducts } from './fetchall'
export const CREATE_PRODUCT = 'CREATE_PRODUCT';
export const CREATE_PRODUCT_SUCCESS = 'CREATE_PRODUCT_SUCCESS';
export const CREATE_PRODUCT_FAILURE = 'CREATE_PRODUCT_FAILURE';
export const RESET_NEW_PRODUCT = 'RESET_NEW_PRODUCT';

export function createProduct(props) {
    const request = axios({
      method: 'post',
      data: props,
      url: `${ROOT_URL}/products`,
    });
  
    return (dispatch) => dispatch({
      type: CREATE_PRODUCT, 
      request
    })
    .request
    .then(
      res => {
        // console.log(res.config.headers, "IN ACTION")
        dispatch(createProductSuccess(res.data))
        dispatch(updateProductList(res.data, "POST"))
      },
      err => dispatch(createProductFailure(err)) 
    )
  }
  
  export function createProductSuccess(newProduct) {
    return {
      type: CREATE_PRODUCT_SUCCESS,
      payload: newProduct
    };
  }
  
  export function createProductFailure(error) {
    return {
      type: CREATE_PRODUCT_FAILURE,
      payload: error
    };
  }
  
  export function resetNewProduct() {
    return {
      type: RESET_NEW_PRODUCT
    }
  };

  