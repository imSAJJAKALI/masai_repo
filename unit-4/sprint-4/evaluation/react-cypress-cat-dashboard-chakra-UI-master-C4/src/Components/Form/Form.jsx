// Note : import the the mentioned components from chakra UI and remove the follwoing once imported
import {Button,FormControl,Input} from '@chakra-ui/react'

export default function Form() {
  return (
    <div className="addCatContainer">
      <form className="form">
        <FormControl>
          <Input className="name" placeholder="Name" />
          <Input className="cost" placeholder="Cost" type="number" />

          <Input className="likes" placeholder="Likes" type="number" />
          <Input className="description" placeholder="Description" />
          <Input className="breed" placeholder="Breed" />
          <Button colorScheme={"green"} className="submitBtn">
            Submit
          </Button>
        </FormControl>
      </form>
    </div>
  );
}
