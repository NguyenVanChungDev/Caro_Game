import { combineReducers } from "redux";
import broadReducer from "./broad";
import clockReducer from "./clock";
import userReducer from "./user";

const rootReducer = combineReducers({
    user: userReducer,
    clock: clockReducer,
    broad: broadReducer,
});

export default rootReducer;
