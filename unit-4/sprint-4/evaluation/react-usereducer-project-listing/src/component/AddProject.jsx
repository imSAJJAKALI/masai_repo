import React, { useReducer, useState } from "react";
import { ProjectList } from "./ProjectList";

const initialState = {
	name: "",
  tech_stack: "",
  assigned_to: "",
  status: "pending",
};

const reducer = (state,action) => {
	switch(action.type){
		case "NAME":{
			return {
				...state,
				name:action.payload
			}
		}
		case "TECH_STACK":{
			return {
				...state,
				tech_stack:action.payload
			}
		}
		case "ASSIGNED_TO":{
			return {
				...state,
				assigned_to:action.payload
			}
		}
		case "STATUS":{
			return {
				...state,
				status:action.payload
			}
		}
		case "RESET":{
			return initialState
		}
		default:{
			return state
		}
	}
};

export const AddProject = () => {
	const [state,dispatch]=useReducer(reducer,initialState)
	const [data,setData]=useState([])
	console.log(data)

	const handleSubmit=(e)=>{
		e.preventDefault()
		setData([...data,state])
		dispatch({type:"RESET"})
	}

	return (
		<div>
			<h1>Add Project</h1>
			<div className="form-wrapper" data-testid="form-wrapper">
				<form data-testid="form-element" onSubmit={handleSubmit}>
					<div className="name-wrapper" data-testid="name-wrapper">
						<label>Project Name</label>
						{/* Add Input box here */}
						<input type="text" name="name" placeholder="Project Name" value={state.name} onChange={(e)=>dispatch({type:"NAME",payload:e.target.value})} />
					</div>
					<div className="tech-stack-wrapper" data-testid="tech-stack-wrapper">
						<label>Tech Stack</label>
						<select name="" id="" data-testid="tech-stack-select" value={state.tech_stack} onChange={(e)=>dispatch({type:"TECH_STACK",payload:e.target.value})}>
							<option value="">Select</option>
							<option value="react">React</option>
							<option value="node">Node</option>
							<option value="java">Java</option>
							<option value="python">Python</option>
						</select>
						{/* Provide select tag with name attribute `name="tech_stack"` */}
						{/* This Select Tag will have `data-testid="tech-stack-select` */}
					</div>
					<div
						className="assigned-to-wrapper"
						data-testid="assigned-to-wrapper"
					>
						<label>Assigned to</label>
						<select name="name" id="" data-testid="assigned-to-select" value={state.assigned_to} onChange={(e)=>dispatch({type:"ASSIGNED_TO",payload:e.target.value})}>
							<option value="">Select</option>
							<option value="nrupul">Nrupul</option>
							<option value="albert">Albert</option>
							<option value="aman">Aman</option>
						</select>
						{/* Provide select tag with name attribute `name="assigned_to"` */}
						{/* This Select Tag will have `data-testid="assigned-to-select` */}
					</div>
					<div
						className="current-status-wrapper"
						data-testid="current-status-wrapper"
					>
						<label>Current Status</label>
						<input type="checkbox" value={state.status} checked={state.status} onChange={(e)=>dispatch({type:"STATUS",payload:!state.status})} /><label htmlFor="">Completed</label>
						{/* Provide checkbox  with name attribute `name="status"` */}
					</div>
					<button>Submited</button>
				</form>
			</div>
			<h1>Project List</h1>
			{/* Show the project list here using `ProjectList` component */}
			{data.length?
		<ProjectList data={data}/>:
		<h3 data-testid="no-project-container">No Project Found</h3>	
		}
			
		</div>
	);
};

export { initialState, reducer };
