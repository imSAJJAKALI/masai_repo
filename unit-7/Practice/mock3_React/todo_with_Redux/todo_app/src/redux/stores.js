import { todoReducer } from './todoReducer'

import {combineReducers, legacy_createStore} from 'redux'

const rootReducer= combineReducers({todoReducer})

export const store=legacy_createStore(rootReducer)
