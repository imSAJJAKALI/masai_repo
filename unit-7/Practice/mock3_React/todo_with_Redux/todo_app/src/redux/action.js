// actions.js
export const AddTodo = (data) => {
    return {
        type: "ADD_TODO",
        payload: {
            id: new Date().getTime().toString(),
            todo: data,
            status: false,
        },
    };
};

export const ToggleTodoStatus = (id) => {
    return {
        type: "TOGGLE_TODO_STATUS",
        payload: id,
    };
};

export const DeleteTodo = (id) => {
    return {
        type: "DELETE_TODO",
        payload: id,
    };
};

// actions.js
export const EditTodo = (id, updatedTodo) => {
    return {
        type: "EDIT_TODO",
        payload: { id, updatedTodo },
    };
};

