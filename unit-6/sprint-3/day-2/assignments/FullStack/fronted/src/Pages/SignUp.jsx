import React from 'react'

const SignUp = () => {
  

    const handleSubmit=()=>{

    }
  
    return (
    <div>
        <div>
        <form action="" style={{width:'30%',display:'flex',flexDirection:'column',gap:'20px',margin:'auto',marginTop:"50px"}} onSubmit={handleSubmit}>
                <input style={{height:'30px'}} type="text" placeholder='User-Name' />
                <input style={{height:'30px'}} type="text" placeholder='Email' />
                <input style={{height:'30px'}} type="date" placeholder='Date-of-Birth' />
                <select style={{height:'30px'}} name="" id="">
                    <option value="">Select</option>
                    <option value="admin">Admin</option>
                    <option value="explorer">Explorer</option>
                </select>
                <input style={{height:'30px'}} type="text" placeholder='Location' />
                <input style={{height:'30px'}} type="text" placeholder='Password' />
                <input style={{height:'30px'}} type="text" placeholder='Confirm-Password' />
                <button style={{height:'30px'}}>Sign-Up</button>
            </form>
        </div>
    </div>
  )
}

export default SignUp