//Complete the reducer function logic inside the curly braces {}

import { CHANGE_THEME } from "./actionTypes";

// the theme initstate shouldbe light
const initialState={
    theme:"light"
}
const themeReducer = (state=initialState,{type,payload}) => {
    switch(type){
        case CHANGE_THEME:{
            return {
                theme:payload
            }
        }
        default:{
            return state
        }
    }
};

export { themeReducer };
