import { combineReducers } from "redux";
import { screenSizeReducer } from "./screenReducer";

const rootReducer = combineReducers({
    screenSize: screenSizeReducer,
});

export default rootReducer;
