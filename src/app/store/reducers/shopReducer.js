import {
  CHANGE_TEST,
  FILTER_TYPE_SELECT,
  SET_FILTER_PARAMS
} from "../actions/shopActions";

const INITIAL_STATE = {
  filterType: '',
  cartItemsAmount: 0,
  cartItemsSubtotal: 0,
  filterParams: {
    maxValue: 0,
    minValue: 0,
    selectParam: '',
  }
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
    default:
      return state;
  }
}

export default shopReducer;