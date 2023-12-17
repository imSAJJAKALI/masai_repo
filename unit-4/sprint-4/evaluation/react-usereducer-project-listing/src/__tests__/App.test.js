import React from "react";
import { cleanup, render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
import App from "../App";
import { reducer, initialState, AddProject } from "../component/AddProject";

describe("React Form Component Testing", () => {
	beforeAll(() => {
		global.score = 1;
	});

	beforeEach(() => {
		cleanup();
	});

	it("renders Add Project component and throws an error with message", () => {
		const errorMessage = "Invalid Action type";
		expect(() => {
			render(<AddProject />);
			throw new Error(errorMessage);
		}).toThrowError(errorMessage);
		global.score += 1;
	});

	it("Check if the name input tag is present, with the 'name' attribute, and the user can type on it", () => {
		render(<App />);
		const nameInputBox = screen.getByRole("textbox");
		expect(nameInputBox).toHaveAttribute("name");
		fireEvent.change(nameInputBox, { target: { value: "Masai School" } });
		expect(nameInputBox).toHaveValue("Masai School");
		global.score += 1;
	});

	it("Reducer state should be updated on selecting the tech stack in the from", () => {
		render(<App />);
		const nameInputBox = screen.getByRole("textbox");
		fireEvent.change(nameInputBox, { target: { value: "LMS" } });
		userEvent.selectOptions(
			screen.getAllByRole("combobox")[0],
			screen.getAllByRole("option", {
				name: "React",
			}),
			screen.getAllByRole("option", {
				name: "Albert",
			}),
		);
		const newState = reducer(initialState, {
			type: "TECH_STACK",
			payload: "react",
		});
		expect(screen.getByRole("option", { name: "React" }).selected).toBe(true);

		expect(newState).toStrictEqual({
			name: "",
			tech_stack: "react",
			assigned_to: "",
			status: "pending",
		});
		global.score += 1;
	});

	it("Reducer state should be updated on selecting the assigned_to value in the from", () => {
		render(<App />);
		const newState = reducer(initialState, {
			type: "ASSIGNED_TO",
			payload: "albert",
		});

		expect(newState).toStrictEqual({
			name: "",
			tech_stack: "",
			assigned_to: "albert",
			status: "pending",
		});
		global.score += 1;
	});

	it("Reducer state should be updated on typing the name value in the from", () => {
		render(<App />);
		const newState = reducer(initialState, {
			type: "NAME",
			payload: "LMS",
		});

		expect(newState).toStrictEqual({
			name: "LMS",
			tech_stack: "",
			assigned_to: "",
			status: "pending",
		});
		global.score += 1;
	});

	it("should render No Project Found text initially", () => {
		render(<App />);
		expect(screen.getByTestId("no-project-container")).toHaveTextContent(
			"No Project Found",
		);
		global.score += 1;
	});

	it("should display added project details in a table", async () => {
		render(<App />);
		let name = screen.getByRole("textbox");
		let tech_stack = screen.getByTestId("tech-stack-select");
		let assigned_to = screen.getByTestId("assigned-to-select");
		const current_status = screen.getByRole("checkbox");
		const formElement = screen.getByTestId("form-element");

		// Add Project 1

		fireEvent.change(name, { target: { value: "LMS" } });
		fireEvent.change(tech_stack, {
			target: { value: "react" },
		});
		fireEvent.change(assigned_to, {
			target: { value: "aman" },
		});

		fireEvent.click(current_status);
		fireEvent.submit(formElement);

		expect(screen.getAllByTestId("project-name")[0]).toHaveTextContent("LMS");
		expect(screen.getAllByTestId("project-tech-stack")[0]).toHaveTextContent(
			"react",
		);
		expect(screen.getAllByTestId("project-assigned-to")[0]).toHaveTextContent(
			"aman",
		);
		expect(screen.getAllByTestId("project-status")[0]).toHaveTextContent(
			"completed",
		);

		// Add Project 2

		fireEvent.change(name, { target: { value: "CP" } });
		fireEvent.change(tech_stack, {
			target: { value: "node" },
		});
		fireEvent.change(assigned_to, {
			target: { value: "albert" },
		});

		fireEvent.submit(formElement);

		expect(screen.getAllByTestId("project-name")[1]).toHaveTextContent("CP");
		expect(screen.getAllByTestId("project-tech-stack")[1]).toHaveTextContent(
			"node",
		);
		expect(screen.getAllByTestId("project-assigned-to")[1]).toHaveTextContent(
			"albert",
		);
		expect(screen.getAllByTestId("project-status")[1]).toHaveTextContent(
			"pending",
		);

		expect(screen.getAllByRole("row")).toHaveLength(3);
		global.score += 2;
	});

	it("should reset the fileds with intitial data after submitting the form", () => {
		render(<App />);
		let name = screen.getByRole("textbox");
		let tech_stack = screen.getByTestId("tech-stack-select");
		let assigned_to = screen.getByTestId("assigned-to-select");
		const current_status = screen.getByRole("checkbox");
		const formElement = screen.getByTestId("form-element");

		fireEvent.change(name, { target: { value: "LMS" } });
		fireEvent.change(tech_stack, {
			target: { value: "react" },
		});
		fireEvent.change(assigned_to, {
			target: { value: "aman" },
		});

		fireEvent.click(current_status);
		fireEvent.submit(formElement);

		expect(screen.getAllByTestId("project-name")[0]).toHaveTextContent("LMS");
		expect(screen.getAllByTestId("project-tech-stack")[0]).toHaveTextContent(
			"react",
		);
		expect(screen.getAllByTestId("project-assigned-to")[0]).toHaveTextContent(
			"aman",
		);
		expect(screen.getAllByTestId("project-status")[0]).toHaveTextContent(
			"completed",
		);

		expect(name.value).toBe("");
		expect(tech_stack.value).toBe("");
		expect(assigned_to.value).toBe("");
		global.score += 1;
	});

	afterAll(() => {
		console.log("Final Score is", global.score);
	});
});
