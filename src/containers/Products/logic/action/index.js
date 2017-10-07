
//Fetch PRODUCT
export const FETCH_PRODUCT = 'FETCH_PRODUCT';
export const FETCH_PRODUCT_SUCCESS = 'FETCH_PRODUCT_SUCCESS';
export const FETCH_PRODUCT_FAILURE = 'FETCH_PRODUCT_FAILURE';
export const RESET_ACTIVE_PRODUCT = 'RESET_ACTIVE_PRODUCT';

export function fetchProduct(id) {
  const request = axios.get(`${ROOT_URL}/posts/${id}`);

  return {
    type: FETCH_PRODUCT,
    payload: request
  };
}


export function fetchProductSuccess(activeProduct) {
  return {
    type: FETCH_PRODUCT_SUCCESS,
    payload: activeProduct
  };
}

export function fetchProductFailure(error) {
  return {
    type: FETCH_PRODUCT_FAILURE,
    payload: error
  };
}

export function resetActiveProduct() {
  return {
    type: RESET_ACTIVE_PRODUCT
  }
}


