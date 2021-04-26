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

const logoutSuccess = () => {
  return {
    type: actionTypes.LOGOUT_SUCCESS,
  };
};

export const login = (username, password, successCallback) => {
  return async (dispatch) => {
    try {
      dispatch(loginStart());
      const loginResponse = await axios.post("/auth/login", {
        username: username,
        password: password,
      });
      dispatch(loginSuccess(loginResponse.data));
      successCallback();
    } catch (error) {
      dispatch(loginFailed(error.response));
    }
  };
};

export const getStorage = () => {
  return async (dispatch) => {
    try {
      dispatch(loginStart());
      const userStorage = localStorage.getItem("user");
      if (JSON.parse(userStorage)) {
        dispatch(loginSuccess(JSON.parse(userStorage)));
      } else {
        throw new Error("No user found");
      }
    } catch (error) {
      dispatch(loginFailed(error.response));
    }
  };
};

export const logout = () => {
  return async (dispatch) => {
    try {
      dispatch(logoutSuccess());
    } catch (error) {
      // dispatch(loginFailed(error.response));
      console.log("haha");
    }
  };
};
