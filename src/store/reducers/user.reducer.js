import * as actionTypes from "../actions/actionTypes";
const initialState = {
  accessToken: null,
  tokenType: null,
  user: null,
  loading: false,
  error: null,
};

const resourceReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.LOGIN_START:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case actionTypes.LOGIN_FAILED:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
      };
    case actionTypes.LOGIN_SUCCESS:
      return {
        ...state,
        provides: action.payload,
        loading: false,
        error: null,
      };
    default:
      return state;
  }
};

export default resourceReducer;
