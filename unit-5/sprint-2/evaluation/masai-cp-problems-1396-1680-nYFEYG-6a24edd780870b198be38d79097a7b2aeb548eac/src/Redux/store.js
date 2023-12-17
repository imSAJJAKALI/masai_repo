import { legacy_createStore, combineReducers } from "redux";
import { reducer as authReducer} from "./Authentication/reducer";
import { reducer as matchReducer } from "./Matches/reducer";
import { reducer as watchReducer } from "./WatchList/reducer";

import { Pagereducer } from "./Pagination/reducer";

const rootReducer = combineReducers({authReducer,matchReducer,watchReducer,Pagereducer});

export const store = legacy_createStore(rootReducer);

// NOTE: Do not remove this code,its used for calculating your score, if removed it will give you zero marks
if (window.Cypress) {
  window.store = store;
}
