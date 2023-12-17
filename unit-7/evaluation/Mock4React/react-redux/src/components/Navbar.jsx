import { VStack,HStack, Flex } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'


const Navbar = () => {
  return (
    <div>
      <Flex justifyContent={'space-evenly'} p={5} backgroundColor={'teal'} color={"white"} >

      <Link to="/" >Home</Link>
       <Link to="/login" >Login</Link>
       <Link to="/sign-up" >Sign-Up</Link>
       <Link to="/fouram" >Fouram</Link>
      </Flex>
    </div>
  )
}

export default Navbar