import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
    Box,
    Button,
    Center,
    Checkbox,
    Flex,
    HStack,
    Input,
    Text,
    VStack,
    useColorMode,
} from "@chakra-ui/react";
import {
    AddTodo,
    ToggleTodoStatus,
    DeleteTodo,
    EditTodo,
} from "./redux/action";

function App() {
    const { colorMode, toggleColorMode } = useColorMode();
    const { todoList } = useSelector((store) => store.todoReducer);
    const dispatch = useDispatch();
    const [input, setInput] = useState("");
    const [editId, setEditId] = useState(null);
    const [editedValue, setEditedValue] = useState("");

    const handleStatus = (id) => {
        dispatch(ToggleTodoStatus(id));
    };

    const handleAdd = () => {
        dispatch(AddTodo(input));
        setInput("");
    };

    const handleDelete = (id) => {
        dispatch(DeleteTodo(id));
    };

    const handleEditSave = (id) => {
        dispatch(EditTodo(id, editedValue));
        setEditId(null);
        setEditedValue("");
    };

    return (
        <VStack spacing={4} align="center">
            <Button onClick={toggleColorMode}>
                {colorMode === "light" ? "Dark" : "Light"}
            </Button>
            <Box>
                <Center>
                    <Flex>
                        <Input
                            placeholder="🧧 Add todo ...."
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                        />
                        <Button onClick={handleAdd}>➕</Button>
                    </Flex>
                </Center>
            </Box>

            <VStack spacing={2} w="100%" maxW="400px">
                {todoList?.map((el) => (
                    <HStack
                        key={el.id}
                        justifyContent="space-between"
                        w="100%"
                        bg="teal"
                        p={3}
                        borderRadius="md"
                        boxShadow="md"
                        alignItems="center"
                    >
                        <Checkbox
                            width={5}
                            isChecked={el.status}
                            onChange={() => handleStatus(el.id)}
                        />
                        {editId === el.id ? (
                            <Input
                                value={editedValue}
                                onChange={(e) => setEditedValue(e.target.value)}
                            />
                        ) : (
                            <Text as={el.status ? "del" : "span"} flex="1">
                                {el.todo}
                            </Text>
                        )}
                        {editId === el.id ? (
                            <>
                                <Button onClick={() => handleEditSave(el.id)}>Save</Button>
                                <Button onClick={() => setEditId(null)}>Cancel</Button>
                            </>
                        ) : (
                            <Button onClick={() => setEditId(el.id)}>Edit</Button>
                        )}
                        <Button onClick={() => handleDelete(el.id)}>Delete</Button>
                    </HStack>
                ))}
            </VStack>
        </VStack>
    );
}

export default App;
