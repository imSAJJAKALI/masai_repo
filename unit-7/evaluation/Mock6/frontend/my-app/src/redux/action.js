export const getToken=(token)=>(dispatch)=>{
    dispatch({type:"LOGIN_SUCCESS",payload:token})
}