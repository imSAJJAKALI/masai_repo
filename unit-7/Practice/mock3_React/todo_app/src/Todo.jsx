import { useColorMode } from '@chakra-ui/react';
import React, { useState } from 'react';

const Todo = () => {
  const [data, setData] = useState([]);
  const [input, setInput] = useState("");
  const [editingIndex, setEditingIndex] = useState(-1);

  const { colorMode, toggleColorMode } = useColorMode();

  const handleChange = () => {
    let obj = {
      name: input,
      isChecked: false, // Add a property to track the checkbox state
    };
    setData([...data, obj]);
    setInput("");
  };

  const handleDelete = (index) => {
    const newData = data.filter((_, i) => i !== index);
    setData(newData);
  };

  const handleEdit = (index) => {
    setEditingIndex(index);
    setInput(data[index].name);
  };

  const handleUpdate = () => {
    const updatedData = [...data];
    updatedData[editingIndex].name = input;
    setData(updatedData);
    setInput("");
    setEditingIndex(-1);
  };

  const handleCheckboxChange = (index) => {
    const updatedData = [...data];
    updatedData[index].isChecked = !updatedData[index].isChecked;
    setData(updatedData);
  };

  return (
    <div>
      <button onClick={toggleColorMode}>Toggle {colorMode === 'light' ? 'Dark' : 'Light'}</button>
      <div>
        <h1>Todo App</h1>
        <input style={{ padding: "10px" }} type="text" value={input} placeholder='Add new Task ....' onChange={(e) => setInput(e.target.value)} />
        {editingIndex !== -1 ? (
          <button style={{ marginLeft: "5px", padding: "10px" }} onClick={handleUpdate}>Update</button>
        ) : (
          <button disabled={input === ""} style={{ marginLeft: "5px", padding: "10px" }} onClick={handleChange}>Add</button>
        )}
      </div>
      <div style={{ margin: 'auto', border: '1px solid red', width: "50%" }} >
        {data?.map((el, i) => (
          <div key={i} style={{ display: 'flex', justifyContent: 'space-between', margin: '10px', }} >
            <div style={{ display: 'flex', }}>
              <input
                type="checkbox"
                checked={el.isChecked}
                onChange={() => handleCheckboxChange(i)}
              />
              <p style={{ textDecoration: el.isChecked ? "line-through" : "" }}>{el.name}</p>
            </div>
            <div style={{ display: 'flex' }}>
              <button style={{ backgroundColor: 'teal' }} onClick={() => handleEdit(i)}>Edit</button>
              <button onClick={() => handleDelete(i)}>Delete</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Todo;
