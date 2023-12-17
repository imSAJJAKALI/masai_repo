import { render, fireEvent, screen } from "@testing-library/react";
import App from "../App";
import TodoItem from "../components/TodoItem";
import Todo from "../components/Todo";

const testTodo = {
  title: "Test Title",
  status: false,
};

describe("Test Todo App", () => {
  beforeAll(() => {
    global.score = 0;
  });

  afterAll(() => {
    console.log("Final Score is", global.score);
  });

  it(`Todo app with todo list and todo item should be rendered when App loads`, () => {
    render(<App />);
    const todo = screen.getByTestId("todo-app");
    expect(todo).toBeInTheDocument();
    const todo_list = screen.getByTestId("todo-list");
    expect(todo_list).toBeInTheDocument();
    global.score += 1;
  });

  it(`Todo Item component should display the title and status of todo`, () => {
    render(<TodoItem {...testTodo} />);
    const todo_item = screen.getByTestId("todo-item");
    expect(todo_item).toBeInTheDocument();
    const title = screen.getByTestId("todo-title");
    expect(title.textContent).toBe("Title: Test Title");
    const status = screen.getByTestId("todo-status");
    expect(status.textContent).toBe("Status: Pending");
    global.score += 1;
  });

  it(`User Should be able to type in the input box`, () => {
    render(<Todo />);
    const todo = screen.getByTestId("todo-app");
    expect(todo).toBeInTheDocument();
    const input = screen.getByPlaceholderText("Add Todo");
    fireEvent.change(input, { target: { value: "Test Task" } });
    expect(input.value).toBe("Test Task");
    global.score += 1;
  });

  it(`User should be able to add new task to the list`, () => {
    render(<Todo />);
    const todo = screen.getByTestId("todo-app");
    expect(todo).toBeInTheDocument();
    const input = screen.getByPlaceholderText("Add Todo");
    // Add Task-1
    fireEvent.change(input, { target: { value: "Test Task" } });
    const button = screen.getByTestId("add-todo");
    fireEvent.click(button);
    const todo_list = screen.getByTestId("todo-list");
    expect(todo_list).toBeInTheDocument();
    expect(todo_list.children).toHaveLength(1);

    // Add Task-2
    fireEvent.change(input, { target: { value: "Test Task - 2" } });
    fireEvent.click(button);
    expect(todo_list.children).toHaveLength(2);
    global.score += 1;
  });
});
