import "./App.css";
import Dashboard from "./Components/Dashboard/Dashboard";
import {Stack,Center,Button,} from '@chakra-ui/react'
import Form from "./Components/Form/Form";

// Note : import the the mentioned components from chakra UI and remove the follwoing once imported
// let Stack = () => <div />;
// let Center = () => <div />;
// let Button = () => <div />;
function App() {
  return (
    <Stack p={5} className="App">
      <h1>its working</h1>
      <Center>
        <Button width="150px" className="toggleForm"></Button>
      </Center>

      { <Dashboard/>}
     
    
    </Stack>
  );
}

export default App;
