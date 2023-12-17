import React from "react";
import { ProjectRow } from "./ProjectRow";

export const ProjectList = (data) => {
	let actData=data.data
	return (
		<div className="project-list-wrapper">
			<table data-testid="project-container">
				{/* Add table head  */}
				<thead>
					<tr>
						<th>S.no</th>
						<th>Name</th>
						<th>Tech Stack</th>
						<th>Assigned To</th>
						<th>Current Status</th>
					</tr>
				</thead>
				{/* Map through the list and use `ProjectRow` Component  */}
				{actData.map((e,i)=><ProjectRow id={i+1} name={e.name} techStack={e.tech_stack} assigned={e.assigned_to} status={e.status}/>)}
				
			</table>
		</div>
	);
};
