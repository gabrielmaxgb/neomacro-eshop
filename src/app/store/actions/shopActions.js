export const CHANGE_TEST = 'CHANGE_TEST';
export const FILTER_TYPE_SELECT = 'FILTER_TYPE_SELECT';
export const SET_FILTER_PARAMS = 'SET_FILTER_PARAMS';

export const changeTest = (testValue) => ({
  type: CHANGE_TEST,
  payload: testValue
});

export const filterTypeSelect = (filterType) => ({
  type: FILTER_TYPE_SELECT,
  payload: filterType
});

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