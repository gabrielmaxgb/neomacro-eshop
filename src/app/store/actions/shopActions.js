import {
  API_KEY,
  BASE_API
} from "../../config/consts";

// export const CHANGE_TEST = 'CHANGE_TEST';
export const FILTER_TYPE_SELECT = 'FILTER_TYPE_SELECT';
export const SET_FILTER_PARAMS = 'SET_FILTER_PARAMS';
export const GET_ALL_PRODUCTS = 'GET_ALL_PRODUCTS';
export const SET_PRODUCT_TO_CART_AMOUNT = 'SET_PRODUCT_TO_CART_AMOUNT';
export const SET_MAIN_SEARCH = 'SET_MAIN_SEARCH';
export const SET_CART_SUBTOTAL = 'SET_CART_SUBTOTAL';

export const GET_ALL_PRODUCTS_LOADING = 'GET_ALL_PRODUCTS_LOADING';

// export const changeTest = (testValue) => ({
//   type: CHANGE_TEST,
//   payload: testValue
// });

export const filterTypeSelect = (filterType) => ({
  type: FILTER_TYPE_SELECT,
  payload: filterType
});

// export const setProductToCartAmount = (productAmount) => ({
//   type: SET_PRODUCT_TO_CART_AMOUNT,
//   payload: filterType
// });

export const setMainSearch = (mainSearch) => ({
  type: SET_MAIN_SEARCH,
  payload: mainSearch
})

export const setFilterParams = ({
  maxValue,
  minValue,
  selectParam
}) => ({
  type: SET_FILTER_PARAMS,
  payload: {
    maxValue: maxValue,
    minValue: minValue,
    selectParam: selectParam,
  }
});

export const setCartSubtotal = (newSubtotal) => ({
  type: SET_CART_SUBTOTAL,
  payload: newSubtotal
});

export const getAllProducts = () => {
  return dispatch => {
    dispatch({
      type: GET_ALL_PRODUCTS_LOADING,
      payload: true,
    });
    fetch(BASE_API, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          'Authorization': `Bearer ${API_KEY}`,
        },
        body: JSON.stringify({
          query: `{
            allProducts {
              image {
                id,
                url
              },
              description,
              rating,
              price,
              amount
            }
          }`
        }),
      })
      .then(res => res.json())
      .then((res) => {
        console.log('action')
        console.log(res.data.allProducts)
        dispatch({
          type: GET_ALL_PRODUCTS,
          payload: res.data.allProducts
        });
        dispatch({
          type: GET_ALL_PRODUCTS_LOADING,
          payload: false,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }
};