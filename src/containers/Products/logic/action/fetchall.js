
import ROOT_URL from '../../../../constants'
import axios from 'axios'
//Product list
export const FETCH_PRODUCTS = 'FETCH_PRODUCTS';
export const FETCH_PRODUCTS_SUCCESS = 'FETCH_PRODUCTS_SUCCESS';
export const FETCH_PRODUCTS_FAILURE = 'FETCH_PRODUCTS_FAILURE';
export const RESET_PRODUCTS = 'RESET_PRODUCTS';
export const UPDATE_PRODUCT_LIST = 'UPDATE_PRODUCT_LIST';

export function fetchProducts() {
    const request = axios({
      method: 'get',
      url: `${ROOT_URL}/products`,
      headers: []
    });
    return (dispatch) => dispatch({
        type: FETCH_PRODUCTS, 
        request
      })
      .request
      .then(
        res => {
          Array.isArray(res.data) ? 
            dispatch(fetchProductsSuccess(res.data)) :
            dispatch(fetchProductsFailure("DATA IS NOT ARRAY")) 
        },
        err => dispatch(fetchProductsFailure(err)) 
      )
  }

export function updateProductList(data, filter) {
  return {
    type: UPDATE_PRODUCT_LIST,
    payload: data,
    filter
  }
}

function fetchProductsSuccess(posts) {
  return {
    type: FETCH_PRODUCTS_SUCCESS,
    payload: posts
  };
}
  
function fetchProductsFailure(error) {
  return {
    type: FETCH_PRODUCTS_FAILURE,
    payload: error
  };
}