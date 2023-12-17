import { Box, Button, Flex, Input, Text } from '@chakra-ui/react'
import axios from 'axios'
import React, { useState } from 'react'



const Signup = () => {
const [userName,setUserName]=useState('')
const [avtar,setAvtar]=useState('')
const [email,setEmail]=useState('')
const [password,setPassword]=useState('')
const handleSign=()=>{
  let obj={
    username:userName,
    avtar:avtar,
    email:email,
    password:password
  }
  axios.post('https://mock4server-m02k.onrender.com/users',obj)
  alert('User signing successfully !')
}
  return (
    <div>
   <Text textAlign={"center"} fontSize={'30px'}>Signup</Text>
      <Flex justifyContent={"center"} mt={"5"}>
       <Box w={"200px"}>
        <Input placeholder='Enter User Name ...' onChange={(e)=>setUserName(e.target.value)} />
        <Input placeholder='Enter Avtar ...' onChange={(e)=>setAvtar(e.target.value)} />
        <Input placeholder='Enter Email ...' onChange={(e)=>setEmail(e.target.value)}  />
        <Input placeholder='Enter Password ...' onChange={(e)=>setPassword(e.target.value)}  />
        <Button onClick={()=>handleSign()} >Sign-In</Button>
       </Box>
      </Flex>

    </div>
  )
}

export default Signup