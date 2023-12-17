const initialState={
    isAuth:false,
    token:null
}

export const reducer = (state=initialState,{type,payload})=>{
      switch(type){
             case "LOGIN_SUCCESS":{
              return{
                   ...state,
                   isAuth:true,
                   token:payload
              }
             }
        default :{
            return state;
        }
      }
}
