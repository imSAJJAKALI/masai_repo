import { PAGE } from "./action";

const initialState={
    page:1,
    asc:'asc',
    desc:"desc"
}

export const Pagereducer=(state=initialState,{type,payload})=>{
   switch(type){
    case PAGE:{
        return {
            ...state,
            page:state.page+payload
        }
    }
    default :{
        return state;
    }
   }
}