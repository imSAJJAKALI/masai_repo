import React, { useState } from 'react';
import { Box, Button, FormControl, FormLabel, Input, Select, VStack } from '@chakra-ui/react';

const specialties = ['Cardiologist', 'Dermatologist', 'Pediatrician', 'Psychiatrist'];

const OnboardForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    imageUrl: '',
    specialization: '',
    experience: '',
    location: '',
    slots: '',
    fee: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
   
    console.log('Form data submitted:', formData);
  };

  return (
    <Box p={4}>
      <form onSubmit={handleSubmit}>
        <VStack spacing={4} alignItems="flex-start">
          <FormControl isRequired>
            <FormLabel>Name</FormLabel>
            <Input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              placeholder="Doctor's name"
            />
          </FormControl>
          <FormControl isRequired>
            <FormLabel>Image URL</FormLabel>
            <Input
              type="text"
              name="imageUrl"
              value={formData.imageUrl}
              onChange={handleInputChange}
              placeholder="Image URL"
            />
          </FormControl>
          <FormControl isRequired>
            <FormLabel>Specialization</FormLabel>
            <Select
              name="specialization"
              value={formData.specialization}
              onChange={handleInputChange}
              placeholder="Select specialization"
            >
              {specialties.map((specialty) => (
                <option key={specialty} value={specialty}>
                  {specialty}
                </option>
              ))}
            </Select>
          </FormControl>
          <FormControl isRequired>
            <FormLabel>Experience</FormLabel>
            <Input
              type="number"
              name="experience"
              value={formData.experience}
              onChange={handleInputChange}
              placeholder="Years of experience"
            />
          </FormControl>
          <FormControl isRequired>
            <FormLabel>Location</FormLabel>
            <Input
              type="text"
              name="location"
              value={formData.location}
              onChange={handleInputChange}
              placeholder="Location"
            />
          </FormControl>
          <FormControl isRequired>
            <FormLabel>Slots</FormLabel>
            <Input
              type="number"
              name="slots"
              value={formData.slots}
              onChange={handleInputChange}
              placeholder="Number of slots available"
            />
          </FormControl>
          <FormControl isRequired>
            <FormLabel>Fee</FormLabel>
            <Input
              type="number"
              name="fee"
              value={formData.fee}
              onChange={handleInputChange}
              placeholder="Consultation fee"
            />
          </FormControl>
          <Button colorScheme="teal" type="submit">
            Submit
          </Button>
        </VStack>
      </form>
    </Box>
  );
};

export default OnboardForm;
