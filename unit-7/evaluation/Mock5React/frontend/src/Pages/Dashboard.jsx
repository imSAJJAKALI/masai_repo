import React from 'react';
import { Button,Box, Divider, Flex, IconButton, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Spacer, Stack, Text, VStack } from '@chakra-ui/react';
import { EditIcon, DeleteIcon } from '@chakra-ui/icons';

const DoctorDashboard = () => {
  const doctors = [
    {
      _id: '1',
      name: 'Dr. John Doe',
      specialization: 'Cardiologist',
      experience: 10,
      location: 'New York',
      slots: 5,
      fee: 200,
    },
    {
      _id: '2',
      name: 'Dr. Jane Smith',
      specialization: 'Dermatologist',
      experience: 8,
      location: 'Los Angeles',
      slots: 3,
      fee: 150,
    },
   
  ];

  return (
    <Box p={4}>
      <Stack direction="row" alignItems="center" mb={4}>
        <input placeholder="Search doctor..." style={{ padding: '0.5rem' }} />
        <Spacer />
        <select style={{ padding: '0.5rem' }}>
          <option value="All">All</option>
          <option value="Cardiologist">Cardiologist</option>
          <option value="Dermatologist">Dermatologist</option>
          <option value="Pediatrician">Pediatrician</option>
          <option value="Psychiatrist">Psychiatrist</option>
        </select>
      </Stack>
      <Divider mb={4} />
      <VStack spacing={4} align="stretch">
        {doctors.map((doctor) => (
          <Box key={doctor._id} borderWidth="1px" borderRadius="md" p={4}>
            <Flex align="center">
              <Text fontWeight="bold">{doctor.name}</Text>
              <Spacer />
              <IconButton aria-label="Edit" icon={<EditIcon />} size="sm" />
              <IconButton aria-label="Delete" icon={<DeleteIcon />} size="sm" />
            </Flex>
            <Text mt={2} fontSize="sm">
              {doctor.specialization} | {doctor.experience} years of experience
            </Text>
            <Text fontSize="sm">{doctor.location}</Text>
            <Text fontSize="sm">Slots: {doctor.slots}</Text>
            <Text fontSize="sm">Fee: ${doctor.fee}</Text>
          </Box>
        ))}
      </VStack>
      <Modal isOpen={false}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Edit Doctor</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
           
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="teal" mr={3}>
              Close
            </Button>
            <Button colorScheme="blue">Update</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
};

export default DoctorDashboard;
