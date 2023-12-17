import { fireEvent, render, renderHook, screen } from "@testing-library/react";
import App from "../App";
import useWordCount from "../hooks/useWordCount";

describe("Testing Custom Hooks", () => {
  beforeAll(() => {
    global.score = 1;
  });

  afterAll(() => {
    console.log("Final Score is", global.score);
  });

  it("Should update the text and word count to zero for empty string", () => {
    const { result } = renderHook(() => useWordCount(""));
    expect(result.current.text).toBe("");
    expect(result.current.wordCount).toBe(0);
    global.score += 1;
  });

  it("Should update the text and world count for a single string", () => {
    const { result } = renderHook(() => useWordCount("Hello"));
    expect(result.current.text).toBe("Hello");
    expect(result.current.wordCount).toBe(1);
    global.score += 2;
  });

  it("should return initial text and word count for multiple words", () => {
    const { result } = renderHook(() => useWordCount("Hello, world!"));
    expect(result.current.text).toBe("Hello, world!");
    expect(result.current.wordCount).toBe(2);
    global.score += 2;
  });

  it("should handle leading/trailing white spaces and consecutive spaces", () => {
    const { result } = renderHook(() => useWordCount("  Hello  world!  "));
    expect(result.current.text).toBe("  Hello  world!  ");
    expect(result.current.wordCount).toBe(2);
    global.score += 2;
  });

  it("App should have a text box to accept text and word count should be shown", () => {
    render(<App />);
    const count = screen.getByTestId("word-count");
    const input = screen.getByTestId("input-box");
    expect(count).toHaveTextContent("Word Count: 0");
    fireEvent.change(input, { target: { value: "Learn React" } });
    expect(input).toHaveValue("Learn React");
    expect(count).toHaveTextContent("Word Count: 2");
    fireEvent.change(input, { target: { value: "Learn React Redux" } });
    expect(input).toHaveValue("Learn React Redux");
    expect(count).toHaveTextContent("Word Count: 3");
    global.score += 2;
  });
});
