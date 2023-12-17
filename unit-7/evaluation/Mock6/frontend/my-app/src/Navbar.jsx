import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Box, Flex, Link, Spacer, Stack } from '@chakra-ui/react';

const Navbar = () => {
  return (
    <Box bg="teal.500" color="white" py={2}>
      <Flex align="center" justify="space-between" maxW="1200px" mx="auto">
        <Stack direction="row" spacing={4}>
          <Link as={RouterLink} to="/login" fontWeight="bold">
            Login 
          </Link>
          <Link as={RouterLink} to="/signup" fontWeight="bold">
            Signup
          </Link>
          <Link as={RouterLink} to="/blogs" fontWeight="bold">
            Blogs
          </Link>
         
        </Stack>
        <Spacer />
      
      </Flex>
    </Box>
  );
};

export default Navbar;
