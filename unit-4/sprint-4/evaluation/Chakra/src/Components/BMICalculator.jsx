import {Box,
  Button,Grid,GridItem,Heading,Input,SimpleGrid
} from '@chakra-ui/react'
import {color} from 'framer-motion'
import {useState} from 'react'





function BMICalculator() {
  const [weight,setWeight]=useState("");
  const [height,setHeight]=useState("");
  const [result,setResult]=useState(0)
  const [status,setStatus]=useState("")
  const [x,setX]=useState("")
 
  const handleClick=()=>{
    setResult(weight/(height*height))
    setX(true)
    result<18.5
    ?setStatus("UnderWeight")
    :result<25&&result>=18.5
    ?setStatus("Healthy")
    :setStatus("OverWeight");
  }
 
  return <Box>
    <Heading>BMI Calculator</Heading>
    <SimpleGrid columns={2} spacing={10} margin="9" className="bmi-form">
      <h1>Weight(kg)</h1>
      <h1>Height(kg)</h1>
      </SimpleGrid>
      <form>
        <SimpleGrid>
      <Input type="number" className="weight" placeholder="Enter your weight in kilograms" onChange={(e)=>setWeight(e.target.value)}></Input>
      <Input type="number" className="height" placeholder="Enter your height in centimeters" onChange={(e)=>setHeight(e.target.value/100)}></Input>
      </SimpleGrid>
      </form>
   <Button colorScheme="green" color="white" onClick={()=>{handleClick();}} >Calculate</Button>
   <Button colorScheme="red" color="white" onClick={()=>{setHeight("");setWeight("");setX(false);}} >Reset</Button>
   {x?(
 <Grid className="bmi-result" templateColumn="repeat(4,1fr" gap={5}>
  <GridItem className="bmil-value" >{Math.floor(result)} </GridItem>
  <GridItem className="bmi-status">
{status}
  </GridItem>
  
 </Grid>
   ):("")}
  
  </Box>;
}

export default BMICalculator;
