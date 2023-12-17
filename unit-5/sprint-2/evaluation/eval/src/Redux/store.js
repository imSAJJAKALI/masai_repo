import { legacy_createStore, combineReducers, applyMiddleware } from "redux";
import { reducer as restaurantReducer } from "./Restaurant/reducer";
import { reducer as authReducer} from "./Authentication/reducer";
import thunk from "redux-thunk";


const rootReducer = combineReducers({restaurantReducer,authReducer});

export const store = legacy_createStore(rootReducer,applyMiddleware(thunk));

// NOTE: Do not remove this code,its used for calculating your score, if removed it will give you zero marks
if (window.Cypress) {
  window.store = store;
}
