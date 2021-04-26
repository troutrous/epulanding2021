import * as actionTypes from "../actions/actionTypes";
const initialState = {
  user: null,
  loading: false,
  error: null,
};

const userReducer = (state = initialState, action) => {
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
      localStorage.setItem("user", JSON.stringify(action.payload));
      return {
        ...state,
        user: action.payload,
        loading: false,
        error: null,
      };
    case actionTypes.LOGOUT_SUCCESS:
      localStorage.removeItem("user");
      return {
        ...state,
        user: null,
        loading: false,
        error: null,
      };
    default:
      return state;
  }
};

export default userReducer;
