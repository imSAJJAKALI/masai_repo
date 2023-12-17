import React from 'react'

const Login = () => {

    const handleSubmit=(e)=>{

        e.preventDefault()
    }

  return (
    <div>
        <div >
            <form action="" style={{width:'30%',display:'flex',flexDirection:'column',gap:'20px',margin:'auto',marginTop:"50px"}} onSubmit={handleSubmit}>
                <input style={{height:'30px'}} type="text" placeholder='User-Name' />
                <input style={{height:'30px'}} type="text" placeholder='Password-Name' />
                <button style={{height:'30px'}}>Login</button>
            </form>
        </div>
    </div>
  )
}

export default Login