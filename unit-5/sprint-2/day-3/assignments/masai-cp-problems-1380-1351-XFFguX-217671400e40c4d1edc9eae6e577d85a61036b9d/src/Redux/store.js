import { combineReducers, legacy_createStore } from "redux";
import { counterReducer } from "./counterReducer";
import { themeReducer } from "./themeReducer";

// 1. import all the required reducers
// 2. combine the reducers into a single reducer
// 3. creating the store (use legacy_createStore)

const rootReducer = combineReducers({
  counterReducer,
  themeReducer,
});

export const store = legacy_createStore(rootReducer);
