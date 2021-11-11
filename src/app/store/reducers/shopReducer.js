import {
  // CHANGE_TEST,
  FILTER_TYPE_SELECT,
  GET_ALL_PRODUCTS,
  GET_ALL_PRODUCTS_LOADING,
  SET_CART_SUBTOTAL,
  SET_FILTER_PARAMS,
  SET_MAIN_SEARCH
} from "../actions/shopActions";

const INITIAL_STATE = {
  filterType: '',
  cartItemsAmount: 0,
  cartItemsSubtotal: 0,
  filterParams: {
    maxValue: undefined,
    minValue: undefined,
    selectParam: 'no-sort',
  },
  allProducts: [],
  allProductsLoading: false,
  mainSearch: undefined,
};

function shopReducer(state = INITIAL_STATE, action) {
  const {
    payload
  } = action;
  switch (action.type) {
    case FILTER_TYPE_SELECT:
      return {
        ...state,
        filterType: payload,
      };
    case SET_FILTER_PARAMS:
      return {
        ...state,
        filterParams: payload
      };
    case GET_ALL_PRODUCTS:
      return {
        ...state,
        allProducts: payload
      };
    case GET_ALL_PRODUCTS_LOADING:
      return {
        ...state,
        allProductsLoading: payload
      };
    case SET_MAIN_SEARCH:
      return {
        ...state,
        mainSearch: payload
      };
    case SET_CART_SUBTOTAL:
      return {
        ...state,
        cartItemsSubtotal: payload
      };
    default:
      return state;
  }
}

export default shopReducer;