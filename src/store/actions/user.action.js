import * as actionTypes from "./actionTypes";

import axios from "../../api/index";

const loginStart = () => {
  return {
    type: actionTypes.LOGIN_START,
  };
};
const loginFailed = (error) => {
  return {
    type: actionTypes.LOGIN_FAILED,
    payload: {
      error: error,
    },
  };
};

const loginSuccess = (dataSuccess) => {
  return {
    type: actionTypes.LOGIN_SUCCESS,
    payload: dataSuccess,
  };
};

export const login = (username, password) => {
  return async (dispatch) => {
    try {
      dispatch(loginStart());
      const loginResponse = await axios.post("/auth/login", {
        username: username,
        password: password,
      });
      // dispatch(loginSuccess(loginResponse.data));
      console.log(loginResponse.data);
    } catch (error) {
      dispatch(loginFailed(error.response));
    }
  };
};
