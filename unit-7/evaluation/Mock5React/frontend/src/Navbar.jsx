import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Box, Flex, Link, Spacer, Stack } from '@chakra-ui/react';

const Navbar = () => {
  return (
    <Box bg="teal.500" color="white" py={2}>
      <Flex align="center" justify="space-between" maxW="1200px" mx="auto">
        <Stack direction="row" spacing={4}>
          <Link as={RouterLink} to="/login_signup" fontWeight="bold">
            Login and Signup
          </Link>
          <Link as={RouterLink} to="/dashboard" fontWeight="bold">
            Dashboard
          </Link>
          <Link as={RouterLink} to="/onboard" fontWeight="bold">
            Onboard
          </Link>
        </Stack>
        <Spacer />
      
      </Flex>
    </Box>
  );
};

export default Navbar;
