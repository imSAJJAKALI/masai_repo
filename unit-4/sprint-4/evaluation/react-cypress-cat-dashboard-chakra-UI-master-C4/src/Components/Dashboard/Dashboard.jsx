// Note : import the the mentioned components from chakra UI and remove the follwoing once imported
import axios from "axios";
import { useReducer,useState,useEffect } from "react";

import {Box,Button,Center,Img,SimpleGrid,Text,VStack,Select,Spinner} from '@chakra-ui/react';


const initialState = {
  data: [],
  isLoading: false,
  error: null,
};

const reducer = (state) => {

};

 function Dashboard() {
  const [state,dispatch]=useReducer(reducer,initialState)
  const [data,setData]=useState([])
  const [sptrue,spfalse]=useState(false)
  const [sort,setSort]=useState('')

 useEffect(()=>{
  spfalse(true)
  axios.get(`http://localhost:8080/cats?&_order=${sort}`)
  .then((res)=>{
   setData(res.data)
  }).catch((err)=>{
    console.log(err)
  }).finally(()=>{
    spfalse(false)
  })
 },[])
 const deleteItem=(id)=>{
  const updateItems=data.filter((e,index)=>{
    return index!=id;
  })
  setData(updateItems)
}


  return (
    <div>
      <div className="sortingButtons">
        <Button colorScheme={"green"} className="sortByCostAsc" onClick={()=>{setSort("asc")}}>
          Sort by Asc
        </Button>
        <Button colorScheme={"red"} className="sortByCostDesc" m={2} onClick={()=>{setSort("desc")}}>
          Sort by Desc
        </Button>
      </div>
      <Center>
        <Select placeholder="select option">
          <option value="Peterbald">Peterbald</option>
          <option value="Nebelung">Nebelung</option>
          <option value="Persian">Persian</option>
          <option value="Birman">Birman</option>
          <option value="Himalayan">Himalayan</option>
        </Select>
      </Center>
     {sptrue?<Spinner />:""} 
   {
    data.map((el,id)=>

         <SimpleGrid className="main_container" key={id}>
         <Box className="catsDetails" >
           <Center>
             <Img src={`http://localhost:8080${process.env.REACT_APP_JSON_SERVER_PORT}/cats/`}/>
           </Center>
 
           <VStack spacing={2} p={2}>
             <Text className="name" fontSize={"20px"} fontWeight="bold">{el.name}</Text>
             <Text className="cost">{el.cost}</Text>
             <Text className="likes">{el.like}</Text>
             <Text className="breed">{el.breed}</Text>
             <Text className="description">{el.description}</Text>
             <Button className="delete" onClick={()=>{deleteItem(id)}}>Delete</Button>
           </VStack>
         </Box>
       </SimpleGrid>
)
}
     
     
    </div>
  );
}

export default Dashboard;