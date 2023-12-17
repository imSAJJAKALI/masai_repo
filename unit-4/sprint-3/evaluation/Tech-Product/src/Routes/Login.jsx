import { useContext, useState } from "react"
import { Navigate ,Link} from "react-router-dom"
import { AuthContext } from "../Context/AuthContext"

function Login() {
 const {isAuth,login}=useContext(AuthContext)
 console.log(isAuth,login)
  const [email,setEmail]=useState("")
  const [password,setPassword]=useState("")

  const handleLogin=(e)=>{
    e.preventDefault()
    const details={
      email,password
    }
    fetch(`https://reqres.in/api/login`,{
      method:"POST",
      body:JSON.stringify(details),
      headers:{
        "Content-Type":"application/json"
      }

    }).then((res)=>res.json()).then((act)=>{login(act.token);}).catch((err)=>console.log(err))

  }
if(isAuth){
  return <Navigate to="/dashboard" />
}

  return (
    <div>
      <form data-testid="login-form" onSubmit={handleLogin}>
        <div>
          <label>
            Email
            <input data-testid="email-input" type="email" placeholder="email" 
              
              onChange={(e)=>setEmail(e.target.value)}

            />
          </label>
        </div>
        <div>
          <label>
            Password
            <input
              data-testid="password-input"
              type="password"
              placeholder="password"
              onChange={(e)=>setPassword(e.target.value)}
            />
          </label>
        </div>
        <div>
          <input data-testid="form-submit" type="submit" value="SUBMIT" />
        </div>
      </form>
      <div>
        <Link to="/">Go Back</Link>
      </div>
    </div>
  );
}
export default Login;
