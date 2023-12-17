// todoReducer.js
const initialData = {
    todoList: [],
};

export const todoReducer = (state = initialData, { type, payload }) => {
    switch (type) {
        case "ADD_TODO": {
            return {
                ...state,
                todoList: [...state.todoList, payload],
            };
        }
        case "DELETE_TODO": {
            const newList = state.todoList.filter((el) => el.id !== payload);
            return {
                ...state,
                todoList: newList,
            };
        }
        case "EDIT_TODO": {
            const updatedList = state.todoList.map((todo) =>
                todo.id === payload.id ? { ...todo, todo: payload.updatedTodo } : todo
            );
            return {
                ...state,
                todoList: updatedList,
            };
        }
        case "TOGGLE_TODO_STATUS": {
            const updatedList = state.todoList.map((todo) =>
                todo.id === payload ? { ...todo, status: !todo.status } : todo
            );
            return {
                ...state,
                todoList: updatedList,
            };
        }
        default: {
            return state;
        }
    }
};
