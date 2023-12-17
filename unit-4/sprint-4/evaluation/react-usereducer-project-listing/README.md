# react-usereducer-project-listing

## Submission Instructions [Please note]

- The Submission should not contain spaces, for example /rct-101 folder/eval will not work
- Do not push node_modules and package_lock.json to GitHub

## Installation

- Use Node LTS versions v16.16
- please make sure you do not push package-lock.json

- Download and unzip the boilerplate file and then copy the "**contents**" of the unzipped file in the Masai Folder.
- Navigate to the Masai Folder, in VS Code.
- Run the following commands inside,
  - run `npm install --engine-strict` to install the node modules
  - `npm start`
  - `npm run test` -> to run the test

## Maximum Marks - 10

```
 ✅ able to submit the app - 1 mark ( minimum score )
 ✅ renders Add Project component and throws an error with message Invalid Action type - 1mark
 ✅ Check if the name input tag is present, with the 'name' attribute, and the user can type on it  - 1 mark
 ✅ Reducer state should be updated on selecting the tech stack in the from - 1 mark
 ✅ Reducer state should be updated on selecting the assigned_to value in the from - 1 mark
 ✅ Reducer state should be updated on typing the name value in the from  - 1 mark
 ✅ should render No Project Found text initially - 1 mark
 ✅ should display added project details in a table - 2 marks
 ✅ should reset the fields with initial data after submitting the form - 1 mark

```

## Folder Structure (Important Files)

```
>Src
├── >Components
│    └── AddProject.jsx
│    └── Navbar.jsx
│    └── ProjectList.jsx
│    └── ProjectRow.jsx
└── App.js
```

## Problem Statement

Create a dashboard where users can add projects with tech-stack and assigned persons. The project list should be visible in tabular format on the same page.

#### useReducer

- The initial state will be as

```
  name: "",
  tech_stack: "",
  assigned_to: "",
  status: "pending",
```

- The following action types will be triggered for corresponding values

```
"NAME"
"TECH_STACK"
"ASSIGNED_TO"
"STATUS"
"RESET" - (For resetting the state)
```

also in reducer if none of the action type matches; the default case should throw an error ( message should be `Invalid Action type`)

sample action :

```
{
  type: "NAME",
  payload: e.target.value,
}
```

#### AddProject.jsx

- Create a form where the user will enter all the project details
- Provide input box for project name with attribute `name="name"`,
- Provide a select tag for tech_stack with the following options and corresponding values
- This select tag will have `data-testid="tech-stack-select"`

```
`Option`-`Value`
- React - react
- Node - node
- Java -java
- Python - python
```

- Provide a select tag for the assigned_to value with the following options and corresponding values
- This select tag will have `data-testid="assigned-to-select"`

```
`Option`-`Value`
- Nrupul - nrupul
- Albert - albert
- Aman - aman
```

- Provide a checkbox for current status, if the checked status will be `completed`, and if not it will be `pending`

- Provide a submit button for submitting the form.
- After submitting the form both the form and the reducer state should be reset.
- Store the project in an array using useState hook.

_Show the Project List on this page only using the `ProjectList` component_

![](https://i.imgur.com/qY6NL40.png)

#### ProjectList.jsx

- If no project is present, show `No Project Found` with `data-testid="no-project-container"`
- Otherwise, map through the project list and show it in the tabular format.
- Table head will contain

```
<th>S.no</th>
<th>Name</th>
<th>Tech Stack</th>
<th>Assigned To</th>
<th>Current Status</th>
```

- Use the `ProjectRow` component for the table row.

![](https://i.imgur.com/i1jSVgw.png)

### Note : The submissions are invalid if `useReducer` hook is not used.

## Important Instructions:

- Do not remove the `data-testid` attributes from the boilerplate anywhere. Removing them may lead to low scores
- Do not remove the class names present on the tags, they are required for the UI.
- The `options`, `type`, `name`, `tags`, etc mentioned above are CASE-SENSITIVE. So ensure to use them in the same format, as given above.

### General Instructions

- the system on cp.masaischool.com may take between 1-20 minutes for responding,
- so we request you to read the problem carefully and debug it before itself
- we also request you not to just submit it last minute
- try to keep one submission at a time
