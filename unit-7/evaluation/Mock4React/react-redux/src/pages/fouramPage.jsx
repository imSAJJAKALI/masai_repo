import { Box, Button, Flex, Input, Select, VStack,Image,Text } from '@chakra-ui/react'
import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Fouram = () => {
  const [language,setLanguage]=useState('')
  const [description,setDescription]=useState('')
  const [title,setTitle]=useState('')
  const [date,setDate]=useState('')

  const [postQue,setPostQue]=useState(false)

  const [data,setData]=useState([])

  const getData=()=>{
    axios.get('https://mock4server-m02k.onrender.com/fouram')
    .then((res)=>setData(res.data))
  }

  useEffect(()=>{
    getData()
  },[sendQuestion])
 
  const AskQuestion =()=>{
    setPostQue(!postQue)
  }

  const sendQuestion=()=>{
let obj={
  title:title,
  description:description,
  language:language,
  date:date
}
axios.post('https://mock4server-m02k.onrender.com/fouram',obj)
alert("Post Successfully")
  }

  return (
    <div>
      <Box >
        <Flex justifyContent={'center'} mt={5}>
   
        <Button variant={'outline'} onClick={()=>AskQuestion()} >Ask Question</Button>
        </Flex>
{postQue?
        <VStack mt={"50px"} justifyContent={"center"} marginRight={20} marginLeft={20}>
          <Input placeholder='Question: Title' onChange={(e)=>setTitle(e.target.value)} />
          <Input placeholder='Question: Description' onChange={(e)=>setDescription(e.target.value)} />
          <Select  placeholder='Select Language'
                value={language}
                onChange={(e) => setLanguage(e.target.value)} >
            <option value={""}>Select</option>
            <option value="javascript">Javascript</option>
            <option value="python">Python</option>
            <option value="java">Java</option>
          </Select>
          <Input type='date' onChange={(e)=>setDate(e.target.value)} />
          <Button colorScheme='teal' onClick={()=>sendQuestion()} >Post Question</Button>
        </VStack>:null

}
<Box>

{data?.map((e)=><Box>
  <Image src="https://www.w3schools.com/howto/img_avatar.png" height={"50px"}/>
  <Text>{e.title}</Text>
  <Text>{e.description}</Text>
  <Text>{e.language}</Text>
  <Text>{e.date}</Text>
  <Button>5 Answer</Button>
  <Button>Votes</Button>
</Box>)}
</Box>

      </Box>
    </div>
  )
}

export default Fouram