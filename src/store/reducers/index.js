import { combineReducers } from "redux";
import resourceReducer from "./resource.reducer";
import userReducer from "./user.reducer";

const rootReducer = combineReducers({
  resource: resourceReducer,
  user: userReducer,
});

export default rootReducer;
