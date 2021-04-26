import * as actionTypes from "../actions/actionTypes";
const initialState = {
  provides: [],
  districts: [],
  wards: [],
  landing: null,
  loading: false,
  error: null,
};

const resourceReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_RESOURCE_START:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case actionTypes.GET_RESOURCE_FAILED:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
      };
    case actionTypes.GET_PROVIDES_SUCCESS:
      return {
        ...state,
        provides: action.payload,
        loading: false,
        error: null,
      };
    case actionTypes.GET_DISTRICTS_SUCCESS:
      return {
        ...state,
        districts: action.payload,
        loading: false,
        error: null,
      };
    case actionTypes.GET_WARDS_SUCCESS:
      return {
        ...state,
        wards: action.payload,
        loading: false,
        error: null,
      };
    case actionTypes.GET_LANDING_SUCCESS:
      return {
        ...state,
        landing: action.payload,
        loading: false,
        error: null,
      };
    default:
      return state;
  }
};

export default resourceReducer;
