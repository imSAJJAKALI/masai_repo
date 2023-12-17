import React from "react";

export const ProjectRow = ({id,name,techStack,assigned,status}) => {
	return (
		<tr>
			<td data-testid="project-id">{id}</td>
			<td data-testid="project-name">{name}</td>
			<td data-testid="project-tech-stack">{techStack}</td>
			<td data-testid="project-assigned-to">{assigned}</td>
			<td data-testid="project-status">
				{status?"pending":"completed"}
			</td>
		</tr>
	);
};
