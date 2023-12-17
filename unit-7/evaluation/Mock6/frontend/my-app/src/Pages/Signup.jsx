import React, { useState } from "react";
import {
  Flex,
  Heading,
  Input,
  Button,
  InputGroup,
  Stack,
  InputLeftElement,
  chakra,
  Box,
  Avatar,
  FormControl,
  InputRightElement,
} from "@chakra-ui/react";
import { FaUserAlt, FaLock } from "react-icons/fa";
import axios from "axios";

const CFaUserAlt = chakra(FaUserAlt);
const CFaLock = chakra(FaLock);

const Signup = () => {
  const [showPassword, setShowPassword] = useState(false);
  const handleShowClick = () => setShowPassword(!showPassword);

  const [userData, setUserData] = useState({
    username: "",
    avatar: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const userRegister = async (e) => {
    e.preventDefault();

    try {
      await axios.post(
        "https://adventurous-drawers-bull.cyclic.cloud/api/register",userData)
      .then((res)=>console.log(res))
      alert("User registered Successfully");
    } catch (error) {
      console.error("Registration failed:", error);
      alert("User registration failed");
    }
  };

  return (
    <Flex
      align="center"
      justify="center"
      h="100vh"
      bg="gray.100"
    >
      <Box p={8} maxW="md" borderWidth={1} borderRadius={8} boxShadow="lg" bg="white">
        <Stack spacing={4}>
          <Avatar bg="teal.500" />
          <Heading color="teal.400" textAlign="center">
            Signup Form
          </Heading>
          <form onSubmit={userRegister}>
            <FormControl>
              <InputGroup>
                <InputLeftElement
                  pointerEvents="none"
                  children={<CFaUserAlt color="gray.300" />}
                />
                <Input
                  type="text"
                  name="username"
                  placeholder="Username"
                  value={userData.username}
                  onChange={handleChange}
                />
              </InputGroup>
              <InputGroup>
                <InputLeftElement
                  pointerEvents="none"
                  children={<CFaUserAlt color="gray.300" />}
                />
                <Input
                  type="text"
                  name="avatar"
                  placeholder="Avatar"
                  value={userData.avatar}
                  onChange={handleChange}
                />
              </InputGroup>
              <InputGroup>
                <InputLeftElement
                  pointerEvents="none"
                  children={<CFaUserAlt color="gray.300" />}
                />
                <Input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  value={userData.email}
                  onChange={handleChange}
                />
              </InputGroup>
            </FormControl>
            <FormControl>
              <InputGroup>
                <InputLeftElement
                  pointerEvents="none"
                  color="gray.300"
                  children={<CFaLock color="gray.300" />}
                />
                <Input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  placeholder="Password"
                  value={userData.password}
                  onChange={handleChange}
                />
                <InputRightElement width="4.5rem">
                  <Button h="1.75rem" size="sm" onClick={handleShowClick}>
                    {showPassword ? "Hide" : "Show"}
                  </Button>
                </InputRightElement>
              </InputGroup>
            </FormControl>
            <Button
              type="submit"
              colorScheme="teal"
              size="lg"
              fontSize="md"
              isLoading={false}
              loadingText="Registering..."
            >
              Register
            </Button>
          </form>
        </Stack>
      </Box>
    </Flex>
  );
};

export default Signup;
