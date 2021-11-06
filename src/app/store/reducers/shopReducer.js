import {
  CHANGE_TEST
} from "../actions/shopActions";

const INITIAL_STATE = {
  test: 'a'
};

function shopReducer(state = INITIAL_STATE, action) {
  const {
    payload
  } = action;
  switch (action.type) {
    case CHANGE_TEST:
      return {
        ...state,
        test: payload,
      };
    default:
      return state;
  }
}

export default shopReducer;